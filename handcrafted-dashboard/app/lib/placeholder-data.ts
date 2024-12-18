//Data

const sellers = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'John',
        email: 'john@rabbit.com',
        description: 'Specializing in handcrafted wooden creations,\
        this artisan transforms reclaimed wood into stunning furniture\
        and decor. Each piece tells a story, combining rustic charm with modern design.\
        From intricate carvings to sleek cutting boards, their passion for sustainability\
        shines through in every project.',
        seller_code: 1,
        image_url: '/sellers/user1.png',
    },
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81ab',
        name: 'Kevin',
        email: 'kevin@rabbit.com',
        description: 'With a flair for color and pattern,\
         this quilter brings fabric to life through intricate\
          designs and cozy quilts. Using traditional techniques\
           alongside contemporary twists, they create heirloom pieces\
            that warm both body and soul. Whether it’s a patchwork throw \
            or a bespoke quilt, their work is a labor of love.',
        seller_code: 2,
        image_url: '/sellers/user2.png',
    },
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81ac',
        name: 'Lina',
        email: 'lina@rabbit.com',
        description: 'This crafter blends science and art to create luxurious,\
         all-natural soaps that nourish the skin. Infused with botanical ingredients \
         and essential oils, each bar is a fragrant delight. With a focus on\
          sustainability, they also offer eco-friendly packaging, making self-care\
           a guilt-free pleasure.',
        seller_code: 3,
        image_url: '/sellers/user3.png',
    },
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81ad',
        name: 'Jack',
        email: 'jack@rabbit.com',
        description: 'Focusing on functional and decorative ceramics, this potter\
         shapes clay into beautiful and practical pieces. From elegant dinnerware\
          to whimsical planters, their work celebrates the beauty of imperfection.\
           Each item is handcrafted and fired with care, ensuring uniqueness in every \
           piece.',
        seller_code: 4,
        image_url: '/sellers/user4.png',
    },
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81ae',
        name: 'Luke',
        email: 'luke@rabbit.com',
        description: 'Merging modern aesthetics with traditional techniques, this\
         jewelry designer creates stunning pieces that reflect individuality. Using\
          a mix of metals, gemstones, and unique materials, their collections range\
           from bold statement jewelry to delicate everyday wear. Each piece is crafted\
            with meticulous attention to detail, making them perfect for any occasion.',
        seller_code: 5,
        image_url: '/sellers/user5.png',
    },
]
//Nomore, I added seller_code so it will be the foreing key which you need to use 
//to connect those to tables. Each product in your table should have seller_code which is relaited 
//with the seller.Also I forgot in the defenition.ts file you need to create type Product according
//to the attributs you are gonna have in products table.

const catalog = [
    {
        title: "Pottery and Ceramics",
	    motto: "Shape the Earth and tell stories through clay.",
        description:"In this category, explore the timeless art of crafting with gifted hands, transforming humble clay into exquisite 	pottery and ceramics. From delicate vases to intricate sculptures, discover the magic of molding, glazing, and firing. Each creation carries the artisan`s touch, blending creativity with nature`s elements.",
        category_code: 1,
        image_url: '/items/cata1.png'
    },
    {
        title: "Weaving",
	    motto:"Threads of tradition woven into every piece.",
        description: "Weaving is more than just fabric; it's storytelling through threads.\
         Whether you're crafting vibrant tapestries, \
        intricate baskets, or durable rugs, this art\
        form reflects cultures from around the world. Each weave connects past \
        and creating a tapestry of color, texture, and history.",
        category_code: 2,
        image_url: '/items/cata2.png'
    },
    {
        title: "Knitting",
	    motto:"Loops of love in every stitch.",
        description:"Knitting transforms yarn into masterpieces—whether cozy scarves, warm blankets, or intricate sweaters. Perfect 		for creating both practical and decorative items, every knit and purl stitch offers a chance to express creativity and spread warmth, one thread at a time.",
        category_code: 3,
        image_url: '/items/cata3.png'
    },
    {
        title: "Wood Carving",
	    motto:"Breathe life into wood and sculpt your imagination",
        description:"Wood carving combines precision, patience, and passion. From delicate figurines to bold sculptures and functional furniture, artisans use their tools to reveal hidden forms within each piece of wood. This craft bridges  nature and creativity, producing pieces with character and soul.",
        category_code: 4,
        image_url: '/items/cata4.png'
    },
    {
        title: "Beadwork",
	    motto: "Tiny treasures strung into wearable art.",
        description:"Beadwork is a mesmerizing art form that transforms small beads into dazzling jewelry, intricate patterns, and cultural expressions. Whether used for fashion, tradition, or storytelling, each bead carries meaning and beauty, making every piece a unique work of art.",
        category_code: 5,
        image_url: '/items/cata5.png'
}

]

