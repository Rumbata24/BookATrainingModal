import "../Components/BookTraining.css";
import close from "../assets/close.png";
import arrowRight from "../assets/arrow-right.png";
import arrowLeft from "../assets/arrow-left.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import { useState } from "react";
const BookTraining = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };
  const handlePrevDay = () => {
    const pevDat = new Date(currentDate);
    pevDat.setDate(pevDat.getDate() - 1);
    setCurrentDate(pevDat);
  };

  return (
    <section className="book-training-wrapper">
      <div className="header-section">
        <h1>Book a Training</h1>
        <img src={close} alt="" />
      </div>
      <div className="date-section">
        <img onClick={() => handlePrevDay()} src={arrowLeft} alt="" />
        <div className="text-date">
          <h1>{currentDate.toDateString()}</h1>
          <p>Today</p>
        </div>
        <img onClick={() => handleNextDay()} src={arrowRight} alt="" />
      </div>

      <div className="book-spot">
        <div className="left-text">
          <h3>Bodypump</h3>
          <p>09:30 | 60 min</p>
          <div className="bottom-text">
            <p>Trained by</p>
            <div className="trainer">
              <img src={avatar1} alt="" />
              <h4>Emily Stark</h4>
            </div>
          </div>
        </div>
        <div className="book-btn">
          <button>Book a Spot</button>
        </div>
      </div>

      <div className="book-spot">
        <div className="left-text">
          <h3>Bodypump</h3>
          <p>10:30 | 60 min</p>
          <div className="bottom-text">
            <p>Trained by</p>
            <div className="trainer">
              <img src={avatar2} alt="" />
              <h4>Erik Nest</h4>
            </div>
          </div>
        </div>
        <div className="book-btn">
          <button>Book a Spot</button>
        </div>
      </div>
      <div className="book-spot">
        <div className="left-text">
          <h3>Bodypump</h3>
          <p>10:30 | 60 min</p>
          <div className="bottom-text">
            <p>Trained by</p>
            <div className="trainer">
              <img src={avatar2} alt="" />
              <h4>Erik Nest</h4>
            </div>
          </div>
        </div>
        <div className="book-btn">
          <button>Book a Spot</button>
        </div>
      </div>
    </section>
  );
};

export default BookTraining;
