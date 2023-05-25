export declare const PRIVATE_KEY_SIZE = 32;
export declare const PUBLIC_KEY_COMPRESSED_SIZE = 33;
export declare const PUBLIC_KEY_UNCOMPRESSED_SIZE = 65;
export declare const X_ONLY_PUBLIC_KEY_SIZE = 32;
export declare const TWEAK_SIZE = 32;
export declare const HASH_SIZE = 32;
export declare const EXTRA_DATA_SIZE = 32;
export declare const SIGNATURE_SIZE = 64;
export declare function isZero(x: Uint8Array): boolean;
export declare function isPrivate(x: Uint8Array): boolean;
export declare function isPoint(p: Uint8Array): boolean;
export declare function isXOnlyPoint(p: Uint8Array): boolean;
export declare function isDERPoint(p: Uint8Array): boolean;
export declare function isPointCompressed(p: Uint8Array): boolean;
export declare function validateParity(p: 1 | 0): void;
export declare function validatePrivate(d: Uint8Array): void;
export declare function validatePoint(p: Uint8Array): void;
export declare function validateXOnlyPoint(p: Uint8Array): void;
export declare function validateTweak(tweak: Uint8Array): void;
export declare function validateHash(h: Uint8Array): void;
export declare function validateExtraData(e?: Uint8Array): void;
export declare function validateSignature(signature: Uint8Array): void;
export declare function validateSignatureCustom(validatorFn: () => boolean): void;
export declare function validateSignatureNonzeroRS(signature: Uint8Array): void;
export declare function validateSigrPMinusN(signature: Uint8Array): void;