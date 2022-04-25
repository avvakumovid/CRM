import React, {useState} from 'react';
import HeaderButton from '../UI/HeaderButton';
import TabNavigator from '../Tabs/TabNavigator';
import ChatHeader from '../ChatHeader';
import Chat from '../Tabs/Dialogs/Chat/Chat';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OutgoingChat from '../Tabs/Outgoing/Chat/OutgoingChat';
import OutgoingChatHeader from '../Tabs/Outgoing/OutgoingChatHeader';
import Task from '../Tabs/Task/MyTasks/Task';
import Header from '../UI/Header';
import BacklogTask from '../Tabs/Task/BackLog/BacklogTask';
import Maps5 from '../Maps/Maps5';
import Maps3 from '../Maps/Maps3';
import Maps2 from '../Maps/Maps2';
import Map from "../Maps/Map";

const IsAuthNavigator = ({setAuth}) => {
    const Stack = createNativeStackNavigator()
    const [searchText, onChangeSearchText] = useState('');
    const [users, setUsers] = useState('')
    const [title, setTitle] = useState('')
    const dialog = [
        {
            id: 1,
            title: 'Название диалога №1',
            img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
            message: 'Создана новая задача',
            date: '20.02.2022',
            users: '3 участника',
            newMessage: 1,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Создана новая задача',
                    newTask: true,
                },
            ]
        },
        {
            id: 2,
            title: 'Название диалога №2',
            img: 'https://imgix.elitedaily.com/uploads/image/2020/7/16/e106c3a5-15c7-454b-a8ec-af1def6318c9-1.png',
            message: 'Отреманитровать lorem ipsum',
            date: 'Позавчера',
            users: '3 участника',
            newMessage: 23,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 3,
            title: 'Название диалога №3',
            img: 'https://cdn141.picsart.com/330083061057211.png',
            message: 'Получить lorem ipsum',
            date: 'Вчера',
            users: '3 участника',
            newMessage: 10,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 4,
            title: 'Название диалога №4',
            img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
            message: 'Сломать lorem ipsum',
            date: '11:08',
            users: '3 участника',
            newMessage: 111,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 5,
            title: 'Название диалога №5',
            img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
            message: 'Вломить людей',
            date: '23:54',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 6,
            title: 'Название диалога №1',
            img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
            message: 'Забрать lorem ipsum',
            date: '20.02.2022',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 7,
            title: 'Название диалога №2',
            img: 'https://imgix.elitedaily.com/uploads/image/2020/7/16/e106c3a5-15c7-454b-a8ec-af1def6318c9-1.png',
            message: 'Отреманитровать lorem ipsum',
            date: 'Позавчера',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 8,
            title: 'Название диалога №3',
            img: 'https://cdn141.picsart.com/330083061057211.png',
            message: 'Получить lorem ipsum',
            date: 'Вчера',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 9,
            title: 'Название диалога №4',
            img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
            message: 'Сломать lorem ipsum',
            date: '11:08',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },
        {
            id: 10,
            title: 'Название диалога №5',
            img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
            message: 'Вломить людей',
            date: '23:54',
            users: '3 участника',
            newMessage: 0,
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ],
            messages: [
                {
                    id: 1,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 2,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 3,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 4,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 5,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 6,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 7,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit amet, iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 8,
                    sender: 'me',
                    img: 'https://cdn141.picsart.com/330083061057211.png',
                    content: 'Lorem ipsum dolor sit!'
                },
                {
                    id: 9,
                    sender: 'other',
                    img: 'https://cdn141.picsart.com/329659734036211.png?type=webp&to=min&r=1024',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cupiditate harum illo in incidunt iste necessitatibus nobis recusandae reprehenderit!'
                },
                {
                    id: 10,
                    sender: 'other',
                    img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
                    content: 'Lorem ipsum dolor sit!'
                },
            ]
        },

    ]
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <HeaderButton
                            text="Выйти"
                            textAlign="right"
                            press={setAuth}
                            pressArg={false}
                        />
                    ),
                }}
                name=" ">
                {() => <TabNavigator/>}
            </Stack.Screen>
            <Stack.Screen
                name="Chat"
                options={({navigation}) => ({
                    headerShown: true,
                    header: () => (<ChatHeader
                        navigation={navigation}
                        onChangeSearchText={onChangeSearchText}
                        searchText={searchText}
                        users={users}
                        title={title}
                    />)
                })}>
                {props => <Chat {...props} setTitle={setTitle} setUsers={setUsers}/>}
            </Stack.Screen>
            <Stack.Screen
                name="OutgoingChat"
                options={({navigation, route}) => ({
                    headerShown: true,
                    header: () => (
                        <OutgoingChatHeader navigation={navigation} route={route} title={title}/>
                    )
                })}>
                {props => <OutgoingChat {...props} setTitle={setTitle}/>}
            </Stack.Screen>
            <Stack.Screen
                name="Task"
                options={({navigation, route}) => ({
                    headerShown: true,
                    header: () => (
                        <Header navigation={navigation} route={route} title={title} leftBtnContent="Назад"
                                rightBtnContent="Инцидент" rightBtnPress={
                            () => navigation.navigate('IncidentChat', {
                                dialog: dialog[1],
                            })
                        }/>
                    )
                })}>
                {props => <Task {...props} setTitle={setTitle}/>}
            </Stack.Screen>
            <Stack.Screen
                name="IncidentChat"
                options={({navigation}) => ({
                    headerShown: true,
                    header: () => (<ChatHeader
                        navigation={navigation}
                        onChangeSearchText={onChangeSearchText}
                        searchText={searchText}
                        users={users}
                        title={title}
                        rightBtnContent={'Инцидент'}
                    />)
                })}>
                {props => <Chat {...props} setTitle={setTitle} setUsers={setUsers}/>}
            </Stack.Screen>
            <Stack.Screen
                name="BacklogTask"
                options={({navigation, route}) => ({
                    headerShown: true,
                    header: () => (
                        <Header navigation={navigation} route={route} title={title} leftBtnContent="Назад"
                                rightBtnContent="Чат" rightBtnPress={
                            () => navigation.navigate('IncidentChat', {
                                dialog: dialog,
                            })
                        }/>
                    )
                })}>
                {props => <BacklogTask {...props} setTitle={setTitle} setUsers={setUsers}/>}
            </Stack.Screen>
            <Stack.Screen
                name="Maps2"
                options={({navigation, route}) => ({
                    headerShown: true,
                })}>
                {props => <Maps2 {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name="Maps3"
                options={({navigation, route}) => ({
                    headerShown: true,
                })}>
                {props => <Maps3 {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name="Maps5"
                options={({navigation, route}) => ({
                    headerShown: true,
                })}>
                {props => <Maps5 {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="Map"
              options={({navigation, route}) => ({
                  headerShown: true,
              })}>
                {props => <Map {...props} />}
            </Stack.Screen>


        </Stack.Navigator>
    );
};

export default IsAuthNavigator;
