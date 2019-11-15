import React from "react";
import Bouton from "./Bouton.js";
import './App.css';
import Ours from './ours.jpg'

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
                background: "cadetblue"
            })
        } else {
            this.setState({
            background: "antiquewhite"
            })
        }
    }

    render(){
        return (

                <div className="card" style={{width: 18 + 'rem' , backgroundColor: this.state.background}}>
                    <img src={Ours} className="card-img-top" alt="not found"/>
                        <div className="card-body">
                            <h5 className="card-title">Prenom : {this.props.prenom}</h5>
                            <p className="card-text">Nom : {this.props.nom}<br></br>Birthday : {this.props.birthday}</p>
                            <button onClick={() => this.changecolor()}>Thème</button>
                        </div>
                </div>
        );
    }
}
export default Profil;