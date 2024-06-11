const Event = require('../models/Event');
const multer = require('multer');
const path = require('path');
const Payment = require('../models/payment')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

const getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createEvent = async (req, res) => {
    const { eventName, text, features, price, date } = req.body;
    const images = req.files.map(file => file.filename);

    const event = new Event({
        eventName,
        text,
        features, // No need to split, it's already an array
        images,
        price,
        date,
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        
            await Event.findByIdAndDelete(req.params.id);
            res.json({ message: 'Event deleted successfully' });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const updateEvent = async (req, res) => {
//     const { eventName, text, features, price, date } = req.body;

//     try {
//         const event = await Event.findById(req.params.id);
//         if (event) {
//             event.eventName = eventName;
//             event.text = text;
//             event.features = features; // No need to split, it's already an array
//             event.price = price;
//             event.date = date;
//             const updatedEvent = await event.save();
//             res.json(updatedEvent);
//         } else {
//             res.status(404).json({ message: 'Event not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const updateEvent = async (req, res) => {
    const { eventName, text, features, price, date } = req.body;
    const images = req.files.map(file => file.filename);
  
    try {
      const event = await Event.findById(req.params.id);
      if (event) {
        event.eventName = eventName;
        event.text = text;
        event.features = features; // No need to split, it's already an array
        if (images.length > 0) {
          event.images = images; // Replace images if new images are uploaded
        }
        event.price = price;
        event.date = date;
        const updatedEvent = await event.save();
        res.json(updatedEvent);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  const savePayment = async (req, res) => {
    try {
    const { name, email, contactNumber, price, eventName, paymentId } = req.body;
    
    const payment = new Payment({
        name,
        email,
        contactNumber,
        price,
        eventName,
        paymentId,
        verified:true,
        });
    
        const newPayment = await payment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const UserDetails = async (req, res) => {
    try {
        const users = await Payment.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    console.log("hello-",req.params.id);
    try {
        await Payment.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    console.log("hello1-",req.params.id);
    const { verified } = req.body;
    try {
        const user = await Payment.findById(req.params.id);
        if (user) {
            user.verified = verified;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getEvents, createEvent, deleteEvent, updateEvent, upload ,savePayment ,UserDetails ,updateUser , deleteUser};
