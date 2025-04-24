// import React from 'react';
import product from '../assets/product.jpg';
import fashion from '../assets/fashion.jpg';
import furniture from '../assets/furniture.jpg';

function Carosel() {
    return (
        <div className="container mt-4">
            <div
                id="carouselExampleIndicators"
                className="carousel slide shadow rounded"
                data-bs-ride="carousel"
                style={{ maxHeight: "400px", overflow: "hidden" }}
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product} className="d-block w-100" alt="Product" style={{ height: "400px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={fashion} className="d-block w-100" alt="Fashion" style={{ height: "400px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={furniture} className="d-block w-100" alt="Furniture" style={{ height: "400px", objectFit: "cover" }} />
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carosel;
