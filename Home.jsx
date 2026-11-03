import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle"> <h1>DRIVENEST CAR RENTALS</h1></p>

          <h2>
            Find Your Perfect Car
            <br />
            For Your Next Journey
          </h2>

          <p className="hero-description">
            Rent your favorite car at an affordable price.
            Easy booking, comfortable cars and reliable service.
          </p>

          <div className="hero-buttons">
            <Link to="/cars" className="primary-btn">
              Browse Cars
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Search / Booking Box */}
      <section className="booking-section">
        <div className="booking-box">

          <div className="booking-item">
            <label>Pick-up Location</label>
            <input
              type="text"
              placeholder="Enter location"
            />
          </div>

          <div className="booking-item">
            <label>Pick-up Date</label>
            <input type="date" />
          </div>

          <div className="booking-item">
            <label>Return Date</label>
            <input type="date" />
          </div>

          <button className="search-btn">
            Search Cars
          </button>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-home">

        <p className="section-label">WHY CHOOSE US</p>

        <h2>Everything You Need For A Great Journey</h2>

        <div className="home-features">

          <div className="home-feature">
            <div className="feature-icon">🚗</div>
            <h3>Wide Selection</h3>
            <p>
              Choose from a wide range of cars for
              every journey and budget.
            </p>
          </div>

          <div className="home-feature">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>
              Get affordable rental prices with
              transparent pricing.
            </p>
          </div>

          <div className="home-feature">
            <div className="feature-icon">🛡️</div>
            <h3>Safe & Reliable</h3>
            <p>
              Our cars are regularly maintained for
              your safety and comfort.
            </p>
          </div>

          <div className="home-feature">
            <div className="feature-icon">📞</div>
            <h3>24/7 Support</h3>
            <p>
              Our team is always available whenever
              you need assistance.
            </p>
          </div>

        </div>
      </section>

      {/* Popular Cars */}
      <section className="popular-section">

        <p className="section-label">OUR CARS</p>

        <h2>Popular Cars</h2>

        <div className="car-cards">

          <div className="car-card">
            <div className="car-image">
              🚘
            </div>

            <div className="car-info">
              <h3>Toyota etios</h3>
              <p>Automatic • 5 Seats • Diesel</p>

              <div className="price">
                ₹1,800 <span>/ day</span>
              </div>

              <Link to="/cars" className="rent-btn">
                Rent Now
              </Link>
            </div>
          </div>

          <div className="car-card">
            <div className="car-image">
              🚙
            </div>

            <div className="car-info">
              <h3>Hyundai Creta</h3>
              <p>Automatic • 5 Seats • Diesel</p>

              <div className="price">
                ₹2,200 <span>/ day</span>
              </div>

              <Link to="/cars" className="rent-btn">
                Rent Now
              </Link>
            </div>
          </div>

          <div className="car-card">
            <div className="car-image">
              🚗
            </div>

            <div className="car-info">
              <h3>Honda City</h3>
              <p>Manual • 5 Seats • Petrol</p>

              <div className="price">
                ₹1,800 <span>/ day</span>
              </div>

              <Link to="/cars" className="rent-btn">
                Rent Now
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="home-cta">

        <h2>Ready To Start Your Journey?</h2>

        <p>
          Book your car today and enjoy a comfortable
          and hassle-free journey.
        </p>

        <Link to="/cars" className="cta-btn">
          Explore Cars
        </Link>

      </section>

    </div>
  );
}

export default Home;