import React from 'react';
import {StyleSheet , Text , View ,Button} from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetail( {navigation}){
    const pressHandler = ()=>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}> Review detail Page </Text>
            <Button title='Go To Home' onPress={pressHandler}/>
        </View>
    );
}
