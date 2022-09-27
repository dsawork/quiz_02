import { useState } from 'react';
import classNames from 'classnames';
import quiz_1 from '../../assets/quiz_1.png';
import quiz_2 from '../../assets/quiz_2.png';
import quiz_3 from '../../assets/quiz_3.png';
import quiz_4 from '../../assets/quiz_4.png';
import quiz_5 from '../../assets/quiz_5.png';
import asd from '../../assets/asd.png';
import './Quiz.scss';

const Quiz = ({ quizNumber, setQuizNumber }) => {
    
    const stopQuiz = () => {
        setTimeout(() => {
            setQuizNumber(6);
        }, 500);
    }

    return (
        <div className='quiz-container'>
            <div className={`quiz-item quiz-1 ${quizNumber >= 2 ? 'display-none' : ''}`}>
                <div className='quiz-item-header'>
                    ¿Qué cantidad de dinero al mes le convendría para hacer realidad sus sueños?
                </div>
                <div className='quiz-item-content'>
                    <div className='quiz-item-content-left'>
                        <div className="radio" >
                            <input id="radio-1" name="radio" type="radio" onClick={() => setQuizNumber(2)}/>
                            <label htmlFor="radio-1" className="radio-label">1000000 <img src={asd} alt='asd'/></label>
                        </div>
                        <div className="radio" >
                            <input id="radio-2" name="radio" type="radio" onClick={() => setQuizNumber(2)}/>
                            <label htmlFor="radio-2" className="radio-label">2500000 <img src={asd} alt='asd'/></label>
                        </div>
                        <div className="radio" >
                            <input id="radio-3" name="radio" type="radio" onClick={() => setQuizNumber(2)}/>
                            <label htmlFor="radio-3" className="radio-label">5000000 <img src={asd} alt='asd'/></label>
                        </div>
                        <div className="radio" >
                            <input id="radio-4" name="radio" type="radio" onClick={() => setQuizNumber(2)}/>
                            <label htmlFor="radio-4" className="radio-label">10000000 <img src={asd} alt='asd'/></label>
                        </div>

                        {/* <label className='quiz-label' onClick={() => setQuizNumber(2)}>
                            <input className='quiz-label-radio' type='radio' name='step1' value='1000000$' />
                            <span className='quiz-label-text'>1000000 <img src={asd} alt='asd'/> </span>
                        </label>
                        <label className='quiz-label' onClick={() => setQuizNumber(2)}>
                            <input className='quiz-label-radio' type='radio' name='step1' value='2500000$' />
                            <span className='quiz-label-text'>2500000 <img src={asd} alt='asd'/></span>
                        </label>
                        <label className='quiz-label' onClick={() => setQuizNumber(2)}>
                            <input className='quiz-label-radio' type='radio' name='step1' value='5000000$' />
                            <span className='quiz-label-text'>5000000 <img src={asd} alt='asd'/></span>
                        </label>
                        <label className='quiz-label' onClick={() => setQuizNumber(2)}>
                            <input className='quiz-label-radio' type='radio' name='step1' value='10000000$' />
                            <span className='quiz-label-text'>10000000 <img src={asd} alt='asd'/></span>
                        </label> */}
                    </div>
                    <div className='quiz-item-content-right'>
                        <img src={quiz_1} alt='quiz_1' />
                    </div>
                </div>

                <div className='quiz-item-footer'>
                    <div className='step-no'>Paso 1 de 5</div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                </div>
            </div>





            <div className={`quiz-item quiz-2 ${quizNumber >= 3 ? 'display-none' : ''}`}>
                <div className='quiz-item-header'>
                    ¿Cuál es tu propósito para aumentar tu riqueza?
                </div>
                <div className='quiz-item-content'>
                    <div className='quiz-item-content-left'>
                        <div className="radio" >
                            <input id="radio-5" name="radio" type="radio" onClick={() => setQuizNumber(3)}/>
                            <label htmlFor="radio-5" className="radio-label">Para la compra de bienes raíces</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-6" name="radio" type="radio" onClick={() => setQuizNumber(3)}/>
                            <label htmlFor="radio-6" className="radio-label">Para la compra de coche (s)</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-7" name="radio" type="radio" onClick={() => setQuizNumber(3)}/>
                            <label htmlFor="radio-7" className="radio-label">Para invertir para recibir más dinero </label>
                        </div>
                        <div className="radio" >
                            <input id="radio-8" name="radio" type="radio" onClick={() => setQuizNumber(3)}/>
                            <label htmlFor="radio-8" className="radio-label">Por apoyar a mis familiares</label>
                        </div>
                    </div>
                    <div className='quiz-item-content-right'>
                        <img src={quiz_2} alt='quiz_2' />
                    </div>
                </div>

                <div className='quiz-item-footer'>
                    <div className='step-no'>Paso 2 de 5</div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                </div>
            </div>



            <div className={`quiz-item quiz-3 ${quizNumber >= 4 ? 'display-none' : ''}`}>
                <div className='quiz-item-header'>
                    ¿Tienes experiencia en inversiones?
                </div>
                <div className='quiz-item-content'>
                    <div className='quiz-item-content-left'>
                        <div className="radio" >
                            <input id="radio-9" name="radio" type="radio" onClick={() => setQuizNumber(4)}/>
                            <label htmlFor="radio-9" className="radio-label">No, pero estoy ansioso por saber más</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-10" name="radio" type="radio" onClick={() => setQuizNumber(4)}/>
                            <label htmlFor="radio-10" className="radio-label">Sí</label>
                        </div>
                    </div>
                    <div className='quiz-item-content-right'>
                        <img src={quiz_3} alt='quiz_3' />
                    </div>
                </div>

                <div className='quiz-item-footer'>
                    <div className='step-no'>Paso 3 de 5</div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar'></div>
                    <div className='progress-bar'></div>
                </div>
            </div>



            <div className={`quiz-item quiz-4 ${quizNumber >= 5 ? 'display-none' : ''}`}>
                <div className='quiz-item-header'>
                    Ponemos a su disposición un gestor personal gratuito para ayudarle a dar sus primeros pasos en el mercado financiero. ¿Te gustaría utilizar este servicio?
                </div>
                <div className='quiz-item-content' style={{marginTop: '20px'}}>
                    <div className='quiz-item-content-left'>
                        <div className="radio" >
                            <input id="radio-11" name="radio" type="radio" onClick={() => setQuizNumber(5)}/>
                            <label htmlFor="radio-11" className="radio-label">Sí, por supuesto, quiero tener éxito</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-12" name="radio" type="radio" onClick={() => setQuizNumber(5)}/>
                            <label htmlFor="radio-12" className="radio-label">No</label>
                        </div>
                    </div>
                    <div className='quiz-item-content-right'>
                        <img src={quiz_4} alt='quiz_4' id='fucking-fuck' 
                        // style={{width: '70%'}} 
                        />
                    </div>
                </div>

                <div className='quiz-item-footer'>
                    <div className='step-no'>Paso 4 de 5</div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar'></div>
                </div>
            </div>




            <div className='quiz-item quiz-5'>
                <div className='quiz-item-header'>
                    ¿Cómo conociste nuestro proyecto?
                </div>
                <div className='quiz-item-content'>
                    <div className='quiz-item-content-left'>
                        <div className="radio" >
                            <input id="radio-13" name="radio" type="radio" onClick={() => stopQuiz()}/>
                            <label htmlFor="radio-13" className="radio-label">Publicidad en la web</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-14" name="radio" type="radio" onClick={() => stopQuiz()}/>
                            <label htmlFor="radio-14" className="radio-label">Recomendaciones de amigos</label>
                        </div>
                        <div className="radio" >
                            <input id="radio-15" name="radio" type="radio" onClick={() => stopQuiz()}/>
                            <label htmlFor="radio-15" className="radio-label">Anuncios al aire libre</label>
                        </div>
                    </div>
                    <div className='quiz-item-content-right'>
                        <img src={quiz_5} alt='quiz_5' />
                    </div>
                </div>

                <div className='quiz-item-footer'>
                    <div className='step-no'>Paso 5 de 5</div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                    <div className='progress-bar progress-bar-selected'></div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;