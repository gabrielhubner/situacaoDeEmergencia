import Mapa from './mapa';
import Formulario from './formulario';
import Home from './home';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  home: Home,
  formulario: Formulario,
  mapa: Mapa,
});

const DrawerNavigator = createDrawerNavigator({
  home: Home,
  Formulario: Formulario,
  mapa: Mapa,
});

export default { StackNavigator, DrawerNavigator };