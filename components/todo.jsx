import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Todo = ({todo,onDelete}) => {
    return (
        <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.value}</Text>
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Todo