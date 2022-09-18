import "../styles/main.scss";
import alram from "../figma-pics/alram.jpg";
import cloud from "../figma-pics/cloud.png";
import boat from "../figma-pics/boat.jpg";
import truck from "../figma-pics/truck.png";
const Main = () => {
  return (
    <div className="main-container">
      {/* //TODO: component */}
      <div className="main-container-pic">
        <h2 className="main-h2-text">The largest premium logistic service</h2>
        <p className="main-h2-p-text">
          From production sources to markets with the aim of optimizing the use
          of capital. Manufacturing and marketing.
        </p>
        <div className="get-started-container">
          <div className="get-started-rectangle">
            <p className="get-started-text">get started</p>
          </div>
          <p className="learn-more-text">Learn More {">"}</p>
        </div>
      </div>
      {/* //TODO: component */}
      <div>
        <p className="marketing-text">
          Shipping has long become an essential part of the modern e-commerce
          market, making efficient container management indispensable.
        </p>
        <div className="our-serivces-container">
          <p className="our-serivces-h2">Our services</p>
          <div className="our-serivces-retangle"></div>
          <p className="our-serivces-text">
            Logistics activities themselves aim to provide the right goods at
            the right time and place, The company.
          </p>
          <div className="our-serivces-alaram-container">
            <img src={alram} className="our-serivces-alaram-pic" />
            <h3 className="our-serivces-h3">On Time</h3>
            <p className="our-serivces-alaram-text">delivery on a schedule that is always on time</p>
          </div>
          <div className="our-serivces-boat-container">
            <img src={boat} className="our-serivces-alaram-pic" />
            <h3 className="our-serivces-h3">Extensive service</h3>
            <p className="our-serivces-alaram-text">with a wide range of delivery sam to cross continents</p>
          </div>
          <div className="our-serivces-cloud-container">
            <img src={cloud} className="our-serivces-alaram-pic" />
            <h3 className="our-serivces-h3">Esecurity guaranteed</h3>
            <p className="our-serivces-alaram-text">the safety of the goods during delivery is guaranteed</p>
          </div>
          <div className="our-serivces-truck-container">
            <img src={truck} className="our-serivces-alaram-pic" />
            <h3 className="our-serivces-h3">Esecurity guaranteed</h3>
            <p className="our-serivces-alaram-text">the safety of the goods during delivery is guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
