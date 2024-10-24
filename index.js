/**
 * @format
 */
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Bugsnag from '@bugsnag/react-native';

Bugsnag.start({
  onError: function (event) {
    console.log('Error Event:', event);

    // Add additional diagnostic information
    event.addMetadata('account', {
      name: 'Acme Co.',
      paying_customer: true,
    });

    // Return `false` if you'd like to stop this error being reported
    return true;
  },
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);
const ErrorView = () => (
  <View>
    <Text>Inform users of an error in the component tree.</Text>
  </View>
);

const AppContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <App />
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
