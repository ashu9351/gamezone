import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from './homestack';
import AboutStack from './aboutstack';

const screens = {

    Home:{
        screen:HomeStack
    },
    About:{
        screen:AboutStack
    }
};
const rootNav = createDrawerNavigator(screens);
export default createAppContainer(rootNav);