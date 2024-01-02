import React from 'react';
import './Assets/CardComponent.css';
const CardComponent = () => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: 'url(https://m.timesofindia.com/photo/103861698/103861698.jpg)'}}></div>
          <div className="card__content">
            <h3 className="card__heading">Taylor Swift</h3>
            <p className="card__category">Category</p>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: 'url(https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg)'}}></div>
          <div className="card__content">
            <h3 className="card__heading">Ed Sheeran</h3>
            <p className="card__category">Category</p>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: 'url(https://rollingstoneindia.com/wp-content/uploads/2020/08/Anuv-Jain-scaled.jpg)'}}></div>
          <div className="card__content">
            <h3 className="card__heading">Anuv Jain</h3>
            <p className="card__category">Category</p>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{backgroundImage: 'url(https://yt3.googleusercontent.com/ytc/AIf8zZRVC48KKDO9l3rkQlcIdDDNoeQVsH-GzEqHlpmhfQ=s900-c-k-c0x00ffffff-no-rj)'}}></div>
          <div className="card__content">
            <h3 className="card__heading">Sanah Moidutty</h3>
            <p className="card__category">Category</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CardComponent;
