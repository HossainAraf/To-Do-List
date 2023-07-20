console.log(123);

import generateJoke from "./generateJoke";
import './styles/main.scss';
import './styles/style.css';
import twitter from './img/twitter.svg';

const twit = document.querySelector('#tw');
twit.src = twitter;

console.log(generateJoke());
