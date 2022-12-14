import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';


import './random-planet.css';

export default class RandomPlanet extends Component{
    
    static defaultProps = {
        updateInterval : 10000
    };

    static propTypes = {
        updateInterval :  PropTypes.number
    }

    swapiService = new SwapiService();


    state = {
        planet : {},
        loading : true//,
        //error: false
    };
/*
    constructor() {
        super();
        console.log('constructor()');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,5000);
    }
*/
    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
        console.log('RandomPlanet componentDidMount()');
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('RandomPlanet componentWillUnmount()');
    }

    componentDidCatch(error, errorInfo){
        console.log("RandomPlanet componentDidCatch error=",error,", errorInfo=",errorInfo);
    }

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading: false
        });
    }

    onError = (err)=>{
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet  = (planet) => {
        //console.log('update');
        const id = Math.floor(Math.random()*17)+2;//Math.round(Math.random()*1900)+2;
        this.swapiService
                .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);
    }
    
    render(){
        //console.log("render")  ;
        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        //console.log("render")  ;
        //this.updatePlanet();
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet ={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }

}
/*
RandomPlanet.defaultProps = {
    updateInterval : 10000
}
*/
const PlanetView = ( {planet})=>{

    const {id,name, population ,rotationPeriod , diameter} = planet;

    return(
        <React.Fragment>
                <img className="planet-image" alt="description of image"  
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population 1</span>
                            <span>{ population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    );
}