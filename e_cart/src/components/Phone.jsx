import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhonePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get('/api/home/products?categories="phone"')  // adjust your backend route here
      .then((res) => setPhones(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Phones</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {phones.map((phone) => (
          <div key={phone._id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            width: "200px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}>
            <img src={phone.image} alt={phone.name} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
            <h4>{phone.name}</h4>
            <p>₹{phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhonePage;
