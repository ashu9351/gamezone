import React from 'react';
import {StyleSheet , Text , View ,Button ,Image} from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetail( {navigation}){
    const employeeInfo = navigation.getParam('info');
    console.log(employeeInfo);
    const pressHandler = ()=>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}> Details </Text>
            <View style={{alignItems:'center'}}>
                <Image source={{uri: employeeInfo.image, width: 150, height: 150}} />
                <View style={ {height:'auto',padding: 10,margin:10,padding:10,marginTop:10,borderRadius:5,width:'100%',textAlign:'center',alignItems:'center',backgroundColor:'#fff',shadowColor: '#470000',shadowOffset: {width: 0, height: 1},shadowOpacity: 0.2,elevation: 1} }>
                    <Text style={{padding:10}}>First Name : {employeeInfo.first_name}</Text>
                    <Text style={{padding:10}}>Last Name : {employeeInfo.last_name}</Text>
                    <Text style={{padding:10}}>Gender : {employeeInfo.gender}</Text>
                    <Text style={{padding:10}}>Email : {employeeInfo.email}</Text>
                </View>
                
            </View>
            
            <Button title='Go To Home' onPress={pressHandler}/>
        </View>
    );
}
