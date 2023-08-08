import HeroImage from "../../../assets/food/food4.webp";

const Heading = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      />
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
};

export default Heading;
