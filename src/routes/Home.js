import { useEffect, useState } from 'react';
import styles from '../routes/Home.module.css';
import Main from '../components/Main';
import Loading from '../components/Loading';
function Home() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);
  const getImage = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setImage(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <h1 className={styles.title}>🥇Top Box Office</h1>
          <div className={styles.box}>
            {image.map((img, key) =>
              img.rating === 9 ? (
                <Main
                  key={img.id}
                  rating={img.medium_cover_image}
                  alt={img.title}
                  title={img.title}
                />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
