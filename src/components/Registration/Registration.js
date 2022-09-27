import { useState } from 'react';
// import intlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/css/intlTelInput.css';
import PhoneInput from 'react-phone-input-2'
import person from '../../assets/person.png';
import 'react-phone-input-2/lib/style.css'
import './Registration.scss';

const Registration = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');


    return (
        <div className='reg-container'>
            <div className='reg-container-wrapper'>
                <div className='reg-container-wrapper-block'>


                    <div className='left-reg'>
                        <div className='reg-header'>
                            Felicidades! Las inversiones en la plataforma están disponibles para usted!
                        </div>
                        <div className='reg-desc'>
                            Felicidades! Las inversiones en la plataforma están disponibles para usted!
                        </div>
                    </div>


                    <div className='right-reg'>
                        <div className='input-item'>
                            <div className='input-item-text'>
                                Nombre
                            </div>
                            <div className='input-item-input'>
                                <img src={person} alt='person' />
                                <input
                                    type='text'
                                    placeholder='Nombre'
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className='input-item'>
                            <div className='input-item-text'>
                                Apellido
                            </div>
                            <div className='input-item-input'>
                                <img src={person} alt='person' />
                                <input
                                    type='text'
                                    placeholder='Apellido'
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className='input-item'>
                            <div className='input-item-text'>
                                Correo electrónico
                            </div>
                            <div className='input-item-input'>
                                <img src={person} alt='person' />
                                <input
                                    type='text'
                                    placeholder='Correo electrónico'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className='input-item'>
                            <div className='input-item-text'>
                                Número de Teléfono
                            </div>
                            <PhoneInput
                                specialLabel={''}
                                country={'th'}
                            />
                        </div>


                        <div className='checkbox-area' style={{marginTop: '20px'}}>
                            <input type='checkbox' name='polirics' />
                            <div className='checkbox-area-text'>Acepto la política de privacidad</div>
                        </div>
                        <div className='checkbox-area'>
                            <input type='checkbox' name='old' />
                            <div className='checkbox-area-text'>Soy mayor de 18 años</div>
                        </div>


                        <div className='reg-button'>
                            Registrarse
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
