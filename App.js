import { StatusBar } from 'expo-status-bar';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Home from './src/components/home';

export default function App() {
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

  const LoginButton = () => {
    const {authorize} = useAuth0();

    const onPress = async () => {
        try {
            await authorize({scope: 'openid profile email'}, {customScheme: '{YOUR_CUSTOM_SCHEME}'});
        } catch (e) {
            console.log(e);
        }
    };
  };

    const LogoutButton = () => {
      const {clearSession} = useAuth0();
  
      const onPress = async () => {
          try {
              await clearSession({customScheme: '{YOUR_CUSTOM_SCHEME}'});
          } catch (e) {
              console.log(e);
          }
      };
    };

      const Profile = () => {
        const {user, error} = useAuth0();

  return (
    <><View style={styles.container}>
      <Text>Hello</Text>
    </View><Auth0Provider domain={"dev-asdaiq2qzmt7fozh.us.auth0.com"} clientId={"JDI6pIR35lRemocRHU8fArbhfEM0HGoL"}>
        <Home />
        <View style={styles.container}>
          <Text>Hello lab 43!</Text>

          <Button onPress={onPress} title="Log in" />
          <Button onPress={onPress} title="Log out" />
          <>
            {user && <Text>Logged in as {user.name}</Text>}
            {!user && <Text>Not logged in</Text>}
            {error && <Text>{error.message}</Text>}
          </>
        </View>
      </Auth0Provider></>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
