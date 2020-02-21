import homeGen from './home.js';
import onload from './initialPageLoad';
import menuGen from './menu.js';
import contactGen from './contact.js';

console.clear()

const content = document.querySelector('#content')
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')


onload()
tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        if (e.target.id == 'home') {
            tabs[2].classList.remove('active')
            tabs[1].classList.remove('active')
            tab.classList.add('active')
            content.innerHTML = ``
            content.appendChild(homeGen())
        } else if (e.target.id == 'menu') {
            tabs[0].classList.remove('active')
            tabs[2].classList.remove('active')
            tab.classList.add('active')
            content.innerHTML = ``
            content.appendChild(menuGen())
        } else {
            tabs[0].classList.remove('active')
            tabs[1].classList.remove('active')
            tab.classList.add('active')
            content.innerHTML = ``
            content.appendChild(contactGen())
        }
    })
});