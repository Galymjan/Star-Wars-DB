import React, {Component} from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../item-details";
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

/*
const Row = ({left, right}) =>{
    return(
        <div className="row mb2">
            <div className="col-md-6">
                {left}                   
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}
*/
/*
class ErrorBoundry extends Component{

    state = {
        hasError : false
    }
    
    componentDidCatch(){
        debugger;
        
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError)
        {
            return <ErrorIndicator/>;
        }
        return this.props.children;
    }
}
*/
export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };

    

    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson: id
        });
    }

    render(){

        if(this.state.hasError){
            return <ErrorIndicator />;
        }
/*
        const itemList = <ItemList onItemSelected={this.onPersonSelected}
        getData = {this.swapiService.getAllPeople} 
        renderItem = {({name, gender, birthYear})=> `${name} (${gender} , ${birthYear})`} >
            {(i)=> `${i.name} (${i.gbirthYear})`} 
        </ItemList>;
*/
        const itemList = <ItemList onItemSelected={this.onPersonSelected}
        getData = {this.swapiService.getAllPeople} >
            {(i)=> (`${i.name} (${i.birthYear})`)} 
        </ItemList>;

        const personDetails = ( 
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson} loading={true}/>
            </ErrorBoundry>
        );

        return(
           <div> 
             
                <Row left={itemList} right={personDetails}/>
                <Row left={<span>hi left</span>} right={<span>right!</span>}/>
            </div>
        );
    }
}