import React from "react";
import Bouton from "./Bouton.js";
import './App.css';

class Profil extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            background: "antiquewhite"

        }
    }

    changecolor() {
        if(this.state.background == "antiquewhite") {
            this.setState({
                background: "ghostwhite"
            })
        } else {
            this.setState({
            background: "antiquewhite"
            })
        }
    }

    render(){
        return (
            <div style={{backgroundColor: this.state.background}} className={"profil"}>
                <div className={"carac"}>
                <div className={"photo"}>Photo : {this.props.photo}</div><br></br>
                Prenom : {this.props.prenom}
                <div className={"nom"} style={{float : "right"}}>Nom : {this.props.nom}</div>
                    <br></br><br></br><br></br><br></br>
                <div className={"birthday"}>Birthday : {this.props.birthday}</div>
                </div>
                <button onClick={() => this.changecolor()}>Thème</button>
            </div>
        );
    }
}
export default Profil;