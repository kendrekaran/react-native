import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElvatedCards() {
  return (
    <View>
      <Text style={styles.headingText }>ElvatedCards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  ) 
}
const styles = StyleSheet.create({
    headingText: {
        padding: 32 ,
        fontSize : 24,
        color : 'black',
        fontWeight : "bold"
    },
    container: {
      flex: 1,
      paddingLeft: 16
    },
    card: {
      flex : 1,
      flexDirection : "row",
      justifyContent : "center",
      alignItems : "center",
      width: 100,
      height : 100,
      borderRadius: 4,
      margin: 8,
      color : "#FFFFFF"
    },
    cardElevated : {
        backgroundColor : "purple",
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : "white"
    },
})