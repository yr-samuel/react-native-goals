import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const GoalItem = ({ text, onDeleteGoal }) => (
  <View style={styles.container}>
    <Pressable
      onPress={onDeleteGoal}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) =>
        pressed && Platform.OS === "ios" && styles.pressedItem
      }
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.8,
    marginBottom: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    color: "white",
    padding: 10,
  },
});

export default GoalItem;
