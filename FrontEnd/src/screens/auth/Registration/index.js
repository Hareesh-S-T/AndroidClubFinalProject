import React, { useState } from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import TextField from '../../../components/TextField';
import { TextButton } from '../../../components/CustomButtons';
import axios from 'axios';

export default function RegistrationScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');

    const [showPW, setShowPW] = useState(false);
    const [showPW2, setShowPW2] = useState(false);
    let pwIcon = 'eye-off';
    let pwIcon2 = 'eye-off';
    function onPressShowPW() {
        setShowPW(!showPW);
    }
    function onPressShowPW2() {
        setShowPW2(!showPW2);
    }
    if (showPW) {
        pwIcon = 'eye';
    }

    if (showPW2) {
        pwIcon2 = 'eye';
    }

    function onPressBack() {
        console.log("Back");
        navigation.goBack();
    }

    function failedregistration(err) {
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    function onPressSubmit() {


        navigation.navigate('Confirmation');




    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.topBox}>
                    <Icon name="back" onPress={onPressBack} style={globalStyles.backButton} />
                    <View style={globalStyles.textBox}>
                        <Text style={globalStyles.mainText}>Registration</Text>
                        <Text style={globalStyles.subText}>Open an account to start XYZ now.</Text>
                    </View>
                    <View style={globalStyles.inputBox}>

                        <TextField propControl={control} propName={'name'} propPlaceholder={'Name'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propRules={{
                            required: 'Name is required.',
                        }} />

                        <TextField propControl={control} propName={'email'} propPlaceholder={'Email'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propKeyboardType={'email-address'} propRules={{
                            required: 'Email is required.',
                            pattern: { value: globalVariables.emailRegex, message: 'Email is invalid.' },
                        }} />

                        <TextField propControl={control} propName={'password'} propPlaceholder={'Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW} propSecureTextEntry={!showPW} propRules={{
                            required: 'Password is required.'
                        }} />

                        <TextField propControl={control} propName={'rePassword'} propPlaceholder={'Re-Enter Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon2} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW2} propSecureTextEntry={!showPW2} propRules={{
                            required: 'Re-Enter Password.',
                            validate: value => value == password ? true : 'Password does not match.'
                        }} />
                    </View>
                </View>

                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Register'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}