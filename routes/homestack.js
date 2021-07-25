import { createStackNavigator } from "react-navigation-stack";

import Home from '../screens/home';
import ReviewDetail from "../screens/reviewdetail";

const screens = {
    Home:{
        screen : Home
    } ,
    ReviewDetail : {
        screen : ReviewDetail
    }
};
const homeStack = createStackNavigator(screens);

export  default homeStack; 