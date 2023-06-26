import {StyleSheet, Text, View, Image,FlatList,Modal, Alert,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import bell from '../images/bell.png';
import settings from '../images/settings.png';
import rec from '../images/rectangle.png';
import download from "../images/download.png"

import dots from "../images/dots.png";
import down from "../images/down.png";
import love from "../images/love.png";
import slide from "../images/slider.png";
import shuffle from "../images/shuffle.png";
import previous from "../images/previous.png";
import play from "../images/playing.png";
import next from "../images/next.png";
import rotate from "../images/rotate.png";
import music from "../images/music.png";
import sender from "../images/sender.png";
import nav from "../images/nav.png";
import Context from '../Context/Context';

const songs = [
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '1',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
    id: '2',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
    url: 'https://samplesongs.netlify.app/Faded.mp3',
    id: '3',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
    url: 'https://samplesongs.netlify.app/Solo.mp3',
    id: '5',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
    id: '6',
  },
];
interface Istate{
    modalVisible: boolean;
    data:any;
}
export class Home extends Component<Istate> {
    state={
        modalVisible:false,
        data:"",
    }
    // onAdd=()=>{
    //     console.log("123")
    // }
  render() {
    const {data}=this.state
    console.log(data)
    return (
        <Context.Consumer>
            {value=>{
                return(
                      
      <View style={style.container}>
      <View style={style.hori}>
        <View style={style.hori1}>
          <Text
            style={{
              color: '#844DFB',
              fontWeight: '800',
              fontFamily: 'Lato',
              fontSize: 16,
            }}>
            For You
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              fontFamily: 'Lato',
              fontSize: 16,
              marginLeft: 30,
            }}>
            Trending
          </Text>
        </View>

        <View style={style.hori1}>
          <Image style={{marginRight: 30}} source={bell} />
          <Image source={settings} />
        </View>
      </View>
      <Text
        style={{
          color: '#FFFFFF',
          fontWeight: '800',
          fontFamily: 'Lato',
          fontSize: 16,
          marginTop: 30,
        }}>
        Recently Played
      </Text>

      <Image style={style.img} source={rec} />

      <Text
        style={{
          color: '#FFFFFF',
          fontWeight: '800',
          fontFamily: 'Lato',
          fontSize: 16,
          marginTop: 30,
        }}>
        Daily Mix
      </Text>

      <FlatList
        horizontal
        data={songs}
        renderItem={({item}: {item: any}) => (
          <View style={{marginTop: 15}}>
            <Image
              style={style.imageCard}
              source={{uri: `${item.artwork}`}}
            />
            <View style={{width: 141, height: 40,marginRight:15}}>
              <Text style={{color: '#E4DEEF', textAlign: 'center'}}>
                Mellow songs from the 2010s.
              </Text>
            </View>
          </View>
        )}
      />

      <View style={{padding:6,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={{
          color: '#FFFFFF',
          fontWeight: '800',
          fontFamily: 'Lato',
          fontSize: 16,marginBottom:15
        }}>Charts</Text>
          <Text style={{
              color: '#844DFB',
              fontWeight: '800',
              fontFamily: 'Lato',
              fontSize: 16,
            }}>More > </Text>
      </View>
<View style={style.card}>
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>


      <Text style={{
          color: '#FFFFFF',
          fontWeight: '800',
          fontFamily: 'Lato',
          fontSize: 16,marginBottom:15
        }}>Top 100 Nigeria</Text>
          <Text style={{
               color: '#FFFFFF',
              fontWeight: '800',
              fontFamily: 'Lato',
              fontSize: 16,
            }}>More > </Text>
</View>

  
  <FlatList data={songs}
 renderItem={({item}:{item:any})=>(
<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
  <TouchableOpacity  onPress={() => this.setState({modalVisible: true,data:item})} style={style.card1}>
      <Text  style={{
          color: '#FFFFFF',
          fontWeight: '800',
          fontFamily: 'Lato',
          marginRight:5,
          marginTop:7,
          fontSize: 14,}}>{item.id}</Text>
         
      <Image
              style={style.imageCard1}
              source={{uri: `${item.artwork}`}}
            />
<View>

      <Text  style={{
          color: '#FFFFFF',
          fontWeight: '400',
          fontFamily: 'Lato',
          fontSize: 14,}}>{item.title}</Text>
      <Text style={{color:"white",fontSize:12,}}>{item.artist}</Text>
  </View>    
      </TouchableOpacity>
<Image source={download}/>
</View>
 )}/>


</View>

<Modal visible={this.state.modalVisible}
animationType="slide"
onRequestClose={() => {
  Alert.alert('Modal has been closed.');
  this.setState({modalVisible: !this.state.modalVisible});
}}
>
  <View style={style.modalContainer}>
  <View  style={style.model1}>

 
      <Image style={{marginTop:10}} source={down}/>
  <Text style={{fontSize: 16,color:"#FFFFFF",fontWeight:"bold",fontSize:16,fontFamily:"Urbanist"}}>“Top 100 Nigeria”</Text>
  <Image style={{marginTop:10}} source={dots}/>
  </View>

  
  <Image
              style={style.modelImg}
              source={{uri: `${data.artwork}`}}
            />
<View style={{marginTop:20,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>


<View>
  <Text style={{
          color: '#FFFFFF',
          fontWeight: '400',
          fontFamily: 'Lato',
          fontSize: 24,marginLeft:20}}>{data.title}</Text>
  <Text style={{color:"white",fontSize:14,marginLeft:20}}>{data.artist}</Text>
</View>
<TouchableOpacity onPress={()=>{value.onAdd(data)}} >
<Image style={{marginRight:24}} source={love}/>
</TouchableOpacity>
</View>


<View style={{marginTop:24,marginLeft:20}}>
  <Image style={{width:330}} source={slide}/>
<View style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
<Text style={{color:"white"}}>2.01</Text>
  <Text style={{color:"white",marginRight:28}}>-1.07</Text>
</View>
 
</View>

<View style={style.musicPlay}>
<Image style={{marginTop:18}} source={shuffle}/>
<Image  style={{marginTop:18}} source={previous}/>
<Image  source={play}/>
<Image  style={{marginTop:18}}source={next}/>
<Image  style={{marginTop:18}} source={rotate}/>
</View>

<View style={{marginTop:60,display:"flex",flexDirection:"row",justifyContent:"space-between",marginLeft:20}}>
  <View style={{display:"flex",flexDirection:"row"}}> 
  <Image style={{marginRight:7}} source={music}/>
  <Text style={{color:"white",marginTop:7}}>Earpods</Text>
  </View>

  <View style={{display:"flex",flexDirection:"row"}}>
      <Image source={sender}/>
      <Image style={{marginRight:24,marginLeft:25,marginTop:6}}source={nav}/>
  </View>
</View>
  </View>
  

</Modal>

</View>

                )
            }

            }
      
    
</Context.Consumer>   
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    padding: 15,
  },
  hori: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hori1: {
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    marginTop: 15,
    width: 380,
    borderRadius: 15,
  },
  imageCard: {
    height: 139,
    width: 139,
    borderRadius: 10,
    marginRight:15
  },
  card:{
    width:350,
    height:184,
    borderRadius:10,
    backgroundColor:"rgba(217, 217, 217, 0.06) 97.51%)",
    marginLeft:10,
    padding:15
  },
  imageCard1:{
    height:36,
    width:36,
    borderRadius:5,
    marginRight:5
  },
  card1:{
    width:150,
    display:"flex",
    flexDirection:"row",
    margin:4
  

  },
  modalContainer:{
    backgroundColor:"#1E1E1E",
    flex:1,
    padding:15,
  },
  model1:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  modelImg:{
    width:335,
    height:305,
    borderRadius:10,
    marginTop:45,
    marginLeft:20
  },
  musicPlay:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:300,
    height:70,
    marginTop:60,
    marginLeft:30
  }
});
export default Home;
