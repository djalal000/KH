import { Tabs } from "expo-router";  
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Layout() {
  return (
    <Tabs screenOptions={
        { tabBarStyle:{
            position:'absolute',bottom:0,height:60},tabBarHideOnKeyboard:true
            
    }} 
    >
      <Tabs.Screen
        name="explore"
        options={{
            headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color}   />
          ),
         
        }}
      />
    
      <Tabs.Screen
        name="add"
        options={{
            headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      

      {/* Notifications Tab */}
      <Tabs.Screen
        name="notifications"
        options={{
            headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
  {/* message tabs */}
<Tabs.Screen
        name="message"
        options={{
        headerShown:false,
          tabBarIcon: ({ color, size }) => (
    < Ionicons name="mail-open" size={24} color={color} />         
         ),
        }}
      />
      
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
        headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
     
    </Tabs>
  );
}
