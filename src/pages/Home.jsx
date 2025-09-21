import React from 'react';
import { Typography, Box } from '@mui/material';
import me from '../images/mamta.webp';
import { Typewriter } from 'react-simple-typewriter';
//Simple structure -this is home page with Main container holding three subcontainers.
// First two containers are one below the other with display flex columnwise displaying This is Mamta, a teacher.....
// and then third container holds two containers side by side one is about me on the right and image on the left  .

export default function Home() {

return (
<>
{/*Main container or Box */}          
<Box  sx={{position: 'relative',minHeight:'100vh',overflowX: 'hidden',color:'black',
          display: 'flex',flexDirection: 'column',justifyContent: 'center',
          alignItems: 'center',  textAlign: 'center',px: 2,py: 4,zIndex:0, }}>
    {/*First Subcontainer*/}
    <Box  sx={{marginTop:'55px'}}>
        <Typography variant='h2' sx={{ fontFamily: "'Tangerine', cursive" , mb:3, 
          zIndex:2,position:'relative' }}> This is Mamta</Typography>
    </Box>

     {/*second subcontainer */}     
    <Box >
      <Box sx={{textAlign: 'center',marginTop:'55px' }}>
          <Typography variant="h3" sx={{fontFamily: "'Tangerine', cursive",mb: 3,
           zIndex: 2,position: 'relative',color: 'white', // force white text
                  fontWeight: 'bold',fontSize: { xs: '1.875rem', sm: '3rem' }, }}>
                  <span style={{ color: 'black'}}>
                  <Typewriter words={['a Teacher', 'a Programmer', 'a Full Stack Web Developer']}
                      loop={0} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={60} delaySpeed={1000}/>
                  </span>
          </Typography>
      </Box>
    </Box>
    
     {/*Third subcontainer */}       
     <Box display="flex"    fontWeight= 'bold'  flexDirection={{ xs: 'column', md: 'row' }} 
              alignItems="center" gap={6} px={2} position='relative' zIndex={2}      
             sx={{ marginTop:'10px ' ,width: '100%', maxWidth: '1200px', mx: 'auto' ,marginTop:'5px'}}>


            <Box sx={{height: '100vh', display: 'flex',justifyContent: 'center',alignItems: 'center', }}>
                <Box sx={{ width: '300px',height: '400px',borderRadius:'70%',overflow: 'hidden',
                      display: 'flex',justifyContent: 'center', alignItems: 'center',}}>

                      <img src = {me} alt= "My Pic" style={{ width: '300px', height: '400px', 
                              objectFit: 'cover',objectPosition: 'center',   display: 'block', }}/>
                </Box>
            </Box>


        <Box>
              <Typography variant="h5"  color='black' sx={{fontFamily:"'Josefin Sans',sans-serif" ,
                zIndex:2,position:'relative' }}>About me:I am  a passionate and curious learner with a growing 
                interest in web development. Currently working on projects using technologies like React,Express . 
                I enjoy exploring how frontend design and backend services come together to build interactive,
                 real-world applications. I am  always eager to pick up new skills and turn creative ideas into 
                 functionaldigital experiences. Passionate about programming and software development, with 
                 expertise in multiple languages including C,C++ and Python. Skilled in building standalone
                  software and currently expanding expertise in full stack web development.
                 </Typography>
          </Box>
          
    </Box>

</Box>
          
</>
);
}