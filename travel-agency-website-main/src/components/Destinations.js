import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image4 from '../assets/image-4.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in more than 40+ countries!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Discover Korea</h3>
          <p>
          In its capital, Seoul, the energy of a bustling metropolis harmonizes with historical treasures. Iconic palaces like Gyeongbokgung showcase Korea's royal past, while the vibrant districts of Myeongdong and Gangnam epitomize modern urban living, offering trendy fashion, innovative technology, and delectable street food.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Exlplore Tokyo</h3>
          <p>
          This sprawling megacity boasts a rich tapestry of experiences. Dive into the heart of Japanese culture by visiting iconic landmarks such as the historic Senso-ji Temple in Asakusa or the imperial grounds of the Meiji Shrine. Embrace the city's tech-forward side by exploring Akihabara's electronic district or the cutting-edge architecture in areas like Shinjuku and Shibuya.
          </p>
        </div>

        <div>
          <img src={image4} alt='destination-3' />
          <h3>Savour Hawaii</h3>
          <p>
          Explore the vibrant culture by attending a luau, where traditional Hawaiian music and dance performances dazzle spectators. Immerse yourself in the Polynesian heritage by learning about hula dancing, lei-making, and indulging in delicious local cuisine like poke, fresh seafood, and tropical fruits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
