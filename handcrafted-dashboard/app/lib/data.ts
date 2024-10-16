//Geting Promise
'use server';

import { revalidateTag } from 'next/cache';
//import types
import { Sellers,
        CatalogTable
        } from './defenition';
import { sql } from '@vercel/postgres';

export async function fetchSellers() {
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching users data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      revalidateTag('sellers')
  
      const data = await sql<Sellers>`SELECT * FROM sellers`;
      
      console.log(`${data}Data fetch completed after 3 seconds.`);
      
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch sellers data.');
    }
  }

  export async function fetchCatalogBySellerCode(seller_code: number) {
    try {
      //revalidateTag('products')
      console.log(seller_code);
      const data = await sql<CatalogTable>`
      
        SELECT * FROM catalog
        WHERE catalog.seller_code = ${seller_code};
      `;
  
      // const productsBySellerId = data.rows.map((product) => ({
      //   ...product,
      //   // Convert amount from cents to dollars
        
      // }));
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch catalogBySellerCode.');
    }
  }

  export async function fetchCatalog() {
    try {
      //revalidateTag('products')
      
      const data = await sql<CatalogTable>`
      
        SELECT * FROM catalog;
      `;
  
      // const productsBySellerId = data.rows.map((product) => ({
      //   ...product,
      //   // Convert amount from cents to dollars
        
      // }));
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch catalog.');
    }
  }