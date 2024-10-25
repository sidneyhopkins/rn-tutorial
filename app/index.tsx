import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="pb-8 flex flex-1 items-center justify-center bg-blue-200">
      <Text className="pb-8 text-3xl font-bold">App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-pink-900">Go to Profile</Link>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lightblue',
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//   },
//   link: {
//     color: 'white',
//   }
// });