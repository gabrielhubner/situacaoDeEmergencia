import React from 'react';

import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';



export default class ChamadaList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      chamadas: []
    }
  }


  async fetchChamadas () {
    try {
      let chamadasResponse = await fetch('http://192.168.3.104:3000/api/v1/chamadas');
      console.log(chamadasResponse);
      let chamadasResponseJson = await chamadasResponse.json();
      return chamadasResponseJson;
    }catch (error) {
      console.log(error);
    }

  }


  async componentDidMount () {
    let chamadasResponseJson = await this.fetchChamadas();
    console.log(chamadasResponseJson);
    this.setState({chamadas: chamadasResponseJson, isLoading: false});
    return;
  }


  renderChamadaItem (chamada) {
    return <chamadaItem
            tipo={chamada.tipo}
            key={chamada.id}
            id={chamada.id}
            local={chamada.local}
            detalhe={chamada.detalhe}
            data={chamada.data}
             />
  }


  render() {


    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.chamadaList}>
          {this.state.chamadas.map(this.renderChamadaItem.bind(this))}
        </ScrollView>
      );
    }

  }
}

ChamadaList.navigationOptions = {
  title: 'Lista',
},


const styles = StyleSheet.create({
  chamadaList: {
    margin: 8,
    padding: 0,
    backgroundColor: '#eeeeee',
    marginBottom: 70
  }
});
