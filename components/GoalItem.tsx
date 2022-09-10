import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Goal } from "../App";

interface ItemProps {
  goal: Goal;
  onDelete: (id: number) => void;
}

const GoalItem: React.FC<ItemProps> = ({ goal, onDelete }) => {
  const pressHandler = () => {
    onDelete(goal.id);
  };

  return (
    <Pressable onLongPress={pressHandler} style={({pressed})=>pressed && styles.pressedStyle}>
      <Text style={styles.goal}>{goal.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#5A0Acc",
    color: "white",
    fontSize: 20,
  },

  pressedStyle:{
    padding: 5,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#dddddd",
  }
});

export default GoalItem;
