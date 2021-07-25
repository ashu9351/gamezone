
import React,{useState} from 'react';
import {Text} from 'react-native';
import * as Font from 'expo-font';

import AppLoading  from 'expo-app-loading';
//import Navigator from './routes/homestack'
import Navigator from './routes/drawernav';




const loadFont = ()=>Font.loadAsync({
    'merrie-regular':require('./assets/fonts/Merriweather-Regular.ttf'),
    'merrie-bold':require('./assets/fonts/Merriweather-Bold.ttf')
  });

export default function App() {
  const [isFontLoaded,setFontLoaded] = useState(false);
  if(isFontLoaded){
    return (
      //initial changes again
       <Navigator/>
      
    );
  }else{ 
    return(
        
        <AppLoading
        startAsync = {loadFont}
        onFinish = {()=>setFontLoaded(true)}
        onError = {()=>alert('Error')}
        />
    );
  }
}


