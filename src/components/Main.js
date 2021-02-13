import React from 'react';
import Particles from 'react-particles-js';
import ImageReact from '../images/react_js.png'
import ImageJava from '../images/javascript.png'
import ImageNode from '../images/node_js.png'
import ImageStyled from '../images/styled_components.png'
import ImageType from '../images/typescript.png'
import ImageHealthTrack from '../images/health_track.png'


class Main extends React.Component {
    render() {
        return (
            <main>
                <Particles id="particles-js"
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            color: {
                                value: '#ffff'
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.06
                            },
                            "move": {
                                "direction": "random",
                                "speed": 0.95
                            },
                            "size": {
                                "value": 1.6
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 15
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />

                <h1>
                    <span>Front-end Developer</span>
                    <span>Gustavo Petry</span>
                </h1>
                <h2>
                    Faço o que gosto, por isso faço bem feito.
                </h2>

                <div className="works">
                    <div className="title-about">
                        Sobre mim
                    </div>
                    <div className="about-me">
                        <div className="description">
                            <p className="textAbout">Olá! Me chamo Gustavo Petry, sou um desenvolvedor que adora realizar, produzir e ensinar. Possuo espírito inovador, gosto de trabalhar em equipe e de me relacionar com pessoas. Atualmente eu sou estagiário de tecnologia do <strong>Itaú Unibanco</strong>. Realizo meus projetos utilizando a melhor tecnologia e seguindo as melhores práticas.</p>
                        </div>
                    </div>
                    <h1 className="titleStack">
                        Stack atual
                    </h1>
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <img src={ImageReact} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageJava} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageNode} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageStyled} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageType} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageReact} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageJava} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageNode} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageStyled} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageType} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageReact} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageJava} alt="" className="picture-slider" />
                            </div>
                            <div class="slide">
                                <img src={ImageNode} alt="" className="picture-slider" />
                            </div>
                        </div>
                    </div>

                    <div className="trabalhos">
                        <div className="title-trabalhos">
                            Projetos
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <div className="health-track">
                            <div className="health-track-image">
                                <img src={ImageHealthTrack} />
                            </div>
                            <br>
                            </br>
                            <div className="health-track-description">
                                <p className="text-health-track">O Health Track tem o objetivo de ajudar o usuário a acompanhar sua saúde de uma maneira simples e rápida. Tendo um acompanhamento diário desde os alimentos ingeridos até atividades físicas praticadas. Com gráficos e dashboards para facilitar a visualização, sem dúvidas o Health Track vai ajudar você a ter uma evolução de forma simples e intuitiva.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main >
        )
    }
}

export default Main;



































