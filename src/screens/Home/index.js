import { Text, View, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home screen...</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})