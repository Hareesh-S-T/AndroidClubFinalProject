import React from 'react';
import { Image, Text, View } from 'react-native';
// import IconButton from '../../../components/IconButton';
import { globalStyles } from '../../../global/globalStyles';
import { styles } from './styles';
import { IconButton } from '../../../components/CustomButtons';

export default function SplashScreen({ navigation }) {
    function onPressReg() {
        console.log("Register");
        navigation.navigate('Register');
    }

    function onPressSignin() {
        console.log("Signin");
        navigation.navigate('Signin');
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.textBox}>
                    <Text style={globalStyles.mainText}>Title</Text>
                    <Text style={globalStyles.subText}>Sub</Text>
                </View>

                <View style={styles.bottomRow}>
                    <View style={styles.bottomRowSegment}>
                        <IconButton propIconName={'arrowleft'} propPressableContainerStyle={styles.buttonPressableContainer} propContainerStyle={styles.buttonContainer} propIconStyle={styles.buttonIcon} propOnPress={onPressReg} />
                        <Text style={styles.buttonText}>Register</Text>
                    </View>

                    <View style={styles.bottomRowSegment}>
                        <Text style={styles.buttonText}>Sign In</Text>
                        <IconButton propIconName={'arrowright'} propPressableContainerStyle={styles.buttonPressableContainer} propContainerStyle={styles.buttonContainerAccent} propIconStyle={styles.buttonIconAccent} propOnPress={onPressSignin} />
                    </View>
                </View>

                {/* <Text style={[globalStyles.mainText]}>Auditing,{'\n'}made easy.</Text>
                <Text style={[globalStyles.subText]}>A complete solution for prompt and paperless auditing, managed through the Cloud.</Text> */}

            </View>
        </>
    )
}