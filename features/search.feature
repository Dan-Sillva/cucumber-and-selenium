# language: pt 

Funcionalidade: Pesquisa

    Cenário: Pesquisa por "nodejs" no google
        Dado que o usuário esteja no site de pesquisa google
        Quando pesquisar pelo termo "nodejs"
        Então o sistema deve exibir resultados sobre node
        E fechar a página