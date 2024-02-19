import { View, Text } from 'react-native'
import React from 'react'
import ProfilStyle from './ProfilStyle'


import { TouchableOpacity,FlatList, ScrollView} from 'react-native'
import { useSelector } from 'react-redux';


const Profil = () => {
  const data =useSelector((state)=>state.auth.simptote)
  
 console.log(data.map((dt)=>dt))
  return (<ScrollView>
    <View>
      <Text>List des simptotes </Text>
    </View>
    <FlatList 
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={ProfilStyle.scrollableListeItem}>
            
            <Text style={ProfilStyle.mainText}>{item}</Text>
             
          </TouchableOpacity>
          )
        }}
         
        horizontal={false} style={ProfilStyle.scrollableLite}/>


       
        {/* FIN DE LISTE DACTIVITE */}
    </ScrollView>
 
  )
}

export default Profil