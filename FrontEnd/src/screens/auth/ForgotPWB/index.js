import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextButton } from '../../../components/CustomButtons';
import TextField from '../../../components/TextField';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';

export default function ForgotPWBScreen({ navigation, route}) {
    const { control, handleSubmit, formState: { errors } } = useForm();

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

    const failedAccount = (err) =>
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );

    function onPressBack() {
        console.log("Back Button");
        navigation.goBack();
    }

    function resendEmail() {

    }

    function onPressSubmit() {


        navigation.navigate('Signin');


    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.topBox}>
                    <Icon name="back" onPress={onPressBack} style={globalStyles.backButton} />
                    <View style={globalStyles.textBox}>
                        <Text style={globalStyles.mainText}>Enter Confirmation Code</Text>
                        <Text style={globalStyles.subText}>Enter the confirmation code sent to your Email ID and your new password.</Text>
                    </View>
                    <View style={globalStyles.inputBox}>

                        <TextField propName={'confirmationCode'} propControl={control} propPlaceholder={'Confirmation Code'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propSecureTextEntry={false} />
                        <TextField propControl={control} propName={'password'} propPlaceholder={'Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW} propSecureTextEntry={!showPW} propRules={{
                            required: 'Password is required.'
                        }} />

                        <TextField propControl={control} propName={'rePassword'} propPlaceholder={'Re-Enter Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon2} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW2} propSecureTextEntry={!showPW2} propRules={{
                            required: 'Re-Enter Password.',
                            validate: value => value == password ? true : 'Password does not match.'
                        }} />
                        <Text style={globalStyles.forgotPWText} onPress={resendEmail}>Didn't receive an email?</Text>
                    </View>
                </View>

                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Submit'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}