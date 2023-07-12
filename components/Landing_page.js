import tw from 'tailwind-react-native-classnames';
import React, { Component } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Sign_Up from './Sign_Up';

export class Landing_page extends Component {
  render() {
    return (
        <>
            {/* <View style={tw`flex`}>
                <View style={tw`h-full bg-white w-1/2 border-2 border-red-500`}></View>
                <View style={tw`h-full bg-black w-1/2 border-4 border-blue-500`}></View>
            </View> */}
            {/* <View style={tw`absolute inset-0 bg-gradient-to-r left-white-right-black`} /> */}

            <View style={tw`w-full h-1/2 rounded-br-3xl bg-white items-center justify-center`}>
                <Text>LOGO</Text>
            </View>
            <View style={tw`flex-col py-10 px-5 items-center border-red-500 w-full h-1/2 bg-black rounded-tl-3xl`}>
                <Text style={tw` font-bold text-2xl py-5 text-center text-white`}> Monitor your appliances your way</Text>
                <Text style={tw` text-center w-8/12 py-5 text-white`}>Your virtual assistant for conveniently elevating your power usage efficiency.</Text>
                <Text style={tw`text-center w-1/4 my-5 py-1 rounded-md bg-red-500 text-white`}>Get Started</Text>
            </View>
        </>
    )
  }
}

export default Landing_page
const styles = StyleSheet.create({})