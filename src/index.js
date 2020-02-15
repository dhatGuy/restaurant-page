import homeGen from './home.js';
import onload from './initialPageLoad';

console.clear()

const content = document.querySelector('#content')
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')


onload()
tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        if(e.target.id == 'home'){
            tabs[2].classList.remove('active')
            tabs[1].classList.remove('active')
            tab.classList.add('active')
            content.innerHTML = ``
            content.appendChild(homeGen())
        } else if (e.target.id == 'menu'){
            tabs[0].classList.remove('active')
            tabs[2].classList.remove('active')
            tab.classList.add('active')
            document.querySelector('#content').innerHTML = `<div id="menu" class="active" data-tab-content="">
            <h1>Menu</h1>
            <p>Read about us</p>
        </div>`
        } else {
            tabs[0].classList.remove('active')
            tabs[1].classList.remove('active')
            tab.classList.add('active')
            document.querySelector('#content').innerHTML = `<div id="contact" data-tab-content="">
            <h1>Contact</h1>
            <p>We are just an email away :) </p>
        </div>`
        }
    })
});

