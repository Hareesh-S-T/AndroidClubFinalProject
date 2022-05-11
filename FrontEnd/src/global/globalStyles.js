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
        // flex: 1,
        padding: 5,
        alignContent: 'center',
        // backgroundColor: 'white',
    },

    mainText: {
        fontSize: 36,
        paddingHorizontal: 20,
        color: globalVariables.h1Colour,
        fontFamily: globalVariables.semiBoldFont,
    },
    subText: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: globalVariables.h2Colour,
        fontFamily: globalVariables.regularFont,
    },
})