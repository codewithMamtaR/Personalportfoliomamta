import React from 'react';
import { useEffect ,useRef} from 'react';
import { Typography, Box } from '@mui/material';
import ht from '../images/html.webp';
import cp from '../images/css.webp';
import cs from '../images/cpp.webp';
import pu from '../images/python.webp';
import rt from '../images/rct.webp';
import jass from '../images/jas.webp';
import '../progressbar.css';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
//simple layout containing main container or box which contains  five subcontainers
//first holds education,second holds workexperience ,third myskills, fourth contains rolling images of js,c++...
//fifth contains skill progress bar which animates 

//the following code skillprogress is a custom made component will increase the progress bar 
// according to value of progress as user scrolls page down-but only one time
//working:step1:wee get an access to DOM
const SkillProgress = ({ skill, progress }) => {
                        const ref = useRef();//reference to DOM where bar is shown ->step 1 
                        useEffect(() => {//Step4-runs after Component is rendered
                        const observer = new IntersectionObserver(entries => {//step5-watches if the component is visible in the view port
                            entries.forEach(entry => {
                            if (entry.isIntersecting) {//step 6-if the component is visible
                                  const progressBar = entry.target.querySelector('.progress-bar');//step7-find the Box with class progress bar -"Bar"-it has 0%width as given in the css file progressbar
                                  progressBar.style.setProperty('--progress', `${progress}%`);//step8 -set the width to progress value  given in the code like react skill 50%,html skill 90%
                                  progressBar.classList.add('animated');//step9-add class anmated which increases the width to 50% or 90% as given and animate it by increasing the width
                                  observer.unobserve(entry.target);//step 10 -stop observing the component now
                                                      }
                                                      });
                                                                              });
                            if (ref.current)//step 3-Start observing the DOM
                                  observer.observe(ref.current);
                                              
                             return () => observer.disconnect(); // Cleanup on unmount
                                        }, [progress]);//complete useeffect

                        return (
                                <Box ref={ref} className="skill-container">{/*step:2 */}
                                    <Typography variant='h5'sx={{fontFamily:"'Josefin Sans',sans-serif"}} >{skill}</Typography>
                                    <Box className="progress-bar" ></Box>{/*Bar */}
                                </Box>
                                );
                                          };

