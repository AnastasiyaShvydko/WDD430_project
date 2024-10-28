import { fetchCatalog } from "@/app/lib/data"
import { revalidateTag } from "next/cache";
//import { revalidateTag } from "next/cache";
import Image from 'next/image';
import Link from "next/link";



export default async function CatalogData() {
    revalidateTag('catalog')

const data = await fetchCatalog();

console.log(data);
return <>

   <div className="flex flex-col  gap-4 ">
    {data.map(category =>{ 
        console.log(category.image_url)
        return (
            <>
            <div key={category.id}  className=" bg-indigo-200  h-[150] w-screen grid grid-cols-4 gap-4 items-center" >
                
                    <div className="col-span-2 ">
                        <Image
                            src={category.image_url}
                            alt={`${category.title}'s catalog picture`}
                            className="p-5"
                            width={300} // Specify width
                            height={100} 
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="text-xl">{category.title}</p>
			            <p>{category.motto}</p>
                        <p>{category.description}</p>
                        <div><Link href={`/handcraft/products_by_category/${category.category_code}/products_by_category`} className="underline">See Gallery</Link></div>
                        
                    </div>
                    
                </div>
            </>
        )
    })}

</div>
</>
}