const products =[ {
    title: "Glazed Vase",
    price: 150,
    description: "A hand-glazed ceramic vase with intricate floral patterns, perfect for home decor.",
    seller_code: 2,
    category_code: 1,
    image_url: "/items/cata1-1.png"
  },
  {
    title: "Porcelain Tea Set",
    price: 250,
    description: "Elegant porcelain tea set with traditional hand-painted motifs, ideal for tea lovers.",
    seller_code: 1,
    category_code: 1,
    image_url: "/items/cata1-2.png"
  },
  {
    title: "Ceramic Wall Art",
    price: 300,
    description: "Beautiful ceramic wall art featuring modern abstract designs, great for any space.",
    seller_code: 1,
    category_code: 1,
    image_url: "/items/cata1-3.png"
  },
  {
    title: "Traditional Woven Basket",
    price: 80,
    description: "A handmade woven basket crafted from eco-friendly materials, perfect for storage.",
    seller_code: 2,
    category_code: 2,
    image_url: "/items/cata2-1.png"
  },
  {
    title: "Tapestry Blanket",
    price: 400,
    description: "A vibrant tapestry blanket, ideal for cozying up or adding color to your room.",
    seller_code: 4,
    category_code: 2,
    image_url: "/items/cata2-2.png"
  },
  {
    title: "Woven Wall Hanging",
    price: 200,
    description: "Handwoven wall hanging with intricate patterns, adding texture to your space.",
    seller_code: 4,
    category_code: 2,
    image_url: "/items/cata2-3.png"
  },
  {
    title: "Knitted Scarf",
    price: 50,
    description: "A warm knitted scarf with a soft finish, perfect for winter wear.",
    seller_code: 1,
    category_code: 3,
    image_url: "/items/cata3-1.png"
  },
  {
    title: "Chunky Knit Blanket",
    price: 350,
    description: "Cozy chunky knit blanket, handmade to bring warmth and comfort to any home.",
    seller_code: 3,
    category_code: 3,
    image_url: "/items/cata3-2.png"
  },
  {
    title: "Handmade Wool Sweater",
    price: 150,
    description: "A soft, handmade wool sweater, designed with intricate patterns and warm tones.",
    seller_code: 1,
    category_code: 3,
    image_url: "/items/cata3-3.png"
  },
  {
    title: "Wooden Sculpture",
    price: 700,
    description: "A lifelike wooden sculpture carved with precision to capture expressive details.",
    seller_code: 5,
    category_code: 4,
    image_url: "/items/cata4-1.png"
  },
  {
    title: "Custom Wooden Chair",
    price: 1200,
    description: "A beautifully carved wooden chair with unique craftsmanship and smooth finishing.",
    seller_code: 3,
    category_code: 4,
    image_url: "/items/cata4-2.png"
  },
  {
    title: "Wooden Jewelry Box",
    price: 300,
    description: "A handcrafted wooden jewelry box with compartments and elegant carvings.",
    seller_code: 4,
    category_code: 4,
    image_url: "/items/cata4-3.png"
  },
  {
    title: "Beaded Necklace",
    price: 100,
    description: "An exquisite beaded necklace with intricate patterns, perfect for any occasion.",
    seller_code: 3,
    category_code: 5,
    image_url: "/items/cata5-1.png"
  },
  {
    title: "Beaded Keychain",
    price: 25,
    description: "A colorful beaded keychain, combining tradition with modern functionality.",
    seller_code: 1,
    category_code: 5,
    image_url: "/items/cata5-2.png"
  },
  {
    title: "Handmade Beaded Bracelet",
    price: 80,
    description: "A stunning handmade beaded bracelet, showcasing intricate beadwork and design.",
    seller_code: 1,
    category_code: 5,
    image_url: "/items/cata5-3.png"
  }
]

const users = [
  {
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  }
]
 export {sellers, catalog, products, users}