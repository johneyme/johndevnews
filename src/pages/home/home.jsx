import "./home.scss";
import News from "../../components/news/news";
import React, { useState, useEffect } from "react";
import fetchAll from "../../utils/fetchData";
// import dataNewsNews from "../../data/mockdata";
//import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  const [dataNews, setDataNews] = useState([]);
  const news = dataNews.articles;
  console.log(dataNews);

  useEffect(() => {
    fetchAll(setDataNews);
  }, []);

  if (news === undefined) return <div>Chargement des actualités ...</div>;

  return (
    <main className="home">
      <div className="onthetop">
        <div className="topnews topnews__first">
          <News
            image={news[0].urlToImage}
            title={news[0].title}
            text={news[0].description}
            isImageNews={true}
            isBigNews={false}
            url={news[0].url}
          />
        </div>

        <div className="topnews topnews__second">
          <News
            image={news[1].urlToImage}
            title={news[1].title}
            text={news[1].description}
            isImageNews={false}
            isBigNews={false}
            url={news[1].url}
          />
        </div>
        <div className="topnews topnews__third">
          <News
            image={news[2].urlToImage}
            title={news[2].title}
            text={news[2].description}
            isImageNews={true}
            isBigNews={false}
            url={news[2].url}
          />
        </div>
      </div>
      <div className="banner">
        <img src={news[3].urlToImage} alt={news[3].title}></img>
      </div>
      <div className="middlenews-homepage">
        <div className="bignews bignews-onethird">
          <News
            image={news[4].urlToImage}
            title={news[4].title}
            text={news[4].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={false}
            date={news[4].publishedAt}
            author={news[4].author}
            tag={news[4].source.name}
            url={news[4].url}
          />
        </div>
        <div className="bignews bignews-twothird">
          <News
            image={news[5].urlToImage}
            title={news[5].title}
            text={news[5].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={true}
            date={news[5].publishedAt}
            author={news[5].author}
            tag={news[5].source.name}
            url={news[5].url}
          />
        </div>
      </div>
      <div className="banner">
        <img src={news[6].urlToImage} alt={news[6].title}></img>
      </div>
      <div className="endnews-homepage">
        <div className="bignews bignews-twothird">
          <News
            image={news[7].urlToImage}
            title={news[7].title}
            text={news[7].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={true}
            date={news[7].publishedAt}
            author={news[7].author}
            tag={news[7].source.name}
            url={news[7].url}
          />
        </div>
        <div className="bignews bignews-onethird">
          <News
            image={news[8].urlToImage}
            title={news[8].title}
            text={news[8].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={false}
            date={news[8].publishedAt}
            author={news[8].author}
            tag={news[8].source.name}
            url={news[8].url}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
