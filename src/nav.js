const list = (text, value) =>{
    const li = document.createElement('li');
    li.classList.add('tab');
    li.setAttribute('data-tab-target', value)
    li.innerText = text;
    return li;
}

const navBar = () => {
    const nav = document.createElement('nav')
    nav.classList.add('tabs')
    const home = list('Home', '#home');
    const menu = list('Menu', '#menu')
    const contact = list('Contact', '#contact');

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    
    return nav
}
export default navBar;