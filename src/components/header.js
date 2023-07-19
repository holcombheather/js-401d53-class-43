import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
             <Text>Hello from header!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 5,
  }
})