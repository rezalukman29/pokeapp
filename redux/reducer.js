import {
    GET_POKEMON_LIST_REQUEST,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_DETAIL_REQUEST,
    GET_POKEMON_DETAIL_SUCCESS,
    SET_CURRENT_POKEMON
} from './action'

const initialPokemon = {
    pokemonList: [],
    currentPokemon: '',

}


function Reducer(state = initialPokemon, action) {
    switch (action.type) {

   
    case GET_POKEMON_LIST_SUCCESS:
      return { ...state, pokemonList: action.payload};
          case SET_CURRENT_POKEMON:
          return { ...state, currentPokemon: action.payload};


    
            


  default:
    return state;
}
  }




  export default Reducer;