import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style="inverted" />
      <Text style={styles.title}>Teste React Native</Text>
      <View style={styles.card}>
      <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardTitle}>Lorem </Text>
        <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
      </View>
   
      
      <View style={styles.card}>
      <Text style={styles.cardTitle}>React </Text>
        <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardTitle}>Native </Text>
        <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    margin: 10,
    backgroundColor: '#2f2',
    padding: 12,
    borderRadius: 5,
},
cardTitle: {
  fontSize: 20,
  fontWeight: 'bold'
  },
  cardSubtitle: {
  color:'#000'
},

  title: {
    color:'#2f2',
    margin: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
    fontSize: 25,
  
  },
});

