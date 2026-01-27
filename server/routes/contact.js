const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// In-memory storage for messages (for demo purposes)
const messages = [];

// Create transporter (configure with your email service)
const createTransporter = () => {
  // For Gmail, you need to enable "Less secure app access" or use App Password
  // For production, use a proper email service like SendGrid, Mailgun, etc.
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required',
        missing: {
          name: !name,
          email: !email,
          subject: !subject,
          message: !message
        }
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (name.length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters' });
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' });
    }

    // Store message
    const newMessage = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    messages.push(newMessage);

    // Try to send email if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter();
        
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #667eea;">New Contact Form Submission</h2>
              <hr style="border: 1px solid #eee;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 1px solid #eee;">
              <h3>Message:</h3>
              <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
              <hr style="border: 1px solid #eee;">
              <p style="color: #999; font-size: 12px;">
                Sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          `
        });

        console.log('📧 Email sent successfully to', process.env.EMAIL_TO || process.env.EMAIL_USER);
      } catch (emailError) {
        console.error('Email sending failed:', emailError.message);
        // Continue even if email fails - message is still stored
      }
    } else {
      console.log('📬 Message stored (email not configured):', newMessage);
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      id: newMessage.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all messages (for admin purposes)
router.get('/', (req, res) => {
  // In production, this should be protected with authentication
  res.json({
    total: messages.length,
    messages: messages.slice(-50) // Return last 50 messages
  });
});

module.exports = router;
