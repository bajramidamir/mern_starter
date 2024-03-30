import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Avatar } from '@mui/material';
import { LockOutlined } from "@mui/icons-material";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log('Signup success:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Signup error!');
      if (error.response) {
        console.error(error.response.status, error.response.data);
      };
      navigate('/signup');
    };
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main', mb: 4 }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Already have an account? <Link to="/">Log in!</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
