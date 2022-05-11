import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function IconButton({ propContainerStyle, propPressableContainerStyle, propIconName, propOnPress, propIconStyle }) {
    return (
        <View style={[styles.container, propContainerStyle]}>
            <Pressable style={[styles.pressableContainer, propPressableContainerStyle]} onPress={propOnPress} android_ripple={{ color: '#cccccc' }} >
                <Icon name={propIconName} style={propIconStyle} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});
