import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Context from '../Context/Context';
import previous from '../images/previous.png';
import play from '../images/playing.png';
import next from '../images/next.png';
import del from "../images/delete.png"
export class PlayList extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <View style={style.container}>
              <FlatList
                data={value.array}
                renderItem={({item}: {item: any}) => (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin:8
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        style={style.imageCard1}
                        source={{uri: `${item.artwork}`}}
                      />
                      <View>
                        <Text style={{color: 'white',marginTop:15}}>{item.title}</Text>
                        <Text style={{color: 'white'}}>{item.artist}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: 200,
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft:40,
                        marginTop:7
                      }}>
                      <Image style={{marginTop: 18,marginRight:20}} source={previous} />
                      <Image source={play} />
                      <Image style={{marginTop: 18,marginLeft:20}} source={next} /> 
                      <TouchableOpacity onPress={()=>{value.onDelete(item.id)}}>
                      <Image style={{marginTop: 18,marginLeft:20}} source={del} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          );
        }}
      </Context.Consumer>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 18,
  },
  imageCard1: {
    height: 70,
    width: 70,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default PlayList;
