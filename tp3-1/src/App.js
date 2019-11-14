import React from 'react';
import './App.css';
import Bouton from "./Bouton.js";
import Profil from "./Profil.js";
import Publication from "./Publication";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      profils : [
        {
          photo: "imgJeanne",
          prenom: "Jeanne",
          nom: "Morin",
          birthday: "12/01/2001",
          textePublication: "raconte sa vie et tt le monde s'en moque",
          nbLikes: 121
        },
        {
          photo: "imgMartine",
          prenom: "Martine",
          nom: "Coanet",
          birthday: "01/03/1923",
          textePublication: "j'ai été au poney après je ramassé des champignon dans la foret lol, c'est vraiment drole ça connasse !",
          nbLikes: 1023
        },
        {
          photo: "imgClaude",
          prenom: "Claude",
          nom: "Bouvier",
          birthday: "27/08/1962",
          textePublication: "hier j'ai fais une raclette, je me prépare pour ma compétition du plus gros mangeur, je suis triple champion du monde",
          nbLikes: 12
        }
      ],
      actifProfil: 0
    }
  }

  handleClick(i){
    this.setState({actifProfil : i});

  }

  handleClickLike(i){
      this.state.profils[i].nbLikes = this.state.profils[i].nbLikes + 1;
      this.forceUpdate();
  }

  handleClickUnlike(i){
    this.state.profils[i].nbLikes = this.state.profils[i].nbLikes - 1;
    this.forceUpdate();
  }



  render(){
    return (
        <body>
          <nav className="nav">
            <Bouton prenom = "Jeanne" onClick={() => this.handleClick(0)}/>
            <Bouton prenom = "Martine" onClick={() => this.handleClick(1)}/>
            <Bouton prenom = "Claude" onClick={() => this.handleClick(2)}/>
          </nav>
          <main className= "main">
            <Profil
                photo={this.state.profils[this.state.actifProfil].photo}
                prenom={this.state.profils[this.state.actifProfil].prenom}
                nom={this.state.profils[this.state.actifProfil].nom}
                birthday={this.state.profils[this.state.actifProfil].birthday}
            />

            <Publication
                  contenu = {this.state.profils[this.state.actifProfil].textePublication}
                  onClickLike = {() => this.handleClickLike(this.state.actifProfil)}
                  onClickUnlike = {() => this.handleClickUnlike(this.state.actifProfil)}
                  likes = {this.state.profils[this.state.actifProfil].nbLikes}
            />
          </main>
        </body>
    );
  }
}
export default App;
