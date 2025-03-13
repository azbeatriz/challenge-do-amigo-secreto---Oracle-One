<h1 align="center"> Challenge do Amigo Secreto </h1>

<h1> Descrição: </h1>
Este projeto implementa uma lista interativa de amigos, onde o usuário pode adicionar nomes de amigos, visualizar a lista e sortear um amigo aleatoriamente.

<h1>Funcionalidades</h1>

   - `Adicionar amigo:` O usuário pode adicionar um nome à lista de amigos;
   - `Exibir lista de amigos` A lista de amigos é exibida em tempo real na interface;
   - `Sortear amigo:` A função sorteia um amigo aleatoriamente da lista e o remove após o sorteio.

<h1>Dificuldades Enfrentadas</h1>:

1 - Incosistência nas variavéis: No início, houve confusão com a consistência dos nomes das variáveis, especialmente entre nomeDeAmigos e nomedeAmigos. Isso causou dificuldades ao tentar acessar a lista de amigos de forma consistente. A solução foi unificar e garantir que o nome da variável fosse sempre o mesmo.

2 - Verificação de lista vazia no sorteio: Na função de sorteio, foi necessário garantir que o sorteio só fosse realizado se houvesse amigos na lista. O primeiro passo foi realizar a verificação correta de nomeDeAmigos.length === 0 para impedir tentativas de sortear quando a lista estivesse vazia. Isso foi implementado para prevenir erros de execução.

<h1>O que foi feito com tranquilidade </h1>

1- Estrutura lógica clara:
        O código foi estruturado de maneira modular, com funções específicas para adicionar amigos, atualizar a lista e realizar o sorteio. Isso facilita a leitura e manutenção do código.

2- Validação de entrada:
        A validação de entrada foi corretamente implementada para garantir que o usuário não adicionasse um nome vazio à lista de amigos. Ao detectar um campo vazio, o sistema exibe um alerta amigável para o usuário.

<h1>Conclusão</h1>

Durante o desenvolvimento deste projeto, as maiores dificuldades envolveram a manipulação correta de variáveis e a atualização dinâmica da lista de amigos na interface. No entanto, com as correções feitas, o código agora está funcional, e a experiência do usuário foi aprimorada com validações adequadas e uma interface interativa.
