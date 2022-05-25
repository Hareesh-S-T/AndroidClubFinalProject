import { Dimensions, StyleSheet } from 'react-native';
import globalVariables from './globalVariables';

const dim = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
    bg: {
        position: 'absolute',
        height: dim.height,
        width: dim.width,
        // transform: [
        //     { scaleX: -1 }
        // ],
    },
    container: {
        flex: 1,
        padding: 5,
        alignContent: 'center',
        // backgroundColor: 'white',
    },

    textBox: {
        paddingHorizontal: 20,
    },
    mainText: {
        fontSize: 36,
        // paddingHorizontal: 20,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.semiBoldFont,
    },
    mainText2: {
        fontSize: 22,
        // paddingHorizontal: 20,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.semiBoldFont,
    },
    subText: {
        fontSize: 16,
        // paddingHorizontal: 20,
        color: globalVariables.h2Colour,
        fontFamily: globalVariables.regularFont,
    },
    subText2: {
        fontSize: 16,
        // paddingHorizontal: 20,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.regularFont,
    },

    backButton: {
        // backgroundColor: 'white',
        height: 65,
        width: 65,
        color: 'white',
        fontSize: 25,
        padding: 20,
    },

    inputBox: {
        paddingHorizontal: 20,
    },
    inputFieldText: {
        fontSize: 14,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.regularFont,
    },
    inputFieldStyle: {
        borderWidth: 1.5,
        borderRadius: globalVariables.buttonRadius,
        borderColor: globalVariables.h2Colour,
        marginVertical: 5,
    },
    inputFieldAccentStyle: {
        borderWidth: 1.5,
        borderRadius: globalVariables.buttonRadius,
        borderColor: globalVariables.accentColour,
        marginVertical: 5,
    },
    showPW: {
        fontSize: 20,
        color: globalVariables.h2Colour,
        paddingHorizontal: 10,
    },
    forgotPWText: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontFamily: globalVariables.regularFont,
        color: globalVariables.h2Colour,
    },

    bottomBox: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    submitButton: {
        backgroundColor: globalVariables.accentColour,
        borderRadius: globalVariables.buttonRadius,
        width: '100%',
        height: 55,
    },
    submitText: {
        color: globalVariables.accentColourDark,
        fontFamily: globalVariables.semiBoldFont,
        fontSize: 18,
    },
})