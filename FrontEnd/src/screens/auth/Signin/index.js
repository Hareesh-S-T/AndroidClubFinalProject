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

export default function SigninScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const [showPW, setShowPW] = useState(false);
    let pwIcon = 'eye-off';
    if (showPW) {
        pwIcon = 'eye';
    }
    function onPressShowPW() {
        setShowPW(!showPW);
    }

    function failedLogIn(err) {
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    function onPressBack() {
        console.log("Back");
        navigation.goBack();
    }

    function onPressForgotPW() {
        console.log("Forgot Password");
        navigation.navigate('ForgotPWA');
    }

    function onPressSubmit() {




        
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.topBox}>
                    <Icon name="back" onPress={onPressBack} style={globalStyles.backButton} />
                    <View style={globalStyles.textBox}>
                        <Text style={globalStyles.mainText}>Welcome Back.</Text>
                        <Text style={globalStyles.subText}>Sign in to start XYZ.</Text>
                    </View>
                    <View style={globalStyles.inputBox}>
                        <TextField propControl={control} propName={'email'} propPlaceholder={'Email'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propKeyboardType={'email-address'}
                            propRules={{
                                required: 'Email is required.',
                                pattern: { value: globalVariables.emailRegex, message: 'Email is invalid.' },
                            }} />
                        {/* required: 'Error Message if Rule is Broken' */}

                        <TextField propControl={control} propName={'password'} propPlaceholder={'Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW} propSecureTextEntry={!showPW} propRules={{ required: 'Password is required.' }} />

                        <Text style={globalStyles.forgotPWText} onPress={onPressForgotPW}>Forgot Password?</Text>
                    </View>
                </View>

                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Sign In'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}