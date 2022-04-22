import {Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AddTaskButton = () => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#fff'
            }}
        >
            <Ionicons
                style={{
                    marginRight: 10,

                }}
                name={'add'} size={20} color={'#6aaffb'}/>
            <Text style={{
                color: '#6aaffb',

            }}>Добавить задачу</Text>
        </TouchableOpacity>
    )
}