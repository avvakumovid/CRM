import React, {useEffect} from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AloneSwipeRow from '../../../UI/SwipeRow';



const Task = ({route, setTitle}) => {
    let {title} = route.params;
    useEffect(() => {
        setTitle(`${title}`)
    })
    const steps = [
        {
            id: 1,
            text: 'Проснуться',
            status: 'done',
        },
        {
            id: 2,
            text: 'Придти на работу',
            status: 'done',
        },
        {
            id: 3,
            text: 'Обнять ненасытного жадного хапугу',
            status: 'new',
        },
    ]
    const renderItem = ({ item, index }) => (
        <AloneSwipeRow status={item.status} number={index+1} text={item.text}/>
    );


    return (
        <View style={styles.container}>
            <Text style={{
                marginBottom: 10
            }}>Шаги выполнения задачи</Text>
            <FlatList
                data={steps}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

// const Step = ({status, number, text}) => {
//     const icon = status === 'done' ?
//         <MaterialCommunityIcons
//             size={20}
//             color={'#6aaffb'}
//             name={'checkbox-marked-circle'}
//             style={{
//                 marginRight: 5
//             }}
//         />
//         :
//         status !== 'error'
//         ?
//         <MaterialCommunityIcons
//             size={20}
//             color={'#ccc'}
//             name={'checkbox-blank-circle-outline'}
//             style={{
//                 marginRight: 5
//             }}
//         />
//             :
//             <Ionicons
//                 size={20}
//                 color={'#f90'}
//                 name={'warning-outline'}
//                 style={{
//                     marginRight: 5
//                 }}
//             />
//
//     return (
//         <TouchableOpacity
//             style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 paddingVertical: 10
//             }}
//         >
//             <View
//                 style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}>
//                 {icon}
//                 <Text>
//                     Шаг {number}
//                 </Text>
//             </View>
//             <Text  style={{
//                 color: 'grey'
//             }}>
//                 {text}
//             </Text>
//         </TouchableOpacity>
//     )
// }

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})

export default Task;