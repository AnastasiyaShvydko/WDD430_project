import ProductsDataByCategoryCode from '@/app/ui/products_by_category/products_by_category'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetProductsDataByCategoryCode({ params }: { params: { category_code: number } }) {
    const category_code = params.category_code;
    //const number = 1;
    return (
    <>
    <div className='results-container'><ProductsDataByCategoryCode category_code={category_code}/></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}