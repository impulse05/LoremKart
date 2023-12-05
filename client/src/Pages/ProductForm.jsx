import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { addProduct } from './auth';
import { getCategories } from './api';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product).then(() => {
      setProduct({
        name: '',
        price: '',
        image: '',
        category: '',
        quantity: '',
      });
    });
    console.log('Product:', product);
  };
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
    });



  }, [])


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="productImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="categorySelect">
          <Form.Label>Filter by Category:</Form.Label>
          <Form.Control as="select" onChange={handleChange} value={product.category} name="category">


            {categories.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              );
            })


            }
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="productQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default ProductForm;

