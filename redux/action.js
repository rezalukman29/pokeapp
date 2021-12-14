export const GET_POKEMON_LIST_REQUEST = 'GET_POKEMON_LIST_REQUEST';
export const GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS';
export const GET_POKEMON_DETAIL_REQUEST = 'GET_POKEMON_DETAIL_REQUEST';
export const GET_POKEMON_DETAIL_SUCCESS = 'GET_POKEMON_DETAIL_SUCCESS';
export const SET_CURRENT_POKEMON = 'SET_CURRENT_POKEMON';



export const getPokemonList = () => async dispatch => {

    dispatch({
      type: GET_POKEMON_LIST_REQUEST,
      
    });
    let pokemonList = []
    let pokeList = []
  
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`);
        const json = await response.json();
        const arr = json.results;
  
        return Promise.all(arr.map(async pokemon => {
            const result = await fetchPokemon(pokemon);
            
            pokemonList.sort((a, b) => (a.id > b.id) ? 1 : -1).push(result);
            pokeList.push(result)
            
        })).then(() => {
          
            dispatch(getWeaknessPokemon(pokeList))
            return {pokeList};
        });

       
    } catch (e) {
        throw new Error(`fetching list of pokemons went wrong`);
    };
  


  };


  async function fetchPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return await response.json();
    } catch (e) {
        throw new Error(`fetching ${pokemon.name}'s details went wrong`);
    }
};


export const setCurrentPokemon = pokemon => dispatch => {
   
    dispatch({
      type: SET_CURRENT_POKEMON,
      payload: pokemon
    });
  };


  export const getWeaknessPokemon = pokeList => dispatch => {

    let pokeWeakness = []
  
    
  

                 Promise.all(pokeList.sort((a, b) => (a.id > b.id) ? 1 : -1).map(async pokeList => {
                    const resultWeakness = await fetchWeaknessPokemon(pokeList);
                         
                    pokeWeakness.push(resultWeakness)
                   
                })).then(() => {

                    for(var i in pokeList)
                          {
                            pokeList[i]['damage_relations'] = pokeWeakness[i]['damage_relations'];
                          }
                    
                  
                       
                          dispatch(getBreedingPokemon(pokeList))

                      return {pokeList};
               
                });

  };

  async function fetchWeaknessPokemon(pokeList) {
    try {
        const response = await fetch(`${pokeList.types[0].type.url}`);
        return await response.json();
    } catch (e) {
        throw new Error(`fetching 's details went wrong`);
    }
};
  


export const getBreedingPokemon = pokeList => dispatch => {

  let pokeBreeding = []
  


               Promise.all(pokeList.sort((a, b) => a.id > b.id ? 1:-1).map(async pokeList => {
                  const resultBreeding = await fetchBreedingPokemon(pokeList);
               
              
                  pokeBreeding.push(resultBreeding)
                
              })).then(() => {

                  for(var i in pokeList)
                        {
                          pokeList[i]['egg_groups'] = pokeBreeding[i]['egg_groups'];
                          pokeList[i]['generation'] = pokeBreeding[i]['generation'];
                          pokeList[i]['habitat'] = pokeBreeding[i]['habitat'];
                          pokeList[i]['hatch_counter'] = pokeBreeding[i]['hatch_counter'];
                          pokeList[i]['gender_rate'] = pokeBreeding[i]['gender_rate'];
                          pokeList[i]['capture_rate'] = pokeBreeding[i]['capture_rate'];
                          pokeList[i]['evolution_chain'] = pokeBreeding[i]['evolution_chain'];
                        }
                  
              
                        dispatch(getEvoPokemon(pokeList))
          
                      
                    return {pokeBreeding};
             
              });

};


async function fetchBreedingPokemon(pokeList) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeList.name}`);
      return await response.json();
  } catch (e) {
      throw new Error(`fetching ${pokeList.name}'s details went wrong`);
  }
};

export const getEvoPokemon = pokeList => dispatch => {

  let pokeEvo = []

  


               Promise.all(pokeList.sort((a, b) => a.id > b.id ? 1:-1).map(async pokeList => {
               
                  const resultEvo = await fetchEvoPokemon(pokeList);
                  var evoChain = [];
                  var evoData = resultEvo.chain;
                  
                  do {
                    var evoDetails = evoData['evolution_details'][0];
                  
                    evoChain.push({
                      "species_name": evoData.species.name,
                      "min_level": !evoDetails ? 1 : evoDetails.min_level,
                      "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                      "item": !evoDetails ? null : evoDetails.item
                    });
                  
                    evoData = evoData['evolves_to'][0];
                  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                  
               
                  pokeEvo.push(evoChain)
       
              })).then(() => {
                 

                  for(var i in pokeList)
                        {
                          pokeList[i]['evolution'] = pokeEvo[i];
              
                        }
                  
                   
                     
                  dispatch({
                    type: GET_POKEMON_LIST_SUCCESS,
                    payload: pokeList
                  })

            
                       
            
                    return {pokeEvo};
             
              });

};

async function fetchEvoPokemon(pokeList) {
  try {
      const response = await fetch(`${pokeList.evolution_chain.url}`);
      return await response.json();
  } catch (e) {
      throw new Error(`fetching ${pokeList.evolution_chain.url}'s details went wrong`);
  }
};