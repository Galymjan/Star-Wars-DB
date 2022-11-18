import React, {Component} from "react";
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator/error-indicator";
/*, getData*/
const withData= (View) =>{
    //console.log("withData View=",View);
    return class extends Component{
        state = {
            data : null,
            loading : false,
            error : false
        };
    
        componentDidUpdate(prevProps) {
            //console.log("withData componentDidUpdate prevProps=",prevProps);
            if(this.props.getData!==prevProps.getData){
               this.update();
            }
        }

        componentDidMount() {
            //console.log("withData componentDidMount");
            this.update();
        };

        componentWillReceiveProps(){
            //console.log("withData componentWillReceiveProps");
            this.update();
        }

        componentDidCatch(error, errorInfo){
            console.log("withData componentDidCatch error=",error,", errorInfo=",errorInfo);
        }
        update(){
            //console.log("withData update props=",this.props);
            this.setState({
                loading : true,
                 error : false
            });
            
            this.props.getData()
              .then((data) => {
                    //console.log("withData update getData data=",data);
                    this.setState({
                        data,
                        loading: false
                    });
                })
              .catch(() => {
                    //console.log("withData update exception=");
                    this.setState({
                        error : true,
                        loading : false
                    });
              });
        };

        render(){
           // this.update();
            const { data, loading , error } = this.state;

            //console.log("withData render data=", data,", loading",loading,", error=",error );

            if(loading){
                return <Spinner />;
            }

            if(error){
                return <ErrorIndicator />;
            }
  
            return <View {...this.props} data={data}/>
        }

    };
};

export default withData;