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
//const PersonDetails = ({itemId, /*swapiService*/ /*getData, getImageUrl*/ props}) => {
const PersonDetails = ( props) => {    
    //const {getPerson,getPersonImage} = swapiService;
    return(
        
        <ItemDetails  {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />     
        </ItemDetails>
        //<SwapiServiceConsumer>
        //    {
                //({getPerson, getPersonImage}) => {
                    //return(
                      //  <ItemDetails  >
                      //      itemId={2}
                     //       getData={/*getPerson*/ getData}
                     //       getImageUrl={/*getPersonImage*/ getImageUrl}>
                    //        <Record field="gender" label="Gender" />
                    //        <Record field="eyeColor" label="Eye Color" />     
                    //    </ItemDetails>
                    //);
                //}
        //    }
            
        //</SwapiServiceConsumer>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

//export default withSwapiService(PersonDetails,mapMethodsToProps);
export default withSwapiService(mapMethodsToProps)(PersonDetails);