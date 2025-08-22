// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <div style={{  backgroundColor:'yellow',padding: '50px', textAlign: 'center' }}>
//       <h1 className="heading">Welcome to Hair Export Company</h1>
//       <p>We export 100% human hair to countries worldwide.</p>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import './Home.css';

function Home() {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '50px', textAlign: 'center' }}>
      <h1 className="heading">Welcome to Hair Export Company</h1>
      {/* 👇 Apply the animation only to the <p> */}
      <p className="typewriter">
        We export 100% human hair to countries worldwide.
      </p>
    </div>
  );
}

export default Home;

