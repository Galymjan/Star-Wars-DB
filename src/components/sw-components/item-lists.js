import React from "react";
import Itemlist from "../item-list";
import { withData, withSwapiService,compose,withChildFunction } from "../hoc-helpers";
//import SwapiService from "../../services/swapi-service";
/*
const swapiService = new SwapiService();

const{
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;
*/

//(a)=>(b)=> a+b
/*
const withChildFunction = (fn)=>(Wrapped) => {
//const withChildFunction = (Wrapped, fn) => {
    //console.log("withChildFunction     Wrapped=",Wrapped.name,", fn=",fn.name);
    return (props) => {
        //console.log("withChildFunction Wrapped="+Wrapped.name+", fn="+fn.name+" return, props=",props);
        return (
          <Wrapped {...props}>
              {fn}
          </Wrapped>  
        );
    }
};*/
/*
const ListWithChildren = withChildFunction(
    Itemlist ,
    ({name}) => <span>{name}</span>
);
*/
const renderName = ({name}) => <span>{name}</span>;

const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };        
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };        
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };        
};
const PersonList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                        )(Itemlist);

/*
const PersonList = withSwapiService(mapPersonMethodsToProps)(
    withData(
        withChildFunction(renderName)(Itemlist))
        //withChildFunction(Itemlist,renderName))
            
    );
    */
/*
const PersonList = withSwapiService(mapPersonMethodsToProps)(
                     withData(
                         //withChildFunction(renderName)(Itemlist))
                         withChildFunction(Itemlist,renderName))
                     );
/*, 
                     getAllPeople*/
const PlanetList = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName)                        
                        )(Itemlist);
/*                     
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(Itemlist)/*,getAllPlanets
                            //withChildFunction(Itemlist, renderName)
                            )
                        );
*/                        
/*,getAllPlanets*/
/*const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
        withData(
            //withChildFunction(renderName)(Itemlist)
            withChildFunction(Itemlist, renderName)
            )
        );
*/
const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName))(Itemlist);
/*,getAllStarships*/
/*const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
        withData(
            //withChildFunction(renderModelAndName)(Itemlist)
            withChildFunction(Itemlist, renderModelAndName)
            )
        );
        */

export{
    PersonList,
    PlanetList,
    StarshipList
};