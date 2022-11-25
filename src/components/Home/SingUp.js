import classes from "./SingUp.module.css";
const SignUp = () => {
  return (
    <div className={classes.signup__wrap}>
      <div className={classes.signup}>
        <h2>Save Time, Save Moeny!</h2> <br></br>
        <p>Sign up and we'll send the best deals to you</p> <br></br>
        <form>
          <input className={classes.input}></input>{" "}
          <button className={classes.button}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
