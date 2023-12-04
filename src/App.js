
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
};



//  container
//    header
//    Body
//      sidebar
//         menu
//      body container
//          buttons list
//          video container
//              video cards


export default App;