import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from '@rneui/base';
// import Navigator2 from '../routes/stack2'

export default function Page2Screen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={styles.header1}>
      </View>
      <View style={styles.header2}>
        <Icon name='home' type= ' octicon' color='darkred'></Icon>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'midnightblue'}}>Zeee</Text>
        </View>
        <Icon name='database' type= 'octicon' color='darkred'></Icon>
      </View> */}
      <View style={styles.body}>
      
        <TouchableOpacity style={styles.button} 
        onPress={()=> navigation.navigate('Home')}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={()=> navigation.navigate('Page3')}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Go to Page 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },  
  
  header1: {
    flex: 0.035,
    width: '100%',
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  
  header2: {
    flex: 0.085,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'darkseagreen',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'white',
  },
});
