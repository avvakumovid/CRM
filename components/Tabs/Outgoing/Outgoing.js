import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ReferencesCarousel from '../../UI/Carousel/ReferencesCarousel';
// import ReferencesCarousel from '../../../assets/box.png';


const Outgoing = ({navigation, dialog}) => {
    const channels = [
        {
            id: 1,
            name: 'Отдел кадров',
        },
        {
            id: 2,
            name: 'Служба поддержки',
        },
        {
            id: 3,
            name: 'Мое подразделение',
        },
    ]
    const data = [
        {
            title: 'Справка 2 НДФЛ',
            date: '20.02.2022',
            status: 'Готово на 63%'
        },
        {
            title: 'Заявление на отпуск',
            date: '24.02.2022',
            status: 'Готово на 32%'
        },
        {
            title: 'Справка 3 НДФЛ',
            date: '10.02.2022',
            status: 'Готово на 13%'
        },
        {
            title: 'Справка о доходах',
            date: '17.02.2022',
            status: 'Готово на 100%'
        },
        {
            title: 'Больничный',
            date: '2.02.2022',
            status: 'Отменено'
        },

    ];
    const channelsView = channels.map(channel =>
        <TouchableOpacity
            style={styles.channelBtn}
            key={channel.id + Math.random()}
            onPress={
                () => navigation.navigate('OutgoingChat', {
                    title: channel.name,
                })
            }>
            <Text style={styles.channelBtnText}># {channel.name}</Text>
            <MaterialIcons size={20} color={'rgba(128,128,128,0.5)'} name="arrow-forward-ios"/>
        </TouchableOpacity>)
    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                <Text style={styles.header}>ОСНОВНЫЕ КАНАЛЫ</Text>
                <ScrollView>
                    {channelsView}
                </ScrollView>
                <TouchableOpacity
                    onPress={
                        () => {
                        }
                    }>
                    <View style={styles.container}>
                        <Image
                            style={{
                                width: 18,
                                height: 18
                            }}
                            source={require('../../../assets/box.png')}
                        />
                        <Text style={{color: '#6aaffb', fontSize: 18}}> Добавить канал</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <ReferencesCarousel data={data} title="Обращения" subTitle="Текущие"/>
                <ReferencesCarousel data={data} title="Обращений" subTitle="История"/>
                {/*<AltCarousel data={data} title="Обращения" subTitle="Текущие"/>*/}
                {/*<AltCarousel2 data={data} title="Обращения" subTitle="Текущие"/>*/}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 10,
    },
    container: {
        padding: 10,
        marginTop: 10,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        marginLeft: 10,
        marginBottom: 10,
        color: 'grey',
        fontSize: 14
    },
    channelBtn: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128,128,128,0.5)'

    },
    channelBtnText: {
        fontSize: 18
    },
    channelBtnImg: {
        height: 50,
        width: 50,
    },
    carousel: {
        flexGrow: 0,
        height: 150,
    },
    item: {
        backgroundColor: 'green'
    }

})

export default Outgoing;
