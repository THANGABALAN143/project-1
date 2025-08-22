import './Products.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Products() {
  const [hairProducts, setHairProducts] = useState([]); // ✅ dynamic state

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/getalldet') // ✅ correct endpoint
      .then(response => {
        setHairProducts(response.data); // ✅ store backend data
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <div style={{ padding: '30px' }}>
        <h2 style={{
          backgroundColor: 'orange',
          padding: '15px',
          textAlign: 'center'
        }}>
          Our Products
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {hairProducts.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                borderRadius: '15px',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <h3 style={{ marginTop: '15px' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: 'green' }}>{product.price}</p>
            <p style={{ fontWeight: 'bold', color: 'red' }}>{product.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
