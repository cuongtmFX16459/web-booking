import classes from "./Navbar.module.css";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const Duummy_navbar = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <div className={classes.navbar__wrap}>
      <div className={classes.navbar}>
        <div>
          <p>
            Booking Website <button className={classes.button}>Register</button>
            <button className={classes.button}>Login</button>
          </p>
        </div>

        <div className={classes.navbaritem}>
          {Duummy_navbar.map((data) => (
            <NavBarItem
              type={data.type}
              icon={data.icon}
              active={data.active}
            ></NavBarItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
