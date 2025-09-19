import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: "Green",
            imagem:  green,
            distancia: "1m",
            estrelas: '5',

        },
        {
            nome: "Salad",
            imagem:  salad,
            distancia: "1.3km",
            estrelas: '4',
        },
        {
            nome: "Jenny Jack Farm",
            imagem:  jennyJack,
            distancia: "2.1km",
            estrelas: '5',
        },
        {
            nome: "Grow",
            imagem:  grow,
            distancia: "2.4km",
            estrelas: '4.5',
        },
        {
            nome: "Potager",
            imagem:  potager,
            distancia: "2.7km",
            estrelas: '4',
        },
    ]
}

export default produtores;