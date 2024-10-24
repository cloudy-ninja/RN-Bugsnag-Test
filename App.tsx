/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Bugsnag from '@bugsnag/react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onThrowError = () => {
    console.log('click on the button to throw an error!!!!');
    const estDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
    });
    Bugsnag.notify(new Error(`NEW APP: Test error happened at ${estDate}`));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button onPress={onThrowError} title="Notify Error" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
