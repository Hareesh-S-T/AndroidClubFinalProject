import { StyleSheet } from 'react-native';
import globalVariables from '../../../global/globalVariables';

export const styles=StyleSheet.create({
    bottomBox: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottomRow: {
        marginTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    bottomRowSegment: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
    },
    buttonContainerAccent: {
        backgroundColor: globalVariables.accentColour,
        borderRadius: 30,
    },
    buttonPressableContainer: {
        height: 60,
        width: 60
    },
    buttonIcon: {
        fontSize: 20,
        color: 'black',
    },
    buttonIconAccent: {
        fontSize: 20,
        color: globalVariables.accentColourDark,
    },

    buttonText: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.semiBoldFont,
    },
})