//
const elements = document.querySelectorAll('.btn')

//Event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element']

        if(command == 'createLink') {
            let url = prompt('Insira o link', 'http://')
            document.execCommand(command, false, url)
        } else if (command == 'insertImage') {
            let url = prompt('Insira o endereço da imagem')
            document.execCommand(command, false, url)
        }
        else {
            document.execCommand(command, false, null)
        }
    })
})