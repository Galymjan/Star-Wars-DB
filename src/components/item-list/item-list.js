import React from "react";

import PropTypes from 'prop-types';

import './item-list.css';

const Itemlist = (props) => { 

    

        const { data, onItemSelected, children: renderLabel } = props;
        //debugger;
        console.log("Itemlist.js data=", data );
        const items  = data==null? null : data.map((item)=>{
            const { id } = item;
            //const label = this.props.renderItem(item);
            const label = renderLabel(item);
            return(
                <li className="list-group-item" 
                    key={id}
                    onClick={()=>onItemSelected(id)}>
                    {label}
                </li>
            );
        });

        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    
};

Itemlist.defaltProps = {
    onItemSelected : () => {}
};

Itemlist.propTypes = {
    onItemSelected : PropTypes.func,
    //data : PropTypes.arrayOf(PropTypes.object).isRequired,
    children : PropTypes.func.isRequired
}

export default Itemlist;
/*
const { getAllPeople } = new SwapiService();

export default withData(Itemlist, getAllPeople);
*/