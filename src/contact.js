const contactGen = () => {
    const contact = document.createElement('div')
    contact.setAttribute('id', 'contact')
    contact.setAttribute('data-tab-content', " ")

    const form = document.createElement('div')
    form.classList.add('form')

    const name = document.createElement('input')
    name.setAttribute('placeholder', 'Name')
    name.setAttribute('type', 'text')

    const mail = document.createElement('input')
    mail.setAttribute('placeholder', 'Email')
    mail.setAttribute('type', 'email')

    const submit = document.createElement('input')
    submit.setAttribute('value', 'Submit')
    submit.setAttribute('type', 'submit')

    const textarea = document.createElement('textarea')
    textarea.setAttribute('cols', '30')
    textarea.setAttribute('rows', '10')
    textarea.setAttribute('placeholder', 'We like to hear from you')

    form.appendChild(name)
    form.appendChild(mail)
    form.appendChild(textarea)
    form.appendChild(submit)

    contact.appendChild(form)

    return contact
}

export default contactGen