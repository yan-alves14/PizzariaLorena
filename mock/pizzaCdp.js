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
                itens: "PIZZA GRANDE DE PEPERONI + DOLLY 2L", 
                imagem1: dolly,
                imagem2: pepperoni,
                xICon: "X",
                precoO: "44,99",
                precoProm: "34,99"
            },
            {
                itens: "2 PIZZAS GRANDES - ESCOLHA OS SABORES", 
                imagem1: pepperoni,
                imagem2: atum,
                xICon: "X",
                precoO: "69,99",
                precoProm: "64,99"
            }, 
            {
                itens: "2 PIZZAS GRANDES DOCE", 
                imagem1: sensacao,
                imagem2: chocolate,
                xICon: "X",
                precoO: "79,99",
                precoProm: "69,99"
            },
            {
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
export default pizza;
