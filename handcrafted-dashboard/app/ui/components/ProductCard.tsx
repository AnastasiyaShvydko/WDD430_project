import { ProductByIdTable } from "@/app/lib/defenition"
import Image from "next/image"
import Link from "next/link"
import Form from "../form"

export default function ProductCard( { product }: { product: ProductByIdTable }
    



){
    return (
        <div key={product.id}  className="product-item" >
                
                    <div className="col-span-2">
                        <Image
                            src={product.image_url}
                            alt={`${product.title}'s profile picture`}
                            className="p-5"
                            width={300} // Specify width
                            height={100} 
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold text-xl mb-2">{product.title}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <div><Link href={`/handcraft/product_by_id/${product.id}/product_by_id`} className="underline">Details</Link></div>
                        
                        {/* <div><Form product_id={product.id}/></div> */}
                        
                    </div>
                    
                    
                </div>
            
    )


}
