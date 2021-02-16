import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import app from 'modules/app.module'

export const defaultSnakeList = [
  {
    id: 0,
    name: 'Asian vine snake',
    latin_name: 'Ahaetulla prasine',
    description: 'mildly venomous, non harmful to humans',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 1,
    name: 'many-banded krait',
    latin_name: 'Bungarus multicinctus',
    description: 'venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 2,
    name: 'golden tree snake',
    latin_name: 'Chrysopelea ornate',
    description:
      'mildly venomous, not considered so dangerous to humans that require medical importance',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 3,
    name: 'painted bronzeback',
    latin_name: 'Dendrelaphis pictus',
    description: 'non venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 4,
    name: 'common mock viper',
    latin_name: 'Psammodynastes pulverulentus',
    description: 'non venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 5,
    name: 'Indian rat snake',
    latin_name: 'Ptyas mucosa',
    description: 'non-venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 6,
    name: 'red-necked keelback',
    latin_name: 'Rhabdophis subminiatus',
    description: 'venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 7,
    name: 'white-lipped pit viper',
    latin_name: 'Trimeresurus albolabris',
    description: 'venomous',
    image: {
      image: 'sample_snake',
    },
  },
  {
    id: 8,
    name: 'Reticulated Python',
    latin_name: 'Malayopython reticulatus',
    description: 'non-venomous',
    image: {
      image: 'sample_snake',
    },
  },
]

const analytics = () => (next) => (action) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: action.type,
    payload: action.payload,
  })

  return next(action)
}

// Redux store config
const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    app,
  })

  // Middleware and store enhancers
  const middlewares = [
    thunk,
    process.env.NODE_ENV !== 'production' && logger,
    analytics,
  ].filter(Boolean)
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(reducers, initialState, enhancer)

  return store
}

const store = configureStore()

export default store
