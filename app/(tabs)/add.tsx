import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ImageUploadForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setdescription] = useState('');

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission to access the gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const handleSubmit = () => {
    const formData = {
      title,
      location,
      price,
      image,
    };
    console.log('Submitted Data:', formData);
    alert('Form Submitted Successfully!');
    setImage(null);
    setLocation('');
    setPrice('');
    setTitle('');
    setdescription('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Upload Image</Text>

      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          <Ionicons name="cloud-upload-outline" size={50} color="#777" />
          <Text style={styles.uploadText}>Tap to upload image</Text>
        </TouchableOpacity>
      )}

      {image && (
        <TouchableOpacity style={styles.removeButton} onPress={() => setImage(null)}>
          <Ionicons name="trash-outline" size={20} color="#fff" />
          <Text style={styles.removeText}>Remove Image</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text style={styles.label}>description</Text>
      <TextInput
        style={styles.des}
        
        value={description}
        onChangeText={setdescription}
        multiline={true} // Allow multiline input for the description
  numberOfLines={4} // Show 4 lines of text
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',

  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  uploadBox: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  uploadText: {
    marginTop: 10,
    color: '#777',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 20,
    
  },
  removeButton: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 10,
  },
  removeText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    
  },
  decription :{
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
   height:100,
   textAlignVertical: 'top', 
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 7,
    paddingLeft: 5,
    paddingTop:5,
    paddingRight:5
   
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  des:{
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    height:100,
    textAlignVertical: 'top',
  }
});

export default ImageUploadForm;
