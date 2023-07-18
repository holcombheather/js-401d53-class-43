import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Home() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <View style={styles.container}>
             <Text>Hello lab 43!</Text>
    <Button onPress={showDatepicker} title="Show date picker!" />
    <Button onPress={showTimepicker} title="Show time picker!" />
    <Text>selected: {date.toLocaleString()}</Text>
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        // is24Hour={true}
        // onChange={onChange}
      />
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});