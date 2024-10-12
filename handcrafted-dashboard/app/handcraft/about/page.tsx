import Head from "next/head";
import './style.css';

export default function About() {
    return (
        <>
            <Head>
                <title>About - Handcrafted items</title>
                <meta name="description" content="Find out more about our handmade objects application." />
            </Head>
            <div className="container">
        <h1 className="title">About our application</h1>
        
        <section className="content">
          <p>
            Welcome to our platform dedicated to handmade objects. Each piece you will find here is the result of
            of passionate craftsmanship, a true work of art created by talented artisans.
          </p>

          <p>
          Our mission is to connect you with unique designers whose products reflect quality,
            creativity and authenticity. Whether you're looking for something unique for yourself or a special gift,
            we've got just what you're looking for.
          </p>

          <h2>Mission Statement</h2>
          <p>
          Support local artisans and offer a sustainable alternative to mass-produced goods. Every item sold on
          our platform is a direct contribution to the preservation of artisan crafts.
          </p>

          <h2>Our Core Values</h2>
          <ul>
            <li>Quality and authenticity</li>
            <li>Local, ethical craftsmanship</li>
            <li>Environmentally-friendly products</li>
            <li>Promoting creativity</li>
          </ul>

          <h2>Contact</h2>
          <p>
          If you have any questions or would like to collaborate with us, please contact us by e-mail at
            <a href="mailto:contact@handcrafted.com">contact@handcrafted.com</a>.
          </p>
        </section>

        <div className="imageContainer">
          <img src="/public/hero-img.jpg" alt="hero-img" className="image" />
        </div>
      </div>
        </>
    )
}