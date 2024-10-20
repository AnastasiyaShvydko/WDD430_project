'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation';
//import { signIn } from '@/auth';
//import { AuthError } from 'next-auth';


export type State = {
    errors?: {
      name?: string[];
      email?: string[];
      rate?: string[];
      rate_message?: string[];
      product_id?: string[];
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


export async function createReview(prevState: State, formData: FormData) {
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
        error
      };
    }
   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath(`/handcraft/product_by_id/${product_id}/product_by_id`);
    redirect(`/handcraft/product_by_id/${product_id}/product_by_id`);
}