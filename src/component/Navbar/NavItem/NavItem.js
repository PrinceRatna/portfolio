import { Typography } from '@material-ui/core';
import React from 'react';

const NavItem = (props) => {
    
    // const {text}=props.text;
 const index= props.index;
 const url=`#index[${index}]`;
    const text=props.text;
    return (
        <div>
           <Typography>  <a href={url}>{text}</a> </Typography>
          
       
        </div>
    );
};

export default NavItem;