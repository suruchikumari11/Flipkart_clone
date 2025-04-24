import { useEffect, useState } from "react";
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/home/products')  
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log("Error fetching products:", error);
            });
    }, []);

    return (
        <div style={{ padding: "20px", background: "#f1f3f6" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Products List</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px"
            }}>
                {products.map(product => (
                    <div key={product._id} style={{
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        padding: "15px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                        }}
                    >
                        <img src={product.image} alt={product.name} style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "contain",
                            marginBottom: "10px"
                        }} />
                        <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
                        <p style={{ fontWeight: "bold", color: "#388e3c" }}>₹{product.price}</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
