'use client'; 

//import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchProductByQuery } from '../lib/data';
import {ProductsTable} from '@/app/lib/defenition'


const SearchPage = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title'); 
    const priceMin = searchParams.get('priceMin'); 
    const priceMax = searchParams.get('priceMax'); 

    const [results, setResults] = useState<ProductsTable[]>([]);


    // const fetchData = async () => {
    //     if (query) {
    //     const data = await fetchProductByQuery(query)
    // return data}
    // }
    //setResults(fetchData())
    useEffect( () => {
        async function fetchData() {
        if (title&&priceMin&&priceMax) {
        const data = await fetchProductByQuery(title, priceMin, priceMax)
        setResults(data);
        console.log(results)
     }}fetchData()}, [title]); 
        return ( 
            <>
                <div>
                    <h1>Search Results for: {title} {results.length}</h1>
                        {results.map((result)=> (
                            <div>
                            <p>{result.title}</p>
                            <p>{result.price}</p>
                            </div>)
                            
                        
                        
                        )}
           </div> 
           </>); 


    
};

export default SearchPage;