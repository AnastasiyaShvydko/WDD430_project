//import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { sellers, products} from '@/app/lib/placeholder-data';


const client = await db.connect();


async function seedSellers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS sellers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        seller_code INT NOT NULL
      );
    `;
  
    const insertedSellers = await Promise.all(
        sellers.map(
        (seller) => client.sql`
          INSERT INTO sellers (id, name, email,description, image_url, seller_code)
          VALUES (${seller.id}, ${seller.name}, ${seller.email},${seller.description}, ${seller.image_url}, ${seller.seller_code})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedSellers;
  }


  // async function seedProducts() {
  //   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
  //   await client.sql`
  //     CREATE TABLE IF NOT EXISTS products (
  //       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  //       title VARCHAR(255) NOT NULL,
  //       price INT NOT NULL,
  //       description TEXT NOT NULL,
  //       seller_code INT NOT NULL,
  //       image_url VARCHAR(255) NOT NULL
        
  //     );
  //   `;

  //   // title: "vase",
  //   // price: 50,
  //   // description:'gjhgjkdghhgj',
  //   // seller_code: 3,
  //   // image_url: '/items/pic4.png'
  
  //   const insertedProducts = await Promise.all(
  //       products.map(
  //       (product) => client.sql`
  //         INSERT INTO products ( title, price,description, seller_code, image_url)
  //         VALUES ( ${product.title}, ${product.price},${product.description}, ${product.seller_code}, ${product.image_url})
  //         ON CONFLICT (id) DO NOTHING;
  //       `,
  //     ),
  //   );
  
  //   return insertedProducts;
  // }

  // async function dropSellers() {
  //   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //   await client.sql`
  //   DROP TABLE sellers;`
  // }

  // async function dropProducts() {
  //   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //   await client.sql`
  //   DROP TABLE products;`
  // }


  export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
      await client.sql`BEGIN`;
      //await seedSellers();
      //await seedProducts();
      //await dropSellers();
      //await dropProducts()
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }
  