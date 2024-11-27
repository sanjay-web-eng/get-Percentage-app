import { StyleSheet, Text, View, TextInput, Button, Pressable ,StatusBar } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown ,FadeInLeft,FadeInRight} from "react-native-reanimated";


export default function index() {
	const [numOne, setNumOne] = useState(0);
	const [Total, setTotal] = useState(0);
	const [percentage, setPercentage] = useState(0);
        
	function getpercentage() {
		let sum = (numOne / Total) * 100;
		setPercentage(Math.floor(sum));
	}

	return (
		<View style={styles.cot}>
			<StatusBar backgroundColor={"#29343d"} barStyle={"light-content"}/>
			<Animated.View entering={FadeInDown.duration(600)} style={styles.mime}>
				<Text style={styles.text}>Enter your Marks</Text>
			</Animated.View>
			<Animated.View entering={FadeInDown.duration(900)} style={styles.coniti}>
				<TextInput 
					style={{
						padding: 10,
						width: 130,
						height: 55,
						color: "#fff",
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "#fff",
						fontSize:16,
					}}
					placeholderTextColor={"#fff"}
					placeholder="Marks you got "
					keyboardType="numeric"
					onChangeText={(v) => {
						setNumOne(v);
					}}
				/>
				<View
					style={{
						height: 3,
						width: 120,
						backgroundColor: "#fff",
						margin: 5,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				></View>
				<TextInput
					style={{
						padding: 10,
						width: 130,

						height: 55,
						color: "#fff",
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "#fff",
						fontSize:17
					}}
					keyboardType="numeric"
					onChangeText={(ve) => {
						setTotal(ve);
					}}
					placeholderTextColor={"#fff"}
					placeholder="Total"
				/>

				<View style={styles.iDonTKnow}>
					<Text style={styles.yoText}>{""} x {""} 100{""}</Text>
				</View>
			</Animated.View>
			<Animated.View entering={FadeInDown.duration(1000)}
				style={{
					margin: 20,
					width: "100%",
					height: 50,
					 
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Pressable
					style={{
						width: "77%",
						height: 45,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderWidth: 1,
						borderColor: "#fff",
						borderRadius: 8,
						color: "#fff",
					}}
					onPress={() => {
						getpercentage();
					}}
				>
					<Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
						get percentage
					</Text>
				</Pressable>
			</Animated.View>
			<Animated.View entering={FadeInDown.duration((1100))}>
				<Text style={styles.yoText}>
					your got {percentage}% out of {Total}
				</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	cot: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#29343d",
		color: "#fff",
	},
	mime: {
		position: "absolute",
		top: 80,
	},
	text: {
		fontSize: 25,
		fontWeight: 500,
		color: "#fff",
	},
	coniti: {
		display: "flex",
		justifyContent: "center",
		padding: 10,
		flexDirection: "column",

		width: 300,
	},
	iDonTKnow: {
		position: "absolute",
		left: 190,
	},
	yoText: {
		fontSize: 25,
		fontWeight: 500,
		color: "#fff",
	},
	button: {
		margin: 20,
	},
});
