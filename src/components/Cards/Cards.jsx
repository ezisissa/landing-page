import "./Cards.css";

const Cards = () => {
  const data = [
    {
      img: "/assets/property-01.jpg",
      genre: "Luxury Villa",
      price: "$1.180.000",
      addres: "45 Mid Street Florida, OR 27001",
      info: [
        { name: "Bedrooms:", desc: "6" },
        { name: "Bathrooms:", desc: "5" },
        { name: "Area:", desc: "450m2" },
        { name: "Floors:", desc: "3" },
        { name: "Parking:", desc: "8 spots" },
      ],
    },
    {
      img: "/assets/property-02.jpg",
      genre: "Luxury Villa",
      price: "$2.264.888",
      addres: "18 New Street Miami, OR 97219",
      info: [
        { name: "Bedrooms:", desc: "8" },
        { name: "Bathrooms:", desc: "8" },
        { name: "Area:", desc: "545m2" },
        { name: "Floors:", desc: "3" },
        { name: "Parking:", desc: "6 spots" },
      ],
    },
    {
      img: "/assets/property-03.jpg",
      genre: "Luxury Villa",
      price: "$1.460.000",
      addres: "26 Old Street Miami, OR 38540",
      info: [
        { name: "Bedrooms:", desc: "5" },
        { name: "Bathrooms:", desc: "4" },
        { name: "Area:", desc: "225m2" },
        { name: "Floors:", desc: "3" },
        { name: "Parking:", desc: "10 spots" },
      ],
    },
    {
      img: "/assets/property-04.jpg",
      genre: "Apartment",
      price: "$584.500",
      addres: "12 New Street Miami, OR 12650",
      info: [
        { name: "Bedrooms:", desc: "4" },
        { name: "Bathrooms:", desc: "3" },
        { name: "Area:", desc: "125m2" },
        { name: "Floors:", desc: "25th" },
        { name: "Parking:", desc: "2 cars" },
      ],
    },
    {
      img: "/assets/property-05.jpg",
      genre: "Penthouse",
      price: "$925.600",
      addres: "34 Beach Street Miami, OR 42680",
      info: [
        { name: "Bedrooms:", desc: "4" },
        { name: "Bathrooms:", desc: "4" },
        { name: "Area:", desc: "180m2" },
        { name: "Floors:", desc: "38th" },
        { name: "Parking:", desc: "2 cars" },
      ],
    },
    {
      img: "/assets/property-06.jpg",
      genre: "Modern Condo",
      price: "$450.000",
      addres: "22 New Street Portland, OR 16540",
      info: [
        { name: "Bedrooms:", desc: "3" },
        { name: "Bathrooms:", desc: "2" },
        { name: "Area:", desc: "165m2" },
        { name: "Floors:", desc: "26th" },
        { name: "Parking:", desc: "3 cars" },
      ],
    },
  ];

  return (
    <div className="cards">
      {data.map((element, index) => (
        <div key={index} className="card">
          <img src={element.img} alt="property img" />
          <div className="catprice">
            <p className="category">{element.genre}</p>
            <p className="price">{element.price}</p>
          </div>
          <h4>{element.addres}</h4>
          <div className="info">
            {element.info.map((e, i) => (
              <div key={i} className="propdetail">
                <p className="info-name">{e.name}</p>
                <p className="info-desc">{e.desc}</p>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <button className="schedule-btn">Schedule a Visit</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
