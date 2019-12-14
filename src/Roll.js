import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Roll(props){
	
		return <>
			
		<View > 
			<Text style={styles.textstyle}>{props.newRoll.toString()}</Text>
		</View>
			
		</>
	}

const styles = StyleSheet.create({
  textstyle : {
  	fontSize: 60,
  	
  },
});


