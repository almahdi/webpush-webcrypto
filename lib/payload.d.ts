/**
 * Encrypt a push payload and calculate the various HTTP headers required to successfully
 * send a push.
 * @param {PushOptions} options
 * @returns {Promise<{headers: Record<string,string>, body: ArrayBuffer, endpoint: string}>}
 */
export function generatePushHTTPRequest(options: PushOptions): Promise<{
    headers: Record<string, string>;
    body: ArrayBuffer;
    endpoint: string;
}>;
export type HeaderOptions = {
    options: PushOptions;
    payloadLength: number;
    salt: ArrayBuffer;
    localPublicKey: CryptoKey;
};
export type ApplicationServerKeys = import("./application-server-keys.js").ApplicationServerKeys;
export type SerializedClientKeys = {
    p256dh: string;
    auth: string;
};
export type PushTarget = {
    endpoint: string;
    keys: SerializedClientKeys;
};
export type PushOptions = {
    payload: string | Uint8Array;
    applicationServerKeys: ApplicationServerKeys;
    target: PushTarget;
    adminContact: string;
    ttl: number;
    topic?: string | undefined;
    urgency?: "very-low" | "low" | "normal" | "high" | undefined;
};
