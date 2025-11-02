/**
 * @param {{publicKey?: CryptoKey, privateKey?: CryptoKey}} keyPair
 * @param {{aud: string, sub: string}} data
 */
export function createJWT(keyPair: {
    publicKey?: CryptoKey;
    privateKey?: CryptoKey;
}, data: {
    aud: string;
    sub: string;
}): Promise<string>;
