import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export interface Goal {
  id: number;
  title: string;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoal = (title: string): void => {
    setGoals((prev) => [
      ...prev,
      {
        id: goals.length,
        title,
      },
    ]);
  };

  const modalToggleHandler = () => {
    setIsModalOpen((p) => !p);
  };

  const deleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Button onPress={modalToggleHandler} title="Add Goal" color={'rgb(147, 24, 241)'}/>
        <GoalInput onAddGoal={addGoal} onExit={modalToggleHandler} visible={isModalOpen}/>
      </View>
      <View style={styles.goalsContainer}>
        
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(goal) => {
            return <GoalItem goal={goal.item} onDelete={deleteGoal} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  inputContainer: {
    paddingBottom: 10,
  },
  goalsContainer: {
    paddingTop: 20,
    flex: 8,
  },
});
