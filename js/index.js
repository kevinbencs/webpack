import '../index.html';
import getDate from './date.js';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import 'bootstrap';

//alert(getDate);

//document.querySelector('.js-content').innerHTML = getDate;

$(document).ready( () =>{
    $('.js-content').html(`It' ${getDate}`);

    /*$('.js-modal').modal({
        show: true,
        keyboard: true
    });*/
});
document.querySelector('.js-modal').modal({
    show: true,
    keyboard: true
});