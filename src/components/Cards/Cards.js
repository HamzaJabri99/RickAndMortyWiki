import React from "react";
import styles from "./cards.module.scss";
const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      let { id, image, name, location, status } = item;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={`${styles.cards}`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "no Characters Found";
  }
  return <>{display}</>;
};

export default Cards;
