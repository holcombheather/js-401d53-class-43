import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>© 2023 Heather Holcomb</Text>
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
  },
  text: {
    fontSize: 16,
    lineHeight: 1.2*16, 
    letterSpacing: 0,
    fontFamily: 'Souci Sans',
  }
});
