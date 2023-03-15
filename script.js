//Cria um array com todos elementos que possuem a classe btn (todos os nossos botões tem essa classe)
const elements = document.querySelectorAll('.btn')

//Depois de criado o array é hora de percorrê-lo usando forEach ("para cada, faça...") e aqui damos o nome de element para o parametro que vamos receber
elements.forEach(element => {

    //aqui adicionamos o evento de clique
    element.addEventListener('click', () => {
        
        //criamos command para guardar o valor que está dentro de dataset e de lá pegamos o valor do atributo personalizado data-element: bold, italic, underline...
        let command = element.dataset['element']

        if(command == 'createLink') {
            let url = prompt('Insira o link', 'http://')
            document.execCommand(command, false, url)
        } 
        
        else if (command == 'insertImage') {
            let url = prompt('Insira o endereço da imagem')
            document.execCommand(command, false, url)
        } 
        
        else if (command == 'colorRed') {
            // Colorize text
           document.execCommand("ForeColor", false, "red");
           // Set design mode to off
           document.designMode = "off";
        } 
        
        else if (command == 'colorBlue') {
            // Colorize text
           document.execCommand("ForeColor", false, "blue");
           // Set design mode to off
           document.designMode = "off";
        } 
        
        else if (command == 'colorGreen') {
            // Colorize text
           document.execCommand("ForeColor", false, "green");
           // Set design mode to off
           document.designMode = "off";
        }
        
        else {
            document.execCommand(command, false, null)
        }
    })
})