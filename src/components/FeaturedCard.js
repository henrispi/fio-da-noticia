import React, { useState } from 'react';
import './FeaturedCard.css';

const FeaturedCard = ({ news }) => {
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
    <article className="featured-card">
      <div className="featured-image">
        <img 
          src={getImageSrc()} 
          alt={news.title}
          onError={() => setImageError(true)}
        />
        <span className="featured-category">{news.category}</span>
      </div>
      <div className="featured-content">
        <h3>{news.title}</h3>
        <p className="featured-summary">{news.summary}</p>
        <div className="featured-meta">
          <span className="featured-date">{formatDate(news.date)}</span>
          <button className="read-more">Ler Mais</button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;