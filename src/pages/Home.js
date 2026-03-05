import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import API_BASE_URL from '../config/api';
//import { fallbackNews } from '../data/fallbackNews';
import './Home.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch(`${API_BASE_URL}/news`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar notícias');
      }
      return response.json();
    })
    .then(data => {
      setNews(data);
      setLoading(false);
    })
    .catch(error => {
      console.log('⚠️ Servidor offline - não foi possível carregar notícias');
      // Não mostra erro no console, apenas define loading como false
      setLoading(false);
      // Opcional: mostrar uma mensagem amigável para o usuário
      setError('Servidor indisponível.');
    });
}, []);

/*
  useEffect(() => {
    fetch(`${API_BASE_URL}/news`)
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      });
  }, []);
*/
  const featuredNews = news.filter(item => item.featured);
  const recentNews = news.filter(item => !item.featured);
/*
  if (loading) {
    return <div>Carregando...</div>;
  }
*/

if (loading) {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <div className="container">
          <p>Carregando notícias...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

if (error) {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="error-message">
            <p>😕 {error}</p>
            <p>Por favor, tente novamente mais tarde.</p>
          </div>
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
          <div className="home-layout">
            <section className="featured-section">
              <h2>Destaques</h2>
              <div className="featured-grid">
                {featuredNews.map(newsItem => (
                  <NewsCard key={newsItem.id} news={newsItem} featured />
                ))}
              </div>
            </section>

            <section className="recent-section">
              <h2>Últimas Notícias</h2>
              <div className="news-grid">
                {recentNews.map(newsItem => (
                  <NewsCard key={newsItem.id} news={newsItem} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;