import {BasicColors, MainColors, windowH} from '../../common/index'
import {getTabBarHeight} from '../../helper/statusBarHeight'
import {StyleSheet} from 'react-native'
import {scale} from "../../helper/sizing";

export default StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: BasicColors.white,
    },
    parentScrollView: {
        height: windowH * .45,
        marginTop : -12 ,
        // paddingTop : 5 , 
        // marginTop: scale(100),
    },
    sliderView: {
        width: '90%',
        alignSelf: 'center',
        height: 179,
        position: 'absolute',
        top: 53 + getTabBarHeight(),
        borderRadius: 20,
    },
    titleAndAngleComp: {
        marginBottom: 15,
        marginTop : scale(179) + 53 + getTabBarHeight() - 178 ,
    },
    homeComment: {
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        marginTop: 0,
        marginBottom: 0,
    },

    talksView: {
        marginTop : -7 ,
        // backgroundColor : 'red' ,
        paddingTop : 5 , 
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 3,
    },
    scrollUpView: {
        width: 30,
        height: 4,
        borderRadius: 12,
        backgroundColor: MainColors.accentDarker,
        alignSelf: 'center',
        marginTop: 8,
    },
    containerCommentsView: {
        borderWidth: 1,
        borderColor: MainColors.commentsBorder,
        borderTopLeftRadius : 15 ,
        borderTopRightRadius : 15 ,
        backgroundColor: BasicColors.white,
        shadowColor: MainColors.shadow,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        bottom : -3 ,
        elevation: 7,
        height: 450,
        width: '100%',
        alignSelf: 'center',
        zIndex: 5,
    },
    titleAndAngleView: {
        marginTop: 7,
    },
})
