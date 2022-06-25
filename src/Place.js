import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './place.css';
class Place extends React.Component {
    constructor (props){
        super(props);
        this.state={
            type:'',
            city:'',
            country:'',
            population:'',
            region:'',
            long:'',
            lat:'',
            wikiDataId:'',
            showResult: false,
            flag:''
        }
        this.handleRandom = this.handleRandom.bind(this);
    };

    handleRandom(event){
        console.log(event.key);
        event.preventDefault();
        var y =  Math.floor(Math.random() * 24000);
        this.fetchCity(y);
    }
    
    fetchFlag(g){
        const PointToThis = this;
        let api_call = `https://countryflagsapi.com/png/${g}`
        
    }
    fetchCity(x){
        const PointToThis = this;
        let input_city = "";
        let api_call = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&offset=${x}&hateoasMode=off`
        fetch(api_call)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);

                input_city = data["data"][0]["city"];
                console.log(input_city);
                PointToThis.setState({
                    city: data["data"][0]["city"],
                    country:data["data"][0]["country"],
                    population:data["data"][0]["population"],
                    region:data["data"][0]["region"],
                    wikiDataId:data["data"][0]["wikiDataId"],
                    long:data["data"][0]["longitude"],
                    lat:data["data"][0]["latitude"],
                    countryCode: data["data"][0]["countryCode"],
                    flag: "https://countryflagsapi.com/png/"+data["data"][0]["countryCode"],
                    showResult: true
                });
                console.log(PointToThis);
            }
        )
    }
    

    render() {
        return (
            <div >
                
            <div className='bgimg'><img 
      src="https://wallpaperaccess.com/full/1124103.jpg"
      alt="new"
      /></div>
            {this.state.showResult ? 
            <div><div className="cloud-text cloud-title">Your Next Destination!</div>
            <div className="travel-main-content">
                <p>Country: {this.state.country}</p>
                <p>Region: {this.state.region}</p>
                <p>City: {this.state.city}</p>
                <p>Longitude: {this.state.long}</p>
                <p>Latitude: {this.state.lat}</p>
                <div className="sub"> Click to learn more about this city!<br/></div>
                <a href={"https://www.tripadvisor.com/Search?q="+this.state.city.replace(/ /g, '%20')}><img src = {this.state.flag} width={140} height={80}/></a>
               <br></br>
                    <form onSubmit={this.handleRandom} className="action_btn">
                    
                    <button type="submit" className="button-13" > New City </button>
                    </form>
                    <form onSubmit={this.handleRandom} className="action_btn2">
                    <Link to="/">
                        <button type="submit" className="button-13" > Main Page </button>
                        </Link>
                    </form>
                </div>
            </div>
             :<div className='place-main'><div className="cloud-text cloud-title">Generate a City!</div>
             <form onSubmit={this.handleRandom}>
             <div><button type="submit" className="btn"> Press Me! </button></div> 
          </form></div>}
            </div>
            
        )
    }
}


export default Place;