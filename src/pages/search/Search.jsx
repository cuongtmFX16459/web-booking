import SearchList from "../../components/Search/SearchList";
import SearchPopup from "../../components/Search/SearchPopup";
import NavBar from "../../components/Home/NavBar";
import Footer from "../../components/Home/Footer";
import SingUp from "../../components/Home/SingUp";

import classes from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className={classes.wrap}>
        <div className={classes.popup}>
          <SearchPopup></SearchPopup>
        </div>
        <div className={classes.list}>
          <SearchList></SearchList>
        </div>
      </div>

      {/* <SingUp></SingUp>
      <Footer></Footer> */}
    </div>
  );
};

export default Search;
