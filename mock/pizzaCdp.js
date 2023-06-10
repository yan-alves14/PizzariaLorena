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
                precoO: "35,00",
                precoProm: "19,99"
            },
            {
                itens: "2 PIZZAS GRANDES - ESCOLHA OS SABORES", 
                imagem1: pepperoni,
                imagem2: atum,
                precoO: "65,00",
                precoProm: "39,99"
            },
            {
                itens: "2 PIZZAS GRANDES DOCE", 
                imagem1: sensacao,
                imagem2: chocolate,
                precoO: "80,00",
                precoProm: "49,99"
            },
            {
                itens: "PIZZA PEPPERONI", 
                imagem1: pepperoni,
                precoO: "80,00",
                precoProm: "49,99"
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
