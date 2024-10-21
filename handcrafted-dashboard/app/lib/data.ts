//Geting Promise
'use server';

//import { revalidateTag } from 'next/cache';
//import types
import { Sellers,
        CatalogTable,
        ProductsTable,
        ProductByIdTable
        } from './defenition';
import { sql } from '@vercel/postgres';

export async function fetchSellers() {
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching users data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      //revalidateTag('sellers')
  
      const data = await sql<Sellers>`SELECT * FROM sellers`;
      
      console.log(`${data}Data fetch completed after 3 seconds.`);
      
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch sellers data.');
    }
  }

  export async function fetchProductsBySellerCode(seller_code: number) {
    try {
      //revalidateTag('products')
      console.log(seller_code);
      const data = await sql<ProductsTable>`
      
        SELECT * FROM products
        WHERE products.seller_code = ${seller_code};
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

  export async function fetchProductByQuery(title: string, priceMin: string, priceMax: string) {
    try {
      //revalidateTag('products')
      console.log(`HIIIII${title}`);
      const title_value = `%${title}%`;
      const data = await sql<ProductsTable>`

        SELECT * FROM products
        WHERE products.title ILIKE ${title_value}
        AND products.price BETWEEN ${priceMin} AND ${priceMax};
      `;
  
      // const productsBySellerId = data.rows.map((product) => ({
      //   ...product,
      //   // Convert amount from cents to dollars
        
      // }));
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch productByQuery.');
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

  export async function fetchProductsByCategoryCode(category_code: number) {
    try {
      //revalidateTag('products')
      console.log(category_code);
      const data = await sql<ProductsTable>`
      
        SELECT * FROM products
        WHERE products.category_code = ${category_code};
      `;
  
      // const productsBySellerId = data.rows.map((product) => ({
      //   ...product,
      //   // Convert amount from cents to dollars
        
      // }));
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products.');
    }
  }

  export async function fetchProductById(product_id: string) {
    try {
      //revalidateTag('products')
      console.log(product_id);
      const data = await sql<ProductByIdTable>`
      
        SELECT * FROM products
        WHERE products.id = ${product_id};
      `;
  
      // const productsBySellerId = data.rows.map((product) => ({
      //   ...product,
      //   // Convert amount from cents to dollars
        
      // }));
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch productsById.');
    }
  }