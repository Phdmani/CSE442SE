import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Row from './Row';
import Col from './Col';
import Panel from './Panel';
import Search from './Search';
import MovieDetail from './MovieDetail';
import API from '../utils/API';
import axios from 'axios';

class OmdbContainer extends Component {
  state = {
    result: {},
    search: '',
  };



  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };
  handleSubmit2= event => {
        event.preventDefault();
    alert('A name was submitted: ' + this.state.search);
      const user = this.state.search;
          try {
           const response =  axios.post('/user-add-movies', {user});
           console.log(response);
        } catch (err) {
        }


  };

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.Title || 'Search for a Movie to Begin'}
            >
              {this.state.result.Title
                ? <MovieDetail
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                  />
                : <h3>No Results to Display</h3>}
            </Panel>
          </Col>
          <Col size="md-4">
            <Panel heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleSubmit2 = {this.handleSubmit2}
              />
    

            </Panel>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default OmdbContainer;
