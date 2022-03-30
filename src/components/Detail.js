import detail from './Detail.module.css';
function Detail({
  background_image,
  movie_img,
  title,
  rating,
  like_count,
  description_full,
}) {
  return (
    <div>
      <img className={detail.img} src={background_image} alt={title}></img>
      <img className={detail.movieImg} src={movie_img} alt={title}></img>
      <div className={detail.movieDescription}>
        <h1 className={detail.title}>{title}</h1>
        <p className={detail.description}> {description_full}</p>
      </div>
    </div>
  );
}
export default Detail;
