import SpinerLoad from '../SpinerLoadPage/SpinerLoad';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function CheckCookies() {
    const [isShowLoad, setIsShowLoad] = useState(true);
    const pathName = window.location.pathname;
    const nav = useNavigate();

    function checkLogin() {
        const cookie = Cookies.get('Login');
        if (cookie) {
            const { status, id } = JSON.parse(cookie);
            if (status.toLowerCase() !== 'success')
                nav('/back-end/login');
            else if (pathName === '/back-end/login')
                nav('/back-end/main');
        }
        else nav('/back-end/login');
    }

    useEffect(() => {
        checkLogin();
        setIsShowLoad(false);
    }, []);

    return (
        <>
            <SpinerLoad showLoad={isShowLoad} />
        </>
    );
}