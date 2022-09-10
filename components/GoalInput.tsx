import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface InputProps {
  onAddGoal: (title: string) => void;
  onExit: () => void;
  visible: boolean;
}

const GoalInput: React.FC<InputProps> = ({ onAddGoal, onExit, visible }) => {
  const [input, setInput] = useState<string>("");

  const changeHandler = (value: string) => {
    setInput(value);
  };

  const pressHandler = () => {
    onAddGoal(input);
    setInput("");
    onExit();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/goal.png")}
            style={styles.img}
          />
        </View>
        <View>
          <View style={styles.textConteiner}>
            <TextInput
              style={styles.input}
              value={input}
              placeholderTextColor="aliceblue"
              placeholder="Your Course Goal!"
              onChangeText={changeHandler}
            />
          </View>
          <View style={styles.buttons}>
            
            <View style={styles.btn}>
              <Button title="Exit" onPress={onExit} color='#f31282'/>
            </View>
            <View style={styles.btn}>
              <Button title="Add Goal" onPress={pressHandler} color='#5a0acc' />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    padding: 5,
    fontSize: 20,
    color: "white",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#311B6C",
    padding: 10,
  },
  textConteiner: {
    height: 50,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
  },
  btn: {
    width: "49%",
    marginHorizontal: 2,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalInput;
