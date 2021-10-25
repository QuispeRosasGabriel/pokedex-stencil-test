import {
  SEARCH_POKEMON,
  SEARCH_POKEMON_ERROR,
  SEARCH_POKEMON_EXITO,
} from "../types";

const initialState = {
  pokemon: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_POKEMON:
      return {
        ...state,
        loading: action.payload,
        pokemon: {},
      };
    case SEARCH_POKEMON_EXITO:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    case SEARCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
