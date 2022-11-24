import "./home.scss";
import landscape from "../../assets/landscape.jpg";
import News from "../../components/news/news";
//import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <main className="home">
      <div className="onthetop">
        <div className="topnews topnews__first">
          <News
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={true}
            isBigNews={false}
          />
        </div>

        <div className="topnews topnews__second">
          <News
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={false}
            isBigNews={false}
          />
        </div>
        <div className="topnews topnews__third">
          <News
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={true}
            isBigNews={false}
          />
        </div>
      </div>
      <div className="banner">
        <img src={landscape} alt="test"></img>
      </div>
      <div className="middlenews-homepage">
        <div className="bignews bignews-onequarters">
          <News
            image={landscape}
            title="Très gros titre"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            isImageNews={true}
            isBigNews={true}
            isthreeQuarter={false}
            date="Decembre 5, 2021"
            author="John Doe"
            tag="Tech"
          />
        </div>
        <div className="bignews bignews-threequarters">
          <News
            image={landscape}
            title="Très gros titre"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            isImageNews={true}
            isBigNews={true}
            isthreeQuarter={true}
            date="Decembre 5, 2021"
            author="John Doe"
            tag="Actu"
          />
        </div>
      </div>
      <div>Image</div>
      <div>
        <div>div 2</div>
        <div>div 1 </div>
      </div>
    </main>
  );
}

export default Home;
