import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService =(mapMethodsToProps) => (Wrapped) =>{
//const withSwapiService =(Wrapped,mapMethodsToProps) =>{
    return (props) => {
       return( 
        <SwapiServiceConsumer>
            {
                (swapiService) => {
                    //console.log("withSwapiService swapiService=", swapiService );
                    //console.log("withSwapiService props=", props );
                    
                    const serviceProps = mapMethodsToProps(swapiService);

                    //console.log( " serviceProps="+serviceProps );

                    return (
                      //<Wrapped {...props} swapiService={swapiService}/>  
                      <Wrapped {...props} {...serviceProps}/>  
                    );
                }
            }
           
        </SwapiServiceConsumer>
       );
    }
};

export default withSwapiService;
