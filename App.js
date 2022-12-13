import { StyleSheet, Text, View } from "react-native";
import { dim, color } from "./Tool";
import { Input } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.mid}>
        <View style={styles.top_}>
          <View style={styles.hoten}>
            <Input placeholder={"Họ"} />
          </View>
          <View style={styles.hoten}>
            <Input placeholder={"Tên"} />
          </View>
        </View>
        <View style={styles.mid_}></View>
        <View style={styles.bottom_}></View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 0.1,
    backgroundColor: color.blue,
  },

  //bọc top_ mid_ bottom_
  mid: {
    flex: 0.8,
    backgroundColor: color.black,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 0.1,
    backgroundColor: color.red,
  },

  //bọc họ tên
  top_: {
    flex: 0.2,
    backgroundColor: color.purple,
    width: dim.width90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mid_: {
    flex: 0.2,
    backgroundColor: color.yellow,
    width: dim.width50,
  },
  bottom_: {
    flex: 0.2,
    backgroundColor: color.green,
    width: dim.width50,
  },

  hoten: { width: dim.width30 },
});
