import { fetchProductById} from "@/app/lib/data"
import Image from 'next/image';
import Form from "../form";
//import Link from "next/link";


export default async function ProductDataById({ product_id }: { product_id: string }) {
const data = await fetchProductById(product_id);
console.log(data);
return <>
   <div className="flex flex-col  gap-4 ">
    {data.map(product =>{ 
        console.log(product.image_url)
        return (
            <>
            <div key={product.id}  className=" bg-indigo-200  h-[350px] w-screen grid grid-cols-4 gap-4 items-center" >
                
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
                        <p className="text-xl">{product.title}</p>
                        <p>{product.description}</p>
                        
                        <div><Form product_id={product.id}/></div>
                        
                    </div>
                    
                    
                </div>
            </>
        )
    })}

</div>
</>
}