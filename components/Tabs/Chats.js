import Dialogs from './Dialogs/Dialogs';
import Outgoing from './Outgoing/Outgoing';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const TopTab = createMaterialTopTabNavigator();
const Chats = () => {

    const important = [
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
    const flood = [
        {
            id: 1,
            title: 'Не важный диалог №1',
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
            ]
        },
        {
            id: 2,
            title: 'Не важный диалог №2',
            img: 'https://imgix.elitedaily.com/uploads/image/2020/7/16/e106c3a5-15c7-454b-a8ec-af1def6318c9-1.png',
            message: 'Отреманитрова lorem ipsum',
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
            ]
        },
        {
            id: 3,
            title: 'Не важный диалог №3',
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
            ]
        },
        {
            id: 4,
            title: 'Не важный диалог №4',
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
            ]
        },
        {
            id: 5,
            title: 'Не важный диалог №5',
            img: 'https://i0.wp.com/www.appletips.nl/wp-content/uploads/2018/09/memoji.png?fit=679%2C679&ssl=1',
            message: 'Вломить людей',
            date: '23:54',
            users: '3 участника',
            newMessage: 16,
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
        <TopTab.Navigator>
            <TopTab.Screen
                name="Выжные"
            >
                {props => <Dialogs {...props} dialogs={important}/>}
            </TopTab.Screen>
            <TopTab.Screen
                name="Не важные"
            >
                {props => <Dialogs {...props} dialogs={flood}/>}
            </TopTab.Screen>
            <TopTab.Screen name="Исходящие">
                {props => <Outgoing {...props} dialog={[]}/>}
            </TopTab.Screen>
        </TopTab.Navigator>
    );
};

export default Chats;