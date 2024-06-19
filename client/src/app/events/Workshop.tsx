"use client"; // Ensure client-side rendering

import React, { useState } from 'react';
// import Image from 'next/image';
import { Pagination, Button, Modal, TextField, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import axios from 'axios';
import './style.css';

interface WorkshopProps {
  workshops: {
    _id: string;
    eventName: string;
    text: string;
    features: string[];
    images: string[];
    price: number;
    date: string;
  }[];
}

const URL = process.env.NEXT_PUBLIC_URL

const Workshops: React.FC<WorkshopProps> = ({ workshops }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', contactNumber: '' });

  const cardsPerPage = 9;
  const maxFeatures = 6;

  const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleEnrollClick = (workshop: any) => {
    setSelectedWorkshop(workshop);
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
      amount: selectedWorkshop.price * 100,
      currency: 'INR',
      name: selectedWorkshop.eventName,
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
      notes: {
        workshop_id: selectedWorkshop._id
      },
      theme: {
        color: '#3EB449'
      }
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const savePaymentDetails = async (paymentResponse: any) => {
    try {

      const response = await axios.post(`${URL}/save-payment`, {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        price: selectedWorkshop.price,
        eventName: selectedWorkshop.eventName,
        paymentId: paymentResponse.razorpay_payment_id
      });
      if (response.status !== 201) {
        throw new Error('Failed to save payment details');
      }
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  const totalPages = Math.ceil(workshops.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const selectedWorkshops = workshops.slice(startIndex, startIndex + cardsPerPage);


  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="mb-8 text-3xl leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          Upcoming workshops
        </h2>
      </div>

      <div className="card-container">
        {selectedWorkshops.length !== 0 ? (
          selectedWorkshops.map((workshop) => (
            <div key={workshop._id} className="card">
              <div className="">
                <div className="relative h-48 w-full">
                  <Carousel showThumbs={false} autoPlay infiniteLoop>
                    {workshop.images.map((src, index) => (
                      <div key={index} className="relative h-48 w-full">
                        {/* <Image
                          src={`${URL}/uploads/${src}`}
                          alt={workshop.eventName}
                          layout="fill"
                          objectFit="cover"
                        /> */}
                        {/* <img src={`${URL}/uploads/${src}`} alt={workshop.eventName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /> */}
                        <img
                          src={`${URL}/uploads/${src}`}
                          alt={workshop.eventName}
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="p-4">
                  <div className="mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 className="text-l font-bold">₹{workshop.price}</h3>
                    <h3 className="text-l font-bold">{workshop.date}</h3>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{workshop.eventName}</h3>
                  <p className="text-gray-700 mb-4">{workshop.text}</p>
                  <ul className="list-disc pl-5">
                    {workshop.features.slice(0, maxFeatures).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='container mb-5'>
                <Button
                  style={{backgroundColor:'#3EB449'}}
                  variant="contained"
                  color="success"
                  fullWidth
                  className="mt-4"
                  onClick={() => handleEnrollClick(workshop)}
                >
                  Enroll
                </Button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ color: 'red' }}>Events Not Organized</span>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
        />
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="enroll-modal-title"
        aria-describedby="enroll-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <h2 id="enroll-modal-title">Enroll for</h2>
          <h3 style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{selectedWorkshop?.eventName}</h3>
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

export default Workshops;
