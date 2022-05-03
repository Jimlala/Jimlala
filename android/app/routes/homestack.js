import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/home';
// import Page2Screen from '../screens/page2';
import Navigator2 from '../routes/stack2';

const Stack1 = createNativeStackNavigator();

export default function Nav() {
    return (
        <Stack1.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', 
        headerStyle:{backgroundColor: 'grey'},
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
        },}}>
            <Stack1.Screen name ='Home' component={HomeScreen} options={{title:'Zeee'}}/>
            <Stack1.Screen name ='Nav2' component= {Navigator2} options={{headerShown: false, title:'Zeee', headerBackVisible: true}}/>
        </Stack1.Navigator>
    )
}
