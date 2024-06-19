"use client"; // Ensure client-side rendering

import React, { useState } from 'react';
import { Button, Modal, TextField, Box } from '@mui/material';
import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_URL
const PricingBox = (props: {
  price: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, packageName, subtitle, children } = props;

  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', contactNumber: '' });



  const handleEnrollClick = (price: any) => {
    setSelectedWorkshop(price);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.contactNumber) {
      {
        openRazorpay();
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const openRazorpay = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: selectedWorkshop * 100,
      currency: 'INR',
      name: selectedWorkshop === '1999' ? 'Indian Stock Market Community' : 'Crypto and Digital Asset Community',
      description: 'Workshop Enrollment',
      image: '/images/logo/alphastoic logo_page-0003.jpg',
      handler: function (response: any) {
        alert("Payment Successful");
        savePaymentDetails(response);
        handleCloseModal();
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contactNumber
      },
      theme: {
        color: '#38b74a'
      }
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const savePaymentDetails = async (paymentResponse: any) => {
    try {

      const response = await axios.post(`${URL}/community`, {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        price: selectedWorkshop,
        eventName: selectedWorkshop === '1999' ? 'Indian Stock Market Community' : 'Crypto and Digital Asset Community',
        paymentId: paymentResponse.razorpay_payment_id
      });
      if (response.status !== 201) {
        throw new Error('Failed to save payment details');
      }
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  return (
    <div className="flex flex-col relative z-10 rounded-lg bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
      <div className="flex items-center justify-center">
        <div className="price mb-2 text-[50px]  text-black dark:text-white text-center">
          ₹<span className="amount font-medium">{price}</span>

          <div className="mb-2 text-xl font-medium text-dark dark:text-white" style={{ color: "#3EB449" }}>
            {packageName}
          </div>
          <p className=" text-base">{subtitle}</p>
        </div>
      </div>
      <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">

      </div>
      <div className="mb-10">{children}</div>
      <button className="mt-auto flex w-full items-center justify-center rounded-sm p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" style={{ backgroundColor: "#3EB449" }} onClick={() => handleEnrollClick(price)}>
        Enroll Now
      </button>
      {/* <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="enroll-modal-title"
        aria-describedby="enroll-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <h2 id="enroll-modal-title">Enroll for</h2>
          <h3 style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{selectedWorkshop === '1999' ? 'Indian Stock Market Community' : 'Crypto and Digital Asset Community'}</h3>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <Button style={{ backgroundColor: 'green' }} variant="contained" color="success" fullWidth className="mt-4" onClick={handleSubmit}>
            Pay with Razorpay
          </Button>
        </Box>
      </Modal>
    </div>


  );
};

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default PricingBox;
