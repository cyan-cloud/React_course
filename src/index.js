import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCTDiMLU7iv-df-EnY-kuf013l1_waVs6Y';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}
ReactDOM.render(<App/>, document.querySelector('.container'));
