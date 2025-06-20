const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save the message to the database
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();

    // 2. Send an email notification
    // Note: You need to add EMAIL_SERVICE, EMAIL_USER, and EMAIL_PASS to your .env file
    // For Gmail, you may need to use an "App Password" instead of your regular password.
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // The email address you want to receive messages on
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'Message sent successfully! Thank you.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 