import { Paper, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
    return (
        <div id='index[2]'>
             <h2 className=" my-12 text-center text-3xl font-medium">About Me</h2>
             <Paper elevation={3} style={{width:'60%', padding:'0px', margin:'auto'}} >
                 <Typography  className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform  ">
                 My Name is Prince Ratna.I'm a junior web developer.
                 I learn html,css,Javascript,react,react-router,firebase,node.js etc.
                 I have completed 'complete web development course' from Jhankar sir.
                 This is a online learning platform.I alson learn bootstrap,tailwind,material ui etc.  
            </Typography>
              </Paper>

   
        </div>
    );
};

export default About;