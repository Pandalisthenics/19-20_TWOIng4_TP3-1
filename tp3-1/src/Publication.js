import React from "react";
import Bouton from "./Bouton.js";

class Publication extends React.Component{
    render(){
        return (
            <div>
                Publication : {this.props.contenu}<br></br>
                <button onClick = {this.props.onClickLike}>C'est super !</button>
                <button onClick = {this.props.onClickUnlike}>En fait non</button>
                Likes : {this.props.likes}
            </div>
        );
    }
}
export default Publication;