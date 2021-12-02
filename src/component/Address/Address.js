import React from 'react';
import {  Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
const Address = () => {
    return (
        <div id='index[4]'>
      <h2 className=" my-12 text-center text-3xl font-medium">Address</h2>
             <Paper elevation={3} style={{width:'60%', padding:'0px', margin:'auto'}} >
                 <Typography  className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform  ">
                 <Typography> 
                     <CallIcon/> Phone: 01771215510<br/>
                     <EmailIcon/> G-mail: princeratna125@gmail.com<br/>
                     <HomeIcon/>  Address: Dhaka,Gopalgonj</Typography>
                 </Typography>
             </Paper>
        </div>
    );
};

export default Address;