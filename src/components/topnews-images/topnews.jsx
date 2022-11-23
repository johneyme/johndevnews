import "./topnews.scss";

function TopNews({ image, title, text, isImageNews }) {
  if (isImageNews === true) {
    return (
      <article className="topnews-images">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  } else {
    return (
      <article className="topnews-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  }
}

export default TopNews;
