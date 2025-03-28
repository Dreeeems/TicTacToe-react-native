import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const List = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), value: todoText },
      ]);
      setTodoText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a Todo"
        value={todoText}
        onChangeText={setTodoText}
      />

      <Button title="Add" onPress={addTodo} color="#4CAF50" />


      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todoText}>{item.value}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    width: "100%"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
    marginTop:5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  deleteText: {
    color: '#E57373',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default List;
