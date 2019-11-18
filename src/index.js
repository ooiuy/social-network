import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let PostData = [
    { id: 1, message: 'Salamandra' },
    { id: 2, message: 'Bratishka ejje' },
    { id: 3, message: 'Давай, не ленись, делай111' }
]
let dialogsData = [
    { id: 1, name: "Mars" },
    { id: 2, name: "Maks" },
    { id: 3, name: "Ruslan" },
    { id: 4, name: "Artem" },
    { id: 5, name: "Andrey" },
    { id: 6, name: "Vlad-avtomat" }
];
let messageData = [
    { id: 1, message: "krasav4ik" },
    { id: 2, message: "loh" },
    { id: 3, message: "vodila" },
    { id: 4, message: "povar" },
    { id: 5, message: "kartavii" },
    { id: 6, message: "ubica" }
];


ReactDOM.render(<App 
    PostData={PostData} 
    messageData={messageData} 
    dialogsData={dialogsData} 
    />, document.getElementById('root'));

