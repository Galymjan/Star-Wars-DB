import React from "react";

import ItemDetails, {Record} from "../item-details/item-details";
//import SwapiService from "../../services/swapi-service";

//import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";
/*
const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;
*/

const StarshipDetails = (props) => {
    return(
                    <ItemDetails  {...props}>
                    <Record field="model" label="Model" />
                    <Record field="length" label="Length" />
                    <Record field="costInCredits" label="Cost" />  
                    </ItemDetails>
          );
            
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
//export default withSwapiService(StarshipDetails,mapMethodsToProps);

/*
const StarshipDetails = ({itemId}) => {
    return(
    <SwapiServiceConsumer>
        {
            ({getStarship,getStarshipImage}) =>
            {
                return(
                    <ItemDetails 
                    itemId={itemId} 
                    getData={getStarship}
                    getImageUrl={getStarshipImage}>
                    <Record field="model" label="Model" />
                    <Record field="length" label="Length" />
                    <Record field="costInCredits" label="Cost" />  
                    </ItemDetails>
                );
            }
        }
    
    </SwapiServiceConsumer>);
};
*/