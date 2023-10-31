import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const persister = '/';

export { store, persister };
