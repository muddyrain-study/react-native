import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";  
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [localUri, setLocalUri] = useState("");
  // 该函数为下方按钮的事件回调函数
  const openImagePickerAsync = async () => {
    // 异步的选择图片
    // 首先获取权限
    const premissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (premissionResult.granted === false) {
      // 没有权限,直接返回
      alert("需要访问相机胶卷的权限");
      return;
    }
    // 选择图片
    const result = await ImagePicker.launchImageLibraryAsync({});
    if (result.canceled) {
      return;
    }
    // 获取选择的图片
    const image = result.assets[0];
    setLocalUri(image.uri);
  };
  const goback = () => {
    setLocalUri("");
  };
  const openShareImageAsync = async () => {
    await Sharing.shareAsync(localUri);
  };
  if (localUri) {
    return (
      <View style={styles.container}>
        {/* 显示用户选择的图片 */}
        <Image source={{ uri: localUri }} style={styles.thumbnail} />
        {/* 分享照片的按钮 */}
        <TouchableOpacity style={styles.button} onPress={openShareImageAsync}>
          <Text style={styles.buttonText}>分享照片</Text>
        </TouchableOpacity>
        {/* 重选照片的按钮 */}
        <TouchableOpacity style={styles.button} onPress={goback}>
          <Text style={styles.buttonText}>重新选择</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* logo图片 */}
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      {/* 提示文字 */}
      <Text style={styles.instructions}>按下按钮与朋友分享手机中的图片</Text>
      {/* 分享图片的按钮 */}
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>选择图片</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
