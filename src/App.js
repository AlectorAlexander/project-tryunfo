import React from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
import MainCard from './components/MainCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <div className="ap">
          <Form />
          <MainCard />
        </div>
        <Cards />
      </div>
    );
  }
}

export default App;
