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
        
        return (
            <>
           
            <div key={review.id}  className="product-item" >
                
                    <div className="col-span-2">
                       
                    </div>
                    <div className="col-span-2">
                        <p className="text-xl">{review.rate}</p>
                        <p>{review.rate_message}</p>
                        <p>{review.name}</p>
                        
                        
                    </div>
                    
                    
                </div>
            </>
        )
    })}

{/* </div> */}
</>
}