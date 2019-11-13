import React from "react";

class Bouton extends React.Component{
    render(){
        return (
            <div>
                <button onClick = {this.props.onClick}> {this.props.prenom} </button>
            </div>
        );
    }
}
export default Bouton;