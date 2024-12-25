// Card.js
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet ,FlatList,TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Card = () => {

    const data=[
        {id: '1',state:'new',tilte:'amel binaa  yaomi fi charikate hassan ',location:'chlef,zeboudja',date:'24 decembre',price:'200 DA/jour',image:'https://imgs.search.brave.com/p2E5IhKKGCJxoex6SMXDNUQEdbsAwbcsjXKitRskW1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/b24tc2l0ZS1jb25z/dHJ1Y3Rpb24td29y/a2VyLmpwZz93aWR0/aD0xMDAwJmZvcm1h/dD1wanBnJmV4aWY9/MCZpcHRjPTA'},
        {id: '2', state:'new',tilte:'farmer',location:'chlef,zeboudja',date:'24 decembre',price:'200 da/jour',image:'https://imgs.search.brave.com/txRRs7UsBha3_z52QSJR5_445czPb7T8cerevGaPUBk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMxLmZhcm1zLmNv/bS9mYXJtcy1wcm9k/dWN0aW9uLWltYWdl/cy9Qb3J0YWxzLzAv/SW1hZ2VzL05ld3Mv/RmFsbGJhY2svMS8y/LzQuanBn'},
        {id: '3', state:'new',tilte:'amel binaa',location:'chlef,zeboudja',date:'24 decembre',price:'200 da/jour',image:'https://imgs.search.brave.com/p2E5IhKKGCJxoex6SMXDNUQEdbsAwbcsjXKitRskW1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/b24tc2l0ZS1jb25z/dHJ1Y3Rpb24td29y/a2VyLmpwZz93aWR0/aD0xMDAwJmZvcm1h/dD1wanBnJmV4aWY9/MCZpcHRjPTA'},
        {id: '4',state:'new',tilte:'amel binaa',location:'chlef,zeboudja',date:'24 decembre',price:'200 da/jour',image:'https://imgs.search.brave.com/p2E5IhKKGCJxoex6SMXDNUQEdbsAwbcsjXKitRskW1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/b24tc2l0ZS1jb25z/dHJ1Y3Rpb24td29y/a2VyLmpwZz93aWR0/aD0xMDAwJmZvcm1h/dD1wanBnJmV4aWY9/MCZpcHRjPTA'},
        {id: '5', state:'new',tilte:'amel binaa',location:'chlef,zeboudja',date:'24 decembre',price:'200 da/jour',image:'https://imgs.search.brave.com/p2E5IhKKGCJxoex6SMXDNUQEdbsAwbcsjXKitRskW1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/b24tc2l0ZS1jb25z/dHJ1Y3Rpb24td29y/a2VyLmpwZz93aWR0/aD0xMDAwJmZvcm1h/dD1wanBnJmV4aWY9/MCZpcHRjPTA'},
        {id: '6', state:'new',tilte:'amel binaa',location:'chlef,zeboudja',date:'24 decembre',price:'200 da/jour',image:'https://imgs.search.brave.com/p2E5IhKKGCJxoex6SMXDNUQEdbsAwbcsjXKitRskW1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/b24tc2l0ZS1jb25z/dHJ1Y3Rpb24td29y/a2VyLmpwZz93aWR0/aD0xMDAwJmZvcm1h/dD1wanBnJmV4aWY9/MCZpcHRjPTA'},

    ]
    const [searchQuery, setSearchQuery] = useState('');
   
  
    
    return (
        < >
<TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
       <FlatList
      data={data} // The data to render
      renderItem={({ item }) => (
        <TouchableOpacity>
        <View style={styles.card}>
          <Image 
            source={{ uri: item.image }} // Dynamic image URL from the data
            style={styles.image} 
          />
          
          <View style={styles.details}>
            <Text style={styles.favorite}>{item.state}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.info}>{item.tilte}</Text>
            <Text style={styles.dates}>{item.date}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id} // Ensure each item has a unique key
    />
       
       
        

        
        </>
        
    );
};

const styles = StyleSheet.create({
    card: {
        textAlign:'left',
        borderColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        width:'85%',
        marginLeft: 'auto',   // Centers the element horizontally
        marginRight: 'auto', 
        marginTop:15,
        

    },

    searchInput: {
        height: 40,
        width:"90%",
        margin:'auto',
        marginTop:10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
      },
    image: {
        width: '100%',
        height: 310,
        borderRadius:15,
    },
    details: {
       paddingTop:10,
        textAlign:'left',
        width:'100%'
    },
    favorite: {
        fontSize: 14,
        color: '#FF6347', // Example favorite color
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
    dates: {
        fontSize: 14,
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    rating: {
        fontSize: 16,
        color: '#FFD700', // Gold color for rating
    },
});

export default Card;