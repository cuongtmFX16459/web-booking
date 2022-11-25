import classes from "./HotelLists.module.css";
const HotelList = () => {
  const Dummy_Hotel = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <div className={classes.hotels__wrap}>
      <h1>Browse by property type</h1>
      <div className={classes.hotels}>
        {Dummy_Hotel.map((data) => (
          <div>
            <img className={classes.img} src={data.image} alt={data.name} />
            <div className={classes.text}>
              <h3>{data.name}</h3>
              <h2>{data.count} Hotel</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotelList;
