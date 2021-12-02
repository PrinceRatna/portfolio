import React from 'react';
import Project from '../Project/Project';
import tour from '../../images/tour.jpg'
import hospital from '../../images/hospital.jpg'
import car from '../../images/car-sell.png'
import education from '../../images/education.jpg'

const projects=[
    {
      
      "id": 1,
      "title": "United Hospital Website ",
      "url": "https://healthcare-6f719.web.app/",
      "imgUrl":hospital,
      "ClientSiteRepo": "https://github.com/PrinceRatna/health-care-public",
      "ServerSiteRepo":''
    },
    {
      
      "id": 2,
      "title": "Car sell related Website",
      "url": "https://car-bussiness-1ec13.web.app/",
      "imgUrl":car,
      "ClientSiteRepo": "https://github.com/PrinceRatna/niche-public",
      "ServerSiteRepo":'https://github.com/PrinceRatna/niche-server-public'
    },
    {
      
      "id": 3,
      "title": "Tourism related Website",
      "url": "https://service-assignment-11.web.app/",
      "imgUrl":tour,

      "ClientSiteRepo": "https://github.com/PrinceRatna/tourism-client-public",
      "ServerSiteRepo":'https://github.com/PrinceRatna/tourism-server-public'
    },
    {
      "id": 4,
      "title": "Educational Website ",
      "url": "https://arjan-coaching.netlify.app/",
      "imgUrl":education,
      "ClientSiteRepo": "https://github.com/PrinceRatna/educational-public",
      "ServerSiteRepo":''
      
  
    }
    // {
      
    //   "id": 5,
    //   "title": "natus nisi omnis corporis facere molestiae rerum in",
    //   "url": "https://via.placeholder.com/600/f66b97",
    //   "ClientSiteRepo": "https://via.placeholder.com/150/f66b97",
    //   "ServerSiteRepo":''
    // },
    // {
    
    //   "id": 6,
    //   "title": "accusamus ea aliquid et amet sequi nemo",
    //   "url": "https://via.placeholder.com/600/56a8c2",
    //   "ClientSiteRepo": "https://via.placeholder.com/150/56a8c2",
    //   "ServerSiteRepo":''
    // }
  ];



const MyProjects = () => {
    return (
        <div> 
            
        <h2 className=" my-12 text-center text-3xl font-medium">My Projects</h2>

            <container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          projects.map(project=><Project key={project.id} project={project}></Project>)
        }
        </container>     
        </div>
    );
};

export default MyProjects;