import React from 'react';
import ReactDOM from 'react-dom';
import Highscores from './Highscores';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {highscores: [], loaded: false};
      }

    render() {
        return <Highscores />
    }

    
}

ReactDOM.render(<App />, document.querySelector("#root"));