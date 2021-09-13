import React from 'react';
import { Keyboard, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function HomeScreen() {
  return (
    <HideKeyboard>
      <View style={styles.MainContainer}>

        <Text style={styles.text}>React Native Hide Keyboard on Touch Outside</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Email"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Password"
        />

      </View>

    </HideKeyboard>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center'
  },
  textinput: {
    width: '80%',
    height: 40,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 7,
    backgroundColor: '#F9FBE7',
    borderWidth: 2,
    borderColor: '#00B8D4',
    textAlign: 'center'
  },
});