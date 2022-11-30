import dataNews from "../data/mockdata";
/**
 * @async
 * @function fetchAll
 * @description Executes a series of asynchronous component functions (to receive data)
 * @using in home.jsx useEffect component
 *
 */

function fetchAll(setData) {
  // UserId search in Url bar

  // Fetch use to load data user
  /* const loadApi = `https://newsapi.org/v2/everything?q=keyword&apiKey=c32de37ca8164431a596552bd09afce9`;

  const fetchData = async () => {
    const responseApi = await fetch(loadApi);
    const newDataApi = await responseApi.json();

    setData(newDataApi);
  };
  fetchData();*/

  setData(dataNews);
}

export default fetchAll;
