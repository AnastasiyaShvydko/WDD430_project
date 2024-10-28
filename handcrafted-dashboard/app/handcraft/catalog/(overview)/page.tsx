//import { Suspense } from 'react'
//import  Loading  from '../../loading'
import CatalogData from "@/app/ui/catalog/catalog"

export default async function GetCatalog() {
    return (
    <>
    <div><CatalogData /></div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}