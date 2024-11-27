import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Animated, { FadeInDown ,FadeInLeft,FadeInRight} from "react-native-reanimated";

export default function square() {
	const [number, setNumber] = useState(0);
	const [finalNumber, setFinalNumber] = useState(0);

	function getsquare() {
		let sum = number * number;
		setFinalNumber(Math.floor(sum));
	}

	return (
		<View  style={style.container}>
			<Animated.Text entering={FadeInDown.duration(700)} style={style.miniText}>Find your squares :)</Animated.Text>

			<Animated.View  entering={FadeInDown.duration(900)}style={style.mText}>
				<TextInput
					style={style.TextInput}
					placeholder="Enter number"
					onChangeText={(vlu) => {
						setNumber(vlu);
					}}
					keyboardType="numeric"
                    placeholderTextColor={"#fff"}
				/>
			</Animated.View>
			<Animated.View entering={FadeInDown.duration(1100)} style={style.pressable}>
				<Pressable
					style={style.PressableText}
					title="Call the function"
					onPress={() => {
						getsquare();
					}}
				>
					<Text style={{ fontSize: 19 ,color: "#fff", }}>Get square</Text>
				</Pressable>
			</Animated.View>

			<Animated.Text entering={FadeInDown.duration(1200)} style={{ marginTop: 40, fontSize: 25 ,color: "#fff", }}>
				Square of {number} is {finalNumber}
			</Animated.Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
        backgroundColor: "#29343d",
		color: "#fff",
	},
	miniText: {
		position: "absolute",
		top: 100,
		fontSize: 30,
		fontWeight: 500,
        color: "#fff",
	},
	mText: {
		width: "90%",
		height: 55,
		display: "flex",
		justifyContent: "center",
		marginBottom: 50,
		marginTop: 50,
        color: "#fff",
	},
	TextInput: {
		paddingLeft: 12,
		borderWidth: 1,
		height: 50,
		fontSize: 18,
		borderRadius: 10,
		borderColor: "#666",
        color: "#fff",
	},
	pressable: {
		width: "90%",
		height: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
        color: "#fff",
	},
	PressableText: {
		width: "80%",
		height: 45,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "#666",
        color: "#fff",
	},
});
