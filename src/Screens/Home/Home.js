import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashoboardStyles from './style'
import { fakeActivity } from '../../../fakeData/fakeDta'
import { useSelector } from 'react-redux'

const Home = () => {
  const dataPatient=useSelector((state)=>state.auth.patient)
 
  return (
    <ScrollView>
      {/*debut de header*/ }
        <View style={dashoboardStyles.header}>
            
            <Image source={require('./hassiniImage.jpg')} style={dashoboardStyles.userImg}/>
            <Text style={dashoboardStyles.userName}>{dataPatient.name} {dataPatient.prenom}</Text>
        </View>
        <View style={dashoboardStyles.container}>
      <Text style={dashoboardStyles.title}>Nombre de consultations</Text>
      <View style={dashoboardStyles.counterContainer}>
        <Text style={dashoboardStyles.counter}>{dataPatient.nombreOfConsultations}</Text>
      </View>
    </View>
        {/*fin de header */}
       
        {/* LISTE DES ACTIVITES  */}
      

       
        {/* FIN DE LISTE DACTIVITE */}
    </ScrollView>
  )
  
  
}

export default Home