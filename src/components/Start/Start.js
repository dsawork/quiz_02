import Header from '../Header/Header';
import bcg from '../../assets/bcg.png';
import './Start.scss';
import { useState } from 'react';

const Start = ({ setShowQuiz }) => {
    const [ hideStart, setHideStart ] = useState(false);
    
    const startQuiz = () => {
        setHideStart(true);

        setTimeout(() => {
            setShowQuiz(true);
        }, 800);
    }

    return (
        <div className='start-container'>
            <Header />
            <div className={`start-container-content ${hideStart ? 'hide-start' : ''}`}>
                <div className='bcg-img'></div>
                <div className='start-content'>
                    <div className='start-content-block'>
                        <div className='start-content-block-header'>
                            ¡Descubra El Nuevo Programa De Inversión Ahora! ¡Hazte Ultra Rico Ahora!
                        </div>
                        <div className='start-content-block-desc'>
                            Pase la prueba oficial y descubra que puede comenzar a ganar mucho dinero en efectivo!
                        </div>
                        <div 
                            className='start-content-block-btn gradient'
                            onClick={startQuiz}
                        >
                            Start test
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;
