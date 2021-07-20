import React from 'react';
import {StyleSheet , Text , View ,Button} from 'react-native'
import { globalStyles } from '../styles/global'
export default function Home( {navigation} ){
    const pressHandler = ()=>{
        navigation.navigate('ReviewDetail');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}> Home Page </Text>
            <Button title='Go To Review Details' onPress={pressHandler}/>
        </View>
    );
}
