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
    price: number;
    motto: string;
    description: string;
    seller_code: number,
    image_url: string;
    
  };