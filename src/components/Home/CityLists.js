import classes from "./CityLists.module.css";

const CityLists = () => {
  const Dummy_City = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  return (
    <div className={classes.city}>
      {Dummy_City.map((data) => (
        <div>
          <div className={classes.text}>
            <h1>{data.name}</h1>
            <h3>{data.subText}</h3>
          </div>
          <img className={classes.img} src={data.image} alt={data.name} />
        </div>
      ))}
    </div>
  );
};
export default CityLists;
