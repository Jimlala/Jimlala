import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/base";
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
// import HomeScreen from '../screens/home';
import Page2Screen from '../screens/page2';
import Page3Screen from "../screens/page3";

const Stack2 = createNativeStackNavigator();

export default function Nav() {
    return (
        <Stack2.Navigator initialRouteName="Page2" screenOptions={{headerShown: true, headerTitleAlign: 'center', 
        headerStyle:{backgroundColor: 'grey'},
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
        },}}>
            <Stack2.Screen name ='Page2' component={Page2Screen} options={{title:'Zeee', headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
            ></Button>
          ),}}/>
            <Stack2.Screen name ='Page3' component= {Page3Screen} options={{title:'Zeee', headerBackVisible: true}}/>
        </Stack2.Navigator>
    )
}