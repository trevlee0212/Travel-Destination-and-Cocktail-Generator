import React, { useState } from 'react';
import cktl from './cktl.jpeg';
import './App.css';
import { Link } from 'react-router-dom';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8e2ed5792mshdb1e73360c6c2dbp10dc67jsn92b049599411',
		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
	}
};
class Place extends React.Component {
    constructor (props){
        super(props);
        this.state={
            name:'blah blach',
            ingredients:['Hendricks', 'wfwwfw','wf','wfwf'],
            show: 0
        }
        this.handleRandom = this.handleRandom.bind(this);
    };

    handleRandom(event){
        console.log(event.key);
        event.preventDefault();
        var y =  Math.floor(Math.random() * 24000);
        this.fetchCocktail();
    };
    
    fetchCocktail(){
        let tmp = [];
        const PointToThis = this;
        fetch('https://cocktails3.p.rapidapi.com/random', options)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);
                    
                    
                    PointToThis.setState({
                        show: true,
                        ingredients: data["body"][0]["ingredients"],
                        name: data["body"][0]["name"]
                    });
                    console.log(PointToThis);
                }
            ) 
    }
    
       
  
    

    render() {
        return (
            <div className="about-page">
                {this.state.show ?
                <div><div className="cloud-drink-true"> Your Cocktail is...</div>
                <div className="food-main-topic"> {this.state.name}</div>
                <div className="food-main-ingre"> Ingredients: </div>
                <div className="food-main-content"> {this.state.ingredients.map(name =><div>{name}</div>)}</div>


                <form onSubmit={this.handleRandom} className="action_btn">
                    <button type="submit" className="button-14" style={{ flexDirection: "row" }}> New Drink </button>
                    </form>
                    <form onSubmit={this.handleRandom} className="action_btn2">
                    <Link to="/">
                        <button type="submit" className="button-14" style={{ flexDirection: "row" }}> Main Page </button>
                        </Link>
                    </form>
                </div> 
                
                
                
                
                
                
                : <div><div className="cloud-drink">New Cocktail Recipe <br/>for Your Summer!</div>
             <form onSubmit={this.handleRandom}>
             <div><button type="submit" className="btn"> <img src={cktl} /> </button></div> 
          </form></div>}
               </div>
             
            
            
        )
    }
}


export default Place;