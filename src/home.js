import React from 'react';
import { View, Button, Text, AppHeader, icon, Image} from 'react-native';

const Home = ({ navigation }) => (
  <AppHeader title="Situação de Emergência" icon=http://consamu.com.br/assets/img/logov2.png" />
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../images/bombeiro.jpg')} />
    <Button 
      title="Alerta !"
      onPress={() => navigation.navigate('formulario') }
    />
  </View>
);

Home.navigationOptions = {
  title: 'Home',
}

export default Home;