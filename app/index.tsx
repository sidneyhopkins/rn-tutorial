import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center bg-blue-200">
      <Text className="text-3xl font-pblack">App</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-pink-900">Go to Home</Link>
    </View>
  )
}
