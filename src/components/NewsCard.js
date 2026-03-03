import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news, featured = false }) => {
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getImageSrc = () => {
    if (imageError) {
      return `https://placehold.co/600x400/3498db/white?text=${news.category}`;
    }
    return news.image;
  };

  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      <Link to={`/noticia/${news.id}`} className="news-link">
        <div className="news-image">
          <img 
            src={getImageSrc()} 
            alt={news.title}
            onError={() => setImageError(true)}
          />
          <span className="category">{news.category}</span>
        </div>
        <div className="news-content">
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
          <div className="news-meta">
            <span className="date">{formatDate(news.date)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;