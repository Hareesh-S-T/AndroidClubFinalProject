import axios from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, Linking, Text, View } from 'react-native';
import { globalStyles } from '../../../global/globalStyles';
import globalVariables from '../../../global/globalVariables';
import { styles } from './styles';
import { TextFieldNoValidation } from './../../../components/TextField';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SearchScreen() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function failedAlert(err) {
        Alert.alert(
            "Failed",
            `${err}`,
            [{ text: "Dismiss", onPress: () => console.log("Alert Dismissed") }]
        );
    }

    async function onSearch() {
        try {
            if (search != '') {
                setIsLoading(true);
                console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${globalVariables.NYTKey}`);

                const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=%22The%20New%20York%20Times%22&q=${search}&sort=newest&api-key=${globalVariables.NYTKey}`);
                setData(res.data);
                setIsLoading(false);
            } else {
                failedAlert("Search key not entered.");
            }
        } catch (err) {
            console.log(err.response.data);
            failedAlert(err.response.data);
        }
    }

    return (
        <>
            <Image source={require('../../../assets/images/BG.png')} style={globalStyles.bg} />
            <View style={globalStyles.container}>
                <View style={styles.searchBox}>
                    <TextFieldNoValidation propValue={search} propOnChange={setSearch} propPlaceholder={'Search'} propPlaceholderTextColour={globalVariables.h2Colour} propTextInputStyle={[globalStyles.subText2, { paddingHorizontal: 15 }]} propContainerStyle={styles.searchBar} />
                    <Icon name='search1' onPress={onSearch} style={styles.searchButton} />
                </View>

                {!isLoading && data != null ?
                    <FlatList
                        contentContainerStyle={styles.flatlistStyle}
                        data={data["response"]["docs"]}
                        renderItem={({ item }) => {
                            return (
                                < View style={styles.articleBox} >
                                    <View style={styles.headerPanel}>

                                        {item["multimedia"] != {}
                                            ? <Image source={{ uri: `https://www.nytimes.com/${item["multimedia"][17]["url"]}` }} style={styles.articleImage} />
                                            : <></>
                                        }


                                        <View style={{ flexShrink: 1 }}>
                                            <Text numberOfLines={2} style={styles.articleTitle}>{item["abstract"]}</Text>

                                            <Text numberOfLines={2} style={styles.articleByline}>{item["lead_paragraph"]}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.articleLink} onPress={() => {
                                        Linking.openURL(`${item["web_url"]}`);
                                    }} >{item["web_url"]}</Text>
                                </View >
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => (<View style={{ height: 10 }}></View>)}
                    />

                    : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={50} color={'white'} animating={isLoading} />
                    </View>}

            </View>
        </>
    )
}