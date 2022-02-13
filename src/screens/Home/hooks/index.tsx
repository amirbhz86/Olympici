import React, { useEffect, useState } from 'react'
import { useAPI , useRedux } from '../../../hooks/index'
import { View } from 'react-native'
import styles from '../styles'
import { log, strings } from '../../../common'
import { TitleAndAngle, Comment, SeparatorLine } from '../../../components'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'

const commentArray = [
  {
    name: 'Sam Smith',
    cover: require('../../../assets/images/sport6.jpeg'),
    comment: 'It is a long established fact that a reader will be distracted by the readable content ' ,
    rating: 5,
    brief_desc: '',
    id: '1'
  },
  {
    name: 'Sam Smith',
    cover: require('../../../assets/images/athlete4.jpeg'),
    comment: 'It is a long established fact that a reader will be distracted by the readable content ' ,
    rating: 5,
    brief_desc: '',
    id: '2'
  },
  {
    name: 'Sam Smith',
    cover: require('../../../assets/images/athlete2.jpeg'),
    comment: 'It is a long established fact that a reader will be distracted by the readable content ' ,
    rating: 5,
    brief_desc: '',
    id: '3'
  },
  {
    name: 'Sam Smith',
    cover: require('../../../assets/images/athlete1.jpeg'),
    comment: 'It is a long established fact that a reader will be distracted by the readable content ' ,
    rating: 5,
    brief_desc: '',
    id: '4'
  },
  {
    name: 'Sam Smith',
    cover: require('../../../assets/images/athlete5.jpeg'),
    comment: 'It is a long established fact that a reader will be distracted by the readable content ' ,
    rating: 5,
    brief_desc: '',
    id: '5'
  }
]

const useContainer = (containerInput: any) => {
  const { navigation } = containerInput
  const [bannerData, setBannerData] = useState([])
  const [bottomSheetStatus, setBottomSheetStatus] = useState(false)
  const { getPhrasesAPI } = useAPI()
  const { Save } = useRedux()
  const {
    containerCommentsView, scrollUpView, titleAndAngleView, homeComment
  } = styles

  useEffect(() => {
    Save({ hideTabbar : false },'app')
  }, [])

  const getBannerData = async () => {
    const { results } = await getPhrasesAPI({ slugs: ['carousel-0', 'carousel-1', 'carousel-2', 'carousel-3', 'carousel-4'] })

    console.log("bannerResponse: ", results)
    if (results && results.length > 0) {
      setBannerData(results)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
       Save({ selectedTab : 'Home' },'app')
    }, []),
  )

  const onCloseStartFun=()=>{
    setBottomSheetStatus(false)
    console.log('close');
  }

  const onOpenStartFun=()=>{
    console.log('open');
  
    setBottomSheetStatus(true)
  }

  const renderComments = ({ item , index }: any) => {
    return (
      <>
        { index!==0 && <SeparatorLine />}
        <Comment {...item} style={homeComment} />
      </>
    )
  }
useEffect(() => {
  console.log(bottomSheetStatus,'bottomSheetStatus');
  
}, [bottomSheetStatus])
  const renderBottomSheet = () => (
    <View style={containerCommentsView}>
      <View style={scrollUpView} />
      <TitleAndAngle
        style={titleAndAngleView}
        onPress={() => navigation.navigate('Comments')}
        title={strings.whatChampionSays}
      />
      <FlatList
        scrollEnabled={bottomSheetStatus}
        keyExtractor={(item) => item.id}
        data={commentArray}
        renderItem={renderComments}
      />
    </View>
  )

  return {
    renderBottomSheet,
    onCloseStartFun ,
    onOpenStartFun
  }
}

export default useContainer