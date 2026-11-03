import "./Cars.css";
import { Link } from "react-router-dom";

function Cars() {
  const cars = [
    {
      name: "Toyota etios",
      type: "Sedan",
      details: "Automatic • 5 Seats • Diesel",
      price: "₹1,800",
      image: "🚘",
    },
    {
      name: "Hyundai Creta",
      type: "SUV",
      details: "Automatic • 5 Seats • Diesel",
      price: "₹2,200",
      image: "🚙",
    },
    {
      name: "Honda City",
      type: "Sedan",
      details: "Manual • 5 Seats • Petrol",
      price: "₹1,800",
      image: "🚗",
    },
    {
      name: "Mahindra Thar",
      type: "SUV",
      details: "Manual • 4 Seats • Diesel",
      price: "₹2,500",
      image: "🚙",
    },
    {
      name: "Toyota Innova",
      type: "MUV",
      details: "Manual • 7 Seats • Diesel",
      price: "₹3,000",
      image: "🚐",
    },
    {
      name: "BMW 5 Series",
      type: "Luxury",
      details: "Automatic • 5 Seats • Petrol",
      price: "₹6,000",
      image: "🏎️",
    },
  ];

  return (
    <div className="cars-page">

      {/* Page Header */}
      <section className="cars-header">
        <p>OUR FLEET</p>
        <h1>Choose Your Perfect Car</h1>
        <span>
          Find the right car for your journey from our wide range
          of comfortable and reliable vehicles.
        </span>
      </section>

      {/* Filter */}
      <section className="filter-section">

        <div className="filter-box">

          <div>
            <label>Car Type</label>
            <select>
              <option>All Cars</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>MUV</option>
              <option>Luxury</option>
            </select>
          </div>

          <div>
            <label>Transmission</label>
            <select>
              <option>All</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>

          <div>
            <label>Seats</label>
            <select>
              <option>All</option>
              <option>4 Seats</option>
              <option>5 Seats</option>
              <option>7 Seats</option>
            </select>
          </div>

          <button>Search</button>

        </div>

      </section>

      {/* Cars */}
      <section className="cars-section">

        <div className="cars-top">
          <h2>Available Cars</h2>
          <p>{cars.length} Cars Available</p>
        </div>

        <div className="cars-grid">

          {cars.map((car, index) => (
            <div className="car-card" key={index}>

              <div className="car-image">
                <span>{car.image}</span>
              </div>

              <div className="car-content">

                <div className="car-title">
                  <div>
                    <h3>{car.name}</h3>
                    <p>{car.type}</p>
                  </div>

                  <span className="available">
                    Available
                  </span>
                </div>

                <div className="car-details">
                  {car.details}
                </div>

                <div className="car-bottom">

                  <div className="car-price">
                    <strong>{car.price}</strong>
                    <span>/ day</span>
                  </div>

                  <Link to="/contact" className="rent-button">
                    Rent Now
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="cars-cta">

        <h2>Can't Find What You're Looking For?</h2>

        <p>
          Contact our team and we'll help you find the perfect
          vehicle for your journey.
        </p>

        <Link to="/contact">
          Contact Us
        </Link>

      </section>

    </div>
  );
}

export default Cars;