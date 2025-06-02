import { Tabs } from "expo-router";
import { FontAwesome6 } from '@expo/vector-icons';
import { Pressable, View } from "react-native";
import React from "react";

export default function TabsLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {
          alignSelf: "center",
        },
        tabBarButton: (props) => (
          <View style={{ flex: 1 }}>
            <Pressable
              onPress={props.onPress}
              onLongPress={props.onLongPress}
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              accessibilityLabel={props.accessibilityLabel}
              testID={props.testID}
              style={{ flex: 1 }}
            >
              {props.children}
            </Pressable>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="house"
              size={24}
              color={focused ? "#A394E4" : "#4F4F4F"}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="ContentsSystem/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="book-open"
              size={24}
              color={focused ? "#A394E4" : "#4F4F4F"}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="ExerciseSystem/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="pen-ruler"
              size={24}
              color={focused ? "#A394E4" : "#4F4F4F"}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="Screens/HeartStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/VasosStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/LungStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/FluxoStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/ArteriesStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/VeinsStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/CapillariesStudy/index"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Screens/VasosExercise/index"
        options={{
          href: null
        }}
      />
    </Tabs>
  )
}