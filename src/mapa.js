import React from 'react';
import { View, Button, Text, AppHeader, Image} from 'react-native';

const Mapa = () => (
  <AppHeader title="Situação de Emergência" icon=http://consamu.com.br/assets/img/logov2.png" />
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../images/maps2.png')} />
  </View>
);

Mapa.navigationOptions = {
  title: 'Mapa',
}


export default Mapa;