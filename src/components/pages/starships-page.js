import React, {Component} from "react";
import {  StarshipDetails, StarshipList } from "../sw-components";
//import Row from "../row";
import {useNavigate} from 'react-router-dom';

const StarshipPage = () => {
    const navigate = useNavigate();
    return(
        <StarshipList onItemSelected={(id) => {
            //const newPath = `/starships/${itemId}`;
            
            navigate(id);
        }} />
    );
}

export default StarshipPage;
/*
export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    }

    render(){
        const { selectedItem } = this.state;

        return(
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>} 
                 right={<StarshipDetails itemId={selectedItem} />}/>
        );
    }
}
*/