import React from 'react';
import Button from './Button';


class DogCard extends React.Component {

  constructor() {
    super();
    this.state = {
      dogImg: undefined,
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  takeDogsBreed(fullUrl) {
    const breed = 
      fullUrl
        .split('https://images.dog.ceo/breeds/')[1]
        .split('/')[0]
        .replace('-', ' ');
    const upperCasedBreed = breed.charAt(0).toUpperCase() + breed.slice(1);
    return upperCasedBreed;
  }

  async fetchDog() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestDogObj = await requestReturn.json();
    const requestDogImg = await requestDogObj.message;
    console.log(requestDogImg);
    this.setState({
      dogImg: {requestDogImg},
    });
    
  }

  componentDidMount() {

    this.fetchDog();
    
    
  }

  componentDidUpdate() {
    alert(this.takeDogsBreed(this.state.dogImg.requestDogImg));
    console.log(this.state)
  }


  render() {
    return(
      <>
      <div className="dog-card">
        {this.state.dogImg
          ? <img className ="dog-img" src={this.state.dogImg.requestDogImg} alt="dog"></img>
          : <p>...Loading</p>}
        
      </div>
      <Button 
        title=">" 
        onClick={ this.fetchDog }
      />
      </>
    );
  }
}

export default DogCard;