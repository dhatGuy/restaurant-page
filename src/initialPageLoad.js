import homeGen from './home.js'


const onload = ()=> {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#content').appendChild(homeGen());
    });
};

export default onload