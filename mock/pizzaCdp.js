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
                sabor: "Pizza de Pepperoni",
                //imagem: "",
            },
            {
                sabor: "Pizza de atum com cebola",
                //imagem: "",
            },
            {
                sabor: "Pizza de chocolate com morango",
                //imagem: "",
            },
            {
                sabor: "Pizza de chocolate com morango",
                //imagem: "",
            },
        ]
    }
}

const produtos = [
    {
        id: 1,
        nome: "CESTAS INVERNO",
        preco: 98.21,
        descrica: "CEsta de frutas tipicas do inverno!",
    
    },
    {
        id: 2,
        nome: "CESTAS VERÃO",
        preco: 38.21,
        descrica: "Cesta de frutas tipicas do verao!",
    },
    {
        id: 3,
        nome: "CESTAS ESTAÇÕES",
        preco: 67.21,
        descrica: "Cesta de frutas tipicas da estação vigente",
    }
    ];
export default pizza;
