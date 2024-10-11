//Data Types

export type Sellers = {
    id: string;
    name: string,
    email: string,
    description: string,
    seller_code: number,
    image_url: string,
  };

  export type ProductsTable = {
    id: string;
    title: string;
    price: number;
    description: string;
    seller_code: number,
    image_url: string;
    
    
  };