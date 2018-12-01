import { AppRegistry } from 'react-native';
import Navigator from './src';

const App = Navigator.StackNavigator; // Descomente para usar o StackNavigator.
// const App = Navigator.TabNavigator; // Descomente para usar o TabNavigator.
const App = Navigator.DrawerNavigator; // Descomente para usar o DrawerNavigator.

AppRegistry.registerComponent('navegacao', () => App);
console.disableYellowBox = true;
