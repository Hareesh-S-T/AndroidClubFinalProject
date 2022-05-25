import React, { useState } from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextField } from '../../../components/TextField';
import { TextButton } from '../../../components/CustomButtons';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';

export default function RegistrationScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');

    const [showPW, setShowPW] = useState(false);
    const [showPW2, setShowPW2] = useState(false);
    const [date, setDate] = useState(new Date());
    const [isDatePicked, setIsDatePicked] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

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

    function failedAlert(err) {
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    async function onPressSubmit(formData) {
        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            dob: date,
        }
        if (!isDatePicked) { //If date was not changed from default
            setDateError(true);
            // failedAlert("Date of Birth has not been entered.");
        } else {
            try {
                const res = await axios.post(`http://${globalVariables.serverIP}/api/auth/registration`, userData);
                console.log("Submitted");
                navigation.navigate('Confirmation', { email: formData.email });
            } catch (err) {
                console.log(err.response);
                failedAlert(err.response.data);
            }
        }
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
                        <TextButton propText={'Date of Birth'} propContainerStyle={[globalStyles.submitButton, { marginVertical: 5 }]} propTextStyle={globalStyles.submitText} propOnPress={() => { setShowDatePicker(true) }} />

                        {dateError && <Text style={{
                            fontSize: 12,
                            fontFamily: globalVariables.regularFont,
                            color: '#990000',
                        }}>Date of birth is required.</Text>}

                        <DatePicker modal={true} open={showDatePicker} date={date} textColor={'white'}
                            onConfirm={(date) => {
                                setShowDatePicker(false);
                                setDateError(false);
                                setDate(date);
                                setIsDatePicked(true);
                            }}
                            onCancel={() => {
                                setShowDatePicker(false);
                            }}
                            mode={"date"}
                            theme={"dark"}
                        />

                    </View>
                </View>

                <View style={globalStyles.bottomBox}>
                    <TextButton propText={'Register'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSubmit)} />
                </View>
            </View>
        </>
    )
}