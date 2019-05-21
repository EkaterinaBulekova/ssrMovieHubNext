import React from "react";
import {connect} from "react-redux";
import Button from "../button/button";
import CustomInput from "../custom-input/custom-input";
import SearchFilter from "../search-filter/search-filter";
import Router from "next/router";
import styles from './search.css';

class Search extends React.Component {
  onSubmit =(e) => {
    e.preventDefault();
    Router.push({
      pathname: e.target[0].value ? `/search/${e.target[0].value}/`:'/',
    });
  }

  render() {
    return (
      <form  className={styles.search_component} onSubmit={this.onSubmit}>
        <CustomInput title="FIND YOUR MOVIE" value={this.props.search}/>
        <SearchFilter/>
        <Button className={styles.search_button_active} type="submit" name="SEARCH"/>
      </form>
    )
  }
}

function mapStateToProps(state){
  const {search, searchBy} = state;
  return {search: search, searchBy: searchBy};
}

export default connect(mapStateToProps)(Search)