
import React,{useState} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import {Text} from 'react-native';
import Navigator from './routes/homestack'

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


