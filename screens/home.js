import React , {useState} from 'react';
import {StyleSheet , Text , View ,Button,FLatList, FlatList,Image,TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global';
import employeeJson from '../mockdata/employee.json'

export default function Home( {navigation} ){
    var yourPicture = require ('../assets/icon.png');
    const employess = employeeJson;
    // const [employess,setEmployees] = useState([]);
    // const loadData = ()=>{
    //     setEmployess(fetch('../mockdata/employee.json'));
    // }
    // loadData();
    const pressHandler = (item)=>{
        navigation.navigate('ReviewDetail',{info:item});
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}> Employee List </Text>
            <FlatList
            data={employess}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>pressHandler(item)}>
                    <View style = {{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' ,borderWidth:1,padding:10,marginTop:10,borderRadius:5,borderStyle:'dashed'}}>
                        <Image source={{uri: item.image, width: 50, height: 50}} style={ {flex: 1, paddingLeft: 10,marginTop:10} }/>
                        <Text style={ {flex: 1, paddingLeft: 10,marginTop:10} }>{item.first_name}</Text>
                    
                    </View>
                </TouchableOpacity>
                
            )}/>
            
            
        </View>
    );
}
