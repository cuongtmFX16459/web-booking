import classes from "./SearchListItem.module.css";

let ct = (
  <div style={{ color: "blue" }}>
    <p>
      <b>Free cancellation</b>
    </p>
    <p>You cancel later, so lock in this great price to day</p>
  </div>
);

const SearchListItem = (props) => {
  return (
    <div>
      <div>
        <img src={props.image_url} alt={`anh`}></img>
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          <h2>{props.name}</h2>
          <b></b>
          <p>{props.rate_text}</p>
          <p>{props.rate}</p>
        </div>
        <div>
          <p>{props.distance} from center</p>
          <p>{props.tag}</p>
          <p>{props.description}</p>
          <p>{props.type}</p>
        </div>
        <div className={classes.ft}>
          <div>{props.free_cancel === true ? ct : ""}</div>
          <div className={classes.btn__save}>
            <p>{props.price}</p>
            <p>Incluide texas and fees</p>
            <button>Save availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchListItem;
