import React from "react";
import cartao from '../assets/imgPerfil/cartao.png'
import historico from '../assets/imgPerfil/historico.png'
import carrinho from '../assets/imgPerfil/carrinho.png'
import favoritos from '../assets/imgPerfil/favoritas.png'
import config from '../assets/imgPerfil/config.png'
import localizacao from '../assets/imgPerfil/localizacao.png'

const perfilOpcoes = {
    nomePerfil: "Dev Teste",
    itensPerfil:[
        {
            imagem: cartao,
            funcao: "Pagamentos"
        },
        {
            imagem: historico,
            funcao: "Historico"
        },
        {
            imagem: carrinho,
            funcao: "Carrinho"
        },
        {
            imagem: favoritos, 
            funcao: "Favoritos"
        },
        {
            imagem: config,
            funcao: "Configurações"
        },
        {
            imagem: localizacao,
            funcao: "Endereço"
        }
    ],
}
export default perfilOpcoes;