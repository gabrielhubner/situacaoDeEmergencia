import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableHighlight, Modal, Alert, Button, TextInput } from 'react-native';
import ChamadaForm from './chamada-form';

export default class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible:  false,
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
        <View style={styles.chamadaHeader}>
          <StatusBar hidden={true}/>
          <View style={styles.chamadaHeaderTitle}>
            <Image style={styles.chamadaHeaderLogo} source={require('./logo.png')} />
            <Text style={styles.chamadaHeaderTitleText}>{this.props.tipo}</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="transparent">
               <View style={styles.chamadaHeaderButton}>
                 <Text style={styles.chamadaHeaderButtonText}>+</Text>
               </View>
             </TouchableHighlight>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{margin: 8}}>
            <chamadaForm />
            <Button
              title="Fechar formulário"
              color="#ffdb58"
              accessibilityLabel="Toque no botão mostarda para fechar o formulário"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }
  _onPressButton() {
    this.setModalVisible(true);
  }
}




const styles = StyleSheet.create({
  container: {
    height: 56,
  },
  chamadaHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#009688',
  },
  chamadaHeaderTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    flex: 1,
    flexDirection: 'row'
  },
  chamadaHeaderTitleText: {
    fontWeight: "500",
    color: "#ffffff",
    fontSize: 20,
    margin: 0,
    padding: 0,
    paddingLeft: 10
  },
  chamadaHeaderLogo: {
    width: 32,
    height: 32
  },
  chamadaHeaderButton: {
    marginRight: 10,
    width: 32,
    height: 32,
  },
  chamadaHeaderButtonText: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 32,
    color: '#ffffff'
  }


});
