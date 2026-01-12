import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import counterReducer from './reducer'

// сховище = стан + як змінювати стан (редюсер)
const store = legacy_createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware())
)

export default store
