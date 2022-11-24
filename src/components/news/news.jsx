import "./news.scss";

function News({
  image,
  title,
  text,
  isImageNews,
  isBigNews,
  date,
  author,
  tag,
  isthreeQuarter,
}) {
  if (isImageNews === true && isBigNews === false) {
    return (
      <article className="news-images">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  } else if (isImageNews === false && isBigNews === false) {
    return (
      <article className="news-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  } else if (
    isImageNews === true &&
    isBigNews === true &&
    isthreeQuarter === false
  ) {
    return (
      <article className="news-big">
        <h4>{tag}</h4>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{text}</p>
        <h3>by {author}</h3>
        <h5>{date}</h5>
      </article>
    );
  } else if (
    isImageNews === true &&
    isBigNews === true &&
    isthreeQuarter === true
  ) {
    return (
      <article className="news-big">
        <img src={image} alt={title} />
        <h4>{tag}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        <h3>by {author}</h3>
        <h5>{date}</h5>
      </article>
    );
  }
}

export default News;
