import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Container } from 'react-bootstrap';
import { getCategories, getProducts } from './api';
import { addProduct } from './auth';
import { toast } from 'react-toastify';

const AdminPage = () => {
    const [products, setProducts] = useState([

        // Add more products as needed
    ]);

    const [categories, setCategories] = useState([]);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [productForm, setProductForm] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
        quantity: '',
    });

    const handleProductModal = (product) => {
        setSelectedProduct(product || {});
        setProductForm(product || { name: '', category: '', price: '' });
        setShowProductModal(!showProductModal);
    };

    const handleProductFormChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setProductForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();

        if (selectedProduct._id) {
            // Update existing product

        } else {
            // Add new product
            addProduct(productForm).then(data => {
                toast.success("Product added successfully")
            });
        }

        setShowProductModal(false);
    };

    const handleProductDelete = (productId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    };

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        })
        getCategories().then((data) => {
            console.log(data);
            setCategories(data);

        })
    }, [])


    return (
        <div className="mt-4">
            <h2>Admin Page</h2>
            <Container>

                <div className="mt-4">
                    <h3>Products</h3>
                    <Button variant="success" className="mb-2" onClick={() => handleProductModal(null)}>
                        Add Product
                    </Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Button
                                            variant="info"
                                            className="mr-2"
                                            onClick={() => handleProductModal(product)}
                                        >
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => handleProductDelete(product._id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div className="mt-4">
                    <h3>Categories</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category._id}>
                                    <td>{category._id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <Button variant="info" className="mr-2">
                                            Edit
                                        </Button>
                                        <Button variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

            </Container>

            <Modal show={showProductModal} onHide={() => handleProductModal(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct._id ? 'Edit Product' : 'Add Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleProductSubmit}>
                        <Form.Group controlId="productName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="name"
                                value={productForm.name}
                                onChange={handleProductFormChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="productCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" name="category" onChange={handleProductFormChange} value={productForm.category}>
                                <option key="all" value="">
                                    Select
                                </option>
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
                        <Form.Group controlId="productPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product price"
                                name="price"
                                value={productForm.price}
                                onChange={handleProductFormChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="productimage">
                            <Form.Label>image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product image"
                                name="image"
                                value={productForm.image}
                                onChange={handleProductFormChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="productquantity">
                            <Form.Label>quantity</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product quantity"
                                name="quantity"
                                value={productForm.quantity}
                                onChange={handleProductFormChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {selectedProduct._id ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AdminPage;
