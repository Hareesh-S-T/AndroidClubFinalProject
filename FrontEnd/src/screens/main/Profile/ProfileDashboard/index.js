import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, ToastAndroid, Alert, Text, Modal } from 'react-native';
import { globalStyles } from '../../../../global/globalStyles';
import { useLoggedInContext } from '../../../../context/contextProvider';
import { styles } from './styles';
import globalVariables from '../../../../global/globalVariables';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import { useForm } from 'react-hook-form';
import { TextField } from '../../../../components/TextField';
import { IconButton } from '../../../../components/CustomButtons';
import { TextFieldNoValidation } from '../../../../components/TextField';

export default function ProfileDashboardScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const loggedInContext = useLoggedInContext();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPW, setShowPW] = useState(false);
    let pwIcon = 'eye-off';
    if (showPW) {
        pwIcon = 'eye';
    }
    function onPressShowPW() {
        setShowPW(!showPW);
    }

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
            failedAlert(err);
        }
    }

    async function onPressEdit(formData) {
        const userData = {
            password: formData.password,
        }
        //Won't let you edit unless you re-enter password. Probably wrong API call
        try {
            const res = await axios.post(`http://${globalVariables.serverIP}/api/users/editcheck`, userData, {
                headers: {
                    'authorization': loggedInContext.token
                }
            });
            // console.log(res.data);
            setShowModal(false);
            navigation.navigate('ProfileEdit');

        } catch (err) {
            console.log(err.response.data);
            failedAlert(err.response.data);
        }
    }

    async function onPressSave() {
        const userData = data;
        try {
            const res = await axios.post(`http://${globalVariables.serverIP}/api/users/updatenotes`, userData, {
                headers: {
                    'authorization': loggedInContext.token
                }
            });
            console.log("Saved");
            ToastAndroid.show("Changes Saved", ToastAndroid.SHORT, ToastAndroid.CENTER);
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
                    <View style={styles.credBox}>
                        <Image style={styles.profilePicture} source={{ uri: `${data.pfpURI}` }} />
                        <View style={styles.credText}>
                            <Text style={globalStyles.mainText2}>{data.name}</Text>
                            <Text numberOfLines={1} style={globalStyles.subText}>{data.email}</Text>
                        </View>
                        <Icon name='edit' style={styles.edit} onPress={() => { setShowModal(true) }} />
                    </View>

                    <View style={styles.notesBox}>
                        <View>
                            <TextFieldNoValidation propDefaultValue={data.notes} propPlaceholder={'Your Notes'} propTextInputStyle={styles.notesText} propValue={data.notes} propOnChange={newNotes => {
                                setData({
                                    ...data,
                                    notes: newNotes,
                                });
                            }} />
                        </View>
                        <Icon name='save' style={styles.save} onPress={onPressSave} />
                    </View>

                    <Modal transparent={true} visible={showModal} onRequestClose={() => { setShowModal(!showModal) }} animationType='fade'>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalInnerContainer}>
                                <TextField propControl={control} propName={'password'} propPlaceholder={'Password'} propPlaceholderTextColour={globalVariables.h2Colour} propContainerStyle={globalStyles.inputFieldAccentStyle} propTextInputStyle={globalStyles.inputFieldText} propIconName={pwIcon} propIconStyle={globalStyles.showPW} propIconOnPress={onPressShowPW} propSecureTextEntry={!showPW} propRules={{ required: 'Password is required.' }} />

                                <View style={styles.buttonRowSegment}>
                                    <Text style={styles.buttonText}>Next</Text>
                                    <IconButton propIconName={'arrowright'} propPressableContainerStyle={styles.buttonPressableContainer} propContainerStyle={styles.buttonContainerAccent} propIconStyle={styles.buttonIconAccent} propOnPress={handleSubmit(onPressEdit)} />
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>

                : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={50} color={'white'} animating={isLoading} />
                </View>}
        </>
    )
}
