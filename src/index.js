import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};

    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
        if(this.state.errorMessage && !this.state.late){
            return (<div>Error: {this.state.lat}</div>
            )
        }
    }

    componentDidUpdate(){
        if(!this.state.errorMessage && this.state.lat){
            return (
            <div>Latitude: {this.state.lat} </div>
            );
        }
    }
    render() {
        return <div>Loading...</div>;
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
