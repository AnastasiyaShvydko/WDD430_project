import ProductsDataBySellerCode from '@/app/ui/sellers/sellers_products'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetProductsBySellerCode({ params }: { params: { seller_code: number } }) {
    const seller_code = params.seller_code;
    //const number = 1;
    return (
    <>
    <p>This is Sellers page</p>
    <div><ProductsDataBySellerCode seller_code={seller_code}/></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}