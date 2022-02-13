import React, { memo } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const Drawer = (props: Props) => {

  const {
    containerDrawer,
    modalStyle,
    selectImageView,
    topView
  } = styles

  const {
    HeaderDrawer,
    HeaderLinks,
    MiddleLinks,
    BottomLinks,
    hideModal,
    SelectFromGallery,
    SelectFromCamera,
    uploadAvatarModal,
  } = useComponent(props)

  return (
    <View style={containerDrawer}>
      <View style={topView}>
        <HeaderDrawer />
        <HeaderLinks />
      </View>
      <MiddleLinks />
      <BottomLinks />

      <Modal
        style={modalStyle}
        useNativeDriver={true}
        onBackdropPress={hideModal}
        onBackButtonPress={hideModal}
        hideModalContentWhileAnimating={true}
        isVisible={uploadAvatarModal}>
        <View style={selectImageView}>
          <SelectFromGallery />
          <SelectFromCamera />
        </View>
      </Modal>
    </View>
  )
}

export default memo(Drawer)
