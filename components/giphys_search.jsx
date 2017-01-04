import React, { Component } from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends Component {

  constructor() {
    super();
    this.state = { searchTerm: "", num: 2 };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchSearchGiphys("golden+retriever");
  // }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleChange2(e2) {
    this.setState({ num: e2.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(" ").join("+");
    let num = this.state.num;
    this.props.fetchSearchGiphys(searchTerm, num);
  }

  render() {
    let { giphys } = this.props;

    return (
      <div>
        <h1>Gif Finder</h1>
        <form className='search-bar'>
          <label>Category </label>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <br />
          <br />
          <label>How many gifs </label>
            <input value={this.state.num} onChange={this.handleChange2} />
            <br />
            <br />
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
        <hr />
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
