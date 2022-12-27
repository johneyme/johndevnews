import "./home.scss";
import landscape from "../../assets/landscape.jpg";
import News from "../../components/news/news";
import React, { useState, useEffect } from "react";
import fetchAll from "../../utils/fetchData";
import dataNewsNews from "../../data/mockdata";
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
            image={news[3].urlToImage}
            title={news[3].title}
            text={news[3].description}
            isImageNews={true}
            isBigNews={false}
          />
        </div>

        <div className="topnews topnews__second">
          <News
            image={news[1].urlToImage}
            title={news[1].title}
            text={news[1].description}
            isImageNews={false}
            isBigNews={false}
          />
        </div>
        <div className="topnews topnews__third">
          <News
            image={news[2].urlToImage}
            title={news[2].title}
            text={news[2].description}
            isImageNews={true}
            isBigNews={false}
          />
        </div>
      </div>
      <div className="banner">
        <img src={news[7].urlToImage} alt="test"></img>
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
          />
        </div>
        <div className="bignews bignews-twothird">
          <News
            image={news[0].urlToImage}
            title={news[0].title}
            text={news[0].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={true}
            ate={news[0].publishedAt}
            author={news[0].author}
            tag={news[0].source.name}
          />
        </div>
      </div>
      <div className="banner">
        <img src={news[1].urlToImage} alt="test"></img>
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
            ate={news[7].publishedAt}
            author={news[7].author}
            tag={news[7].source.name}
          />
        </div>
        <div className="bignews bignews-onethird">
          <News
            image={news[6].urlToImage}
            title={news[6].title}
            text={news[6].description}
            isImageNews={true}
            isBigNews={true}
            isTwoThird={false}
            date={news[6].publishedAt}
            author={news[6].author}
            tag={news[6].source.name}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
