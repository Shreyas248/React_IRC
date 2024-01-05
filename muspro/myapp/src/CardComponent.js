import React, { useState } from "react";
import AudioFiles from "./AudioFiles";
import { audios } from "./AudioData";
import Player from "./Player";
import './Assets/CardComponent.css';


const CardComponent = () => {
  const [songs, setSongs] = useState(audios);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentSong, setCurrentSOng] = useState(songs[0]);

  const checkNumber = (number) => {
    if (number > songs.length - 1) {
      return 0;
    }
    if (number < 0) {
      return songs.length - 1;
    }
    return number;
  };

  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSOng(song);
  };

  const nextSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });

    setCurrentSOng(audios[currentIndex]);
  };

  const prevSong = () => {
    setCurrentIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
    setCurrentSOng(audios[currentIndex]);
  };


  return (
    <div className="xshreyx">
      
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
    <section>
      <div className="player-main">
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
      </section>
    </div>
  );
};

export default CardComponent;
