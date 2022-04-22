import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const AloneSwipeRow = ({status, number, text}) => {

    return (
        <View style={styles.container}>
            <View style={styles.standalone}>
                <SwipeRow leftOpenValue={width*0.4}>
                    <View style={styles.standaloneRowBack}>
                        <TouchableOpacity
                            style={[styles.con, styles.first]}
                            onPress={
                                () => console.log('dd')
                            }>
                            <Image
                                style={styles.img}
                                source={require('../../assets/boxWhite.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.con, styles.second]}
                            onPress={
                                () => console.log('dd')
                            }>
                                <Image
                                style={styles.img}
                                source={require('../../assets/boxWhite.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.con, styles.third]}
                            onPress={
                                () => console.log('dd')
                            }>
                            <Image
                                style={styles.img}
                                source={require('../../assets/boxWhite.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.standaloneRowFront}>
                        <Step status={status} number={number} text={text}/>
                    </View>
                </SwipeRow>
            </View>
        </View>
    );
}

const Step = ({status, number, text}) => {
    const icon = status === 'done' ?
        <MaterialCommunityIcons
            size={20}
            color={'#6aaffb'}
            name={'checkbox-marked-circle'}
            style={{
                marginRight: 5
            }}
        />
        :
        status !== 'error'
            ?
            <MaterialCommunityIcons
                size={20}
                color={'#ccc'}
                name={'checkbox-blank-circle-outline'}
                style={{
                    marginRight: 5
                }}
            />
            :
            <Ionicons
                size={20}
                color={'#f90'}
                name={'warning-outline'}
                style={{
                    marginRight: 5
                }}
            />

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                {icon}
                <Text>
                    Шаг {number}
                </Text>
            </View>
            <Text  style={{
                color: 'grey'
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    standalone: {
    },
    standaloneRowFront: {
        backgroundColor: 'rgb(242, 242, 242)',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    backTextWhite: {
        color: '#FFF',
        textAlign:'center',
        paddingVertical: 15,
        width: width*0.4/3
    },
    img: {
        width: 18,
        height: 18,
        marginVertical: 15,
        marginHorizontal: (width*0.2/3) - 9
    },
    first: {
      backgroundColor: '#f90',
    },
    second: {
        backgroundColor: '#999'
    },
    third: {
        backgroundColor: '#f33'
    },
});

export default AloneSwipeRow