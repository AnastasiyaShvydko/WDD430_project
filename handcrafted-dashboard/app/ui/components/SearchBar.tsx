'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function SearchBar() {
    const [query, setQuery] = useState(''); 
    const router = useRouter(); 
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [title , setTitle] = useState('');

    // Handles form submission and navigates to the search page with the query as a parameter
   
    
    const HandleTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)

    }
    
    const HandlePriceMin = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPriceMin(e.target.value)

    }

    const HandlePriceMax = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPriceMax(e.target.value)
    }

    const constructQuery = () => {
        const params: string[] = [];
    
        if (title) params.push(`title=${encodeURIComponent(title)}`);
        if (priceMin) params.push(`priceMin=${encodeURIComponent(priceMin)}`);
        if (priceMax) params.push(`priceMax=${encodeURIComponent(priceMax)}`);
    
        return params.join('&');
      };

      const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {     
        e.preventDefault(); 
        const finalQuery = constructQuery();
        setQuery(finalQuery);
        console.log(query)
        // Navigate to the search page with the query
        //router.push(`/search?${query}`);
        if (title.trim()) {       
            router.push(`/search?title=${encodeURIComponent(title)}&priceMin=${encodeURIComponent(priceMin)}&priceMax=${encodeURIComponent(priceMax)}`);

        }  
    };  

    
    
    
        return ( 
        <form onSubmit={handleSearch} className="search-bar">
            <input 
            type="text" 
            value={title} 
            onChange={HandleTitle}
             placeholder="Title" 
             className="search-input" />
            <input 
            type="text" 
            value = {priceMin}
            onChange = {HandlePriceMin}
            placeholder="MinPrice"
            className="search-input"
            />
            <input 
            type="text" 
            value = {priceMax}
            onChange = {HandlePriceMax}
            placeholder="MaxPrice"
            className="search-input"

            />

            <button type="submit" className="search-button">Search</button>
         </form> 
        ); 
    };
          






