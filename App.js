import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Detail")}
          >
            <Text>Git</Text>
          </TouchableOpacity>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
          <View style={{ height: 100, backgroundColor: "blue" }}></View>
          <View style={{ height: 100, backgroundColor: "width" }}></View>
          <View style={{ height: 100, backgroundColor: "pink" }}></View>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
class Detail extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
          <View style={{ height: 100, backgroundColor: "blue" }}></View>
          <View style={{ height: 100, backgroundColor: "width" }}></View>
          <View style={{ height: 100, backgroundColor: "pink" }}></View>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
class Drawer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
          <View style={{ height: 100, backgroundColor: "blue" }}></View>
          <View style={{ height: 100, backgroundColor: "width" }}></View>
          <View style={{ height: 100, backgroundColor: "pink" }}></View>
          <View style={{ height: 100, backgroundColor: "red" }}></View>
          <View style={{ height: 100, backgroundColor: "green" }}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

//const AppNavigator = createStackNavigator({
//Home: {
//screen: App,
//},
//Detail: {
//screen: App,
//},
//});

/*
const AppNavigator = createStackNavigatorr({
  Home: { screen: App },
  Detail: { screen: Detail },
});
*/
const HomeStack = createStackNavigator({
  Home: { screen: App },
});
const DetailStack = createStackNavigator({
  Detail: { screen: Detail },
});
const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Detail: DetailStack,
});

/*
const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Detail: DetailStack,
});
*/
export default createAppContainer(AppNavigator);
