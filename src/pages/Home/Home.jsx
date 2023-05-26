import axios from "../../AxiosConfig/axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../../Category/categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../Action/productAccount";
import ProductPreview from "../../components/ProductPreview/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div>
            <img src="https://assets-global.website-files.com/6372cf43b12f4050f98e2731/642c54fbd7833c75af1411cf_5f30d0a9e83d3d816b4226e6_yOM5sigjSyep7EOkjwBt_What_is_Digital_Marketing1.jpeg" className="home-banner" />


            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
            <div className="featured-products-container container mt-4">
                <h2>products</h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className="sale__banner--container mt-4">
                <img src="https://eg.jumia.is/cms/Week21-2023/One-Day-Offer/May-24th/General_-3.jpg" />
            </div>
            
            <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div className="sale__banner--container mt-4">
                <img src="https://eg.jumia.is/cms/JA-Teasing/Initiatives/ExtraDiscount/1152x252_-EN.png" />
            </div>
       
        </div>
    );
}

export default Home;
