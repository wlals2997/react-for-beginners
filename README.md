#  :pushpin:  영화 사이트by React.js
> React.js 로 만든 영화 소개 사이트입니다.
>👉🏼[웹페이지 링크](https://wlals2997.github.io/react-for-beginners/)

## 1. 제작 기간 & 참여 인원
- 2022년 3월 30일 ~ 4월 5일
- 개인 프로젝트


## 2. 사용기술
#### `Front-end`
- React(v17.02)
- react-router-dom(v5.3.0)


## 3. 구현 목록
##### YTS에서 제공하는 API 연결 [:pushpin:코드확인](https://github.com/wlals2997/react-for-beginners/blob/634f4eea3baf416e4b7a195e9e320d718021121f/src/routes/MovieSection.js#L9)
* YTS에서 제공하는 API를 연결하여 데이터를 받아와 원하는 위치에 넣어 UI를 구현하였습니다.

##### 평점 9점 이상 영화 소개 [:pushpin:코드확인](https://github.com/wlals2997/react-for-beginners/blob/634f4eea3baf416e4b7a195e9e320d718021121f/src/routes/Home.js#L30)
- 메인 페이지에 평점 9점 이상인 영화를 소개할 수 있도록 하였습니다.

##### useParams()함수 [:pushpin:코드확인](https://github.com/wlals2997/react-for-beginners/blob/634f4eea3baf416e4b7a195e9e320d718021121f/src/routes/Description.js#L8)
- useParams()함수를 이용하여 클릭한 영화의 id에 맞는 페이지로 이동할 수 있도록 하였습니다.

##### hover 기능 구현 [:pushpin:코드확인](https://github.com/wlals2997/react-for-beginners/blob/634f4eea3baf416e4b7a195e9e320d718021121f/src/components/Movie.js#L12)
-  유저가 원하는 영화 이미지에 hover시 해당하는 영화의 summary 를 보여줄수 있도록 하였습니다.

## 4.트러블 슈팅
- CGV나 롯데시네마 예매 사이트들을 보면 영화 이미지 위에 영화설명이 간략하게 되어있는 부분을 구현하고자 하였습니다.
- useState 함수를 사용하여 해당하는 target에 마우스를 올릴 시 true 로 바꾸도록 하여 삼항 연산자를 이용하여 조건문을 작성하였습니다.
- 하지만 콘솔에는 setIsHovering is not function 라는 오류만 뜨고 원인을 파악하지 못했습니다.
<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

~~~react
//mouse 이벤트 useState함수
  const {isHovering, setIsHovering} = useState(false);

  return (
    <Link to={`/movie/${id}`}>
      <div
        className={styles.movie}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <img
          src={medium_cover_image}
          alt={title}
          className={styles.movie__img}
        ></img>
        {isHovering ? (
          <div
            className={styles.onmouse}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            <span>
              {summary.length > 80 ? `${summary.slice(0, 80)}...` : summary}
            </span>
          </div>
        ) : null}

~~~

</div>
</details>

- 원인을 파악하지 못하고 있었을 때 다시 코드를 천천히 살펴보았습니다.

- 그때 useState 함수에서 배열 기호를 잘 못 작성했다는 것을 알게 되었습니다.

- 바로 오류를 수정하고 이중으로 같은 코드를 작성한 부분은 수정하여 간결한 코드로 작성하였습니다.

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

~~~react
function Movie({ medium_cover_image, title, genres, id, rating, summary }) {
  //mouse 이벤트 useState함수
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link to={`/movie/${id}`}>
      <div
        className={styles.movie}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <img
          src={medium_cover_image}
          alt={title}
          className={styles.movie__img}
        ></img>
        {isHovering ? (
          <div className={styles.onmouse}>
            <span>
              {summary.length > 80 ? `${summary.slice(0, 80)}...` : summary}
            </span>
          </div>
        ) : null}

~~~

</div>
</details>
## 5. 회고 / 느낀점
