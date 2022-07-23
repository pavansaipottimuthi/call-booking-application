const asyncHandler = require('express-async-handler');
const Booking = require('../models/bookingModel');
const mongoose = require('mongoose');

const updateBooking = asyncHandler(async (req, res) => {
    const id = req.params.id
    const booking = await Booking.findById(id)
    if (!booking) throw new Error('Booking not found')
    const updatedBooking = await Booking.findByIdAndUpdate(id, { ...req.body }, { new: true })
    res.status(200).json(updatedBooking)
})

const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find()
    res.status(200).json(bookings)
})

const getBookingImage = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id)
    const db = mongoose.connection
    const collection = db.collection('images.files');
    const collectionChunks = db.collection('images.chunks');
    const file = await collection.findOne({ filename: booking.image })
    const fileChunks = await collectionChunks.find({ files_id: file._id }).sort({n: 1}).toArray()

    let fileData = [];
    for (let i = 0; i < fileChunks.length; i++) {
        fileData.push(fileChunks[i].data.toString('base64'));
    }
    let finalFile = 'data:' + file.contentType + ';base64,' + fileData.join('');
    res.status(200).json({ file: finalFile })
})

module.exports = { updateBooking, getBookings, getBookingImage };
