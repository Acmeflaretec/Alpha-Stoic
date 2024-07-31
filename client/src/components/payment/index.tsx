import React, { useState, useEffect } from 'react';
import { Button, Modal, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StickyContainer = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#ffffff',
  boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
  zIndex: 1000,
  padding: '12px 0',
  borderTop: '1px solid #e0e0e0',
});

const PaymentDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px',
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: '#3EB449',
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
}));

const EnrollButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3EB449',
  color: '#ffffff',
  fontSize: '1rem',
  padding: '10px 24px',
  '&:hover': {
    backgroundColor: '#2E8836',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
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
          <Price><span className='text-dark me-3'>Now at</span> ₹{workshop.price.toLocaleString('en-IN')}/-</Price>
          <EnrollButton
            variant="contained"
            onClick={handleEnrollClick}
            disabled={isEventOver}
          >
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
          <Typography variant="h4" component="h2" gutterBottom>
            Enroll for
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ wordBreak: 'break-word' }}>
            {workshop.eventName}
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
          />
          <TextField
            label="WhatsApp Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            variant="outlined"
          />
          {workshop.price ? (
            <Button
              variant="contained"
              style={{ backgroundColor: '#3EB449', color: '#ffffff' }}
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              disabled={isEventOver}
            >
              Pay ₹{workshop.price.toLocaleString('en-IN')} with Razorpay
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: '#3EB449', color: '#ffffff' }}
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSave}
              disabled={isEventOver}
            >
              Register for Free
            </Button>
          )}
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
  maxWidth: '90%',
  bgcolor: '#ffffff',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default StickyPayment;