import React from 'react';
import SingleData from '../SingleData/SingleData';


const skillsData=[
        {
          "id": 1,
          "title": "HTML",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "id": 2,
          "title": "CSS",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "id": 3,
          "title": "Javascript",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "id": 4,
          "title": "React.js",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "id": 5,
          "title": "Node.js",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "id": 6,
          "title": "Firebase",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "id": 7,
          "title": "MongoDB",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        
]



const Features = () => {
    return (
        <div id='index[0]' className="mt-20 mx-5">
            <h2  className=" my-12 text-center text-3xl font-medium">What I Do</h2>
        <container className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                skillsData.map(data=><SingleData key={data.id} data={data}></SingleData>)
            }
        </container>
            
      </div>  
    );
};

export default Features;