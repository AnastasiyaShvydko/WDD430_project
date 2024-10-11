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

const products = [
    {
        title: "vase",
        price: 50,
        description:'gjhgjkdghhgj',
        seller_code: 4,
        image_url: '/items/pic1.png'
    },
    {
        title: "vase",
        price: 50,
        description:'gjhgjkdghhgj',
        seller_code: 1,
        image_url: '/items/pic2.png'
    },
    {
        title: "vase",
        price: 50,
        description:'gjhgjkdghhgj',
        seller_code: 2,
        image_url: '/items/pic3.png'
    },
    {
        title: "vase",
        price: 50,
        description:'gjhgjkdghhgj',
        seller_code: 3,
        image_url: '/items/pic4.png'
    },
    {
        title: "vase",
        price: 50,
        description:'gjhgjkdghhgj',
        seller_code: 1,
        image_url: '/items/pic5.png'
    },
]
 export {sellers, products}