import { useEffect, useState } from 'react';
import styles from '../routes/Home.module.css';
function Home() {
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setImage(json.data.movies);
  };
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className={styles.container}>
      {image.map((img, key) => (
        <div key={img.id} className={styles.box}>
          <img src={img.medium_cover_image} alt='Main_image'></img>
        </div>
      ))}
    </div>
  );
}
export default Home;
