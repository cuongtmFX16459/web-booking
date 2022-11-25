import classes from "./Hotels.module.css";
const Hotels = () => {
  const Dummy_Hotels = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div className={classes.hotels__wrap}>
      <h1>Browse by property type</h1>
      <div className={classes.hotels}>
        {Dummy_Hotels.map((data) => (
          <div>
            <img className={classes.img} src={data.image_url} alt={data.name} />
            <div className={classes.text}>
              <a href="http://localhost:3000/detail">
                <h3>{data.name}</h3>
              </a>
              <p>{data.city} </p>
              <h3>Stating from $ {data.price} </h3>
              <div className={classes.hotels}>
                <h3 className={classes.rate}>{data.rate}</h3>{" "}
                <h3 className={classes.h3}>{data.type}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
