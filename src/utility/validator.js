class validator{
    class ValidationHelper{

    static isEmail(value) {
        let emailRegx = /\S+@\S+\.\S+/;
        return emailRegx.test(value);
    }
    static isPassword(value) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passRegex.test(value);
    }
    static IsMobile(value) {
        let  MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        return MobileRegx.test(value);
    }
    static isNumber(value) {
        let  OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }
    static isNull(value) {
        return value == null;
    }
    static  isEmpty(value) {
        return value.length === 0;
    }
}

export default validator