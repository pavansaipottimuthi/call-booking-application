const asyncHandler = require('express-async-handler');
const Booking = require('../models/bookingModel');
const { sendMail } = require('../utils/mail');

const createBooking = asyncHandler(async (req, res) => {
    const { name, email, phonenumber, servicetype, location, image, ip } = req.body;

    const prevBooking = await Booking.findOne({ ip, createdAt: { $gt: new Date(Date.now() - 120000) } });

    if (prevBooking) {
        res.status(400)
        throw new Error("Please wait for a while");
    }

    const booking = await Booking.create({
        name,
        email,
        phonenumber,
        servicetype,
        location,
        image,
        ip
    });

    if (booking) {
        await sendMail(email, name, "user")
        await sendMail("admin@xyz.com", name, "admin")
        res.status(201).json({ booking });
    } else {
        res.status(400)
        throw new Error("Error occured");
    }

});

module.exports = { createBooking };
