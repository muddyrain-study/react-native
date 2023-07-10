import React, { PureComponent } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
let selectedImage = require('../assets/radio_selected.png');
let unSelectedImage = require('../assets/radio_select.png');

class RadioButton extends PureComponent {
  static defaultProps = {
    selectedChanged: false,
    selectedTextColor: '#F83D2B',
    unSelectedTextColor: '#333333',
  };
  state = {
    selected: this.props.selected,
  };

  constructor(props) {
    super(props);
    this.selectedChanged = props.selectedChanged;
  }
  setSelectedState(state) {
    this.setState({
      selected: state,
    });
  }
  // 每个按钮的点击事件
  pressHandle() {
    this.selectedChanged(this.state.selected);
    this.setState({
      selected: !this.state.selected,
    });
  }
  render() {
    const { text, drawablePadding } = this.props;
    const { selected } = this.state;
    return (
      <Pressable onPress={this.pressHandle.bind(this)}>
        <View style={styles.radioStyle}>
          {/* 左边图片 */}
          <Image
            style={styles.image}
            source={selected ? selectedImage : unSelectedImage}
          />
          {/* 右边文字 */}
          <Text
            style={{
              color: selected
                ? this.props.selectedTextColor
                : this.props.unSelectedTextColor,
              marginLeft: drawablePadding,
              fontSize: 18,
            }}
          >
            {text}
          </Text>
        </View>
      </Pressable>
    );
  }
}

export default RadioButton;

const styles = StyleSheet.create({
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 22,
    height: 22,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
