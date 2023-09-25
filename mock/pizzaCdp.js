import react from "react";
import dolly from "../assets/imgCardapio/dolly.png";
import pepperoni from "../assets/imgCardapio/pepperoni.png";
import atum from "../assets/imgCardapio/atum.png";
import chocolate from "../assets/imgCardapio/chocolate.png";
import sensacao from "../assets/imgCardapio/sensacao.png";
import frango from "../assets/imgCardapio/frango.png";


const pizza = {
    promocao:{
        listaP: [
            {
                id: 1,
                itens: "PIZZA GRANDE DE PEPERONI + DOLLY 2L", 
                imagem1: dolly,
                imagem2: pepperoni,
                xICon: "X",
                precoO: "44,99",
                precoProm: "34,99"
            },
            {
                id: 2,
                itens: "2 PIZZAS GRANDES - ESCOLHA OS SABORES", 
                imagem1: pepperoni,
                imagem2: atum,
                xICon: "X",
                precoO: "69,99",
                precoProm: "64,99"
            }, 
            {
                id: 3,
                itens: "2 PIZZAS GRANDES DOCE", 
                imagem1: sensacao,
                imagem2: chocolate,
                xICon: "X",
                precoO: "79,99",
                precoProm: "69,99"
            },
            {
                id: 4,
                itens: "PIZZA PEPPERONI", 
                imagem1: pepperoni,
                xICon: "X",
                precoO: "39,99",
                precoProm: "29,99"
            }
        ]
    },
    sabores:{
        listaS: [
            {
                id: 1,
                nome: "Pizza de Pepperoni",
                preco: 49.9,
                descricao: "Pizza de pepperoni com mussarela!",
                imagem: pepperoni,
            },
            {
                id: 2,
                nome: "Pizza de atum com cebola",
                preco: 30.9,
                descricao: "Atum ralado com cebola e mussarela!",
                imagem: atum,
            },
            {
                id: 3,
                nome: "Pizza de chocolate com morango",
                preco: 50.0,
                descricao: "Pizza de sensação!",
                imagem: sensacao,
            },
            {
                id: 4,
                nome: "Pizza de chocolate",
                preco: 47.30,
                descricao: "Pizza de chocolate!",
                imagem: chocolate,
            },
            {
                id: 5,
                nome: "Pizza de Frango",
                preco: 34.9,
                descricao: "Frango com catupiry e cebola!",
                imagem: frango
            }
        ]
    }
}

export default pizza;
