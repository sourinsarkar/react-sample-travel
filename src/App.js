import Locations from './components/Locations'

function App() {
  const locations = [
    {
      name: 'Paris',
      description: 'Explore the romantic city of Paris, known for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.',
      rating: 4.8,
      image: 'paris'
    },
    {
      name: 'New York City',
      description: 'Experience the hustle and bustle of the Big Apple with its towering skyscrapers, Central Park, Times Square, and Broadway shows.',
      rating: 4.5,
      image: 'nyc'
    },
    {
      name: 'Tokyo',
      description: 'Discover the vibrant culture of Tokyo, a city blending traditional temples and modern technology, along with delicious cuisine and unique neighborhoods.',
      rating: 4.2 ,
      image: 'tokyo'
    },
    {
      name: 'Rome',
      description: 'Immerse yourself in the rich history and art of Rome, home to ancient ruins like the Colosseum, Roman Forum, and the Vatican City with St. Peter\'s Basilica.',
      rating: 4.6,
      image: 'rome'
    }
  ];

  return (
    <div className="container">
      {
        locations.map((place) => {
          return <Locations name={place.name} description={place.description} rating={place.rating} image={place.image}/>
        })
      }
    </div>
  );
}

export default App;
