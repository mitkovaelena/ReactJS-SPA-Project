import React from 'react';
import Nav from './components/common/Nav';
import Alert from './components/common/Alert';
import Footer from './components/common/Footer';

class App extends React.Component {
        render() {
          return (
            <div className="App">
                <div className="container">
                    <div className="brand">Event Storm</div>
                </div>
                <Nav/>
                {this.props.children}       
                <Footer/>
            </div>
          );
        }
}

export default App;
