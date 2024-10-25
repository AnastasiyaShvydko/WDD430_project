import ProductDataById from '@/app/ui/product_by_id/product_by_id'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetProductDataById({ params }: { params: { id: string } }) {
    const id = params.id;
    //const number = 1;
    return (
    <>
    {/* <p>This is ONe Product page</p> */}
    <div className='results-container'><ProductDataById product_id={id}/></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}