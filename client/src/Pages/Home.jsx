import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from './../Components/ProductCard';
import HomeCarousel from '../Components/HomeCarousel';

const HomePage = () => {
    const carouselItems = [
        { link: "https://via.placeholder.com/1200x400", text: "chetan" },
        { link: "https://via.placeholder.com/200x400", text: "chetan" },
    ];
    const featuredProducts = [
        {
            _id: 1,
            name: 'Smartphone X',
            category: 'Electronics',
            price: '499.99',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: 2,
            name: 'Stylish Backpack',
            category: 'Fashion',
            price: '49.99',
            image: 'https://via.placeholder.com/300',
        },
        {
            _id: 3,
            name: 'Home Speaker System',
            category: 'Home & Living',
            price: '199.99',
            image: 'https://via.placeholder.com/300',
        },
    ];

    return (
        <div>

            <section className="hero  text-center">
                <Container>
                    <h1>Welcome to LoremKart</h1>
                    <p>Your go-to destination for quality products and great deals!</p>
                    <Link to="/products">
                        <Button variant="primary">Explore Products</Button>
                    </Link>
                </Container>
            </section>
            <HomeCarousel caruselItems={carouselItems} />
            <Container className="mt-5">
                <section className="featured-products">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <Row>
                        {featuredProducts.map((product) => (
                            <ProductCard product={product} />
                        ))}
                    </Row>
                </section>

                <section className="about-section mt-5">
                    <h2>About LoremKart</h2>
                    <p>
                        LoremKart is your one-stop-shop for the latest and greatest products. We pride ourselves
                        on offering a diverse selection of items, from cutting-edge electronics to trendy
                        fashion and stylish home decor. At LoremKart, we believe in providing a seamless and
                        enjoyable shopping experience for our valued customers.
                    </p>
                </section>
            </Container>

        </div>
    );
};

export default HomePage;
