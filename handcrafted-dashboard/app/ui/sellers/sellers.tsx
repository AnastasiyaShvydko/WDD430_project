import { fetchSellers } from "@/app/lib/data"
import Image from 'next/image';
import Link from "next/link";


export default async function SellersData() {
const data = await fetchSellers();
console.log(data);
return <>
   <div className="flex flex-col  gap-4 ">
    {data.map(seller =>{ 
        console.log(seller.image_url)
        return (
            <>
            <div key={seller.id}  className=" bg-indigo-200  h-[350px] w-screen grid grid-cols-4 gap-4 items-center" >
                
                    <div className="col-span-2">
                        <Image
                            src={seller.image_url}
                            alt={`${seller.name}'s profile picture`}
                            className="p-5"
                            width={500} // Specify width
                            height={300} 
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="text-xl">{seller.name}</p>
                        <p>{seller.description}</p>
                        <p>{seller.seller_code}</p>
                        <div><Link href={`/handcraft/products_by_seller/${seller.seller_code}/products_by_seller`} className="underline">See gallery</Link></div>
                        
                    </div>
                    
                </div>
            </>
        )
    })}

</div>
</>
}