export default function About() {

useEffect(() => {const styleTag = document.createElement('style');//creating element style which consists of animation bounce which we are adding in the head of our document so that we can use it anywhere
                      styleTag.innerHTML = `@keyframes bounce {
                                            0%, 100% { transform: translateY(0); }//dont move at the start and end of animation
                                            50% { transform: translateY(-20px); }//move up in the middle of animation
                                                              };`
                      document.head.appendChild(styleTag);
                }, []);
const styles = {wrapper: {display: 'flex',flexDirection: 'row' ,gap:'20px',justifyContent: 'center',
                  alignItems: 'center', minHeight: '20px',zIndex:2, position:'relative', },
                  bounceBox: { padding: '20px', borderRadius: '20px',boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  animation: 'bounce 2s infinite',  minHeight: '120px',minWidth: '120px', display: 'flex',//using animation bounce which we declared above 
                  flexDirection: 'column',alignItems: 'center', justifyContent: 'center', gap: '8px',},
                  skill: {fontSize: '1.2rem',fontWeight: 'bold',textAlign: 'center',marginTop: '5px',},
                };
const images = [ ht,pu,cs,cp,rt,jass];
const duplicatedImages = [...images, ...images]; 

return (
<>
  <Box  sx={{position: 'relative',   minHeight:'100vh',    overflowX: 'hidden',color:'black',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', 
           textAlign: 'center', px: 2,  py: 4, marginTop:'100px', zIndex:0,  }}>
        <Box>
          <SchoolIcon fontSize="large" sx={{ mb: 1, color:'#4a0360',}}/>
          <Typography variant='h2' sx={{    color:'black',
            fontFamily: "'Tangerine',sans-serif, cursive",mb:3, zIndex:2,position:'relative',
              }}> 
                Education
          </Typography>
          <Typography variant='h5' sx={{ fontFamily:"'Josefin Sans',sans-serif", mb:3, zIndex:2,position:'relative' }}>
             Bachelor of Engineering in Computer Science
          </Typography>
        </Box>
        
        <Box >
            <Box>
              <Typography variant='h2' sx={{ fontWeight: 'bold',fontFamily: "'Tangerine', cursive" , mb:3, zIndex:2,position:'relative' }}>
                  Work Experience
              </Typography>
              <Typography variant="h5" color='black' sx={{zIndex:2,position:'relative',fontFamily:"'Josefin Sans',sans-serif" }}>
                      Experienced Computer Science educator with a proven track record of driving exceptional
                      results for high school and engineering students. Dedicated and committed to nurturing 
                      young talent while continuing to grow and innovate in the field.
              </Typography>
              <Typography variant='h5' sx={{  background: 'linear-gradient(90deg,#2e003e, #6a0572)',
                  WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',fontWeight: 'bold',
                  fontFamily:'Opensans' , mb:3, zIndex:2, position:'relative' }}> 
                (2008-Present)
              </Typography>
            </Box>
          </Box>
          
          <Box  sx={{mt:10}}>
  
              <Typography variant='h3' sx={{fontFamily: "'Tangerine', cursive",mb:6,zIndex:2,
                position:'relative',color:'black' }}>
                  My skills
              </Typography>
  
              <Box sx={{display:"flex",flexDirection: { xs: 'column', md: 'row' },
                   justifyContent:'center',gap:2,px:2, }}>
        
                  <Box sx={{...styles.bounceBox , display: 'flex',flexDirection: 'column',alignItems: 'center',
                    justifyContent: 'center'}}>
                      <ComputerIcon fontSize="large" sx={{ mb: 1, color: 'black' }} />
                      <Typography style={styles.skill} color='black'> Web Development</Typography>
                  </Box>
        
                <Box sx={{...styles.bounceBox ,display: 'flex',flexDirection: 'column',alignItems: 'center',
                    justifyContent: 'center'}}>
                      <SchoolIcon fontSize="large" sx={{ mb: 1, color: 'black' }}/>
                      <Typography style={styles.skill } color='black'>Teaching</Typography>
                </Box>
        
                <Box sx={{...styles.bounceBox ,display: 'flex',flexDirection: 'column',alignItems: 'center',
                  justifyContent: 'center'}}>
                    <CodeIcon fontSize="large" sx={{ mb: 1, color: 'black' }} />
                    <Typography style={styles.skill }color='black'>Programming</Typography>
                </Box>
              </Box>

          </Box>
    
          <Box sx={{mt:6,overflow: 'hidden',whiteSpace: 'nowrap',width: '100%',position: 'relative', zIndex:2,
             backgroundColor: 'transparent',position:'relative',}}>
            <Box sx={{display: 'flex',animation: 'scrollX 15s linear infinite',
                '@keyframes scrollX': {'0%': { transform: 'translateX(100%)' },
                                      '100%': { transform: 'translateX(-100%)' },
                                      },//scrolls from right to left
                    }}>

                  {duplicatedImages.map((src, index) => (
                        <Box key={index} sx={{ mr: 3 }}>
                            <img src={src} alt={`slide-${index}`}
                              style={{ width: '50px', height: '50px', marginRight: '30px',objectFit:'cover',
                              borderRadius:'50%' }}/>
                        </Box>))
                   }
              </Box>
            </Box>

          <Box sx={{ zIndex:2, position:'relative' , width: '100%', maxWidth: '600px', margin: 'auto'}}>
                <SkillProgress skill="React" progress={50} />
                <SkillProgress skill="HTML" progress={90} />
                <SkillProgress skill="CSS" progress={80} />
                <SkillProgress skill="JavaScript" progress={75} />
                <SkillProgress skill="c++" progress={75} />
                <SkillProgress skill="Python" progress={75} />
            </Box>
  </Box>
</>
);
}
