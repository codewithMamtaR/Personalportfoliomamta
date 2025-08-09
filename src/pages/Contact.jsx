import React, { useState } from 'react';
import { Box,Typography,  Button,TextField } from '@mui/material';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Contact() {
  //with useState hook we are declaring formData state.
//we are initializing formData to empty strings to begin with.Here formData is an object 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
//we are initializing errors as an empty object to begin with
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;//getting user input
    setFormData((prev) => ({ ...prev, [name]: value }));//we are feeding userinput to formData.using spread
    //opertor the old values are retained and only new value is overridden.and finally it is being stored in 
    //formData
  };

  const validate = () => {
    const newErrors = {};//initializing with an empty object
    //if users keep name empty it ,trim will return false,same goes with all the rest of the fields
    if (!formData.name.trim())
       newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } //in else part we are using regular expression to check email with format something@something.com 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) 
      newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) 
      newErrors.message = 'Message is required';
    
    return newErrors;//finally return empty object if user has given valid input otherwise load it with the errors made
  };

  const handleSubmit = async (e) => {
    e.preventDefault();//stop default form submission which will trigger a refresh
    const validationErrors = validate();//calling validate fun to validate user input
    //if user has committed any mistake or left any field empty the following cond will be true
    //it returns an array of keys in validationErrors like if user has left name empty with rest valid input
    //length will be 1 which is greater than 0 
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), formData);//we are storing the collected user info into firebase
      alert('Message sent!');//if successful print this
      setFormData({ name: '', email: '', subject: '', message: '' });//clearing formData
      setErrors({});//clearing errors
    } catch (error) {
      console.error('Error adding document:', error);//if any error while storing data in firebase ,print error
      alert('Failed to send message');
    }
  };

  return (
<>
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', padding: '20px',marginTop:'100px'}}>
        
<Typography variant="h5"   sx={{
    background: 'linear-gradient(90deg,#2e003e, #6a0572)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  }}>
  Get in touch!
</Typography>
{/*call handleChange function everytime user inputs some data and call handlesubmit to handle onclik event on the button  */}
<br/>

        <Box>
          
          <TextField 
          label="Name"
            type="text"
            name="name"
            value={formData.name} 
            variant='outlined'
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </Box>
<br/>
        <Box>
          
          <TextField
          label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </Box>
<br/>
        <Box>
          
          <TextField
          label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <div style={{ color: 'red' }}>{errors.subject}</div>}
        </Box>
<br/>
        <Box>
          
          <TextField
          label="Message"
            name="message"
            multiline
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </Box>
<br/>
        <Button  sx={{ backgroundColor:'#333B54'      , color: '#fff', '&:hover': { backgroundColor: '#E64A19' } }}                                 variant='contained' type="submit">Submit</Button>
      </form>
    </>
  );
}