import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import Event from './Event';
import CardList from './CardList';
import Search from './Search';
import Loader from './Loader';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      isLoading: true,
      cards: [],
      pageNumber: 1
    }

  }

  componentDidMount() {

    console.log('Component Did Mount ')

    fetch('https://reqres.in/api/users?page=' + `${this.state.pageNumber}` + '&per_page=5')
      .then(response => response.json())
      .then(data => {


        console.log(data.data);
        this.setState(state => {

          return {
            ...state,
            isLoading: false,
            cards: data.data
          }

        })

      })




  }

  renderCards = (cards) => {


    if (this.state.isLoading === true) {

      return (<div className='profile-loader'><Loader /></div>)
    }
    else {

      return <CardList cards={cards} nextPage={this.nextPage} lastPage={this.lastPage} />
    }

  }


  nextPage = (currentPageNumber) => {


    fetch('https://reqres.in/api/users?page=' + `${this.state.pageNumber + 1}` + '&per_page=5')
      .then(response => response.json())
      .then(data => {


        console.log(data.data);
        this.setState(state => {

          return {
            ...state,
            isLoading: false,
            cards: data.data,
            pageNumber: this.state.pageNumber + 1
          }

        })

      })


  }

  lastPage = (currentPageNumber) => {



    fetch('https://reqres.in/api/users?page=' + `${this.state.pageNumber - 1}` + '&per_page=5')
      .then(response => response.json())
      .then(data => {


        console.log(data.data);
        this.setState(state => {

          return {
            ...state,
            isLoading: false,
            cards: data.data,
            pageNumber: this.state.pageNumber - 1
          }

        })

      })



  }


  render() {
    return (
      <div className="App">

        <Search />

        <div className='result'>
          <Filter />

          {this.renderCards(this.state.cards)}


          <Event isLoading = 'true' />

        </div>


      </div>
    );
  }
}

export default App;
