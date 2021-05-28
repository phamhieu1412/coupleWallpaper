import React, { Component } from 'react';
import { View, Text, Dimensions, PixelRatio, Image } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getDeviceId } from 'react-native-device-info';

import { Images } from '../../common';

const widthDevice = PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').width);
const heightDevice = PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: '',
    };
  }
  componentDidMount() {
    // console.log('device', DeviceInfo.getDevice())
    DeviceInfo.getDeviceName().then((deviceName) => {
      this.setState({ deviceName });
    });
  }
  render() {
    const { deviceName } = this.state;
    console.log('deviceId', DeviceInfo.getBrand())
    return (
      <View style={{ flex: 1, backgroundColor: 'pink', paddingVertical: 20, paddingHorizontal: 30 }}>
        <View style={{ backgroundColor: 'red' }}>
          <Text>Kích thước thiết bị "{deviceName}": {heightDevice} x {widthDevice} pixels</Text>
        </View>

        <View style={{ backgroundColor: 'gray', flexDirection: 'row', flexGrow: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Image source={Images.iphone11} style={{ height: 400, width: 200 }} />
          </View>
          <View style={{ flex: 1, backgroundColor: 'rose' }}>
            <Text>choose phone</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Home;