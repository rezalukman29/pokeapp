import React,{ useEffect } from 'react'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
  } from '@ionic/react';
  import { useSelector, useDispatch } from 'react-redux';
  import { TabGroup } from '@statikly/funk'
  import Image from 'next/image'
//   import {water} from '../assets/icons/icon'

import * as myFunction from '../components/function'




  
export default function pokemonDetail (){
    const dispatch = useDispatch();

    const { currentPokemon } = useSelector(state => state.pokemon);

useEffect(() => {
    console.log(currentPokemon)

  },[]);












  
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
        <body className='bg-blue-300 overflow:auto '>
    <div className="container mx-auto mt-20 px-4 flex justify-center">
      
       
    </div>
    <img alt="profil" src={currentPokemon.sprites.front_default} class="absolute  left-1/2 transform -translate-x-1/2  mx-auto object-cover  h-36 w-36 -mt-8 z-99999" />
    <div class='overflow-auto rounded-3xl bg-white box-content  max-w-full h-96 p-4 mt-10 flex flex-col justify-center align-items: center'>
      <div className="h-3xl bg-red-100 max-w-full flex mt-36"></div>
    <div class="m-auto"><p class="text-xl ">{myFunction.capitalizeFirstLetter(currentPokemon.name)}</p></div>
    <div class="m-auto"><button class="bg-blue-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-2xl inline-flex items-center h-8" >
        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M422.172 346.515C422.172 437.897 347.813 511.977 256.086 511.977C164.359 511.977 90 437.897 90 346.515C90 257.639 247.102 13.5479 255.718 0.22781C255.915 -0.0759384 256.258 -0.0759358 256.454 0.227813C265.07 13.5479 422.172 257.639 422.172 346.515ZM228.4 458.931C144.12 440.49 158.542 347.13 158.542 347.13C158.542 347.13 181.556 403.488 237.405 421.744C293.253 439.999 360.745 413.225 360.745 413.225C360.745 413.225 312.68 477.371 228.4 458.931Z" fill="white"/></svg>
        <span class="m-auto text-white text-xs">{currentPokemon.types[0].type.name.toUpperCase()}</span>
    </button></div>
    <div class="m-auto"><p class="text-xs text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum p</p></div>
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-8 px-8 transition-colors duration-150 rounded-2xl font-semibold text-xs"
            activeClassName="bg-blue-500 text-white "
            inactiveClassName="text-blue-500"
          >
            STATS
          </TabGroup.Tab>
       
          <TabGroup.Tab
            index={1}
            className="h-8 px-8 transition-colors duration-150 rounded-2xl font-semibold text-xs"
            activeClassName="bg-blue-500 text-white"
            inactiveClassName="text-blue-500"
          >
            EVOLUTION
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="p-4 transition-all transform h-64"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
    
    <table  class="min-w-full">

          <tbody>

          {currentPokemon.stats.map(function(stat, idx){
                return (
            
                        <tr key={idx}>
                          <td><span className="text-blue-500 text-xs font-semibold">{myFunction.setStat(stat.stat.name)}</span></td>
                          <td><span className="text-black text-xs">{myFunction.baseNumber(stat.base_stat)}</span></td>
                          <td><div class="relative  w-48">
                                                <div className="overflow-hidden h-3 text-xs flex rounded bg-gray-200 ">
                                                <div style={{ width:  myFunction.percentage(stat.base_stat) }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                        </div>
                                    </div></td>
                        </tr>

                        )
                        })}

          </tbody>
      </table>

          
         
        
    <span className="font-semibold flex justify-center mt-4 text-blue-500 mb-2">Weakness</span>
   
    <div class="grid grid-cols-3 gap-3">
    {currentPokemon.damage_relations.double_damage_from.map(function(types, idx){
         return (
            <div key={idx} className="mx-5">    
                <Image
                src={myFunction.urlTypes(types.name)}
                width={30}
                height={30}
                />
                <span className="font-semibold">2X</span>
            </div>
         )
    })}
    </div>

    <span className="font-semibold flex justify-center mt-4 text-blue-500 mb-2">Abilities</span>
    <div class="grid grid-cols-1 gap-1">
    {currentPokemon.abilities.map(function(ability, idx){
      return (
        
        <span className="font-medium text-blue-500 text-sm" key={idx}>{myFunction.capitalizeFirstLetter(ability.ability.name)}</span>
      )
    })}
    </div>

    <span className="font-semibold flex justify-center mt-4 text-blue-500 mb-2">Breeding</span>

    <div class="grid grid-cols-3 gap-2 mb-1">
      <div><span className="font-medium text-blue-500 text-sm">Egg Group</span></div>
      <div><span className="font-medium text-blue-500 text-sm">Hatch Time</span></div>
      <div><span className="font-medium text-blue-500 text-sm">Gender</span></div>
    </div>

    <div class="grid grid-cols-3 gap-2">
        <div class="grid grid-cols-1 gap-1">
        {currentPokemon.egg_groups.map(function(egg, idx){
          return (
            
            <span className="text-xs" key={idx}>{myFunction.capitalizeFirstLetter(egg.name)} </span>
          )
        })}
        </div>
        <div class="grid grid-cols-1 gap-1">
      
            <span className="text-xs" >{Object.keys(currentPokemon.moves).length} Step</span>
            <span className="text-xs" >{currentPokemon.hatch_counter} Cydes</span>
     
        </div>
      <div><span className="text-xs">Gender</span></div>
    </div>

    <span className="font-semibold flex justify-center mt-4 text-blue-500  text-base">Capture</span>

      <div class="grid grid-cols-3 gap-3 mb-1  mr-4">
        <div><span className="font-medium text-blue-500 text-sm">Habitat</span></div>
        <div><span className="font-medium text-blue-500 text-sm">Generation</span></div>
        <div><span className="font-medium text-blue-500 text-sm">Rate</span></div>
      </div>




      
      <div class="grid grid-cols-3 gap-3 mr-4">
          <div class="grid grid-cols-1 gap-1">          
              <span className="text-xs">{currentPokemon.habitat.name}</span>    
          </div>
          <div class="grid grid-cols-1 gap-1">     
              <span className="text-xs" >{currentPokemon.generation.name} </span>
          </div>
          <div class="grid grid-cols-1 gap-1">    
              <span className="text-sm text-blue-500" >{currentPokemon.capture_rate} % </span>
          </div>
      </div>

    <span className="font-semibold flex justify-center mt-4 text-blue-500  text-base">Sprites</span>
      <div class=" flex justify-around ">
          <div class="grid grid-cols-1 gap-1"> 
              <span className="text-sm text-blue-500" >Normal</span>
              <img src={currentPokemon.sprites.front_default} class=" mx-auto object-cover  h-18 w-18" />
          </div>
          <div class="grid grid-cols-1 gap-1"> 
              <span className="text-sm text-blue-500" >Shiny</span>
              <img src={currentPokemon.sprites.front_shiny} class=" mx-auto object-cover  h-18 w-18" />
          </div>
    
     
      </div>

 
   
            
        </TabGroup.TabPanel>

        <TabGroup.TabPanel
          index={1}
          className="p-4 transition-all transform h-64"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
            <div class=" grid grid-cols-3 gap-3 flex  ">
        
              <span className="text-sm text-blue-500" >{myFunction.capitalizeFirstLetter(currentPokemon.evolution[0].species_name)}</span>
             
              <span className="text-sm" >Level {currentPokemon.evolution[1].min_level}</span>
             
        
              <span className="text-sm text-blue-500" >{myFunction.capitalizeFirstLetter(currentPokemon.evolution[1].species_name)}</span>
        
            </div>

            <div class=" grid grid-cols-3 gap-3 flex w-full  ">
        
        <span className="text-sm text-blue-500" >{myFunction.capitalizeFirstLetter(currentPokemon.evolution[1].species_name)}</span>
       
        <span className="text-sm" >Level {currentPokemon.evolution[2].min_level}</span>
       
  
        <span className="text-sm text-blue-500" >{myFunction.capitalizeFirstLetter(currentPokemon.evolution[2].species_name)}</span>
  
      </div>


        </TabGroup.TabPanel>
      </TabGroup>
    
    </div>
    </div>
</body>   
</IonPage>
    )

}