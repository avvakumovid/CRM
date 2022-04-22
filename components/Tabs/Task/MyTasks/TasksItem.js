import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TasksItem = ({name, description, navigation}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={
                () => navigation.navigate('Task', {
                    title: name,
                })
            }>
        <View>
            <Text>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        <View>
            <MaterialIcons size={18} color={'rgba(128,128,128,0.5)'} name="arrow-forward-ios"/>
        </View>
</TouchableOpacity>
)
    ;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128,128,128,0.5)',
    },
    description: {
        fontSize: 14,
        color: '#ccc'
    }
})

export default TasksItem;