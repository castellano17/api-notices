import React from "react";

const CardNews = ({ newNotice }) => {
  return (
    <article className="article">
      <div className="article__img">
        <img src={newNotice?.urlToImage} alt="" />
      </div>
      <h3>{newNotice?.title}</h3>
      <p>{newNotice?.description}</p>
      <h6>{newNotice?.publishedAt}</h6>
      <a className="article__info" target="_blank" href={newNotice?.url}>
        Más info
      </a>
    </article>
  );
};

export default CardNews;
