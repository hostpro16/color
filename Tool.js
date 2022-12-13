import { Dimensions } from "react-native";

export const dim = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,

  width90: (Dimensions.get("window").width / 100) * 90,
  height90: (Dimensions.get("window").height / 100) * 90,

  width50: (Dimensions.get("window").width / 100) * 50,
  height50: (Dimensions.get("window").height / 100) * 50,

  width30: (Dimensions.get("window").width / 100) * 30,
  height30: (Dimensions.get("window").height / 100) * 30,

  width10: (Dimensions.get("window").width / 100) * 10,
  height10: (Dimensions.get("window").height / 100) * 10,
};

export const color = {
  white: "#fff",
  blue: "blue",
  black: "black",
  red: "red",

  purple: "purple",
  yellow: "yellow",
  green: "green",
};
