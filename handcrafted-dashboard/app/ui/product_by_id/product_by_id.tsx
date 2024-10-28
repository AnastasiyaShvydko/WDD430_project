import { fetchProductById} from "@/app/lib/data"
import Image from 'next/image';
import Form from "../form";
import Link from "next/link";
import { revalidateTag } from "next/cache";
import { auth,signOut,signIn } from '@/auth';

import ProductCard from "../components/ProductCard";


export default async function ProductDataById({ product_id }: { product_id: string }) {
    
const data = await fetchProductById(product_id);
console.log(data);
//revalidateTag('products')
const AuthUser = await auth();
// if(AuthUser){

// }
return <>
   {/* <div className="flex flex-col  gap-4 "> */}
    {data.map(product =>{ 
        console.log(product.image_url)
        return (
            <>
           
            <div key={product.id}  className="product-item" >
                
                    <div className="col-span-2">
                        <Image
                            src={product.image_url}
                            alt={`${product.title}'s profile picture`}
                            className="p-5"
                            width={500} // Specify width
                            height={300} 
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold text-xl mb-2">{product.title}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        {!AuthUser ?(
                            <div><Link href={`/login`} className="underline">Edit </Link></div>
                        ):
                        (<div><Link href={`/handcraft/product_edit/${product.id}/product_edit`} className="underline">Edit </Link></div>)}
                        
                        
                        
                    </div>
                    <div><Form product_id={product.id}/></div>
                    
                    
                </div>
            </>
        )
    })}

{/* </div> */}
</>
}
