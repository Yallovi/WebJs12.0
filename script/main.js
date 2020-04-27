window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    //Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

            function getTimeRemaining(){
                let dateStop = new Date(deadline).getTime(),
                    dateNow = new Date().getTime(),
                    timeRemaining = ((dateStop - dateNow) / 1000).toString(),
                    seconds = Math.floor(timeRemaining % 60).toString(),
                    minutes = Math.floor((timeRemaining / 60) % 60).toString(),
                    hours = Math.floor((timeRemaining / 60 / 60) % 24).toString();
                    if(timeRemaining < 0){
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                        clearInterval(2);
                    }

                    if(hours.length === 1){
                        const temp = hours;
                        hours =  '0' + temp;
                    }

                    if(minutes.length === 1){
                        const temp = minutes;
                        minutes =  '0' + temp;
                    }

                    if(seconds.length === 1){
                        const temp = seconds;
                        seconds =  '0' + temp;
                    }

                    return {timeRemaining, hours, minutes, seconds};
                
                
            }
            
            function updateClock(){
                let timer = getTimeRemaining();
                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;


                if(timer.timeRemaining > 0){
                setInterval(updateClock, 1000);
                
            }
            }
            updateClock();
            
            
    }
    countTimer('01 may 2020');

    //Menu 
    const toggleMenu = () =>{

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
                    menu.style.transform = `translate(0)`;
                }else {
                    menu.style.transform = `translate(-100%)`;
                }
            };

            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click',handlerMenu);
            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');

        const animationPopup = () => {
            if (window.innerWidth < 768) {
                popup.style.display = 'block';
                return;
            }
            popup.children[0].style.marginLeft = '100%';
            popup.style.marginLeft = '-100%';
            popup.style.display = 'block';
            const idInterval = setInterval(() => {
                if (popup.style.marginLeft === '0%') {
                    popup.style.marginLeft = '0%';
                    popup.children[0].style.marginLeft = '0%';
                    clearInterval(idInterval);
                    return;
                }
                const number = Number.parseInt(popup.style.marginLeft) + 2;
                popup.children[0].style.marginLeft = number + '%';
                popup.style.marginLeft = number + '%';
            }, 1);
            };

        popupBtn.forEach(elem => {
            elem.addEventListener('click', animationPopup);
        });


        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () =>{
                popup.style.display = 'block';
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = ' none';
        });
    }; 

    togglePopup();
});