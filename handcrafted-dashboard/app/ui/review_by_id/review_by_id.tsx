import { fetchReviewById} from "@/app/lib/data"
import Image from 'next/image';
import Form from "../form";
import Link from "next/link";
import { revalidateTag } from "next/cache";
import { auth,signOut,signIn } from '@/auth';

import ProductCard from "../components/ProductCard";


export default async function ReviewDataById({ product_id }: { product_id: string }) {
    
const data = await fetchReviewById(product_id);
console.log(data);
//revalidateTag('products')
//const AuthUser = await auth();
// if(AuthUser){

// }
return <>
   {/* <div className="flex flex-col  gap-4 "> */}
    {data.map(review =>{ 
        const reviewDate = new Date(review.date);
        
        return (
            <>

            
           
            <div key={review.id}  className="max-w-sm rounded overflow-hidden shadow-lg bg-white" >
                
                    <div className="px-6 py-4">
                       
                    <div className="font-bold text-xl mb-2">{review.name}</div>
                    <div className="col-span-2">
                        
                      
                        
                        <p className="text-gray-700 text-base">Rating: {'★'.repeat(review.rate)}{'☆'.repeat(5 - review.rate)}</p>
                        <p className="text-gray-700 text-base mt-2">{review.rate_message}</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="text-gray-600 text-sm">Posted on: {reviewDate.toLocaleDateString()}</span>
                    </div>
                    
                    </div>
                </div>
            </>
        )
    })}

{/* </div> */}
</>
}