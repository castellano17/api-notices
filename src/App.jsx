import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardNews from "./components/CardNews";

function App() {
  const [news, setNews] = useState([]);
  const [nameNew, setNameNew] = useState("");
  //function para obtener las noticias
  const getNews = () => {
    const URL = `https://newsapi.org/v2/top-headlines?q=${nameNew}&language=es&apiKey=cea107c89465409384affdcbf8c6b0b3`;
    axios
      .get(URL)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameNew(e.target.textNew.value);
  };
  useEffect(() => {
    getNews();
  }, [nameNew]);
  return (
    <div className="App">
      <h1 className="App__title">Good news Academlo!</h1>
      <form className="App__form" onSubmit={handleSubmit}>
        <div className="App__form_div">
          <input
            className="App__form-input"
            id="textNew"
            type="text"
            placeholder="busca tu noticia"
          />
        </div>
        <button className="App__form-btn">Search</button>
      </form>
      <section className="container-articles">
        {news[0] && <CardNews newNotice={news[0]} />}
        {news[1] && <CardNews newNotice={news[1]} />}
        {news[2] && <CardNews newNotice={news[2]} />}
        {!news.length && (
          <h2 className="App__not-result">No hay noticias relacionadas</h2>
        )}
      </section>
    </div>
  );
}

export default App;
