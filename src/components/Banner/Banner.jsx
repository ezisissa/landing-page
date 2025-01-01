import "./Banner.css";

const Banner = () => {
  return (
    <section className="ban">
      <div className="left_side">
        <div>
          <i
            className="fa-regular fa-envelope fa-sm left-icon"
            style={{ color: "#fe5525" }}
          ></i>
          <p>info@company.com</p>
        </div>
        <span className="vline"></span>
        <div>
          <i className="fa-solid fa-map fa-sm left-icon" style={{ color: "#fe5525" }}></i>
          <p>Sunny Isles Beach, FL 33160</p>
        </div>
      </div>
      <div className="right_side">
        <ul>
          <li className="ban-icon">
            <i
              className="fa-brands fa-facebook fa-sm"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
          <li className="ban-icon">
            <i
              className="fa-brands fa-twitter fa-sm"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
          <li className="ban-icon">
            <i
              className="fa-brands fa-linkedin fa-sm"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
          <li className="ban-icon">
            <i
              className="fa-brands fa-instagram fa-sm"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
