import './Header.scss';
import tesla_logo from '../../assets/tesla_logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={tesla_logo} alt={'tesla_logo'} />
        </div>
    );
};

export default Header;
