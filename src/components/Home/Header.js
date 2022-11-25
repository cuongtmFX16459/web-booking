import classes from "./Header.module.css";
const Header = () => {
  const searchHandler = () => {
    window.location.replace("/search");
  };
  return (
    <div className={classes.header__wrap}>
      <div className={classes.header}>
        <div className={classes.text}>
          <h2>A Lifetime Of discounts? It's Genius.</h2>
          <p>
            Get rewarded for your travels - unlock instanst savings of 10% more
            with a free acount
          </p>
          <button className={classes.button}>Register/Sign in</button>
        </div>
      </div>
      <div className={classes.form1}>
        <div className={classes.form}>
          <label>Nơi đi</label>
          <input type="text"></input>
          <label>Ngày</label>
          <input type="text"></input>
          <label>Người</label>
          <input type="text"></input>
          <button onClick={searchHandler} className={classes.button}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
