
import React, {useState} from "react";
import {StyleSheet, Text,Button,SafeAreaView,View} from 'react-native';

const HelloWorldApp = () => {
  const [isOn, setisOn] = useState(null);
  const onPressHandler = () => setisOn(!isOn);
  
  return (
    <SafeAreaView style={styles.container}>
          <View> 
      <Text>Hello, world!</Text>
      <Button style={styles.title}
          title={isOn?"On":"off"}
          color="#f194ff"
         onPress={()=>onPressHandler()}
        />
          </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:2,
    justifyContent: 'center',
    marginHorizontal: 16,
  },  
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
 
  });

export default HelloWorldApp;
