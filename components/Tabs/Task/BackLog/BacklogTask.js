import React, {useState} from 'react';
import {Image, ScrollView, Switch, Text, View} from 'react-native';

import ListAccordion from 'react-native-paper/src/components/List/ListAccordion';

const BacklogTask = ({route}) => {
    const {task} = route.params
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView style={{
            backgroundColor: '#fff',
            padding: 15
        }}>
            <Text>Описание</Text>
            <Text style={{
                color: 'grey'
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa itaque minima quas qui ut.
                Ab, aliquam dicta dignissimos et explicabo facilis laudantium nisi quaerat reiciendis sapiente sequi
                suscipit ut?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus facilis mollitia quas temporibus
                voluptatum! Ad at corporis doloremque, inventore minima modi vel voluptates. Aliquam debitis
                exercitationem incidunt quam sunt?
            </Text>
            <ListAccordion
                style={{
                    backgroundColor: '#fff'
                }}
                title="Сведения"
                titleStyle={{
                    color: '#000'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text>Исходная оценка</Text>
                    <Text style={{
                        color: 'grey'
                    }}>3 дня</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text>Начало выполнения</Text>
                    <Text style={{
                        color: 'grey'
                    }}>21.10.2022</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text>Срок исполнения</Text>
                    <Text style={{
                        color: 'grey'
                    }}>Нет</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text>Учет времени</Text>
                    <Text>2д. 3ч. из 6.</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text>Исполнитель</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            width: 30,
                            height: 30
                        }}
                        source={{
                            uri: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1'
                        }}
                        />
                        <Text >Вася пупкин</Text>
                    </View>
                </View>

            </ListAccordion>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text>Назначить себя исполнителем</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={isEnabled ? "#7ed321" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </ScrollView>
    );
};

export default BacklogTask;