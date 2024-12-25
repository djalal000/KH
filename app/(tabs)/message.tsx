import React from 'react';
import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
export default function Profile() {
  const router=useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> this is mesage page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
});