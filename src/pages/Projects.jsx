import {  Typography, IconButton, Box } from '@mui/material';
import we from '../images/nat.webp';
import po from '../images/mypo.webp';
import cl from '../images/calcu.webp';
import wa from '../images/wallet.webp';
import ca from '../images/coaching.webp';
import React, { useState, useRef } from 'react';
import { Modal,Button, Card, CardMedia, CardContent } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//simple layout contains one main Box or container which contains the heading-my skills and other box as subcontainer
//This subcontainer or Box holds another container which holds all my four projects in Card container
//card contains image ,title and a button explore 
//projectsData is array of objects with key value pair holds the details of my projects
const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    image:  we,
    description: 'A weather app using OpenWeather API and React.This App displays the current weather and forecast for five days of the input city',
  },
  {
    id: 2,
    title: 'Simple calculator',
    image: cl,
    description: 'A simple Calculator which can be used to calculate arithmetic operations with memory functionality.',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    image: po,
    description: 'A personal portfolio built with React and Firebase.This app tells everything about me.',
  },
  
  {
    id: 4,
    title: 'Expense Tracker',
    image: wa,
    description: 'Expense Tracker built with React.This app helps keeping track of our expenses .',
  },
  
  {
    id: 5,
    title: 'Coaching App',
    image: ca,
    description: 'App for Coaching Institute built with React.This app helps students connect with a coaching institue.It lets user to know about details of this institute and know about the reviews of the students of this institute .',
  },
  
];

export default function Projects() {
  
  const [open, setOpen] = useState(false);//open is  false to begin with
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));//it will check whether user is using mobile or laptop

  //this code is for displaying the project in short in a Modal Container
  const handleOpen = (project) => {
    setSelectedProject(project);//the project selected by the user will be stored in SelectedProject state as the user hits the explore button of a certain project
    setOpen(true);//the modal gets opened because we are setting the variable or state to true
  };
  
  const handleClose = () => {
    setOpen(false);//open becomes false
  };
  const [selectedProject, setSelectedProject] = useState(null);
  //selectedProject is null initially
  
  const scrollRef = useRef();//scrollRef is refering to  the Box that holds the Card Media details 
//as the user clicks on the left scroll button the following code is called with left as the value of direction else right if user clicks on right arrow
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;//if left scrollAmount is -300 otherwise 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
    <Box sx={{marginTop:'100px', px: 4, py: 5 }}>
      <Typography variant="h2"  sx={{fontFamily: "'Tangerine', cursive",background: 'linear-gradient(90deg,#2e003e, #6a0572)',
        WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',  fontWeight: 'bold',
        }} mb={3}>
          My Projects
      </Typography>

      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {!isMobile && (<IconButton onClick={() => scroll('left')}>
                          <ArrowBackIosIcon />
                      </IconButton>)}

      <Box ref={scrollRef}  sx={{display: 'flex',flexDirection: isMobile ? 'column' : 'row',
              overflowX: isMobile ? 'visible' : 'auto',scrollBehavior: 'smooth', gap: 2, width: '100%',py: 2,}}>
          {projectsData.map((project) => (
            <Card key={project.id}  sx={{  minWidth: isMobile ? '100%' : 540, cursor: 'pointer',
               flex: '0 0 auto' }}  onClick={() => setSelectedProject(project)}>
                 <CardMedia component="img" height="340"  image={project.image} alt={project.title}/>
                      <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Button sx={{ backgroundColor:'#333B54', color: '#fff',
                             '&:hover': { backgroundColor: '#E64A19' } }} variant='contained' size='small' 
                               onClick={() => handleOpen(project)}>Explore</Button>

          <Modal open={open} onClose={handleClose}>
            <Box sx={{position: 'absolute',top: '50%',left: '50%', transform: 'translate(-50%, -50%)',width: { xs: '90%', sm: 400 }, 
                  maxWidth: '95vw', 
                  bgcolor: 'background.paper',borderRadius: 2,boxShadow: 24,p: 4,}}>
                {selectedProject && (
                                <>
                                  <Typography variant="h6">{selectedProject.title}</Typography>
                                  <img src={selectedProject.image} alt={selectedProject.title}
                                   style={{ width: '100%', marginTop: '10px', borderRadius: '10px' }}/>
                                  <Typography sx={{ mt: 2 }}>{selectedProject.description}</Typography>
                                  <Button onClick={handleClose} sx={{ mt: 2 }}>
                                      Close
                                  </Button>
                                </>)}
              </Box>
          </Modal>
                      </CardContent>
            </Card>
          ))}
      </Box>

{!isMobile && (
              <IconButton onClick={() => scroll('right')}>
                  <ArrowForwardIosIcon />
              </IconButton>
      )}
      </Box>

    </Box> 
    </>
  );
}





























