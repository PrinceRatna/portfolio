import React from 'react';

const Project = (props) => {
    const {title,url,imgUrl}=props.project;
    return (
        <div id='index[1]' className="p-8 bg-danger rounded   cursor-pointer    ">

        <h2  className="text-lg font-medium">  {title}</h2>
         <a href={url} style={{color:'red', fontSize:'20px' , fontFamily:'fantacy'}}>Live Website</a> 
         <img src={imgUrl}   alt=""/>

        </div>
    );
};

export default Project;