import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                    <img src="https://pbs.twimg.com/profile_images/1256435725043748865/ApQXI_lJ_400x400.jpg" alt="Davi Oliveira"/>
                    <div>
                        <strong>Davi Oliveira</strong>
                        <span>Quimica</span>
                    </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de quimica avancada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias. Mais de 200.000 pessoas ja passaram por uma das minhas explosoes.
                    </p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;