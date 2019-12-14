import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider} from 'react-native';
import NumericInput from 'react-native-numeric-input';

import Dice from './src/Dice';
import Roll from './src/Roll';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      display: 0,
      newRollContent: [],
      cont: 1
    }
  }

 

  render(){
    return (
      <>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.setState({display:1, newRollContent:[diceResult("d4",this.state.cont)]})} style={styles.dice}>
        <Dice dice="d4"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.setState({display:1, newRollContent:[diceResult("d6",this.state.cont)]})} style={styles.dice}>
        <Dice dice="d6"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.setState({display:1, newRollContent:[diceResult("d8",this.state.cont)]})} style={styles.dice}>
       <Dice dice="d8"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.setState({display:1, newRollContent:[diceResult("d10",this.state.cont)]})} style={styles.dice}>
       <Dice dice="d10"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.setState({display:1, newRollContent:[diceResult("d12",this.state.cont)]})} style={styles.dice}>
       <Dice dice="d12"/>
      </TouchableOpacity>

      <TouchableOpacity style={handleDisplayRoll(this.state.display)} onPress={() => this.setState({display:0})}>
          <Roll display={this.state.display} newRoll={this.state.newRollContent}/>
        </TouchableOpacity>
      </View>

      <View style={styles.sideBar}>
        <NumericInput
          value={this.state.value} 
          onChange={value => this.setState({cont:value})} 
          totalWidth={240} 
          totalHeight={50} 
          iconSize={25}
          step={1.7}
          minValue={1}
          maxValue={7}
        />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 50,
    backgroundColor: '#f9ebd5',
    
  },
  rollStyle : {
    position: 'absolute',
    top: 150,
    left: 52,
    width: 250,
    height: 250,
    backgroundColor: '#aba9a9',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
   notDisplayRoll: {
    top: -150,
    position: 'absolute',
  },
  sideBar:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice:{

    margin: 10,
  }
});

function handleDisplayRoll(e){
    let viewDisplay;
    if (e) {
      viewDisplay = styles.rollStyle;
    }else{
      viewDisplay = styles.notDisplayRoll;
    }

    return viewDisplay;
  }

  function rollDice(d){
  let roll

  switch(d){
    case 'd4':
    roll = Math.random()*(5-1) + 1;
    break;
    case 'd6':
    roll = Math.random()*(7-1) + 1;
    break;
    case 'd8':
    roll = Math.random()*(9-1) + 1;
    break;
    case 'd10':
    roll = Math.random()*(11-1) + 1;
    break;
    case 'd12':
    roll = Math.random()*(13-1) + 1;
    break;
  }
  realroll = parseInt(roll);
  return realroll;
}

function diceResult(d,c){
  let result = []
  for (var i = 0; i < c; i++) {
    result[i] = rollDice(d);
  }
  return result;
}