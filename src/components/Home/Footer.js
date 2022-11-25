import classes from "./Footer.module.css";

const Footer = () => {
  const Dummy_Footer = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];
  return (
    <div className={classes.footer}>
      {Dummy_Footer.map((data) => (
        <div>
          <p className={classes.footer1}>{data.col_values[0]}</p>
          <p className={classes.footer2}>{data.col_values[1]}</p>
          <p className={classes.footer3}>{data.col_values[2]}</p>
          <p className={classes.footer4}>{data.col_values[3]}</p>
          <p className={classes.footer5}>{data.col_values[4]}</p>
        </div>
      ))}
    </div>
  );
};
export default Footer;
