import './index.css'

export default function Avaliacao({ imgUrl, name, title, description}) {
    return (
        <div className='divAvaliacao'>
            <div className='divIcone'>
                <img className='imgAvaliacao' src={imgUrl} alt="Imagem do usuário" />
            </div>
            <div className='infoText'>
                <h4>{name}</h4>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}