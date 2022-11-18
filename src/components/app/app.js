import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
//import ItemDetails, { Record } from "../item-details/item-details";
//import Row from "../row";
import {SwapiServiceProvider} from '../swapi-service-context';
import { PeoplePage, 
        PlanetsPage, 
        StarshipPage,
        LoginPage,
        SecretPage } from "../pages";
import { BrowserRouter as Router, Routes, Route,useParams, useNavigate } from "react-router-dom";
/*
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList  
} from "../sw-components";
*/
import DummySwapiService from "../../services/dummy-swapi-service";
import { StarshipDetails } from "../sw-components";


export default class App extends Component{

    //swapiService = new DummySwapiService();//SwapiService();

    state = {
        //showRandomPlanet : true,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onServiceChange = () =>{
        this.setState(({swapiService}) => {
            console.log('[onServiceChange] swapiService=',swapiService);
            const Service = swapiService instanceof SwapiService?
                               DummySwapiService: SwapiService;
            return{
                swapiService : new Service()
            };
        });
    };

    
    
    /*

    componentDidCatch(){
        console.log('componentDidCatch');
        this.setState({hasError:true});
    }
    */
//<RandomPlanet />
    render () {
        /*
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        */
        //const planet = this.state.showRandomPlanet ? <RandomPlanet />: null;

        const StarshipDetailsFunc = () => {
            const { id } = useParams();
            //console.log("id=",id);
            return <StarshipDetails itemId={id} />;
        }

        const {isLoggedIn} = this.state;

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>

                            <RandomPlanet />
                            {/*
                            <Routes>
                            <Route path="/people" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" component={StarshipPage}/>
                            </Routes>
                            */}
                            <Routes>
                            
                           
                            <Route path="/people/:id" element={<PeoplePage/>}/>
                            <Route path="/people/" element={<h2>PeoplePage</h2>} />
                            
                            <Route path="/people">
                                <Route index element={<h2>PeoplePage</h2>} />
                                <Route path=":id" element={<PeoplePage />} />
                            </Route>

                            <Route path="/planets" element={<PlanetsPage />}/>
                            <Route path="/starships" element={<StarshipPage />}/>
                            {/*<Route path="/starships/:id" 
                                    render={({match, location, history})=> {
                                        console.log("match=",match);
                                    return <StarshipDetails itemId />}}/>*/}
                             {/*<Route path="/starships/:id" 
                                    element={(() => {
                                        const { id } = useParams();
                                        console.log("id=",id);
                                        //return <StarshipDetails itemId={`${id}`} />
                                    })}/>        
                            </Routes>*/}
                           
                           <Route 
                               path = "/login"  
                               element={<LoginPage 
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}
                                        />}
                               />
                            <Route 
                               path = "/secret" 
                               element={<SecretPage isLoggedIn={isLoggedIn}/>}
                               /> 

                            <Route path="/starships/:id" 
                                    element={<StarshipDetailsFunc />}/>        

                            <Route  element={<h2>page not found!</h2>}/>     

                            <Route path="*" element={(<h2>Welcome to StarDB</h2>)}/> 
  
                            </Routes>
                            
                        </div>
                    </Router>
                    
                    {/*
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>

                        {planet}
                        <RandomPlanet updateInterval = { 2000 } />
                        <PeoplePage />
                        <br/>
                        <PlanetsPage />
                        <br/>
                        <StarshipPage />
                        
                    </div>*/}
                </SwapiServiceProvider>
            
                {/*
                <PersonList>
                  {({name}) => <span>{name}</span>}    
                </PersonList>
                <br />
                <StarshipList>
                  {({name}) => <span>{name}</span>}    
                </StarshipList>
                <br/>
                <PlanetList>
                  {({name}) => <span>{name}</span>}    
                </PlanetList>

                <Row left={personDetails    }
                     right={starshipDetails} />
                     */
                }
                {/*
                { planet }
                <div className="row mb2 button-row">
                    <button
                        className="toogle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>                    
                        Togle Random Planet
                    </button>
                    <ErrorButton/>
                </div>

                <PeoplePage />*/
                }
                {/*
                <br />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                         getData = {this.swapiService.getAllPlanets}
                         renderItem = {(item)=> item.name}/>                    
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} loading={true}/>
                    </div>
                </div>
                <br />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                         getData = {this.swapiService.getAllStarships}
                         renderItem = {(item)=> item.name}/>                    
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} loading={true}/>
                    </div>
                </div>
                */}
            </ErrorBoundry>
        );
    }
}

/*      27.03.2022

        lesson 88

        import {
            PersonDetails,
            PlanetDetails,
            StarshipDetails,
            PersonList,
            PlanetList,
            StarshipList  
        } from "../sw-components";

        const {getPerson, 
               getStarship, 
               getPersonImage,
               getStarshipImage} = this.state.swapiService;

       const personDetails = (
            <ItemDetails 
              itemId={11}
              getData={getPerson}
              getImageUrl={getPersonImage}>
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />     
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails 
              itemId={5} 
              getData={getStarship}
              getImageUrl={getStarshipImage}>
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />  
            </ItemDetails>
        );

        toggleRandomPlanet = ()=>{
        this.setState((state) => {
            return{
                showRandomPlanet:!state.showRandomPlanet
            }
        });
    };

                        <Row left={<PersonList />} 
                             right={<PersonDetails itemId={11} />}/>
                        <br />
                        <Row left={<PlanetList />}
                             right={<PlanetDetails itemId={5} />}/>
                        <br />
                        <Row left={<StarshipList />}
                             right={<StarshipDetails itemId={5} />}/>
*/
