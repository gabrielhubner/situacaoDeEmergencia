import React from 'react';
import { StyleSheet, Button, TextInput, Alert, View, Text } from 'react-native';

export default class ChamadaForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chamada: {
        tipo: '',
        local: '',
        detalhe: '',
        data: ''
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Tipo de Emergência</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.chamada.tipo}
            onChangeText={(text) => {
              this._updateField(text, 'tipo');
            }}
          />
          <Text>Local</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Escreva o Local"
            onChangeText={(text) => {
              this._updateField(text, 'local');
            }}
          />
          <Text>Detalhe</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.chamada.detalhe}
            onChangeText={(text) => {
              this._updateField(text, 'detalhe');
            }}
          />
          <Text>Data</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.chamada.data}
            onChangeText={(text) => {
              this._updateField(text, 'data');
            }}
          />
          <Button
            title="Ajuda!"
            color="#336f6f"
            accessibilityLabel="Toque no botão mostarda para adicionar Emergência"
            onPress={() => {
              this.addChamada();
            }}
          />
      </View>
    );
  }

  async addChamada () {
    try {
      let response = await fetch('http://192.168.3.104:3000/api/v1/chamadas',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.chamada)
      });
      let responseJson = await response.json();
      this.setState({chamada: {
        tipo: '',
        local: '',
        detalhe: '',
        data: ''
      }});
      Alert.alert(responseJson.message);

    } catch (error) {
      console.error(error);
    }
  }
  _updateField(value, field) {
    this.setState(function(prevState) {
      prevState.chamada[field] = value;
      return prevState;
    });
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  }
});
