import ProductsDataBySellerCode from '@/app/ui/products_by_seller/products_by_seller'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetProductsBySellerCode({ params }: { params: { seller_code: number } }) {
    const seller_code = params.seller_code;
    //const number = 1;
    return (
    <>
    <div className='results-container'><ProductsDataBySellerCode seller_code={seller_code}/></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}