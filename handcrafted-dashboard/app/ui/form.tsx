'use client';
import { createReview,State } from '@/app/lib/action';
import { useActionState } from 'react';

export default function Form({ product_id }: { product_id: string }){
 const initialState: State = { message: null, errors: {}  };
 const [state, formAction] = useActionState(createReview, initialState);


    return(
   
    <form className="bg-white p-8 rounded-lg shadow-md w-96" action = {formAction} >
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        

        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name"/>
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email"/>
        </div>
        <div className="rate">
            <input type="radio" id="fivestars" name="rate" value="5" required /><label htmlFor="fivestars"></label>
            <input type="radio" id="fourstars" name="rate" value="4" required/><label htmlFor="fourstars"></label>
            <input type="radio" id="threestars" name="rate" value="3" required/><label htmlFor="threestars"></label>
            <input type="radio" id="twostars" name="rate" value="2" required/><label htmlFor="twostars"></label>
            <input type="radio" id="onestar" name="rate" value="1" required/><label htmlFor="onestar"></label>
        </div>
        <div id="customer-error" aria-live="polite" aria-atomic="true">
        {/* {
            state.errors?.rate &&
            state.errors.rate.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
   

            </p>
          ))} */}
      </div>
        

        <div className="mb-4">
            <label htmlFor="rate_message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="rate_message" name="rate_message" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
        </div>
        <div className="mb-4">
            <input id="product_id" name="product_id" required className="hidden" placeholder="Your Message" value={product_id}/>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Submit</button>
    </form>
 
      
    )
}