import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Slider} from 'react-native';
import  AntDesign from 'react-native-vector-icons/dist/AntDesign';
import  Entypo from 'react-native-vector-icons/dist/Entypo';
import  Ionicons  from 'react-native-vector-icons/dist/Ionicons';
import  Icon from 'react-native-vector-icons/dist/FontAwesome';

const gray = "#91A1BD";

const App = () => {
  const MenuMarph = ({children,size,style}) => {
    return(
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {width:size || 40, height: size || 40, borderRadius:size / 2 || 40/2},
              style
            ]} 
          >
            {children}
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf:"stretch"}}>
        <View style={{marginHorizontal:32, marginTop: 32}}>
          <View style={styles.topContainer}>
            <MenuMarph size={48}>
                <AntDesign name="arrowleft" size={20} color={gray}/>
            </MenuMarph>

            <View>
              <Text  style={ styles.playing}>PLAYING NOW</Text>
            </View>
            <MenuMarph size={48}>
            <Entypo name="menu" size={24} color={gray}/>
            </MenuMarph>
          </View>

          <View style={styles.songArtContainer}>
            <MenuMarph size={250}>
              <Image source={require('./assets/image_2.jpg')} style={styles.songArt}/>
            </MenuMarph>
          </View>
          <View style={styles.songContainer}>
            <Text style={styles.title}>Jesus My Love</Text>
            <Text style={styles.artist}>Akindave</Text>
          </View>
          <View style={styles.trackContainer}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.time}>1:23</Text>
                <Text style={styles.time}>3:23</Text>
            </View>
            <Slider minimumValue={0} 
                    maximumValue={1} 
                    minimumTrackTintColor="#8AAAFF" 
                    maximumTrackTintColor="#DAE6F4"
                    thumbTintColor="#7B9BFF"
                    />
          </View>
          <View style={styles.controlsContainer}>
            <MenuMarph size={60}>
              <Icon name="backward" size={24} color={gray}/>
            </MenuMarph>

            <MenuMarph size={60} style={{ backgroundColor:"#8AAAFF", borderColor:'#8AAAFF'}}>
              <Ionicons name="ios-pause" size={24} color="#fff"/>
            </MenuMarph>

            <MenuMarph size={60}>
              <Icon name="forward" size={24} color={gray}/>
            </MenuMarph>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#deeffd",
      alignItems:"center"
    },
    topContainer:{
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems:"center",
    },
    inner:{
      backgroundColor: "#DEE9F7",
      alignItems:"center",
      justifyContent:"center",
      borderColor:"#E2ECFD",
      borderWidth:1,
    },
    topShadow:{
      backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems: 'center',
        padding:0,
        elevation: 2,
    },
    bottomShadow:{
      shadowOffset:{
        width:6,
        height:6
      },
      shadowOpacity:1,
      shadowRadius:6,
      shadowColor:"#B7C4DD"
    },
    playing:{
      color:gray,
      fontWeight:"800"
    },
    songArtContainer:{
      marginVertical:20,
      alignItems:"center"
    },
    songArt:{
      width:200,
      height:200,
      borderRadius:150,
      borderColor:"#D7E1F3",
      borderWidth:10
    },
    songContainer:{
      alignItems:"center"
    },
    title:{
      fontSize:14,
      color:"#6C7A93",
      fontWeight:"800"
    },
    artist:{
      fontSize:14,
      marginTop:6,
      color:gray,
      fontWeight:"500"
    },
    trackContainer:{
      marginTop:32,
      marginBottom: 64
    },
    time:{
      fontSize:18,
      color:gray,
      fontWeight:"700"
    },
    controlsContainer:{
      flexDirection:"row",
      justifyContent:"space-around"
    }
});