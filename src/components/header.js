import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Simple Camera App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 1,
  },
  text: {
    fontSize: 16, 
    color: 'white', 
    fontWeight: 'bold' 
  }
});
