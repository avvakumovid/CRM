import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import BacklogItem from "./BacklogItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import AccordionList from "../../../UI/AccordionList";
import { AddTaskButton } from "./AddTaskButton";


const Backlog = ({navigation}) => {
    const {width: windowWidth} = Dimensions.get('window');
    const tasks = {
        name: 'Мессенджер',
        tasks: [
            {
                id: 1,
                name: 'Задача 1',
                subTask: [
                    {
                        id: 11,
                        name: 'Подзадача 1.1',
                    },
                    {
                        id: 12,
                        name: 'Подзадача 1.2',
                    }
                ]
            },
            {
                id: 2,
                name: 'Задача 2',
                subTask: [
                    {
                        id: 21,
                        name: 'Подзадача 2.1',
                    },
                    {
                        id: 22,
                        name: 'Подзадача 2.2',
                    }
                ]
            },
            {
                id: 3,
                name: 'Задача 3',
                subTask: []
            },
        ]
    }
    const tt = {}
    const tasksView = <AccordionList
        title={tasks.name}
        items={
            tasks.tasks.map(tt => {
                    if (tt.subTask.length === 0) {
                        return (
                            <BacklogItem key={tt.id + Math.random()} midContent={tt.name} press={() => navigation.navigate('BacklogTask', {
                                task: tt,
                            })}/>
                        )
                    } else {
                        return (
                            <AccordionList left={props => <BacklogItem key={tt.id + Math.random()} midContent={tt.name} width={'85%'}
                                                                       press={() => navigation.navigate('BacklogTask', {
                                                                           task: tt,
                                                                       })}/>}
                                           items={tt.subTask.map(e => <BacklogItem key={tt.id + Math.random()} midContent={e.name}
                                                                                   press={() => navigation.navigate('BacklogTask', {
                                                                                       task: tt,
                                                                                   })}/>)}/>
                        )
                    }
                }
            )}
    />

    return (
        <ScrollView>
            <BacklogItem midContent={'Задача'} press={() => navigation.navigate('BacklogTask', {
                task: tt,
            })}/>
            <BacklogItem midContent={'Выбор библиотекd для построения UI'}
                         press={() => navigation.navigate('BacklogTask', {
                             task: tt,
                         })}/>
            <BacklogItem press={() => navigation.navigate('BacklogTask', {
                task: tt,
            })}
                         midContent={'Задача'}
                         rightContent={<Ionicons name={'information-circle-outline'} size={20} color={'#6aaffb'}/>}/>
            <BacklogItem press={() => navigation.navigate('BacklogTask', {
                task: tt,
            })}
                         midContent={'Задача'} description={'Краткое описание'}
                         rightContent={<Ionicons name={'star-outline'} size={20} color={'#6aaffb'}/>}
            />
            <List.Accordion
                title="Контрагент Комплеанс"
                titleStyle={{
                    color: 'black',
                }}
                style={{
                    backgroundColor: '#fff',
                    paddingHorizontal: 0,
                }}>
                <List.Accordion
                    title={null}
                    left={props => <BacklogItem press={() => navigation.navigate('BacklogTask', {
                        task: tt,
                    })}
                                                midContent={'Задача'}
                                                rightContent={<Text style={{color: '#6aaffb'}}>Detail</Text>}
                                                width={'85%'}
                    />}
                    style={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 0,
                        height: 60,
                    }}>
                    <View style={{
                        backgroundColor: '#fff',
                        paddingLeft: windowWidth * 0.05
                    }}>
                        <BacklogItem press={() => navigation.navigate('BacklogTask', {
                            task: tt,
                        })}
                                     midContent={'Подзадача'}
                                     rightContent={<Text style={{color: '#6aaffb'}}>Detail</Text>}
                        />
                        <BacklogItem
                            press={() => navigation.navigate('BacklogTask', {
                                task: tt,
                            })}
                            midContent={'Подзадача'}
                                     rightContent={<Text style={{color: '#6aaffb'}}>Detail</Text>}
                        />

                    </View>
                </List.Accordion>
                <View style={{
                    backgroundColor: '#fff'
                }}>
                    <BacklogItem  press={() => navigation.navigate('BacklogTask', {
                        task: tt,
                    })}
                        midContent={'Задача'}
                                 rightContent={<Text style={{color: '#6aaffb'}}>Detail</Text>}

                    />
                    <BacklogItem press={() => navigation.navigate('BacklogTask', {
                        task: tt,
                    })}
                        midContent={'Задача'}
                                 rightContent={<Text style={{color: '#6aaffb'}}>Detail</Text>}
                                 width={'100%'}
                    />
                </View>
                <AddTaskButton/>
            </List.Accordion>
            {tasksView}
            {/*<AltAccordionList navigation={navigation} />*/}
        </ScrollView>
    );
};


export default Backlog;
