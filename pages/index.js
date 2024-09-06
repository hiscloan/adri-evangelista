import Head from "next/head";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We will contact you shortly.`);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Head>
        <title>Adri Evangelista - Life Coach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box className="hero">
        <Box className="hero-overlay">
          <Typography className="hero-title">
            Unlock Your Full Potential
          </Typography>
        </Box>
      </Box>

      {/* About Me Section */}
      <Typography variant="h3" gutterBottom>
        Adri Evangelista - Life Coach
      </Typography>
      <Typography variant="h6" gutterBottom>
        Guiding you towards a fulfilled and balanced life.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          I’m Adri Evangelista, a life coach dedicated to helping individuals
          unlock their potential and achieve personal and professional growth.
          Together, we’ll work on developing strategies that empower you to lead
          a more fulfilling life.
        </Typography>
      </Box>

      {/* Contact Form Section */}
      <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Get In Touch
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          variant="outlined"
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
