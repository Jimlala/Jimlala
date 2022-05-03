import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { Icon } from '@rneui/base';

const HistoryList = [
  {
    id: 1,
    company: 'Smart Shop',
    companyLogo: '??',
    transDate: 23654,
  },

  {
    id: 2,
    company: 'ABC',
    companyLogo: '$%$$',
    transDate: 123,
  },

  {
    id: 3,
    company: 'Parking',
    companyLogo: '098ju',
    transDate: 98756,
  }
]

const HistoryCard =() =>{
  return <View style={styles.cardContainer}>
    <Text style={{fontSize: 14, textAlign: 'center'}}>
      Name
    </Text>
    <Image 
    style={styles.imageStyle}
    source={require('../src/images/annie-unsplash.jpg')}/>
  </View>
}
export default function Page3Screen({navigation}) {
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
        {/* <TouchableOpacity style={styles.button} 
        onPress={()=> navigation.navigate('Page2')}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>back to Page 2</Text>
        </TouchableOpacity> */}
        <HistoryCard />
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
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'white',
  },

  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
  },

  imageStyle: {
    height: 40,
    width: 100,
  }
});
