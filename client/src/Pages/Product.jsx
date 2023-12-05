import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { getCategories, getProducts } from './api';
import ProductCard from '../Components/ProductCard';

const ProductPage = () => {
    // Dummy product data
    const [products, setProducts] = useState([]);
    const [caetgories, setCaetgories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(false)

    const handleCategoryChange = async (e) => {
        setLoading(true);
        setSelectedCategory(e.target.value);

        const filteredProducts = selectedCategory === 'All' ? products : products.filter((product) => product.category._id === selectedCategory);
        setFiltered(filteredProducts);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    };




    useEffect(() => {
        const products = getProducts().then(data => {
            setProducts(data);
            setFiltered(data)
        });



        getCategories().then((data) => {
            setCaetgories(data);
        })
    }, [])


    return (
        <Container>
            <h2 className="mt-4 mb-4">Our Products</h2>
            <Form className="mb-4">
                <Form.Group controlId="categorySelect">
                    <Form.Label>Filter by Category:</Form.Label>
                    <Form.Control as="select" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="All">All Categories</option>

                        {caetgories.map((category) => {
                            return (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            );
                        })


                        }
                    </Form.Control>
                </Form.Group>
            </Form>



            {!loading && <Row>
                {filtered.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Row>}

            {loading && <h1 className='text-center'>Loading...</h1>}

        </Container>
    );
};

export default ProductPage;
