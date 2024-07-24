const express = require('express');
const { getEvents, createEvent, deleteEvent, updateEvent, savePayment, upload, UserDetails, deleteUser, updateUser, handleContactForm, contactDetails, deleteContact, updateContact, saveCommunity, communityDetails, deleteCommunity, updateCommunity,singleEvents} = require('../controllers/eventController');
const router = express.Router();

router.route('/events')
  .get(getEvents)
  .post(upload.array('images', 10), createEvent);

router.get('/singleEvents/:id',singleEvents)

router.route('/events/:id')
  .delete(deleteEvent)
  .put(upload.array('images', 10), updateEvent);

router.post('/save-payment', savePayment);
router.get('/users', UserDetails)
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);


router.post('/contact', handleContactForm);
router.get('/contact', contactDetails)
router.delete('/contact/:id', deleteContact);
router.put('/contact/:id', updateContact);

router.post('/community', saveCommunity);
router.get('/community', communityDetails)
router.delete('/community/:id', deleteCommunity);
router.put('/community/:id', updateCommunity);

module.exports = router;
