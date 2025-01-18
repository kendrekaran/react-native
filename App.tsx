import {
  SafeAreaView,
  ScrollView
} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElvatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList '


export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCards/> 
        <ElvatedCards/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}