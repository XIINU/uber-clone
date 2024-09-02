import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";
import { Image, ImageSourcePropType, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        resizeMode="contain"
        tintColor="white"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const TabLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveBackgroundColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 80,
            marginBottom: 60,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.list} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.chat} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={icons.profile} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
};

export default TabLayout;
