import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown:false }} />
      <Stack.Screen name='(tabs)'  options={{ headerShown:false }}/>
      <Stack.Screen name="auth/signe_in" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signe_up" options={{ headerShown: false }} />
     
      
    </Stack>
  );
}
