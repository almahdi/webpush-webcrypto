/**
 * @typedef JSONSerializedKeys
 * @property {string} publicKey
 * @property {string} privateKey
 */
export class ApplicationServerKeys {
    /**
     * Counterpart to toJSON(). This will take previously seralized application server keys and
     * restore them into a form actually usable for encryption.
     * @param {JSONSerializedKeys} keys
     */
    static fromJSON(keys: JSONSerializedKeys): Promise<ApplicationServerKeys>;
    static generate(): Promise<ApplicationServerKeys>;
    /**
     * You aren't likely to want to construct ApplicationServerKeys directly. Use generate()
     * from fromJSON() instead.
     * @param {CryptoKey} publicKey
     * @param {CryptoKey} privateKey
     */
    constructor(publicKey: CryptoKey, privateKey: CryptoKey);
    publicKey: CryptoKey;
    privateKey: CryptoKey;
    /**
     * You'll need to use the same application server key whenever you want to send a message.
     * This method provides an export of the keys that can you can more easily persist to storage
     * (e.g. IndexedDB) more easily.
     * @returns {Promise<JSONSerializedKeys>}
     */
    toJSON(): Promise<JSONSerializedKeys>;
}
export type JSONSerializedKeys = {
    publicKey: string;
    privateKey: string;
};
