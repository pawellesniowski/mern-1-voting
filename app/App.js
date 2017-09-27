import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


class App extends React.Component {
    render(){
        return(
            <div>
                < Navbar />
                {this.props.children}
                < Footer />
            </div>
        );
    }
}

export default App;
