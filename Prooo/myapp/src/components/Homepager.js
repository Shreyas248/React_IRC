import React from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import '../assets/css/Homepager.css'

const Homepager = () => {
  const products = [
    { id: 1, name: 'Kiyomizu-dera', price: 'Kiyomizu-dera is a Buddhist temple located in eastern Kyoto, Japan. The temple is part of the Historic Monuments of Ancient Kyoto UNESCO World Heritage Site.', image: 'https://d3bbatwdaufxg9.cloudfront.net/content/8514/6459/4406/10-20140723_Kiyomizudera_Mainspot-37-Edit2.jpg' },
    { id: 2, name: 'Universal-Studios-Japan', price: 'Universal Japan Studios is a thrilling theme park in Osaka, Japan, offering an array of attractions, rides, and shows based on popular movies.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/USJ_5years.JPG/1200px-USJ_5years.JPG' },
    { id: 3, name: 'Mt. Fuji', price: 'Mt. Fuji, Japans iconic volcano stands majestically as the countrys highest peak, renowned for its symmetrical cone shape, breathtaking views, hiking trails, and cultural significance.', image: 'https://cms.accuweather.com/wp-content/uploads/2023/09/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbG1icXlsNTUwMDBiM2I2Z29wcmt5NDBk-L19wYWdlcy9jbG1hYjJzdmowMDI0NDdwY2Nlc3ZjZjd5.jpg'},
    { id: 4, name: 'Shinjuku Gyoen Garden', price: 'Shinjuku Gyoen, Tokyos serene escape, showcases diverse gardens—Japanese, English, French styles—offering tranquil ponds, cherry blossoms, and a peaceful ambiance.', image: 'https://media.timeout.com/images/105658802/image.jpg' },
    { id: 5, name: 'Atomic Bomb Dome', price: 'The Atomic Bomb Dome in Hiroshima, Japan, stands as a poignant symbol of peace and remembrance, marking the devastation caused by the atomic bomb during World War II, advocating for nuclear disarmament.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Genbaku_Dome04-r.JPG/800px-Genbaku_Dome04-r.JPG' },
    { id: 6, name: 'Meiji Jingu', price: 'Meiji Jingu, Tokyos revered Shinto shrine, honors Emperor Meiji and Empress Shoken, surrounded by a tranquil forest, offering spiritual solace, cultural rituals, and serene garden paths for contemplation.', image: 'https://loving-tokyo.com/en/wp-content/uploads/2020/02/meiji-jingu-shrine-main-complex-200210134821003.jpg' },
    { id: 7, name: 'Dotonbori', price: 'Dotonbori, Osakas bustling entertainment district, features vibrant nightlife, iconic neon signs, a gastronomic paradise with street food, restaurants, shopping, and the famous Glico Running Man billboard overlooking the canal.', image: 'https://blog.japanwondertravel.com/wp-content/uploads/2020/04/dotonbori-osaka-1-scaled.jpeg' },
    // { id: 8, name: 'Wheel Barrow', price: '$30.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirx8b8Knqb6K2bEVulzuIFPToJHMum-gi0w&usqp=CAU' },
  ];
  
    const navigate = useNavigate();
    const Notify = () => ('Explored succesfully');
    const Notifier = () => ('Logout Successful') ;

  return (
    <div className='ombre'>
    <div className="sidebar">
      <div className="logo">
       
      </div>
      <ul className="sidebar-menu">
        <Link to="/home"><li>Dashboard</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/"><li>Logout</li></Link>
      </ul>
    </div>
      <div className='sooper'>
        <h1>Explore More!</h1>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={Notify} > Explore </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepager;
