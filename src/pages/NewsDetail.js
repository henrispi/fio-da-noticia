import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API_BASE_URL from '../config/api';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/news/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Notícia não encontrada');
        }
        return response.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="home">
        <Header />
        <main className="main-content">
          <div className="container">
            <p>Carregando notícia...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="home">
        <Header />
        <main className="main-content">
          <div className="container">
            <h2>Notícia não encontrada!</h2>
            <Link to="/" className="back-link">← Voltar para Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <Link to="/" className="back-link">← Voltar para Home</Link>
          
          <article className="news-article">
            <div className="news-header">
              <span className="news-category">{news.category}</span>
              <h1>{news.title}</h1>
              <div className="news-meta">
                <span className="news-date">{formatDate(news.date)}</span>
                <span className="news-author">Por {news.author || "Redação"}</span>
              </div>
            </div>

            <div className="news-image-link">
              <img src={news.image} alt={news.title} />
            </div>

            <div className="news-body">
              <p className="news-summary">{news.summary}</p>
              <div className="news-content">
                {news.content}
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;