import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Smartphone X',
            category: 'Electronics',
            price: '$499.99',
            image: 'https://via.placeholder.com/300',
        },
        {
            id: 2,
            name: 'Stylish Backpack',
            category: 'Fashion',
            price: '$49.99',
            image: 'https://via.placeholder.com/300',
        },
        {
            id: 3,
            name: 'Home Speaker System',
            category: 'Home & Living',
            price: '$199.99',
            image: 'https://via.placeholder.com/300',
        },
    ];

    return (
        <div>
            <section className="hero bg-dark text-white text-center">
                <Container>
                    <h1>Welcome to LoremKart</h1>
                    <p>Your go-to destination for quality products and great deals!</p>
                    <Link to="/products">
                        <Button variant="primary">Explore Products</Button>
                    </Link>
                </Container>
            </section>

            <Container className="mt-5">
                <section className="featured-products">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <Row>
                        {featuredProducts.map((product) => (
                            <Col key={product.id} md={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={product.image} alt={product.name} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.category}</Card.Text>
                                        <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                                        <Link to={`/product/${product.id}`}>
                                            <Button variant="primary">View Details</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
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

                <section className="carousel-section mt-5">
                    <h2>Discover More</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1200x400"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1200x400"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1200x400"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </section>
            </Container>
        </div>
    );
};

export default HomePage;
