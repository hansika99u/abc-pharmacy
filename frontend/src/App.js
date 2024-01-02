// Import React and React Router
import React from 'react';
import { Link } from 'react-router-dom';

// LandingPage component
const LandingPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <header
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '50px 0',
        }}
      >
        <h1
          style={{
            fontSize: '3em',
            marginBottom: '10px',
          }}
        >
          ABC Pharmacy
        </h1>
        <p
          style={{
            fontSize: '1.2em',
            lineHeight: '1.6em',
            color: '#ecf0f1',
          }}
        >
          Your Trusted Online Pharmacy for Quality Medications and Personalized Care.
        </p>
      </header>

      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '50px',
          backgroundColor: '#ecf0f1',
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '20px',
            borderRadius: '8px',
            margin: '0 10px',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>Wide Range of Medications</h2>
          <p>Explore our extensive selection of prescription and over-the-counter medications, ensuring you find what you need for your health.</p>
        </div>

        <div
          style={{
            flex: 1,
            padding: '20px',
            borderRadius: '8px',
            margin: '0 10px',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>Quick and Secure Delivery</h2>
          <p>Enjoy fast and secure delivery services right to your doorstep. Your health is our priority, and we make sure your medications reach you on time.</p>
        </div>

        <div
          style={{
            flex: 1,
            padding: '20px',
            borderRadius: '8px',
            margin: '0 10px',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>Expert Consultations</h2>
          <p>Connect with our experienced pharmacists for personalized consultations. We are here to answer your questions and provide guidance on your health journey.</p>
        </div>
      </section>

      <div
        style={{
          marginTop: '30px',
        }}
      >
        <Link to="/items">
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.2em',
              margin: '0 10px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Manage Items
          </button>
        </Link>
        <Link to="/invoices">
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.2em',
              margin: '0 10px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Create Invoices
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
