import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, } from 'react-native';
import { Todo } from './src/models';
import awsconfig from './src/aws-exports'
import { constant } from 'async';

Amplify.configure(awsconfig);

const display = []

export default function App(){

  const [displayState, updateDisplay] = useState(display);
  useEffect(() => {
    fetchTodo();
    const subscription = DataStore.observe(Todo).subscribe(() => 
    fetchTodo()
    );
    return () => subscription.unsubscribe();
  });

  async function fetchTodo() {
    const displayState = (await DataStore.query(Todo,"0e3e8ff1-e709-473b-84ff-50d2edc972fb")).name
    updateDisplay(displayState);
  }

  const getCurrentDate=()=>{

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format

    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
  }

  return (







  <SafeAreaView  style={styles.centering}>

    <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}/>
   
    <View style={styles.container1}>

        <Text>
        My carbon usage:
        </Text>

        <Text>
         {getCurrentDate()}
        </Text>
    </View>


  

    <View>
        <View style={styles.greyBox}/>
        <Text>
          {displayState}
        </Text>
    </View>

    <View style={styles.horizontalLine}/>

    <Text style={styles.accounts}>
      ACCOUNTS
    </Text>

    <View style = {styles.container2}> 

      <View style = {styles.container3}> 

              <View style={styles.container4}> 

                <View style={styles.blueBox1}/>

                <Text style={styles.oxiac}>OXI A/C</Text>

              </View>

              <View style={styles.container4}> 
            
                <View style={styles.greyBox2}/>

                <Text style={styles.oxis}>ø22</Text>

              </View>

      </View>  

      <View style = {styles.container3}>

              <View style={styles.blackline}/> 

              <View style={styles.container4}>
              <View style={styles.blueCircle}/>
              <View style={styles.container8}>
              <Image style={styles.exchangebutton} source={require('./assets/Vector.png')}/>
              </View>
              </View>

              <View style={styles.blackline}/> 

      </View>

      <View style = {styles.container3}> 
      
          <View style = {styles.container4}> 
            
            <View style={styles.blueBox2}/>

            <Text style={styles.cashac}>CASH A/C</Text>

          </View>

          <View style = {styles.container4}> 
            
            <View style={styles.greyBox2}/>

            <Text style={styles.cash}>£323.64</Text>

          </View>

      </View> 
 
    </View>

    <View style = {styles.container4}>

    <View style={styles.blueBox3}/>
    <Text style={styles.oxipay}>OxiPay</Text>
    </View>

    <View style={styles.horizontalLine}/>

    <View style={styles.container5}>

    <Image style={styles.button} source={require('./assets/bar-chart.jpg')}/>

    <View style={styles.verticalLine}/> 

    <Image style={styles.button} source={require('./assets/home.jpg')}/>

    <View style={styles.verticalLine}/> 

    <Image style={styles.button} source={require('./assets/pay.jpg')}/>

    </View>

  </SafeAreaView>
  )
 
}

const styles = StyleSheet.create({

  centering: {
    width: 375,
    height: 800,
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,  
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  container1: {
    width: 340,
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },

  greyBox: {
    width: 197, 
    height: 62.54, 
    borderRadius: 20.85, 
    backgroundColor: '#E0E0E0',
  },

  carbonUsage: {
    fontSize: 48,
    color: '#00C2FF',
    position: 'absolute',
    left: 25,
    top: 2
  },

  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.4,
    alignSelf:'stretch',
  },

  accounts: {
    fontSize: 24,
    color: '#00C2FF',
    },

  container2: {
    width: 340,
    height: 247,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  greyBox2: {
    width: 100, 
    height: 100,
    borderRadius: 20, 
    backgroundColor: '#E0E0E0',
  },

  verticalLine: {
    borderLeftColor: 'black',
    borderLeftWidth: 0.4,
    alignSelf:'stretch',
  },

  container3: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  container4: {
    justifyContent: 'center'
  },

  blueBox1: {
    width: 77.48, 
    height: 27,
    borderRadius: 10, 
    backgroundColor: '#00C2FF',
  },

  blueBox2: {
    width: 86.63, 
    height: 27,
    borderRadius: 10, 
    backgroundColor: '#00C2FF',
  },

  cashac: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    top: 3,
    right: 25,
  },

  oxiac: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    top: 3,
    right: 32,
  },

  container5: {
    width: 340,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  
  button: {
    width: 31,
    height: 31,
  },

  oxis: {
    fontSize: 24,
    color: '#00C2FF',
    position: 'absolute',
    left: 30
  },

  cash: {
    fontSize: 24,
    color: '#00C2FF',
    position: 'absolute',
    left: 3
  },

  blueCircle: {
    width: 43, 
    height: 43,
    borderRadius: 21.5, 
    backgroundColor: '#00C2FF',
    bottom: 1
    
  },

  container6: {
    height: 300,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },

  container7: {

    height: 100,
    width : 10

  },

  blackline: {
    width: 0.4, 
    height: 100,
    backgroundColor: 'black',
    left: 21,
  },

  blueBox3: {
    width: 294, 
    height: 59,
    borderRadius: 10, 
    backgroundColor: '#00C2FF',
  },

  oxipay: {
    fontSize: 24,
    color: 'white',
    position: 'absolute',
    left: 113,
  },

  container8: {
    position: 'absolute',
    left: 13,
    top: 2,
    justifyContent: 'center'
  },

  exchangebutton: {
    height: 15,
    width: 15,
  }
});