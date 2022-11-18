import React from 'react';
//(a)=>(b)=> a+b

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
};

export default withChildFunction;