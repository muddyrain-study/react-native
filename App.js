import React, { PureComponent } from 'react';

import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import FreeDialog from './components/FreeDialog';

const { width } = Dimensions.get('window');

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowDialog: false,
    };
  }
  showDialog() {
    this.setState({
      isShowDialog: true,
    });
  }
  renderDialog() {
    return (
      <FreeDialog
        isShow={this.state.isShowDialog}
        title={'年底大促'}
        content={'您的新年礼品,请尽快领取'}
        buttonContent={'领取新年礼物'}
        imageSource={require('./assets/dialog_bg.png')}
        closeDialog={() => {
          this.setState({
            isShowDialog: false,
          });
        }}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.btnContainer}
          onPress={() => {
            this.showDialog();
          }}
        >
          <Text style={styles.textStyle}>点击弹出框</Text>
        </Pressable>
        {this.renderDialog()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnContainer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#EE7942',
    height: 38,
    width: width - 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 18,
  },
});
