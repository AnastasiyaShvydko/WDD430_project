import { fetchSellers } from "@/app/lib/data"
import Image from 'next/image';


export default async function SellersData() {
const data = await fetchSellers();
console.log(data);
return(
    <>
<div>Hello
    {data.map(item =>{ 
        console.log(item.image_url)
        return (
            <div
            key={item.id}
            >
                <p>{item.name}</p>
                <p>{item.image_url}</p>
                <Image
                    src={item.image_url}
                    alt={`${item.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
            </div>
        )
    })}
</div>
</>
)

}