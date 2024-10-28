import { fetchProductsBySellerCode } from '@/app/lib/data'
import { revalidateTag } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';



export default async function ProductsDataBySellerCode({ seller_code }: { seller_code: number }) {
  // revalidateTag('products')
const data = await fetchProductsBySellerCode(seller_code);
console.log(data);
return <>
   <div className="flex flex-col  gap-4 ">
    {data.map(product =>{ 
        console.log(product.image_url)
        return (
            <>
             <ProductCard product={product}/>
            {/* <div key={product.id}  className=" bg-indigo-200  h-[350px] w-screen grid grid-cols-4 gap-4 items-center" >
                
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
                        <p>{product.id}</p>
                        <p>{product.price}</p>
                        <div><Link href={`/handcraft/product_by_id/${product.id}/product_by_id`} className="underline">Details </Link></div>
                        
                    </div>
                    
                </div> */}
            </>
        )
    })}

</div>
</>
}