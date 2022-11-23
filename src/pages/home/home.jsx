import "./home.scss";
import landscape from "../../assets/landscape.jpg";
import TopNews from "../../components/topnews-images/topnews";
//import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <main className="home">
      <div className="onthetop">
        <div className="topnews topnews__first">
          <TopNews
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={true}
          />
        </div>

        <div className="topnews topnews__second">
          <TopNews
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={false}
          />
        </div>
        <div className="topnews topnews__third">
          <TopNews
            image={landscape}
            title="Très gros titre"
            text="text en dessous du titre bla bla bla bla bla"
            isImageNews={true}
          />
        </div>
      </div>
      <div className="banner">
        <img src={landscape} alt="test"></img>
      </div>
      <div>Article</div>
      <div>Article</div>
      <div>Article</div>
      <div>Article</div>
    </main>
  );
}

export default Home;
