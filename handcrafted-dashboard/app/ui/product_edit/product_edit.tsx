import { fetchProductById } from "@/app/lib/data";
import EditProductForm from "../edit-form"; 
export default async function EditProductData({ product_id }: { product_id: string }) {

    const data = await fetchProductById(product_id);

    return <>
    {data.map(product =>{
        return <>
        <EditProductForm product={product}/>
        </>
     })}
     </>
}