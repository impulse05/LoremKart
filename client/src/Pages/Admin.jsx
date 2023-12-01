import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AdminPage = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Electronics', price: '$19.99' },
        { id: 2, name: 'Product 2', category: 'Clothing', price: '$29.99' },
        // Add more products as needed
    ]);

    const [categories, setCategories] = useState(['Electronics', 'Clothing', 'Home and Living']);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [productForm, setProductForm] = useState({
        name: '',
        category: '',
        price: '',
    });

    const handleProductModal = (product) => {
        setSelectedProduct(product || {});
        setProductForm(product || { name: '', category: '', price: '' });
        setShowProductModal(!showProductModal);
    };

    const handleProductFormChange = (e) => {
        const { name, value } = e.target;
        setProductForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();

        if (selectedProduct.id) {
            // Update existing product
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === selectedProduct.id ? { ...product, ...productForm } : product
                )
            );
        } else {
            // Add new product
            setProducts((prevProducts) => [
                ...prevProducts,
                { id: prevProducts.length + 1, ...productForm },
            ]);
        }

        setShowProductModal(false);
    };

    const handleProductDelete = (productId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    return (
        <div className="mt-4">
            <h2>Admin Page</h2>

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
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        className="mr-2"
                                        onClick={() => handleProductModal(product)}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => handleProductDelete(product.id)}>
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
                        {categories.map((category, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{category}</td>
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

            <Modal show={showProductModal} onHide={() => handleProductModal(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
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
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                name="category"
                                value={productForm.category}
                                onChange={handleProductFormChange}
                                required
                            />
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
                        <Button variant="primary" type="submit">
                            {selectedProduct.id ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AdminPage;
