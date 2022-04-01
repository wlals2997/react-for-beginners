import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import styles from './Description.module.css';
function Description() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(detail);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loading}>Loading</h1>
      ) : (
        <Detail
          background_image={detail.background_image}
          movie_img={detail.medium_cover_image}
          title={detail.title}
          description_full={detail.description_full}
        />
      )}
    </div>
  );
}
export default Description;
