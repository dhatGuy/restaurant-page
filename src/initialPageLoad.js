import homeGen from './home.js'


function onload() {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#content').appendChild(homeGen());
    });
};

export default onload