import { fetchCatalog } from "@/app/lib/data"
import Image from 'next/image';
import Link from "next/link";


export default async function CatalogData() {
const data = await fetchCatalog();
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
                            alt={`${product.title}'s catalog picture`}
                            className="p-5"
                            width={500} // Specify width
                            height={300} 
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="text-xl">{product.title}</p>
			            <p>{product.motto}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <div><Link href={`/handcraft/catalog/${product.seller_code}/catalog`} className="underline">Rate Seller</Link></div>
                        
                    </div>
                    
                </div>
            </>
        )
    })}

</div>
</>
}