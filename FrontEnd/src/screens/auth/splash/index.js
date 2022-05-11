import React from 'react';
import { Image, Text, View } from 'react-native';
import IconButton from '../../../components/IconButton';
import { globalStyles } from '../../../global/globalStyles';
import { styles } from './styles';

export default function SplashScreen({ navigation }) {
    function onPressReg() {
        console.log("Register");
        // navigation.navigate('Register');
    }

    function onPressLogin() {
        console.log("Login");
        // navigation.navigate('SignIn');
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <Text style={globalStyles.mainText}>Title</Text>
                <Text style={globalStyles.subText}>Sub</Text>

                <View style={styles.bottomRow}>
                    <View style={styles.bottomRowSegment}>
                        <IconButton propIconName={'arrowleft'} propPressableContainerStyle={styles.buttonPressableContainer} propContainerStyle={styles.buttonContainer} propIconStyle={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Register</Text>
                    </View>

                    <View style={styles.bottomRowSegment}>
                        <Text style={styles.buttonText}>Login</Text>
                        <IconButton propIconName={'arrowright'} propPressableContainerStyle={styles.buttonPressableContainer} propContainerStyle={styles.buttonContainerAccent} propIconStyle={styles.buttonIconAccent} />
                    </View>
                </View>

                {/* <Text style={[globalStyles.mainText]}>Auditing,{'\n'}made easy.</Text>
                <Text style={[globalStyles.subText]}>A complete solution for prompt and paperless auditing, managed through the Cloud.</Text> */}

            </View>
        </>
    )
}