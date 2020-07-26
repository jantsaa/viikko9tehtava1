import React from 'react';
import { render } from 'react-dom';


let highscoreData = [
    { id: 1, name: 'Jason', score: 4000 },
    { id: 2, name: 'Make', score: 3000 },
    { id: 3, name: 'Bill', score: 2000 },
    { id: 4, name: 'Liza', score: 1000 }
  ];

class Highscores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {highscores: [], loaded: false};
    }

    getHighscores = () => {
        setTimeout(() => this.setState({highscores: highscoreData, loaded:true}), 3000);
    }

    componentDidMount() {
        this.getHighscores();
    }

   loadAgain = () => {
       this.setState({highscores: [], loaded:false});
       this.getHighscores();
   }

    render() {
        // Jos ei ole ladattu
        if( !this.state.loaded) {
            return(
                <div>
                    <h1>Highscores</h1>
                    <p>Loading...</p>
                </div>
            )
        }
        // Jos on ladattu
        else {
            return (
                <div>
                    <table border="1"><tbody>
                {
                    this.state.highscores.map((highscore, index) =>
                            <tr key={index}>
                            <td>{highscore.id}</td>
                            <td>{highscore.name}</td>
                            <td>{highscore.score}</td>
                            </tr>
                    )
                }
                </tbody></table>
                    <button onClick={this.loadAgain}>Load again</button>
                </div>
            )
        }
    }
}

export default Highscores;
