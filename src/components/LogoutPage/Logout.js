import SpinerLoad from '../SpinerLoadPage/SpinerLoad';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function Logout() {
    const [isShowLoad, setIsShowLoad] = useState(true);
    const nav = useNavigate();

    Cookies.remove('Login');

    setTimeout(() => {
        setIsShowLoad(false);
        nav('/Back-End/Login');
    }, 800);

    return (
        <>
            <SpinerLoad showLoad={isShowLoad} />
        </>
    );
}