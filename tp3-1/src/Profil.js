import React from "react";
import Bouton from "./Bouton.js";

class Profil extends React.Component{

    handleClick(){

        }

    render(){
        return (
            <div style={{backgroundColor: "red"}}>
                photo : {this.props.photo}
                Prenom : {this.props.prenom}
                Nom : {this.props.nom}
                Birthday : {this.props.birthday}
            </div>
        );
    }
}
export default Profil;