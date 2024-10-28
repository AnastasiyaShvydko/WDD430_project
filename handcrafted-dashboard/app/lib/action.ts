'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';


export type State = {
    errors?: {
      name?: string[];
      email?: string[] ;
      rate?: string[] ;
      rate_message?: string[];
      product_id?: string[] ;
};
    message?: string | null;
  };
  
  
    const FormSchema = z.object({
      id: z.string(),
      name: z.string({
        invalid_type_error: 'Please enter your name.',
      }),
      email: z.string({
        invalid_type_error: 'Please enter your name.',
      }),

      rate: z.coerce
      .number()
      .gt(0, { message: 'Please enter an amount greater than $0.' }),
      rate_message: z.string({
        invalid_type_error: 'Please enter text.',
      }),
      date: z.string(),
      product_id:  z.string({
        invalid_type_error: 'Please enter text.',
      })
    });
   

const CreateReview = FormSchema.omit({ id:true, date: true });


export async function createReview(prevState:  State , formData: FormData ) {
    // Validate form using Zod
   console.log(formData)
    const validatedFields = CreateReview.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      rate: formData.get('rate'),
      rate_message: formData.get('rate_message'),
      product_id: formData.get('product_id'),
    });
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
   
    //Prepare data for insertion into the database
    const { name, email, rate, rate_message, product_id } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
   
    // Insert data into the database
    try {
    //   await sql`
    //   CREATE TABLE IF NOT EXISTS reviews (
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     email VARCHAR(255) NOT NULL,
    //     rate INT NOT NULL,
    //     rate_message TEXT NOT NULL,
    //     product_id VARCHAR(255) NOT NULL,
    //     date DATE NOT NULL
    //   );
    // `;
      await sql`
        INSERT INTO reviews (name, email, rate, rate_message, product_id ,date)
        VALUES (${name}, ${email}, ${rate}, ${rate_message}, ${product_id}, ${date})
      `;
    }  catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath(`/handcraft/product_by_id/${product_id}/product_by_id`);
    redirect(`/handcraft/product_by_id/${product_id}/product_by_id`);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
     
      throw error;
    }
    
  }

  const FormProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    price: z.coerce
      .number(),
    description: z.string(),
    seller_code: z.coerce
    .number(),
    category_code: z.coerce
    .number(),
    image_url: z.string(),
  });


const UpdateProduct = FormProductSchema.omit({id: true})



  export async function updateProduct(  id: string, formData: FormData){
    const { title, price, description,seller_code,category_code,image_url } = UpdateProduct.parse({
      title: formData.get('title'),
      price: formData.get('price'),
      description: formData.get('description'),
      seller_code: formData.get('seller_code'),
      category_code: formData.get('category_code'),
      image_url: formData.get('image_url'),
    });
    try {
      await sql`
          UPDATE products
          SET title = ${title}, price = ${price}, description = ${description}, seller_code = ${seller_code},
          category_code = ${category_code}, image_url = ${image_url}
          WHERE id = ${id}
        `;
    } catch (error) {
      return
      // return { message: 'Database Error: Failed to Update Invoice.' };
    }
   
    revalidatePath(`/handcraft/product_by_id/${id}/product_by_id`);
    redirect(`/handcraft/product_by_id/${id}/product_by_id`);

  }