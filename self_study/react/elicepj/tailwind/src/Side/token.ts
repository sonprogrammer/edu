import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setRefreshToken = (refreshToken: string, refreshExpiredDate: Date) => {
    return cookies.set('refresh_token', refreshToken, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(refreshExpiredDate),
    });
};

export const getCookieToken = () => {
    return cookies.get('refresh_token');
};

export const removeCookieToken = () => {
    return cookies.remove('refresh_token', { sameSite: 'strict', path: "/" })
}