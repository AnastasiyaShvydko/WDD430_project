import { fetchSellers } from "@/app/lib/data"
//import { revalidateTag } from "next/cache";
import Image from 'next/image';
import Link from "next/link";
 
export default async function SellersData() {
    //revalidateTag('sellers')
const data = await fetchSellers();
console.log(data);
return <>
   <div className="flex flex-col  gap-4 ">
    {data.map(seller =>{ 
        return (
            <>
            <div key={seller.id}  className=" bg-indigo-200  h-[150] w-screen lg:grid lg:grid-cols-4 gap-4 items-center flex flex-col" >
                
                    <div className="col-span-2 justify-items-center">
                        <Image
                            src={seller.image_url}
                            alt={`${seller.name}'s profile picture`}
                            className="p-5"
                            width={500} // Specify width
                            height={300} 
                        />
                    </div>
                    <div className="col-span-2 justify-items-center">
                        <p className="text-xl">{seller.name}</p>
                        <p className="p-5" >{seller.description}</p>
                        <div className="p-5"><Link href={`/handcraft/products_by_seller/${seller.seller_code}/products_by_seller`} className="underline">See gallery</Link></div>
                        
                    </div>
                    
                </div>
            </>
        )
    })}

</div>
</>
}