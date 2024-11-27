import { View, Text } from "react-native";
import React from "react";
import { Tabs, Slot, Stack } from "expo-router";
export default function _layout() {
	return (
	<Tabs >
		<Tabs.Screen name="index" options={{title:"Percentage" , headerShown:false}}/>
		<Tabs.Screen name="square" options={{title:"Square"    , headerShown:false}}/>
	</Tabs>
	);
}
