import { createStackNavigator } from "react-navigation-stack";


import About from '../screens/about';


const screens = {
    About:{
        screen : About
    } 
    
};
const aboutStack = createStackNavigator(screens);

export  default aboutStack; 