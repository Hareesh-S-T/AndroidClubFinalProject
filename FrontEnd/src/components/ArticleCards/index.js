import React from 'react';
import { View, Text, Image, Linking, StyleSheet, RefreshControl } from 'react-native';
import globalVariables from '../../global/globalVariables';

export default function ArticleCards({ propData }) {
    return (
        < View style={styles.container} >
            <View style={styles.headerPanel}>

                {propData["multimedia"] != {}
                    ? <Image source={{ uri: `${propData["multimedia"][2]["url"]}` }} style={styles.articleImage} />
                    : <></>
                }


                <View style={{ flexShrink: 1 }}>
                    <Text numberOfLines={2} style={styles.articleTitle}>{propData["title"]}</Text>

                    <Text numberOfLines={2} style={styles.articleByline}>{propData["abstract"]}</Text>
                </View>
            </View>
            <Text style={styles.articleLink} onPress={() => {
                Linking.openURL(`${propData["url"]}`);
            }} >{propData["url"]}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: globalVariables.buttonRadius,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
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
})

