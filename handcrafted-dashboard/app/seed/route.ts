//import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { sellers} from '@/app/lib/placeholder-data';


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

  // async function dropSellers() {
  //   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //   await client.sql`
  //   DROP TABLE sellers;`
  // }

  // async function dropCustomers() {
  //   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  //   await client.sql`
  //   DROP TABLE customers;`
  // }


  export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
      await client.sql`BEGIN`;
      await seedSellers();
      //await dropSellers();
      //await dropCustomers()
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }
  