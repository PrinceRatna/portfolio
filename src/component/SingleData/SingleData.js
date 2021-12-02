import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SingleData = (props) => {
    const {id,title,body}=props.data;
    return (
        <div  className="p-8 hover:text-white bg-danger rounded  hover:bg-secondary cursor-pointer   transition duration-500 ease-in-out   transform hover:-translate-y-2 " >
           <h2  className="text-lg font-medium">  {title}</h2>
            <br/>
            {
                body
            }
            <br/>
            <div className="text-right">
         <FontAwesomeIcon className="hover:text-red-600" icon={faArrowRight} size='lg'/>
         </div>
        </div>
           

    );
};

export default SingleData;