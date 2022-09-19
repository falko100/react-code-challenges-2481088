import { useEffect, useState } from 'react';

export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [dogImage, setDogImage] = useState(
    '');

  async function fetchNewDog() {
    fetch('https://dog.ceo/api/breeds/image/random').then(async (response) => {
      const data = await response.json();
      setDogImage(data.message);
    });
  }

  useEffect(() => {
    fetchNewDog();
  }, [])

  return (
    <div className="dog-pics">
      {dogImage && <img src={dogImage} alt="Random Dog" height={400} />}
      <button onClick={fetchNewDog}>🐶</button>
    </div>
  );
}
