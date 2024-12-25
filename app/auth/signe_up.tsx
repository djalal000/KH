import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity,Alert } from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import{auth,db} from './../../configs/firebaseconfig';
import { useRouter } from 'expo-router';
import { doc, setDoc } from "firebase/firestore"; 



const SigneUp = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();

  
 
  const handleSignUp = async () => {
    if (!email || !password || !username || !phone) {
      Alert.alert('seccuss')
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User added successfully to Firebase Authentication");
      await setDoc(doc(db, "USERS", user.uid), {
        name: username,
        email: email,
        phone: phone,
        createdAt: new Date(),
      });
  
      console.log("User information saved successfully to Firestore");
      router.push("/auth/signe_in");
    } catch (error) {
      console.error("Error during signup: ");
    }
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>انشاء حساب جديد</Text>

      <Text style={styles.label}>اسم المستخدم</Text>
      <TextInput
        style={styles.input}
        placeholder="أدخل اسم المستخدم"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>رقم الهاتف</Text>
      <TextInput
        style={styles.input}
        placeholder="أدخل رقم الهاتف"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

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

      <TouchableOpacity style={styles.button}  onPress={handleSignUp}>
        <Text style={styles.buttonText}>تسجيل</Text>
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

export default SigneUp;