import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import logo from './logo.svg';
import './App.css';
import CakeBox from './components/CakeBox';
import { buyCake } from './redux/cake/cakeactions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeBox />
      </div>
    </Provider>

  );
}

// const mapStateToProps = state => {
//   return {
//     numOfCakes: state.numOfCakes
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: () => dispatch(buyCake())
//   }
// }


export default App;
