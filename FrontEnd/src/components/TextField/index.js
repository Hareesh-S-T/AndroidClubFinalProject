import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalVariables from '../../global/globalVariables';
import { Controller } from 'react-hook-form';

export default function TextField({ propContainerStyle, propTextInputStyle, propPlaceholder, propPlaceholderTextColour, propSecureTextEntry, propKeyboardType, propAutoComplete, propIconName, propIconStyle, propIconOnPress, propControl, propName, propRules = {} }) {
    return (
        <Controller
            control={propControl}
            name={propName}
            rules={propRules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, propContainerStyle, error ? { borderColor: '#990000' } : {}]} >
                        <TextInput style={[styles.input, propTextInputStyle]} placeholder={propPlaceholder} placeholderTextColor={propPlaceholderTextColour} secureTextEntry={propSecureTextEntry} keyboardType={propKeyboardType} autoComplete={propAutoComplete} onChangeText={onChange} value={value} selectionColor={globalVariables.h2Colour} onBlur={onBlur} />
                        <Icon name={propIconName} style={propIconStyle} onPress={propIconOnPress} />
                    </View>
                    {/* If error is True, Render the Component */}
                    {error && (<Text style={styles.errorText}>*{error.message||'Error'}</Text>)}

                </>
            )}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
    },
    errorText: {
        fontSize: 12,
        fontFamily: globalVariables.regularFont,
        // color: globalVariables.h2Colour,
        color: '#990000',
    }
});