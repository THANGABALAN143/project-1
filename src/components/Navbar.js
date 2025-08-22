import React from 'react'; 
function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '15px', color: 'white' }}>
      <h2>Hair Export</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
