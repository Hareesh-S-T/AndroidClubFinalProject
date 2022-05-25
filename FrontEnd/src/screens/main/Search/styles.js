import { StyleSheet } from 'react-native';
import { globalStyles } from '../../../../global/globalVariables';
import globalVariables from '../../../global/globalVariables';

export const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 10,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        // backgroundColor: 'white'
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#303030',
        borderRadius: 30,
        marginRight: 5,
        height: 60,
    },
    searchButton: {
        marginLeft: 5,
        backgroundColor: globalVariables.accentColour,
        color: 'white',
        fontSize: 25,
        height: 60,
        width: 60,
        textAlignVertical: 'center',
        textAlign: 'center',
        // padding: 20,
        borderRadius: 30,
    },
    articleBox: {
        // flex: 1,
        borderRadius: 10,
        // marginTop: 10,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    headerPanel: {
        flexDirection: 'row',
    },
    articleTitle: {
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: globalVariables.boldFont,
        color: 'white',
        flexShrink: 1,
    },
    articleByline: {
        paddingHorizontal: 10,
        fontSize: 12,
        color: 'white',
        fontFamily: globalVariables.semiBoldFont,
        flexShrink: 1,
    },
    articleLink: {
        paddingVertical: 5,
        color: '#aaaaaa',
        fontFamily: globalVariables.regularFont,
    },
    articleImage: {
        borderRadius: globalVariables.buttonRadius,
        // alignSelf: 'center',
        resizeMode: 'contain',
        width: 75,
        height: 75,
    },
    flatlistStyle: {
        paddingHorizontal: 10,
    },
})