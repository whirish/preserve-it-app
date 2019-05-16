import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Font, AppLoading, Constants } from 'expo';
import { defaultThemeVariables, getTheme } from '@shoutem/ui';
import { StyleProvider } from '@shoutem/theme';

import MainView from './components/MainView';

export default class App extends React.PureComponent {
  state = {
    fontsAreLoaded: false
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={theme}>
        <View style={styles.header}>
          <MainView />
        </View>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  }
});

const theme = getTheme({
  ...defaultThemeVariables,
  caption: {
    '.soon': {
      /*backgroundColor:
        "transparent"
color:
        "#666666"
fontFamily:
        "Rubik-Regular"
fontSize:
        12
fontStyle:
        "normal"
fontWeight:
        "normal"
letterSpacing:
        0.5
lineHeight:
        25*/
      color: 'red'
    }
  }
});
