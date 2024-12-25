import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationPage = () => {

  interface Notification {
    id: string;
    title: string;
    description: string;
    timestamp: string;
  }
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New Message',
      description: 'You have a new message from faiz',
      timestamp: '2024-12-24 10:00 AM',
    },
    {
      id: '2',
      title: 'contact me ',
      description: 'pleaz contact me to talke about the work',
      timestamp: '2024-12-23 5:30 PM',
    },
    {
      id: '3',
      title: 'System Alert',
      description: 'Your password will expire in 3 days.',
      timestamp: '2024-12-22 2:15 PM',
    },
    {
      id: '4',
      title: 'new work for you',
      description: 'new works are addes in chlef for you ',
      timestamp: '2024-12-22 2:15 PM',
    },
   
  ]);

  const handleNotificationPress = (notification:Notification) => {
    Alert.alert('Notification Details', `${notification.title}\n\n${notification.description}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationCard} onPress={() => handleNotificationPress(item)}>
            <Ionicons name="notifications-outline" size={24} color="#4CAF50" style={styles.icon} />
            <View style={styles.notificationDetails}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationDescription}>{item.description}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#777',
  },
  timestamp: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
});

export default NotificationPage;
