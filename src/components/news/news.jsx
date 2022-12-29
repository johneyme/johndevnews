import "./news.scss";
import newsImg from "../../assets/news.jpg";
import rightArrow from "../../assets/right-arrow.png";

function News({
  image,
  title,
  text,
  isImageNews,
  isBigNews,
  date,
  author,
  tag,
  isTwoThird,
  url,
}) {
  if (image === null) {
    image = newsImg;
  }

  const dateNews = new Date(date);
  const formattedDate = dateNews.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  if (isImageNews === true && isBigNews === false) {
    return (
      <article className="news news-images">
        <img className="image-news" src={image} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={url}>
          <img
            className="fleche-savoir-plus"
            src={rightArrow}
            alt="Flèche en savoir plus"
          ></img>
        </a>
      </article>
    );
  } else if (isImageNews === false && isBigNews === false) {
    return (
      <article className="news news-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={url}>
          <img
            className="fleche-savoir-plus"
            src={rightArrow}
            alt="Flèche en savoir plus"
          ></img>
        </a>
      </article>
    );
  } else if (
    isImageNews === true &&
    isBigNews === true &&
    isTwoThird === false
  ) {
    return (
      <article className="news news-big">
        <h4>{tag}</h4>
        <h2>{title}</h2>
        <img className="image-news" src={image} alt={title} />
        <p>{text}</p>
        {author && <h3>écrit par "{author}"</h3>}
        <h5>{formattedDate}</h5>
        <a href={url}>
          <img
            className="fleche-savoir-plus"
            src={rightArrow}
            alt="Flèche en savoir plus"
          ></img>
        </a>
      </article>
    );
  } else if (
    isImageNews === true &&
    isBigNews === true &&
    isTwoThird === true
  ) {
    return (
      <article className="news news-big">
        <img className="image-news" src={image} alt={title} />
        <h4>{tag}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        {author && <h3>écrit par "{author}"</h3>}
        <h5>{formattedDate}</h5>
        <a href={url}>
          <img
            className="fleche-savoir-plus"
            src={rightArrow}
            alt="Flèche en savoir plus"
          ></img>
        </a>
      </article>
    );
  }
}

export default News;
