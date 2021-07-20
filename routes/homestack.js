import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
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

export  default createAppContainer(homeStack); 