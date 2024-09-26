

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';

export default Screen_2c =() => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Default length
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characterPool = '';
    if (includeLowerCase) characterPool += lowerCaseChars;
    if (includeUpperCase) characterPool += upperCaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool === '') {
      Alert.alert('Error', 'Please select at least one option for password generation.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>

      <TextInput
        style={styles.passwordBox}
        value={password}
        editable={false}
      />

      <View style={styles.row}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(value) => setLength(parseInt(value))}
          value={String(length)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include lower case letters</Text>
        <CheckBox
          value={includeLowerCase}
          onValueChange={setIncludeLowerCase}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include upper case letters</Text>
        <CheckBox
          value={includeUpperCase}
          onValueChange={setIncludeUpperCase}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include numbers</Text>
        <CheckBox
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Include special symbols</Text>
        <CheckBox
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2F6A',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  passwordBox: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1F1D47',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 50,
    height: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4C54E0',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});




