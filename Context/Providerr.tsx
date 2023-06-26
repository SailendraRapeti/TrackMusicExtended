import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Context from './Context';

interface Iprops {
  children: any;
}
interface Istate {
  array: any;
}

class Providerr extends Component<Iprops, Istate> {
  state = {
    array: [],
  };
  onAdd = (item: any) => {
    const {array} = this.state;
    let isValu = false;
    array.map((each: any) => {
      if (each.id === item.id) {
        isValu = true;
      }
    });
    if (isValu === false) {
      this.setState({array: [...array, item]});
    }
  };
  onDelete = (id: any) => {
    const {array} = this.state;
    const filterData = array.filter((each: any) => {
      each.id !== id;
    });
    this.setState({array: filterData});
  };
  render() {
    const {array} = this.state;
    console.log(array);

    return (
      <Context.Provider
        value={{
          array: this.state.array,
          onAdd: this.onAdd,
          onDelete: this.onDelete,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Providerr;
