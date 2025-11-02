/**
 * Browsers don't have a built-in API for base64 URL encoding
 * so we need to provide one.
 * @param {ArrayBuffer | string} arrayBufferOrString
 * @returns {string}
 */
export function base64urlEncode(arrayBufferOrString: ArrayBuffer | string): string;
/**
 * Similar to the encoder, there's no built in functionality for
 * base64 URL decoding, so we'll provide one.
 * @param {string} string
 * @returns {ArrayBuffer}
 */
export function decodeBase64URL(string: string): ArrayBuffer;
/**
 * Node has Buffer.concat, browsers do not. So we'll use this.
 * @param {Uint8Array[]} arrays
 * @returns {Uint8Array}
 */
export function concatTypedArrays(arrays: Uint8Array[]): Uint8Array;
/**
 *
 * @param {Crypto} newCrypto
 */
export function setWebCrypto(newCrypto: Crypto): void;
export namespace crypto {
    const subtle: SubtleCrypto;
    /**
     *
     * @param {ArrayBufferView} target
     * @returns
     */
    function getRandomValues(target: ArrayBufferView): ArrayBufferView<ArrayBufferLike>;
}
