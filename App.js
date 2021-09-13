import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Keyboard, TouchableWithoutFeedback, SafeAreaView, Button, Modal, Alert, Pressable } from 'react-native';
import { Transactions } from './src/models';
import awsconfig from './src/aws-exports'
import { constant } from 'async';

Amplify.configure(awsconfig);

const carbon = []

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App(){

  const [modalVisible, setModalVisible] = useState(false);

  const [merchant, onChangeText] = React.useState(null);
  const [item, onChangeText2] = React.useState(null);
  const [amount, onChangeNumber] = React.useState(null);
  const [emissions, onChangeNumber2] = React.useState(null);

  const [carbonState, updateCarbon] = useState(carbon);

  useEffect(() => {
    fetchCarbon();
    const subscription = DataStore.observe(Transactions).subscribe(() => 
    fetchCarbon()
    );
    return () => subscription.unsubscribe();
  });

  async function fetchCarbon() {
    const allCarbons = ( (await DataStore.query(Transactions)))   
    console.log(allCarbons)
    const values = allCarbons.map(c => c.Carbon)
    console.log(values)
    const carbonState = values.reduce((x, y) => x + y)
    // const carbonState = ((await DataStore.query(Transactions, "50e6be72-9754-4d04-a3ae-3ed876f22221")).Carbon)
    updateCarbon(carbonState);
  }

  async function createCarbon() {
    await DataStore.save(new Transactions({
		Merchant: Merchant,
		Name: Item,
		Price: Amount,
		Carbon: Emissions
    }));
    onChangeText({merchant: null})
    onChangeText2({item: null})
    onChangeNumber({amount: null})
    onChangeNumber2({emissions: null})
    }

  // async function replaceCarbon() {
  //   const replace = ((await DataStore.query(Transactions, "50e6be72-9754-4d04-a3ae-3ed876f22221")))
  //   await DataStore.save(Transactions.copyOf(replace, updated =>{
  //   updated.Merchant = Merchant
  //   updated.Name = Item
  //   updated.Price = Amount,
  //   updated.Carbon = Emissions,
  //   updateCarbon(carbonState)
  //   }));
  //   }

  const getCurrentDate=()=>{
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
  }

  const Merchant = merchant
  const Item = item
  const Amount = parseInt(amount)
  const Emissions = parseInt(emissions)

  return (

  <SafeAreaView  style={styles.centering}>


    <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}/>
   
    <View style={styles.container1}>

        <Text>
        My carbon usage:
        </Text>

        <Text >
         {getCurrentDate()}
        </Text>
    </View>


  

    <View>
        <View style={styles.greyBox}/>
        <Text style={styles.carbonUsage}>
          {carbonState} Kg
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

      
    <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView2}>
              <View style={styles.modalView}>
                

            <View style = {styles.container9}>
              <Pressable
                style={[styles.modalButtonClose, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              <Pressable
                    style={[styles.modalButtonEnter, styles.buttonClose]}
                    onPress={createCarbon}
                  >
                    <Text style={styles.textStyle}>Enter</Text>
              </Pressable>
            </View>


            <HideKeyboard>
              <View style = {styles.inputs}>

              <Text style={styles.modalText}>What did you buy?</Text>
 

              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  placeholder="Merchant"
                  value={merchant}
                />
               <TextInput
                  style={styles.input}
                  onChangeText={onChangeText2}
                  placeholder="Item"
                  value={item}
                />
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={amount}
                  placeholder="Amount"
                />
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={onChangeNumber2}
                  value={emissions}
                  placeholder="Emissions"
                />

              </View>

            </HideKeyboard>              
                   

              </View>
              
            </View>


          </Modal>
          <Pressable
            style={[styles.modalButtonOxiPay, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.oxipay}>OxiPay</Text>
          </Pressable>
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
    fontSize: 44,
    color: '#00C2FF',
    position: 'absolute',
    left: 25,
    top: 5
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
    right: 20,
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
    color: "white",
    textAlign: "center",
    fontSize: 24,
    position: 'relative',
    top: 15
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
    position: 'absolute',
    top: 10
  },

  centeredView: {
    justifyContent: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButtonClose: {
    height: 30,
    width: 70,
    borderRadius: 10,
  },
  modalButtonEnter: {
    height: 30,
    width: 70,
    borderRadius: 10,
  },
  modalButtonOxiPay: {
    height: 59,
    width: 294,
    borderRadius: 10,
  },
  buttonOpen: {
    backgroundColor: "#00C2FF",
  },
  buttonClose: {
    backgroundColor: "#00C2FF",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    position: 'relative',
    top: 5
  },
  modalText: {
    padding: 10,
    justifyContent: "center",
    textAlign: "center"
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  inputs: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container9:{
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});