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

export default function ForgotPWAScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const [showPW, setShowPW] = useState(false);
    const [showPW2, setShowPW2] = useState(false);

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

    function onPressSubmit() {


        navigation.navigate('ForgotPWB', { email: FormData.email });


    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.topBox}>
                    <Icon name="back" onPress={onPressBack} style={globalStyles.backButton} />
                    <View style={globalStyles.textBox}>
                        <Text style={globalStyles.mainText}>Reset Password</Text>
                        <Text style={globalStyles.subText}>Enter the Email ID associated with your account to change your password.</Text>
                    </View>
                    <View style={globalStyles.inputBox}>
                        <TextField propControl={control} propName={'email'} propPlaceholder={'Email'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propKeyboardType={'email-address'} propRules={{
                            required: 'Email is required.',
                            pattern: { value: globalVariables.emailRegex, message: 'Email is invalid.' },
                        }} />
                    </View>
                </View>

                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Submit'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}