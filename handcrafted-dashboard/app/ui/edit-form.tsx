'use client';
import { updateProduct } from '@/app/lib/action';
import { ProductsTable } from '@/app/lib/defenition'

export default function EditProductForm({product}: { product: ProductsTable}){

const updateProductWithId = updateProduct.bind(null, product.id)

    return(
   
    <form className="bg-white p-8 rounded-lg shadow-md w-96" action = {updateProductWithId} >
        <h2 className="text-2xl font-semibold mb-6">Update Product</h2>
        

        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" 
                defaultValue={product.title}/>
        </div>
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Price</label>
            <input 
                type="text" 
                id="price" 
                name="price" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" 
                defaultValue={product.price}/>
        </div>
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
                id="description" 
                name="description" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" 
                defaultValue={product.description}/>
        </div>
        <div className="mb-4">

            <input 
                type="text" 
                id="seller_code" 
                name="seller_code" 
                required 
                className="hidden"
                defaultValue={product.seller_code}/>
        </div>
        <div className="mb-4">

            <input 
                type="text" 
                id="category_code" 
                name="category_code" 
                required 
                className="hidden" 
                defaultValue={product.category_code}/>
        </div>
        <div className="mb-4">

            <input 
                type="text" 
                id="image_url" 
                name="image_url" 
                required 
                className="hidden"
                defaultValue={product.image_url}/>
        </div>

       
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Submit</button>
    </form>
 
      
    )
}