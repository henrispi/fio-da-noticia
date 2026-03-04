import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news, featured = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      <div className="news-image">
        <img src={news.image} alt={news.title} />
        <span className="category">{news.category}</span>
      </div>
      <div className="news-content">
        <h3>
          <Link to={`/noticia/${news.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {news.title}
          </Link>
        </h3>
        <p>{news.summary}</p>
        <div className="news-meta">
          <span className="date">{formatDate(news.date)}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;