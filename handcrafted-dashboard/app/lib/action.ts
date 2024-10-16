'use server';
 
import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath} from 'next/cache';
// import { redirect } from 'next/navigation';
//import { signIn } from '@/auth';
//import { AuthError } from 'next-auth';


export type State = {
    errors?: {
      rate?: string[];
      message?: string[];
      
    };
    message?: string | null;
  };
  
  
    const FormSchema = z.object({
      id: z.string(),
      rate: z.string({
        invalid_type_error: 'Please select rate.',
      }),
      message: z.string({
        invalid_type_error: 'Please enter text.',
      }),
      date: z.string(),
    });
   

const CreateInvoice = FormSchema.omit({ id: true, date: true });


export async function createReview(prevState: State, formData: FormData) {
    // Validate form using Zod
   console.log(formData)
    const validatedFields = CreateInvoice.safeParse({
      rate: formData.get('rate'),
      rate_message: formData.get('message'),
    });
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
   
    // Prepare data for insertion into the database
//     const { rate, rate_message } = validatedFields.data;
   
   
//     // Insert data into the database
//     try {
//       await sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//       `;
//     } catch (error) {
//       // If a database error occurs, return a more specific error.
//       return {
//         message: 'Database Error: Failed to Create Invoice.',
//         error
//       };
//     }
   
//     // Revalidate the cache for the invoices page and redirect the user.
//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
}