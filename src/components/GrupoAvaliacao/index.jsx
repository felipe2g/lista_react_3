import Avaliacao from "../Avaliacao";
import data from '../../assets/data.json'

export default function GrupoAvaliacao() {

    const avaliacoes = [
        {
            "name": "Ana Bruck",
            "title": "Eu recomendo a Leticia, pois o atendimento dele fez toda diferença",
            "description": "A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos.",
            "imgUrl": "./foto01.jpeg"
        },
        {
            "name": "Rob Soult",
            "title": "Eu recomendo a Leticia, pois o atendimento dele fez toda diferença",
            "description": "A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos.",
            "imgUrl": "./foto02.jpeg"
        },
        {
            "name": "Lili Break",
            "title": "Eu recomendo a Leticia, pois o atendimento dele fez toda diferença",
            "description": "A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos.",
            "imgUrl": "./foto03.jpeg"
        },
        {
            "name": "Max Robs",
            "title": "Eu recomendo a Leticia, pois o atendimento dele fez toda diferença",
            "description": "A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos.",
            "imgUrl": "./foto04.jpeg"
        },
        {
            "name": "Dani Shutz",
            "title": "Eu recomendo a Leticia, pois o atendimento dele fez toda diferença",
            "description": "A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queríamos.",
            "imgUrl": "./foto05.jpeg"
        }
    ]

    function selectAndRenderThreeCards() {
        const itemsIndex = [];

        while(itemsIndex.length < 3) {
            const randomNumber = Math.floor(Math.random() * 5);

            if(!itemsIndex.includes(randomNumber)) {
                itemsIndex.push(randomNumber)
            }
        }

        return itemsIndex.map(item => <Avaliacao name={avaliacoes[item].name} imgUrl={avaliacoes[item].imgUrl} title={avaliacoes[item].title} description={avaliacoes[item].description} />)
    }

    return (
        <div style={{ display: 'flex', gap: 16 }}>
            {selectAndRenderThreeCards()}
        </div>
    )
}