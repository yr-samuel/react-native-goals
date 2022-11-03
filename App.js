import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalInput from "./src/components/GoalInput";

import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    const newGoal = {
      text: enteredText,
      id: new Date().getTime(),
    };

    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
  };

  const handleDeleteGoal = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((currentGoal) => currentGoal.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              onDeleteGoal={() => handleDeleteGoal(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
