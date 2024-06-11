const express = require('express');
const { getEvents, createEvent, deleteEvent, updateEvent, savePayment, upload, UserDetails ,deleteUser ,updateUser } = require('../controllers/eventController');
const router = express.Router();

router.route('/events')
  .get(getEvents)
  .post(upload.array('images', 10), createEvent);

router.route('/events/:id')
  .delete(deleteEvent)
  .put(upload.array('images', 10), updateEvent);

router.post('/save-payment', savePayment);
router.get('/users', UserDetails)
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;
