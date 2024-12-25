import React from 'react';
import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
export default function Profile() {
  const router=useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={styles.button}  onPress={()=>{router.push('/auth/signe_up')}}>
             <Text style={styles.buttonText}>signe up screen </Text>
           </TouchableOpacity>
    </View>
  );
}

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