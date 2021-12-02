
import React from 'react';
import profileImage from '../../images/my-bg.png'
import { faFacebookF,faLinkedinIn,faGit,faCodepen,faJsSquare,faReact,faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button, makeStyles } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




const Home = () => {
    const classes = useStyles();

    // https://rainbowit.net/html/inbio/index-white-version.html
    // https://rainbowit.net/html/inbio/index-model-white-version.html
    return (
        <div>
           <container className="grid grid-cols-1 md:grid-cols-3  gap-4 p-5" style={{backgroundColor:'#15263c',color:'#ffffff'}}>
            <div className=' my-auto p-4 col-span-2'>
               <span className="text-5xl font-medium"> Hi, I'm Prince Ratna, <br/>
                 <span style={{color:'#ff014f'}} className="">a Junior Web Developer. </span></span>
                <p className="my-12 text-lg font-medium">I have created many project. Maximum websites are responsive. Some websites have firebase authentication. Mongodb also was used for collecting data and node.js was used as  backend.</p><br/>
               <div className="flex justify-around"> <div> <h2 className="text-left text-lg font-medium mb-4">FIND WITH ME</h2>
                <div className="flex justify-between">
                <div>
                <FontAwesomeIcon icon={faFacebookF} className="hover:text-red-600 cursor-pointer" size='lg'/></div>
                <div>
                <FontAwesomeIcon  className="hover:text-red-600 cursor-pointer"  icon={faLinkedinIn} size='lg'/></div>
                <div>
                <FontAwesomeIcon className="hover:text-red-600 cursor-pointer"  icon={faGithub} size='lg'/>
                {/* <GitHubIcon/> */}
            </div>
            </div>
            </div>
            <div>
            <h2 className="text-left text-lg font-medium mb-4">BEST SKILL ON</h2>
            
            <div className="flex justify-between">
                <div>
            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faCodepen} size='lg'/></div>
            <div>
            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faJsSquare} size='lg'/></div>
            <div>
            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faReact} size='lg'/>
            </div>
            <div>
            <FontAwesomeIcon className="hover:text-red-600 cursor-pointer" icon={faNode} size='lg'/>
            </div>
            </div>
            </div>
               </div>          
            </div>
           <div className="my-auto" style={{width:'100%'}}>
            <img src={profileImage} alt=''/>
            <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        endIcon={<TrendingFlatIcon />}
      >
          <a href='#index[3]'>
        HIRE ME </a>
      </Button>
            </div>
            </container>
          

        </div>
    );
};

export default Home;