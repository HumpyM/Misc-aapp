import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import withIncrement from './withIncrement'

class ButtonComponent extends React.Component {
  render() {
    const{count,increment}=this.props

    return (
        <View style={StyleSheet.container}>
            <Text>Button Component to test HOC</Text>
            <Button>
                onPress={increment} title="Press Me!"
            </Button>
            <Text>Button Pressed</Text>
        </View>
      
    );
  }
}
export default withIncrement(ButtonComponent)

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue'
    }
})
