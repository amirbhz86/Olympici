// In App.js in a new project

import * as React from 'react';
import { useState } from 'react'
import FlashMessage from 'react-native-flash-message'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainColors } from './src/common'
import { } from '@react-navigation/drawer'
import Reducers from './src/redux/index'
import { createStackNavigator } from '@react-navigation/stack'
import { Toast , CustomDrawer } from './src/components/index'
import {
  Splash, Home, Login, AthleteServices, ExercisesList, AthleteExerciseDetailScreen , 
  AthleteStopwatchScreen , AthleteNotifs , AthleteMyProgress , ChartDisplay , RecordsList ,
  CoachProfile , Transactions , PlanDetail , ContactUs , SendMessage
} from './src/screens/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { InitialTabbar } from './src/components/index'


const AuthStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      {/* <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="OTP" component={OTP} /> */}
      {/* <Stack.Screen name="SpecialRegister" component={SpecialRegister} /> */}
    </Stack.Navigator>
  )
}

const AthleteHomeStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AthleteServices">
      <Stack.Screen name="AthleteServices" component={AthleteServices} />
      <Stack.Screen name="ExercisesList" component={ExercisesList} />
      <Stack.Screen name="ExerciseDetailScreen" component={AthleteExerciseDetailScreen} />
      <Stack.Screen name="Notifs" component={AthleteNotifs} />
      <Stack.Screen name="MyProgress" component={AthleteMyProgress} />
      <Stack.Screen name="StopwatchScreen" component={AthleteStopwatchScreen} />
      <Stack.Screen name="ChartDisplay" component={ChartDisplay} />
      <Stack.Screen name="RecordsList" component={RecordsList} />
      <Stack.Screen name="CoachProfile" component={CoachProfile} />
      <Stack.Screen name="AthleteTransactions" component={Transactions} />
      <Stack.Screen name="PlanDetail" component={PlanDetail} />
    </Stack.Navigator>
  )
}

function AthleteHomeTabNavigator() {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <InitialTabbar {...props} />} initialRouteName="Home">
      <Stack.Screen name="Home" component={AthleteHomeStack} />
    </Tab.Navigator>
  );
}

const AthleteNavigator = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: 'transparent',
        width: 330,
      }}
      drawerPosition="left"
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        options={{ tabBarVisible: false }}
        name="Home"
        component={AthleteHomeTabNavigator}
      />
    </Drawer.Navigator>
  )
}

const AppStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Athlete' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Athlete" component={AthleteNavigator} />
    </Stack.Navigator>
  )
}



function InitialStack() {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <InitialTabbar {...props} />} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AuthStack" component={AuthStack} />
      <Tab.Screen name="ContactUs" component={ContactUs} />
      <Tab.Screen name="SendMessage" component={SendMessage} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Initial" component={InitialStack} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const AppContainer = () => {
  const [store] = useState(createStore(Reducers))
  const styles = StyleSheet.create({
    containerSafeAreaView: {
      flex: 1,
      backgroundColor: MainColors.primary
    }
  })

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={MainColors.primary} />
      <Provider store={store}>
        <FlashMessage
          duration={3000}
          floating={true}
          position={'bottom'}
          MessageComponent={(props: any) => <Toast {...props} />}
        />
        <SafeAreaView style={styles.containerSafeAreaView}>
          <App />
        </SafeAreaView>
        {/* </NativeBaseProvider> */}
      </Provider>
    </>
  )
}

export default AppContainer
