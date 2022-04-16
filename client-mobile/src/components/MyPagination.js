import React from 'react';
import Color from '../assets/Color';
import { View, StyleSheet } from 'react-native';

function genCircleStyle(size) {
   if (!size) {
      return {};
   }
   return { width: size, height: size, borderRadius: size / 2 };
}

function Dot({ isActive, color, activeDotSize, inActiveDotSize, dotSeparator }) {
   const processedActiveDotStyle = [
      styles.activeDot,
      {
         backgroundColor: color,
         borderColor: color,
         marginHorizontal: dotSeparator / 2,
         ...genCircleStyle(activeDotSize),
      },
   ];
   const processedInActiveDotStyle = [
      styles.inActiveDot,
      {
         backgroundColor: 'transparent',
         borderColor: color,
         marginHorizontal: dotSeparator / 2,
         ...genCircleStyle(inActiveDotSize),
      },
   ];
   return (
      <View
         style={[
            styles.baseDot,
            isActive ? processedActiveDotStyle : processedInActiveDotStyle,
         ]}
      />
   );
}

export default function MyPagination(props) {
   const {
      style,
      length,
      currentIndex = 0,
      color = Color.accent,
      activeDotSize = 14,
      inActiveDotSize = 10,
      dotSeparator = 10,
   } = props;
   function renderItem(item, index) {
      return (
         <Dot
            key={index}
            isActive={index === currentIndex}
            color={color}
            activeDotSize={activeDotSize}
            inActiveDotSize={inActiveDotSize}
            dotSeparator={dotSeparator}
         />
      );
   }
   return (
      <View style={[styles.container, style]}>
         {Array(length).fill(0).map(renderItem)}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      width: '100%',
      height: 15,
      justifyContent: 'center',
      alignItems: 'center',
   },
   baseDot: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Color.red,
   },
   activeDot: {
      backgroundColor: Color.red,
   },
   inActiveDot: {
      backgroundColor: 'transparent',
   },
});