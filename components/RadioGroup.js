import React, { PureComponent } from 'react';

import { View } from 'react-native';

import RadioButton from './RadioButton.js';

export default class RadioGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1, // 当前选中的索引
      dataArray: [],
      itemChange: props.itemChange,
    };
  }
  change(index) {
    this.state.currentIndex = index;
    this.state.dataArray.map((refer, index2) => {
      if (refer !== null) {
        refer.setSelectedState(index2 === this.state.currentIndex);
      }
    });
    this.state.itemChange(this.state.currentIndex);
  }
  render() {
    // 获取参数
    const { data, orientation, defaultValue, drawablePadding } = this.props;
    return (
      <View style={{ flexDirection: orientation }}>
        {data.map((radioData, index) => {
          return (
            <RadioButton
              index={index}
              selected={index === defaultValue ? true : false}
              key={index}
              ref={radioButton => this.state.dataArray.push(radioButton)}
              text={radioData.text}
              oritation={orientation}
              drawablePadding={drawablePadding}
              selectedChanged={() => {
                this.change(index);
              }}
            />
          );
        })}
      </View>
    );
  }
}
