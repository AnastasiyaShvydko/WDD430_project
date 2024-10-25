import EditProductData from '@/app/ui/product_edit/product_edit';

export default async function EditProduct({ params }: { params: { id: string } }) {
    const id = params.id;
    //const number = 1;
    return (
    <>
    <div className='result-container'>
        <div className='product-item'>
            <EditProductData product_id={id}/>
        </div>
    </div>
    
    {/* //<div><Suspense fallback={<Loading/>}><SellersData /></Suspense></div> */}
    </>
    )
}