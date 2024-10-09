//Geting Promise
'use server';

import { revalidateTag } from 'next/cache';
//import types
import{Sellers} from './defenition';
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
      throw new Error('Failed to fetch revenue data.');
    }
  }