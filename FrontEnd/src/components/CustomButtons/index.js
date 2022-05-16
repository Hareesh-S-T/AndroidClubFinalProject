import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';

function TextButton({ propContainerStyle, propTextStyle, propText, propOnPress }) {
    return (
        <View style={[styles.container, propContainerStyle]}>
            <Pressable style={styles.pressableContainer} onPress={propOnPress} android_ripple={{ color: '#cccccc' }}>
                <Text style={propTextStyle}>{propText}</Text>
            </Pressable>
        </View>

    )
}

function TextButtonIconRight({ propContainerStyle, propTextStyle, propText, propOnPress, propIconName, propIconStyle }) {
    return (
        <View style={[styles.container, propContainerStyle]}>
            <Pressable style={textButtonIconRightStyles.pressableContainer} onPress={propOnPress} android_ripple={{ color: '#cccccc' }}>
                <Text style={[propTextStyle, { margin: 20 }]}>{propText}</Text>
                <Icon name={propIconName} style={[propIconStyle, { margin: 20 }]} />
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    pressableContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const textButtonIconRightStyles = StyleSheet.create({
    pressableContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});


function IconButton({ propContainerStyle, propPressableContainerStyle, propIconName, propOnPress, propIconStyle }) {
    return (
        <View style={[iconButtonStyles.container, propContainerStyle]}>
            <Pressable style={[iconButtonStyles.pressableContainer, propPressableContainerStyle]} onPress={propOnPress} android_ripple={{ color: '#cccccc' }} >
                <Icon name={propIconName} style={propIconStyle} />
            </Pressable>
        </View>
    )
}

const iconButtonStyles = StyleSheet.create({
    container: {
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    pressableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { TextButton, TextButtonIconRight, IconButton };