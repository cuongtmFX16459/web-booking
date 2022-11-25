import classes from "./SearchPopup.module.css";
const SearchPopup = () => {
  return (
    <div className={classes.popup}>
      <h1>Search</h1>
      <form>
        <div>
          <p>Destination</p>
          <input className={classes.search}></input>
        </div>
        <div>
          <p>Check-in-Date</p>
          <input className={classes.search}></input>
        </div>
        <div className={classes.infor}>
          <p>Options</p>
          <br></br>
          <div>
            <label>Min Price</label>
            <input></input>
          </div>
          <br></br>
          <div>
            <label>Max Price</label>
            <input></input>
          </div>
          <br></br>
          <div>
            <label>Aldult</label>
            <input></input>
          </div>
          <br></br>
          <div>
            <label>Children</label>
            <input></input>
          </div>
          <br></br>
          <div>
            <label>Room</label>
            <input></input>
          </div>
          <br></br>
          <div className={classes.btn}>
            <button className={classes.btn__search}>Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchPopup;
