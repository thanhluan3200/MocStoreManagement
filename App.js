import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import TotalProducts from './Component/TotalProducts';
import Product from './Component/Product'
import Turnover from './Component/Turnover'
import Posts from './Component/Posts'
import Customers from './Component/Customers'
import Orders from './Component/Orders'


export default function App() {
  return (
    <ScrollView style={styles.container}>      
      <View style={styles.titleWrapper}> 
        <Text style={styles.largeTitle}>Management</Text>
      </View>
      <View style={styles.divider}/>
      <TotalProducts/>
      <Product/>
      <Turnover/>
      <Posts/>
      <Customers/>
      <Orders/>   
    </ScrollView>
    
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        flexDirection: 'column',        
        backgroundColor: '#BEE9F6'
  },
  titleWrapper:{
    marginTop: 80,
    paddingHorizontal: 16
  },
  largeTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#5BA84F"
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    marginHorizontal: 15,
    marginTop: 16,
    padding: 2
  }
});