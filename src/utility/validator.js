class validator{
    static isEmail(value) {
        let emailRegx = /\S+@\S+\.\S+/;
        return emailRegx.test(value);
    }
    static isPassword(value) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passRegex.test(value);
    }
    static isMobile(value) {
        let  mobileRegx = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
        return mobileRegx.test(value);
    }
    static isNumber(value) {
        let  onlyNumberRegx = /^\d+(\.\d+)?$/;
        return onlyNumberRegx.test(value);
    }
    static isNull(value) {
        return value == null;
    }
    static  isEmpty(value) {
        return value.length === 0;
    }
}

export default validator