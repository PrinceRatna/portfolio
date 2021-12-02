import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { faUniregistry } from '@fortawesome/free-brands-svg-icons';
import { Height, HomeOutlined } from '@material-ui/icons';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import SchoolIcon from '@material-ui/icons/School';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FolderIcon from '@material-ui/icons/Folder';
import { Paper } from '@material-ui/core';
import Project from '../Project/Project';


const projects=[
  {
    
    "id": 1,
    "title": "United Hospital Website ",
    "url": "https://healthcare-6f719.web.app/",
    "ClientSiteRepo": "https://github.com/PrinceRatna/health-care-public",
    "ServerSiteRepo":''
  },
  {
    
    "id": 2,
    "title": "Carsista",
    "url": "https://car-bussiness-1ec13.web.app/",
    "ClientSiteRepo": "https://github.com/PrinceRatna/niche-public",
    "ServerSiteRepo":'https://github.com/PrinceRatna/niche-server-public'
  },
  {
    
    "id": 3,
    "title": "Tourista",
    "url": "https://service-assignment-11.web.app/",
    "ClientSiteRepo": "https://github.com/PrinceRatna/tourism-client-public",
    "ServerSiteRepo":'https://github.com/PrinceRatna/tourism-server-public'
  },
  {
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "ClientSiteRepo": "https://via.placeholder.com/150/d32776",
    "ServerSiteRepo":''
    

  },
  {
    
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "ClientSiteRepo": "https://via.placeholder.com/150/f66b97",
    "ServerSiteRepo":''
  },
  {
  
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "ClientSiteRepo": "https://via.placeholder.com/150/56a8c2",
    "ServerSiteRepo":''
  },
  {
    
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "ClientSiteRepo": "https://via.placeholder.com/150/b0f7cc",
    "ServerSiteRepo":''
  },
  {
    
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "ClientSiteRepo": "https://via.placeholder.com/150/54176f",
    "ServerSiteRepo":''
  },
  {
    
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "ClientSiteRepo": "https://via.placeholder.com/150/51aa97",
    "ServerSiteRepo":''
  },
  {
    
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "ClientSiteRepo": "https://via.placeholder.com/150/810b14",
    "ServerSiteRepo":''
  },
  {
  
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "ClientSiteRepo": "https://via.placeholder.com/150/1ee8a4",
    "ServerSiteRepo":''
  },
  {
    
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "ClientSiteRepo": "https://via.placeholder.com/150/66b7d2",
    "ServerSiteRepo":''
  }]







function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));





const ResumeDetails = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div>
            <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}}  label="Contact Me" icon={<ContactsIcon />} {...a11yProps(0)} />
          <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}} label="Skills" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}} label="Eduction" icon={<SchoolIcon />}  {...a11yProps(2)} />
       <a href="https://drive.google.com/file/d/1MGcetjS_tChjeP1dbxWmJQBccMlAjQDw/view?usp=drivesdk" > <button> <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}} label="Find Resume" icon={<  LinkIcon />} {...a11yProps(3)} /></button></a>
       <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}} label="Projects" icon={<FolderIcon/>}  {...a11yProps(2)} />
       <Tab  style={{marginRight:'5%' ,marginLeft:'5%'}} label="Experiences" icon={<HomeOutlined />}  {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      <Paper className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform hover:-translate-y-2 " elevation={3} style={{width:"40%" ,height:'150px',padding:'20px'}}>
      <Typography> <CallIcon/> Phone: 01771215510<br/>
      <EmailIcon/> G-mail: princeratna125@gmail.com<br/>
      <HomeIcon/>  Address: Dhaka,Gopalgonj</Typography>
      </Paper>
   
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Paper elevation={3} style={{width:"40%",padding:'20px'}} className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform hover:-translate-y-2 ">
        <Typography>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node Js</li>
          <li>Firebase</li>
          <li>React Router</li>
          <li>MongoDB</li>
        </ul>
        </Typography>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Paper elevation={3} style={{width:"40%" ,height:'150px',padding:'20px'}}className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform hover:-translate-y-2 ">
         <Typography>
        School : Kamal 
        Kunri Biddya niketon<br/>
        College: Shahid Smriti College<br/>
        University: Dhaka University <br/>
       Degree:Bachelor Of Science(Physics)
       </Typography>
       </Paper>
      </TabPanel>
      <TabPanel value={value} index={4}>
      {/* <container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          projects.map(project=><Project key={project.id} project={project}></Project>)
        }
        </container> */}
      </TabPanel>
      <TabPanel value={value} index={5}>
        No Experiences
      </TabPanel>
     
    </div> 
        </div>
    );
};

export default ResumeDetails;