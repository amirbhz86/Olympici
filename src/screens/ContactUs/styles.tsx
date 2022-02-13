import {BasicColors, MainColors} from '../../common/index'
import {ms, scale} from '../../helper/index'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerView: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: BasicColors.white,
    },
    oHeaderImage: {
        top: -21,
        left: -43,
        position: 'absolute',
    },
    sendLanguageText: {
        position: 'absolute',
        top: 113,
        right: ms(22),
    },
    bodyView: {
        width: '100%',
    },
    SendMessagePress: {
        marginTop: 16,
        marginBottom: 16,
    },
    extraCallUsRowView: {
        marginTop: 34,
        marginBottom: 16,
    },
    callUsView: {
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: MainColors.accentLight,
    },
    sectionRowView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBodyView: {
        width: scale(320),
        alignSelf: 'center',
        alignItems: 'center',
    },
    socialCircleView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: MainColors.primaryLighter,
    },
    rowPress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: ms(20),
        paddingLeft: ms(22),
        width: scale(320),
        height: 114,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: MainColors.border,
        shadowColor: MainColors.shadow25,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    followUsText: {
        alignSelf: 'center',
        marginBottom: 22,
    },
    appLawText: {
        textAlign: 'center',
        lineHeight: 18,
    },
    companyNameText: {
        textAlign: 'right',
    },
    socialRowView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '100%',
    },
    appLawView: {
        marginBottom: 35,
        marginTop: 31,
        width: scale(320),
    },
    mapImage: {
        width: scale(320),
        height: scale(150),
    },
    addressSectionView: {
        width: scale(320),
        marginBottom: 46,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: MainColors.border,
        backgroundColor: BasicColors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    topAddressSection: {
        flexDirection: 'row',
        marginRight: ms(20),
        marginTop: 26,
        marginLeft: ms(40),
        justifyContent: 'flex-end',
    },
    addressText: {
        marginRight: ms(6),
        lineHeight: 21,
        textAlign: 'right',
    },
    showOnMapText: {
        marginRight: ms(6),
        textAlign: 'right',
        marginBottom: 21,
    },
})
