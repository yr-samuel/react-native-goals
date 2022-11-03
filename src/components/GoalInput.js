import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleInputText = (text) => {
    setEnteredGoalText(text);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={handleInputText}
        value={enteredGoalText}
      />
      <Button
        title="Add goal"
        onPress={handleAddGoal}
        disabled={!enteredGoalText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    paddingHorizontal: 10,
  },
});

export default GoalInput;
