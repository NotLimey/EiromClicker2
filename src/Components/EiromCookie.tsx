import { INCREMENT_COOKIE } from '@/store/actions';
import EiromImage from '@Images/Eirik.d6882a66.png';
import { useDispatch } from 'react-redux';

const EiromCookie = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <img onClick={() => dispatch({type: INCREMENT_COOKIE})} src={EiromImage} alt="" />
        </div>
    );
}

export default EiromCookie;