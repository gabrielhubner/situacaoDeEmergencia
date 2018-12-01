import ChamadaForm from './chamada-form';
import ChamadaList from './chamada-list';

import { createDrawerNavigator } from 'react-navigation';


const DrawerNavigator = createDrawerNavigator({
  chamadaList: ChamadaList,
  chamadaForm: ChamadaForm,
});

export default { DrawerNavigator };