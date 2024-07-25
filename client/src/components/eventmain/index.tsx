"use client";

import React, { useState } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { Button, Modal, TextField, Box } from '@mui/material';

interface EventPageProps {
  workshop: {
    eventName: string;
    text: string;
    features: string[];
    images: string[];
    date: string;
    price: number;
  };
}

const EventPage: React.FC<EventPageProps> = ({ workshop }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', contactNumber: '' });
  const eventDate = new Date(workshop.date);

  const URL = process.env.NEXT_PUBLIC_URL

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
        if (formData.contactNumber?.length === 10) {
          openRazorpay();
        } else {
          alert("Your WhatsApp Number Must Be 10 Digit");
        }
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
  const handleSave = async () => {
    try {
      const response = await axios.post(`${URL}/save-payment`, {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        price: selectedWorkshop.price,
        eventName: selectedWorkshop.eventName,
        paymentId: "N/A"
      });
      if (response.status !== 201) {
        throw new Error('Failed to save details');
      } else {
        alert("Registeration Successful");
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  return (
    <div className="bg-white text-dark  flex flex-col items-center p-6 mt-20">
      <main className="flex flex-col items-center max-w-6xl w-full mt-12">
        <h1 className="text-4xl font-bold text-center leading-tight">
          {workshop.eventName}
        </h1>
        <p className="text-3xl mt-4 text-center text-yellow-400">
          {workshop.text}
        </p>
        
        <div className="mt-12  flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-yellow-400  p-6 flex flex-col items-center">
            <img src={`${process.env.NEXT_PUBLIC_URL}/uploads/${workshop.images[0]}`} alt={workshop.eventName} className="  mb-4"/>
          </div>
          <div className="md:w-1/2 flex flex-col">
            {/* <div className="text-2xl font-bold mb-6">
              {workshop.features[0]}
            </div> */}
            <ul className="list-none space-y-4 mb-8">
              {workshop.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2" style={{ color: '#3EB449' }}>✓</span>{feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-between mb-8">
              <div className="text-center">
                <div className="text-lg font-bold">{new Date(workshop.date).toLocaleDateString()}</div>
                <div className="text-sm">{new Date(workshop.date).toLocaleTimeString()}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">3+ Hours</div>
                <div className="text-sm">Live Session</div>
              </div>
            </div>
            {workshop?.price ? <button className=" text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300" style={{ backgroundColor: '#3EB449' }}onClick={() => handleEnrollClick(workshop)}>
              {workshop.eventName} Now At Just Rs.{workshop?.price}/- Only
            </button> : <button className=" text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300" style={{ backgroundColor: '#3EB449' }}onClick={() => handleEnrollClick(workshop)}>
              {workshop.eventName} Now At Free
            </button>}
            
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Countdown 
            date={eventDate} 
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex justify-center space-x-4">
                {[
                  { label: 'DAYS', value: days },
                  { label: 'HOURS', value: hours },
                  { label: 'MIN', value: minutes },
                  { label: 'SEC', value: seconds }
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-bold" style={{ color: '#3EB449' }}>{value.toString().padStart(2, '0')}</div>
                    <div className="text-sm">{label}</div>
                  </div>
                ))}
              </div>
            )}
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
            label="WhatsApp Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          {selectedWorkshop?.price ?
            <Button style={{ backgroundColor: 'green' }} variant="contained" color="success" fullWidth className="mt-4" onClick={handleSubmit}>
              Pay with Razorpay
            </Button>
            : <Button style={{ backgroundColor: 'green' }} variant="contained" color="success" fullWidth className="mt-4" onClick={handleSave}>Register</Button>}
        </Box>
      </Modal>

      </main>
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

export default EventPage;

