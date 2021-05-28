var { generate, encryption, decryption } = require('./rsa');

describe('Generate', () => {
    it('should be defined', () => {
        expect(generate).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof generate).toBe('function');
    })
    it('should return array', () => {
        var p = 3;
        var q = 7;
        var e = 5;
        expect(Array.isArray(generate(p, q, e))).toBe(true);
    })
    it('should return  correct array', () => {
        var p = 3;
        var q = 7;
        var e = 5;
        expect(generate(p, q, e)).toEqual([[5, 21], [5, 21]]);
    })
});

describe('encryption', () => {
    it('should be defined', () => {
        expect(encryption).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof encryption).toBe('function');
    })
    it('return not array', () => {
        var keys = generate(3, 7, 5);
        var publicKey = keys[0];
        expect(Array.isArray(encryption(13, publicKey))).not.toBe(true);
    })
    it('return ecryption number', () => {
        var keys = generate(3, 7, 5);
        var publicKey = keys[0];
        expect(encryption(13, publicKey)).toBe(13);
    })
});

describe('decryption', () => {
    it('should be defined', () => {
        expect(decryption).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof decryption).toBe('function');
    })
    it('return correct answer with private key', () => {
        var keys = generate(3, 7, 5);
        var publicKey = keys[0];
        var privateKey = keys[1];
        const encryptionMessage = encryption(13, publicKey);
        expect(decryption(encryptionMessage, privateKey)).toBe(13);
    })
});