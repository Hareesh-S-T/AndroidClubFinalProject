import { StyleSheet } from 'react-native';
import globalVariables from '../../../../global/globalVariables';

export const styles = StyleSheet.create({
    credBox: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: globalVariables.buttonRadius,
    },
    profilePicture: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
    },
    credText: {
        justifyContent: 'center',
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        flex: 1
    },
    edit: {
        padding: 10,
        alignSelf: 'center',
        fontSize: 20,
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'white',
    },
    modalInnerContainer: {
        // height: 500,
        width: 350,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',

    },

    buttonPressableContainer: {
        height: 60,
        width: 60,
        alignSelf: 'flex-end',
    },
    buttonContainerAccent: {
        // flex: 1,
        backgroundColor: globalVariables.accentColour,
        borderRadius: 30,
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
    buttonRowSegment: {
        justifyContent: 'flex-end',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    save: {
        height: 65,
        width: 65,
        alignSelf: 'flex-end',
        fontSize: 25,
        padding: 20,
    },
    notesBox: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: globalVariables.buttonRadius,
    },
    notesText: {
        fontSize: 16,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.regularFont,
    }
})