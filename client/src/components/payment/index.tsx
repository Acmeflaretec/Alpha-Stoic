import React, { useState, useEffect } from 'react';
import { Button, useMediaQuery, useTheme, Modal, TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StickyContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
  zIndex: 1000,
  padding: '15px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

const PaymentDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const EventName = styled('h1')(({ theme }) => ({
  fontWeight: 'bold',
  color: '#3EB449',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

const Price = styled('h3')(({ theme }) => ({
  fontWeight: 'extra-bold',
  color: '#3EB449',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const EnrollButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3EB449',
  fontSize: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    marginTop: '10px',
  },
}));

interface StickyPaymentProps {
  workshop: {
    eventName: string;
    price: number;
    date: string; // Assuming the date is in ISO format (e.g., '2024-07-30T00:00:00Z')
  };
}

const StickyPayment: React.FC<StickyPaymentProps> = ({ workshop }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', contactNumber: '' });
  const [isEventOver, setIsEventOver] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    const checkEventDate = () => {
      const currentDate = new Date();
      const eventDate = new Date(workshop.date);
      setIsEventOver(currentDate > eventDate);
    };
    
    checkEventDate();
  }, [workshop.date]);

  const handleEnrollClick = () => {
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
      if (formData.contactNumber?.length === 10) {
        openRazorpay();
      } else {
        alert("Your WhatsApp Number Must Be 10 Digit");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const openRazorpay = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: workshop.price * 100,
      currency: 'INR',
      name: workshop.eventName,
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
        workshop_id: workshop.eventName
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
        price: workshop.price,
        eventName: workshop.eventName,
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
        price: workshop.price,
        eventName: workshop.eventName,
        paymentId: "N/A"
      });
      if (response.status !== 201) {
        throw new Error('Failed to save details');
      } else {
        alert("Registration Successful");
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  return (
    <>
      <StickyContainer>
        <PaymentDetails>
          <EventName>{workshop.eventName}</EventName>
          <Price>₹ {workshop.price}/- Only</Price>
          <EnrollButton variant="contained" onClick={handleEnrollClick} disabled={isEventOver}>
            Enroll Now
          </EnrollButton>
        </PaymentDetails>
      </StickyContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="enroll-modal-title"
        aria-describedby="enroll-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <h2 id="enroll-modal-title">Enroll for</h2>
          <h3 style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>{workshop.eventName}</h3>
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
          {workshop.price ?
            <Button style={{ backgroundColor: 'green' }} variant="contained" color="success" fullWidth className="mt-4" onClick={handleSubmit} disabled={isEventOver}>
              Pay with Razorpay
            </Button>
            : <Button style={{ backgroundColor: 'green' }} variant="contained" color="success" fullWidth className="mt-4" onClick={handleSave} disabled={isEventOver}>Register</Button>}
        </Box>
      </Modal>
    </>
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

export default StickyPayment;
