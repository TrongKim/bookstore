export class CookieUtils {
    static getCookieDeviceUUID(): string {
        return (document.cookie.split('deviceUUID=')[1] || '').split(';')[0];
    }

    static getCookieDeviceUUIDNode(): string {
        return (document.cookie.split('deviceUUIDNode=')[1] || '').split(';')[0];
    }

    static setCookieObject<T extends Object>(name: string, value: T, timeExpired: string): void {
        document.cookie = name + '=' + JSON.stringify(value) + '; path=/' + '; expires=' + timeExpired;
    }

    static getDomainUploadShort(): string | null {
        const informationCookieConfigJava = CookieUtils.getCookie('config_java');
        if(informationCookieConfigJava.length === 0) return null;
        const config_java = JSON.parse(informationCookieConfigJava);
        return config_java.api_upload_short;
    }

    static setCookie(name: string, value: string, timeExpired: string): void {
        document.cookie = name + '=' + value + '; path=/' + '; expires=' + timeExpired + ";";
    }

    static getCookie(name: string): string {
        return (document.cookie.split(name + '=')[1] || '').split(';')[0];
    }

    static setCookieProductToCart(value: string, timeExpired: string): void {
        CookieUtils.setCookie('cart', value, timeExpired);
    }

    static getCookieProductInCart(): string {
        return CookieUtils.getCookie('cart');
    }

    static clear(): void {
        CookieUtils.setCookie('api_key_java	', '', new Date(1999, 0, 0).toUTCString());
        CookieUtils.setCookie('deviceUUIDNode', '', new Date(1999, 0, 0).toUTCString());
        CookieUtils.setCookie('data_java', '', new Date(1999, 0, 0).toUTCString());
        CookieUtils.setCookie('data_profile', '', new Date(1999, 0 ,0).toUTCString());
    }

    static clearDataProfile(): void {
        CookieUtils.setCookie('data_profile', '', new Date(2022, 0 ,0).toUTCString());
    }

    static clearDataJava(): void {
        CookieUtils.setCookie('data_java', '', new Date(2022, 0, 0).toUTCString());
    }

} 