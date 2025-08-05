import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { Menu, TextField, Typography, Button } from '@mui/material';
import HireMeMenu from './HireMeMenu';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='fixed lg:w-full flex w-md items-center justify-end z-10 lg:p-20 p-4'>
      
     <HireMeMenu/>

      <CgMenuGridO className="text-black text-3xl ml-3" />

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

        <form
          action="https://formsubmit.co/gopalkoli2715@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Hire Me Request" />
          <input type="hidden" name="_captcha" value="false" />

          {/* White text boxes with black text */}
          <TextField
            name="name"
            placeholder="Your Name"
            fullWidth
            size="small"
            required
            margin="dense"
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            }}
          />

          <TextField
            name="email"
           placeholder="Your Email"
            fullWidth
            size="small"
            required
            margin="dense"
            type="email"
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            }}
          />
           <TextField
           type="tel"

            name="name"
            placeholder="Contact"
            fullWidth
            size="small"
            required
            margin="dense"
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            }}
          />

          <TextField
            name="message"
            placeholder="Your Message"
            fullWidth
            size="small"
            required
            margin="dense"
            multiline
            rows={3}
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
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
              '&:hover': {
                backgroundColor: '#f0f0f0',
              }
            }}
          >
            Submit
          </Button>
        </form>
      </Menu>
    </div>
  );
};

export default Header;
