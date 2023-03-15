-----------------------------------*HTML*-----------------------------------------

*Icones:
  - O seguinte script foi retirado do site fontawesome (basta criar sua conta e obter o seu para usar no seus projetos):
  <script src="https://kit.fontawesome.com/074171eb97.js" crossorigin="anonymous"></script>
  - Esse script (que está posicionado ao final ddo body) permite usar classes como "fa fa-bold" para dar um ícone à tag correspondente, normalmente se usa a tag <i> ou <span> para tal.
  (Para ter acesso ao código de cada icone é preciso ir À seção icons do site)

*Buttons:
    -Este é o botão responsável por transformar o texto selecionado em bold (negrito)

    <button type="button" class="btn" data-element="bold">
       <i class="fa fa-bold"></i>  
    </button>

    -Cada botão recebeu um atributo customizado data, o atributo data é sempre seguido de traço o nome desejado e um valor, exemplo: data-element="bold"
     Este valor será de extrema importância para o código Java Script funcionar, por isso cada um dos botões tem um valor específico guradado dentro de data-element.

*Na div textArea foi necessário utilizar o atributo spellcheck = "false", pois sempre que selecionava o texto ele ficava sublinhado de vermelho :D     


-----------------------------------*CSS*-----------------------------------------

   -A estilização fica a cargo do dev, porém me chame se houiver dúvida, vamos nos ajduar ;)


------------------------------------*Js*-----------------------------------------
                                                         -were the magic happens-
   
   - Todos os comentários estão no código

