import { StyleSheet } from 'react-native';
import globalVariables from '../../../global/globalVariables';

export const styles = StyleSheet.create({
    textBox: {
        // marginTop: 450,
        // alignSelf: 'center',
        // backgroundColor: 'red',
    },

    bottomRow: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    bottomRowSegment: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonPressableContainer: {
        height: 60,
        width: 60
    },
    buttonContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
    },
    buttonContainerAccent: {
        backgroundColor: globalVariables.accentColour,
        borderRadius: 30,
    },
    buttonIcon: {
        fontSize: 24,
        color: 'black',
    },
    buttonIconAccent: {
        fontSize: 24,
        color: globalVariables.accentColourDark,
    },

    buttonText: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.semiBoldFont,
    },
})