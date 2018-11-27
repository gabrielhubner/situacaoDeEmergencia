import React from 'react';
import { View, Button, Text } from 'react-native';

const Formulario = ({ navigation }) => (

    <View>
        <Text>Incêndio</Text>
        <CheckBox value={true}  />
    </View>
    <View >
        <Text>Deslizamento de Terra</Text>
        <CheckBox value={false} />
    </View>

    <View>
        <Text>Enxente</Text>
        <CheckBox value={true} />
    </View>
    
    <View>
        <Text>Tornado</Text>
        <CheckBox value={true} />
    </View>

    <View>
      <TextField label={'Nome'} highlightColor={'#FFFFFF'} textColor={'#ffffff'} />
      <TextField label={'Insira o local'} highlightColor={'#FFFFFF'} textColor={'#ffffff'} />
      <TextField label={'Celular'} highlightColor={'#FFFFFF'} textColor={'#ffffff'} />
      <TextField label={'Digite o máximo de detalhe possível, o que está  acontecendo'} highlightColor={'#FFFFFF'} textColor={'#ffffff'} />
    </View>

    <Button 
      title="Ajuda"
      onPress={() => navigation.navigate('mapa') }
    />

);

Formulario.navigationOptions = {
  title: 'Formulario',
}

export default Formulario;