import React from 'react';
import { Text, Image, TouchableOpacity} from 'react-native';

export default function Dice(props){
	// Get prop and return Require
	var dice_require;
		switch(props.dice){
			case 'd4':
			dice_require = require("../assets/d4.png");
			break;
			case 'd6':
			dice_require = require("../assets/d6.png");
			break;
			case 'd8':
			dice_require = require("../assets/d8.png");
			break;
			case 'd10':
			dice_require = require("../assets/d10.png");
			break;
			case 'd12':
			dice_require = require("../assets/d12.png");
			break;
			case 'd20':
			dice_require = require("../assets/d20.png");
			break;
		}
	
	
	return(
			<Image
				source={dice_require}
			>
			</Image>
	);
}

//Function response to return the roll.
