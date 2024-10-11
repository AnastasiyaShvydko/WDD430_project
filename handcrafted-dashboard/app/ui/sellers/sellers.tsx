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
            <div key={seller.id}  className="items-center bg-indigo-200  h-[350px] w-screen flex flex-row" >
                
                    <div>
                        <Image
                            src={seller.image_url}
                            alt={`${seller.name}'s profile picture`}
                            className="p-5"
                            width={500} // Specify width
                            height={300} 
                        />
                    </div>
                    <div>
                        <p className="text-xl">{seller.name}</p>
                        <p>{seller.description}</p>
                        
                        
                    </div>
                    <div><Link href={'#'}>See gallery</Link></div>
                </div>
            </>
        )
    })}

</div>
</>
}