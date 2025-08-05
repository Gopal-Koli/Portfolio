import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import {
  Menu,
  Typography,
  TextField,
  Button
} from '@mui/material';
import emailjs from 'emailjs-com';

const HireMeMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Form change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_hxe623a",       // Service ID
    "template_w725z3j",       // Template ID
    formData,
    "1lO8q79MozuAWZboB"        // Public Key from EmailJS
  )
  .then(() => {
    alert(" Thank you! I will contact you soon.");
    setFormData({ name: "", email: "", contact: "", message: "" });
    handleClose();
  })
  .catch((error) => {
    console.error("Email send failed:", error);
    alert(" Something went wrong. Please try again!");
  });
};

  return (
    <div>
      {/* Hire Me Button */}
      <button
        className="px-6 sm:px-6 sm:py-3 lg:text-sm sm:text-base py-3 border-2 border-white text-[9px] hover:bg-gray-400 hover:text-black rounded-full bg-black shadow-lg shadow-gray-500 cursor-pointer"
        onClick={handleClick}
      >
        Hire me
      </button>

      {/* MUI Menu for form */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            width: 520,
            padding: 2,
            borderRadius: 2,
            mt: 1.5,
            boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
            bgcolor: 'black',
            color: 'white'
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Typography variant="h6" mb={1} sx={{ color: 'white' }}>
          Hire Me
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <TextField
            name="name"
            placeholder="Your Name"
            fullWidth
            size="small"
            required
            margin="dense"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              sx: { backgroundColor: 'white', color: 'black' },
            }}
          />

          {/* Email */}
          <TextField
            name="email"
            placeholder="Your Email"
            fullWidth
            size="small"
            required
            margin="dense"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              sx: { backgroundColor: 'white', color: 'black' },
            }}
          />

          {/* Contact Number */}
          <TextField
            type="tel"
            name="contact"
            placeholder="Contact"
            fullWidth
            size="small"
            required
            margin="dense"
            value={formData.contact}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              sx: { backgroundColor: 'white', color: 'black' },
            }}
          />

          {/* Message */}
          <TextField
            name="message"
            placeholder="Your Message"
            fullWidth
            size="small"
            required
            margin="dense"
            multiline
            rows={3}
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              sx: { backgroundColor: 'white', color: 'black' },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: 'white',
              color: 'black',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            Submit
          </Button>
        </form>
      </Menu>
    </div>
  );
};

export default HireMeMenu;
    