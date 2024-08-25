import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/ProductsStyle.css"
function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('../data/ProductsData.json')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
            <Container className='products--container'>
                <h1 className="category">Desserts</h1>
                <Row>
                    {products.map(item => (
                        <Col xs={12} sm={6} md={6} lg={4} key={item.id} className="mb-4">
                            <ProductsCard data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
    );
}

export default Products;
