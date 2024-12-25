
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import{auth} from './../../configs/firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router';


const Singe_in = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const router=useRouter();
  const handleSign_in = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log('user succes login')
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول</Text>

   

      <Text style={styles.label}>البريد الإلكتروني</Text>
      <TextInput
        style={styles.input}
        placeholder="أدخل البريد الإلكتروني"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>كلمة المرور</Text>
      <TextInput
        style={styles.input}
        placeholder="أدخل كلمة المرور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}  onPress={handleSign_in}>
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={()=>{router.push('/(tabs)/explore')}}>
        <Text style={styles.buttonText}>دخول التطبيق </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginRight:10,
    color: '#555',
  },
  input: {

    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 10,
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Singe_in;