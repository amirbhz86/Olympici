import { GoalHeader } from '../../components/index'
import React from 'react'
import { FlatList, View } from 'react-native'
import Modal from 'react-native-modal'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const RecordsList = (props: Props) => {

  const { containerView, modalStyle, recordsView } = styles
  const { navigation } = props

  const {
    AddRecord ,
    renderRecords ,
    HeaderOfRecords , 
    modalType ,
    recordStatus ,
    renderContent ,
    hidePicker ,
    exerciseRecords ,
    championRecords ,
    renderFlatListFooter,
  } = useComponent(navigation)


  return (
    <View style={containerView}>
      <GoalHeader navigation={navigation} />
      <AddRecord />
      <HeaderOfRecords />
      <FlatList
        data={recordStatus == 'champion' ? championRecords : exerciseRecords}
        style={recordsView}
        renderItem={renderRecords}
        onEndReachedThreshold={0.5}

      />
      <Modal
        style={modalStyle}
        useNativeDriver={true}
        onBackdropPress={hidePicker}
        onBackButtonPress={hidePicker}
        hideModalContentWhileAnimating={true}
        isVisible={modalType == 'nothing' ? false : true}>
        {renderContent()}
      </Modal>
    </View>
  )
}

export default RecordsList
