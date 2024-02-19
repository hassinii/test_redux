import { StyleSheet } from "react-native";
import { PADDING } from "../../Constantes/Constantes";


const ProfilStyle= StyleSheet.create({
    header :{
       flexDirection:'column',
       justifyContent: 'space-between',
       alignItems :'center',
       paddingHorizontal : PADDING.horizontal,
       paddingVertical : PADDING.vertical,
       backgroundColor : 'white'
    },
    userImg:{
        width :  200,
        height:200,
        borderRadius:25
    },
    userName:{
        fontSize:16,
    },
    //style de flatlist 

    scrollableLite:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,


    },
    scrollableListeItem:{
        flexDirection:'column',
        paddingHorizontal:15,
        backgroundColor:'white',
        marginRight:15,
        elevation:1,

    },
    mainText:{
        fontWeight:'bold',
        fontSize:16,
    },
    subText:{
        marginTop:10,
        fontSize:12

    },
    container: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      counterContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      counter: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007bff',
      },
    });


export default ProfilStyle