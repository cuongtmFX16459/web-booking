import classes from "./NavbarItem.module.css";

const NavBarItem = (props) => {
  return (
    <div className={classes.navbaritem}>
      <div>
        <img className={classes.img} src={props.icon} alt={`icon`} />
      </div>
      <div>
        <p>&nbsp;{props.type}</p>
      </div>
    </div>
  );
};
export default NavBarItem;
