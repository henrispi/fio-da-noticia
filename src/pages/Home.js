import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';
import './Home.css';

const Home = () => {
  const featuredNews = newsData.filter(news => news.featured);
  const recentNews = newsData.filter(news => !news.featured);

  return (
    
    <div className="home">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* Destaques */}
          <section className="featured-section">
            <h2>Destaques</h2>
            <div className="featured-grid">
              {featuredNews.map(news => (
                <NewsCard key={news.id} news={news} featured />
              ))}
            </div>
          </section>

          {/* Últimas Notícias */}
          <section className="recent-section">
            <h2>Últimas Notícias</h2>
            <div className="news-grid">
              {recentNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;