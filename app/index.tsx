import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
      {/* <StatusBar style="auto" /> */}
      <Link href="/profile" style={styles.link}>Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  link: {
    color: 'white',
  }
});