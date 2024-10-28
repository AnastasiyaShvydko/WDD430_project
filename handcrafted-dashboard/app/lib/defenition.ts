//Data Types

export type Sellers = {
    id: string;
    name: string,
    email: string,
    description: string,
    seller_code: number,
    image_url: string,
  };

  export type CatalogTable = {
    id: string;
    title: string;
    motto: string;
    description: string;
    category_code: number;
    image_url: string;
    
  };

  export type ProductsTable = {
    id: string;
    title: string;
    price: number;
    description: string;
    seller_code: number;
    category_code: number;
    image_url: string;  
  };

  export type ProductByIdTable ={
    id: string;
    title: string;
    price: number;
    description: string;
    seller_code: number;
    category_code: number;
    image_url: string;  
  }

  export type ProductField = {
    id: string;
  };

  export type Review = {
    id: string; // Will be created on the database
    name: string;
    email: string; // Stored in cents
    rate: number;
    rate_message: string;
    date: string;
    product_id: string;
    

  };

  export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  }

  
  