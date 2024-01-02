import React, { useState } from 'react';
import jsPDF from 'jspdf';

const InvoiceGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    billingType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateInvoice = () => {
    generatePdf(formData);
  };

  const generatePdf = (data) => {
    const pdf = new jsPDF();
    pdf.setFont('Arial', 'normal');
    pdf.setFontSize(18);
    pdf.text('Invoice Details', 20, 20);
    pdf.setFontSize(14);
    pdf.setTextColor(50, 50, 50);
    pdf.text(`Name: ${data.name}`, 20, 30);
    pdf.text(`Mobile No: ${data.mobile}`, 20, 40);
    pdf.text(`Email: ${data.email}`, 20, 50);
    pdf.text(`Address: ${data.address}`, 20, 60);
    pdf.text(`Billing Type: ${data.billingType}`, 20, 70);
    pdf.save('invoice.pdf');
  };
  return (
<div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto',marginTop:"100px", padding: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <h1 style={{ color: '#4285F4', textAlign: 'center', marginBottom: '20px' }}>Invoice Generator</h1>
  <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <label style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#333', fontSize: '18px', marginBottom: '5px' }}>Name:</span>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
    </label>

    <label style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#333', fontSize: '18px', marginBottom: '5px' }}>Mobile No:</span>
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
    </label>

    <label style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#333', fontSize: '18px', marginBottom: '5px' }}>Email:</span>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
    </label>

    <label style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#333', fontSize: '18px', marginBottom: '5px' }}>Address:</span>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
    </label>

    <label style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: '#333', fontSize: '18px', marginBottom: '5px' }}>Billing Type:</span>
      <input
        type="text"
        name="billingType"
        value={formData.billingType}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
    </label>

    <button
      type="button"
      onClick={handleGenerateInvoice}
      style={{
        backgroundColor: '#4285F4',
        color: 'white',
        padding: '15px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Generate and Download the PDF
    </button>
  </form>
</div>

  );
};

export default InvoiceGenerator;
