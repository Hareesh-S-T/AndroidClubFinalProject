import { StyleSheet } from 'react-native';
import globalVariables from '../../../../global/globalVariables';

export const styles = StyleSheet.create({
    pfpBox: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    uploadIcon: {
        color: 'white',
        fontSize: 26,
        top: 5,
        // backgroundColor: 'white',
        alignSelf: 'center',
    },
    profilePictureContainer: {
        height: 75,
        width: 75,
        justifyContent: 'center',
    },
    profilePicture: {
        // height: 100,
        // width: 100,
        opacity: 0.5,
        resizeMode: 'contain',
    },
})