import Styles from '../styles/components/Body.module.css';
import AbandonedDog from '../assets/images/abandoned_dog.png';
import AbandonedCats from '../assets/images/abandoned_cats.jpg';
import HappyDog from '../assets/images/happy.jpg';

function Body() {
    return (
        <div className={Styles.container}>
            <p>Seja muito bem vindo(a) ao Project Rescue, uma iniciativa, sem fins lucrativos,
            que visa sobretudo a diminuição do número de animais abandonados no Brasil, uma vez
            que o mesmo, segundo uma estimativa da Organização Mundial da Saúde, ultrapassa a
            marca de 30 milhões de animais. Estima-se ainda que deste número, 20 milhões
            representam cachorros e 10 milhões, gatos, logo pode-se perceber que não só possuímos um
            número muito grande de animais abandonados em solo brasileiro, mas que as
            medidas que vêm sendo tomadas também não surtem o efeito desejado.
                </p>

            <img src={AbandonedDog} alt="abandoned dog" />

            <p>E foi por achar esse número assustadoramente grande, como talvez você esteja
            achando, que nossa equipe decidiu utilizar da tecnologia ao nosso favor,
            desenvolvendo a seguinte solução como uma forma de reduzir tal número, visto que a
            partir dela, você, que deseja contribuir com essa causa, pode: fazer registros de
            animais perdidos (clicando em "Ir para o mapa" no menú superior), haja vista que
            uma grande parcela do número de animais desabrigados acima citado faz referência à
            cachorros que se perderam, por algum motivo, de seus donos; buscar por registros
            de animais perdidos e/ou encontrados (acessando o item "Ver registros", que também
            se encontra no menú superior) e, ainda, em breve, encaminhar o seu registro para
            Organizações não Governamentais (ONGs) que se encontrem próximas ao local e
            possuam foco em resgatar e cuidar desses animais.
                </p>

            <img src={AbandonedCats} alt="abandoned cat" />

            <p>Dessa forma, esperamos tão simplesmente estarmos fazendo a nossa parte para
            resgatar essas vidas, assim como esperamos que você, através de alguns cliques,
            também nos ajude com essa missão, para que assim, possamos não somente resgatar
            a vida de um animal, mas também trazer de volta para ele, a alegria de outrora.
                </p>

            <img src={HappyDog} alt="happy dog" />

            <p>Resgate uma vida, faça a diferença!</p>
        </div>
    )
}

export { Body };
