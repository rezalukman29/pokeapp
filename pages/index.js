
import Image from 'next/image'
import { useEffect } from 'react'
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList, setCurrentPokemon } from "../redux/action";
import {
    IonPage,
    IonContent,
    IonButton,
    IonActionSheet,
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle
  } from "@ionic/react";
import * as myFunction from '../components/function'


export default function index (){
    const dispatch = useDispatch();
    const fetchPokemon = () => dispatch(getPokemonList())
    const { pokemonList,currentPokemon } = useSelector(state => state.pokemon);
  
   useEffect(() => {
      fetchPokemon()
      console.log("Pokemon List", pokemonList)
     
  
  
  
      
     
    },[]);
    console.log("Current Pokemon", currentPokemon)
  
  
    const handleCurrentPokemon = pokemon => {
     dispatch(setCurrentPokemon(pokemon))
    }
  
    return(
        <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
          <IonTitle>Choose Your Pokemon</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  
        
  
        <IonContent scrollEvents={true}>
        <body className="bg-blue-500 overflow-auto ">
       

        <div class="overflow-auto  mt-10  flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul class="flex flex-col divide-y w-full mt-100">
                {pokemonList.sort((a, b) => (a.id > b.id) ? 1 : -1).map(function(d, idx){
         return (
          <Link href="/pokemonDetail">
                  <li class="flex flex-row" key={idx} onClick={() => handleCurrentPokemon(d)}>
                    <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                      <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" class="block relative">
                          <img alt="profil" src={d.sprites.front_default} class="mx-auto object-cover rounded-full h-10 w-10" />
                        </a>
                      </div>
                      <div class="flex-1 pl-1 mr-16">
                        <div class="font-medium dark:text-white">{d.name}</div>

                      </div>
                      <div class="text-gray-600 dark:text-gray-200 text-xs">
                        <div class="flex flex-around">
                          {d.types.map(function(types, idx){
                                            return (
                                              <div key={idx}>    
                                              <Image
                                              src={myFunction.urlTypes(types.type.name)}
                                              width={30}
                                              height={30}
                                              />
                                        
                                          </div>
                                            )
                                        })}
                          </div>
                      </div>
                    </div>
                  </li>
                  </Link>
                  )
       })}
        

                </ul>
            </div>
  
  
      </body>
      </IonContent>
    </IonPage>
    )

}