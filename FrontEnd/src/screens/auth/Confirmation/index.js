import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextButton } from '../../../components/CustomButtons';
import { TextField } from '../../../components/TextField';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';

export default function ConfirmationScreen({ navigation, route }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const failedAlert = () =>
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );

    function onPressBack() {
        console.log("Back Button");
        navigation.goBack();
    }

    async function onPressSubmit(formData) {
        const userData = {
            email: route.params.email,
            otp: formData.confirmationCode,
        }
        try {
            const res = await axios.post(`http://${globalVariables.serverIP}/api/auth/confirm`, userData);
            console.log("Code Confirmed");
            navigation.replace('Signin');
        } catch (err) {
            console.log(err.response.data);
            failedAlert(err.response.data);
        }
    }

    async function onPressResendCode() {
        const userData = {
            email: route.params.email
        }
        try {
            const res = await axios.post(`http://${globalVariables.serverIP}/api/auth/resendCode`, userData);
            console.log("Code Resent");
        } catch (err) {
            failedAlert(err.response.data);
        }
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.topBox}>
                    <Icon name="back" onPress={onPressBack} style={globalStyles.backButton} />
                    <View style={globalStyles.textBox}>
                        <Text style={globalStyles.mainText}>Email Confirmation</Text>
                        <Text style={globalStyles.subText}>Enter the confirmation code sent to your email to finish setting up your account.</Text>
                    </View>
                    <View style={globalStyles.inputBox}>
                        <TextField propName={'confirmationCode'} propControl={control} propPlaceholder={'Confirmation Code'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propSecureTextEntry={false} />
                        <Text style={globalStyles.forgotPWText} onPress={onPressResendCode}>Resend Code?</Text>
                    </View>
                </View>
                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Submit'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}