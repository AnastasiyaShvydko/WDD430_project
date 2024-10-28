'use client'; 

//import { useRouter } from 'next/navigation'
import './style.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState,Suspense  } from 'react';
import { fetchProductByQuery ,fetchProductByQueryTitle} from '../lib/data';
import {ProductsTable} from '@/app/lib/defenition'
import ProductCard from '../ui/components/ProductCard';


const SearchResults = () => {
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
          console.log('I search by name', title, priceMin, priceMax )
        const data = await fetchProductByQuery(title, priceMin, priceMax)
        setResults(data);
        console.log(results)
     }
    else if(title&&!priceMin&&!priceMax){
      console.log('I search by name', title)
      const data = await fetchProductByQueryTitle(title)
      setResults(data);

    }}fetchData()}, [title]); 
        return ( 
            <>
                <div className='results-container'>
                    <h1>Search Results for: {title} {results.length}</h1>
                        {results.map((result)=> (
                           <ProductCard product={result}/>
                            // <div key={result.id}>
                            // <p>{result.title}</p>
                            // <p>{result.price}</p>
                            //</div>
                            )
                            
                        
                        
                        )}
           </div> 
           </>); 


    
};

export default function SearchPage() {
    return (
      <Suspense fallback={<div>Loading search page...</div>}>
        <SearchResults />
      </Suspense>
    );
  }

