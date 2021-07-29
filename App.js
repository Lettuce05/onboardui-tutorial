import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Onboard from "./components/Onboard";
import Home from "./components/Home";


export default function App() {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  let [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
      <>
        {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
        {!showOnboard && <Home />}
      </>
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
