global.crypto = require("react-native-quick-crypto");
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { v4 } from "uuid";

export default function App() {
  return (
    <View style={styles.container}>
      {/* This fails once you install @hyperledger/anoncreds-react-native with react-native-quick-crypto */}
      <Text>UUID: {v4()}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
