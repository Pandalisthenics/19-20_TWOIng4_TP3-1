import React from "react";
import Bouton from "./Bouton.js";

class Publication extends React.Component{
    render(){
        return (
            <div className={"publication"} style={{backgroundColor: "antiquewhite"}}>
                <div className={"contenu_publi"}>
                Publication : {this.props.contenu}<br></br>
                <div className={"reaction"}>
                <button onClick = {this.props.onClickLike}>C'est super !</button>
                    <button onClick = {this.props.onClickUnlike}>En fait non</button><br></br>
                Likes : {this.props.likes}
                </div>
                </div>
            </div>
        );
    }
}
export default Publication;