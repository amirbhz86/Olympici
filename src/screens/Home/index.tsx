import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import { HomeHeader, Slider, TitleAndAngle, CardsTalkGroup } from '../../components/index'
import useContainer from './hooks'
import { strings, windowH } from '../../common/index'
import { getTabBarHeight } from '../../helper/index'
import BottomSheet from 'reanimated-bottom-sheet'
// import BottomSheet from 'reanimated-bottom-sheet'

const videoArray = [
  {
    cover: require('../../assets/images/athlete1.jpeg'),
    id: '1',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  },
  {
    cover: require('../../assets/images/athlete2.jpeg'),
    id: '2',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  },
  {
    cover: require('../../assets/images/athlete4.jpeg'),
    id: '3',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  },
  {
    cover: require('../../assets/images/athlete5.jpeg'),
    id: '4',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  },
  {
    cover: require('../../assets/images/athlete6.jpeg'),
    id: '5',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  },
  {
    cover: require('../../assets/images/athlete7.jpeg'),
    id: '6',
    name: 'sam Smith',
    brief_desc: 'Champion Athlete'
  }
]

const bottomSheetSnapPoint = windowH - 585 - getTabBarHeight() < 60 ? 60 : 60


const Home = (props) => {
  const { navigation } = props
  const {
    containerView, parentScrollView, titleAndAngleComp, talksView,
  } = styles
  const {
    bottomSheetFunction, renderBottomSheet, onCloseStartFun, onOpenStartFun
  } = useContainer({ navigation })
  
  return (
    <View style={containerView}>
      <HomeHeader navigation={navigation} />
      <Slider />
      <TitleAndAngle
        title={strings.talkCountrysSportsGeniuses}
        onPress={() => navigation.navigate('Videos')}
        style={titleAndAngleComp}
      />
      <View style={parentScrollView}>
        <ScrollView>
          <View style={talksView}>
            <CardsTalkGroup
              data={videoArray}
              navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        onCloseStart={onCloseStartFun}
        onOpenStart={onOpenStartFun}
        initialSnap={1}
        snapPoints={[450, bottomSheetSnapPoint, bottomSheetSnapPoint]}
        borderRadius={10}
        renderContent={renderBottomSheet}
      />
    </View>
  )
}

export default Home
