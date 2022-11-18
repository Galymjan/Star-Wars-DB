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

const PlanetDetails = (props) => {
    return(
                    <ItemDetails {...props}>
                        <Record field="population" label="Population" />
                        <Record field="rotationPeriod" label="Rotation Period" />
                        <Record field="diameter" label="Diameter" />  
                    </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
//export default withSwapiService(PlanetDetails,mapMethodsToProps);


/*
const PlanetDetails = ({itemId}) => {
    return(
    <SwapiServiceConsumer>
        {
            ({getPlanet,getPlanetImage}) =>
            {
                return(
                    <ItemDetails 
                        itemId={itemId} 
                        getData={getPlanet}
                        getImageUrl={getPlanetImage}>
                        <Record field="population" label="Population" />
                        <Record field="rotationPeriod" label="Rotation Period" />
                        <Record field="diameter" label="Diameter" />  
                    </ItemDetails>
                );
            }
        }
    </SwapiServiceConsumer>
    );
};
*/