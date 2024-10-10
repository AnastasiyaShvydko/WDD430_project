import SellersData from '@/app/ui/sellers/sellers'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetSellers() {
    return (
    <>
    <p>This is Sellers page</p>
    <div><SellersData /></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}