import detail from './Detail.module.css'
function Detail({background_image,movie_img,title,rating,like_count,description_full}){
    return (
            <div>
              <img className={detail.img} src={background_image} alt={title}></img>
              <img className={detail.movieImg} src={movie_img} alt={title}></img>
              <h1 className={detail.style}>{title}</h1>
              <ul className={detail.style}>
                  <li>rating? {rating}</li>
                  <li>like? {like_count}</li>
              </ul>
              <p className={detail.description}> {description_full.length > 235 ? `${description_full.slice(0,235)}...` :description_full }</p>
            </div>
          )
      
}
export default Detail;