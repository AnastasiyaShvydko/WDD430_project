import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
//import { sellers, products} from '@/app/lib/placeholder-data';
import { catalog, products, users,sellers} from '@/app/lib/placeholder-data';


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


  async function seedProducts() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
 
  await client.sql`
      CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      description TEXT NOT NULL,
      seller_code INT NOT NULL,
      category_code INT NOT NULL,
      image_url VARCHAR(255) NOT NULL
       
    );
   `;
 
    const insertedProducts = await Promise.all(
        products.map(
        (product) => client.sql`
       INSERT INTO products ( title, price, description, seller_code,category_code, image_url)
        VALUES ( ${product.title}, ${product.price}, ${product.description}, ${product.seller_code},${product.category_code}, ${product.image_url})
         ON CONFLICT (id) DO NOTHING;
       `,
      ),
    );
 
  return insertedProducts;
  }

  async function seedCatalog() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS catalog (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        motto TEXT NOT NULL,
        description TEXT NOT NULL,
        category_code INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;
  
    const insertedCatalog = await Promise.all(
      catalog.map((category) =>
        client.sql`
          INSERT INTO catalog (title, motto, description,category_code, image_url)
          VALUES (${category.title}, ${category.motto}, ${category.description}, ${category.category_code}, ${category.image_url})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );
  
    return insertedCatalog;
  }
  async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
  
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users ( name, email, password)
          VALUES (${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );
  
    return insertedUsers;
  }
  
  
  async function dropSellers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    DROP TABLE sellers;`
  }

  async function dropProducts() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    DROP TABLE products;`
  }

  async function dropCatalog() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    DROP TABLE catalog;`
  }

  async function dropReviews() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    DROP TABLE reviews;`
  }

  async function CreateReviews(){

  
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        rate INT NOT NULL,
        rate_message TEXT NOT NULL,
        product_id VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;
  }

  export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
      await client.sql`BEGIN`;
      //await seedSellers();
      //await seedCatalog();
      //await seedProducts();
      //await seedUsers();
      //await CreateReviews()
      //await dropSellers();
      //await dropProducts();
      //await dropCatalog();
      //await dropReviews()
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }
  

 