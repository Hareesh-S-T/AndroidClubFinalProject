import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, Alert, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../../../../global/globalStyles';
import { useLoggedInContext } from '../../../../context/contextProvider';
import { styles } from './styles';
import globalVariables from '../../../../global/globalVariables';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import { useForm } from 'react-hook-form';
import { TextFieldNoValidation } from '../../../../components/TextField';
import { TextButton } from '../../../../components/CustomButtons';
import DatePicker from 'react-native-date-picker';

export default function EditProfileScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const loggedInContext = useLoggedInContext();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    function failedAlert(err) {
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            setDate(new Date(data.dob));
        }
    }, [data]);

    async function fetchData() {
        setIsLoading(true);
        try {
            const res = await axios.get(`http://${globalVariables.serverIP}/api/users/profile`, {
                headers: {
                    'authorization': loggedInContext.token
                }
            });
            setData(res.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            failedAlert(err.response.data);
        }
    }

    function onPressClose() {
        console.log("Close");
        navigation.goBack();
    }

    async function onPressSave() {
        const userData = data;
        try {
            const res = await axios.post(`http://${globalVariables.serverIP}/api/users/savechanges`, userData, {
                headers: {
                    'authorization': loggedInContext.token
                }
            });
            navigation.navigate('ProfileDashboard');
        } catch (err) {
            console.log(err.response.data);
            failedAlert(err.response.data);
        }
    }

    return (
        <>
            <Image source={require('../../../../assets/images/BG.png')} style={globalStyles.bg} />
            {!isLoading && data != null ?
                <View style={globalStyles.container}>
                    <View style={styles.topBox}>
                        <Icon name="close" onPress={onPressClose} style={globalStyles.backButton} />
                        <View style={globalStyles.textBox}>
                            <Text style={globalStyles.mainText}>Edit your Profile</Text>
                        </View>
                        <View style={globalStyles.inputBox}>
                            <View style={styles.pfpBox}>
                                <ImageBackground style={styles.profilePictureContainer} imageStyle={styles.profilePicture} source={{ uri: `${data.pfpURI}` }} >
                                    <Icon name='upload' style={styles.uploadIcon} />
                                </ImageBackground>

                            </View>



                            <TextFieldNoValidation propPlaceholder={'Name'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldStyle} propTextInputStyle={globalStyles.inputFieldText} propDefaultValue={data.name} propValue={data.name} propOnChange={newName => {
                                setData({
                                    ...data,
                                    name: newName,
                                });
                            }} />

                            {/* https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/ 
                            https://blog.logrocket.com/using-react-usestate-object/*/}

                            <TextButton propText={'Date of Birth'} propContainerStyle={[globalStyles.submitButton, { marginVertical: 5 }]} propTextStyle={globalStyles.submitText} propOnPress={() => { setShowDatePicker(true) }} />

                            <DatePicker modal={true} open={showDatePicker} date={date} textColor={'white'}
                                onConfirm={(date) => {
                                    setShowDatePicker(false);
                                    setData({
                                        ...data,
                                        dob: date,
                                    });
                                    setDate(date);

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
                        <TextButton propText={'Save Changes'} propContainerStyle={globalStyles.submitButton} propTextStyle={globalStyles.submitText} propOnPress={handleSubmit(onPressSave)} />
                    </View>
                </View>

                : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} color={'white'} animating={isLoading} />
                </View>
            }
        </>
    )
}