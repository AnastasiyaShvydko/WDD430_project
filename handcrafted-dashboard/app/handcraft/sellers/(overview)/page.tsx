import SellersData from '@/app/ui/sellers/sellers'




//import { Suspense } from 'react'
//import  Loading  from '../../loading'
export default async function GetSellers() {
    return (
    <>

    <div><SellersData /></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}