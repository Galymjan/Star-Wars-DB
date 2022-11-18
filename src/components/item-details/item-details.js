import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import ErrorButton from '../error-button';
import './item-details.css';

const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
           <span className="term">{label}</span>
           <span>{item[field]/*field*/ }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component{

    swapiService = new SwapiService();

    state = {
        item : null,
        image : null,
        loading : true
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData||
            this.props.getImageUrl !== prevProps.getImageUrl){
            this.updateItem();
        }
    }

    componentDidCatch(error, errorInfo){
        console.log("ItemDetails componentDidCatch error=",error,", errorInfo=",errorInfo);
    }

updateItem(){
    const { itemId, getData, getImageUrl } = this.props
    if(!itemId){
        return;
    }
    getData(itemId)
    .then((item)=>{
        this.setState({
            item,
            image : getImageUrl(item)
        });
    });
}
//const PersonView = ( {person})=>{
render() {

    const {item, image} = this.state;

    if(!item){
        return <span>Select a item from list</span>
    }

    const { name } = item;

    return(
        /*<React.Fragment>*/
        <div className="item-details card">
                <img className="item-image"
                     //src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child/*, idx*/) =>{
                                return React.cloneElement(child,{item});
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div> 
        </div>                
        /*</React.Fragment>*/
        );
    }
}

/*
    updatePerson(){
        const {personId, loading}= this.props;

        this.setState({
            loading: true
        });

        if(!personId){
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person)=>{
                this.setState({
                    person, 
                    loading: false
                });
            })
    }

    render() {
        if(!this.state.person){
            return <span>select a person from a list</span>
        }
        console.log("render person detail",this.state.person);
        /*const { person: {
            id ,
            name ,
            gender,
            birthYear,
            eyeColor
        }}= this.state.person;
        */
/*
        const { 
            person ,
            loading    
        }= this.state;

        console.log("render loading", loading)  ;
        //this.updatePlanet();
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView person={person}/> : null;

        return(
            <div className="person-details card">
            {spinner}
            {content}
            <ErrorButton/>
            </div>
        );
    }
}
*/