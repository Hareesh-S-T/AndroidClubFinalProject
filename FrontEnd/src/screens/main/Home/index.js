import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, Alert, ActivityIndicator, RefreshControl } from 'react-native';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';
import ArticleCards from '../../../components/ArticleCards';

export default function HomeScreen() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState('home');


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
        try {
            setIsLoading(true);
            console.log(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${globalVariables.NYTKey}`);

            const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${globalVariables.NYTKey}`);
            setData(res.data);
            setIsLoading(false);

        } catch (err) {
            console.log(err.response.data);
            failedAlert(err.response.data);
        }
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.textBox}>
                    <Text style={globalStyles.mainText}>Trending</Text>
                    <Text style={globalStyles.subText}>Your daily news feed, to keep you posted</Text>
                </View>

                {!isLoading && data != null ?
                    < FlatList contentContainerStyle={styles.flatlistStyle}
                        data={data.results}
                        renderItem={({ item }) => {
                            return (<ArticleCards propData={item} />)
                        }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => (<View style={{ height: 10 }}></View>)} refreshControl={
                            <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
                        }
                    />

                    : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={50} color={'white'} animating={isLoading} />
                    </View>}

            </View>
        </>
    )
}
