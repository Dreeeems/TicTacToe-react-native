import { StyleSheet, View, SafeAreaView } from 'react-native';
import List from './components/list';

export default function App() {
  return (
    
      <View style={styles.container}>
        <List />
      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8'
  },
});
