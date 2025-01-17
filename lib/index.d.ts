/// <reference types="node" />
import { InternalTransaction, UnspentOutput } from "./OrdTransaction";
import * as bitcoin from "bitcoinjs-lib";
export * from './utils';
export declare function createSendBTC({ utxos, toAddress, toAmount, wallet, network, changeAddress, receiverToPayFee, feeRate, dump, data, txInfo, }: {
    utxos: UnspentOutput[];
    toAddress: string;
    toAmount: number;
    wallet: any;
    network: any;
    changeAddress: string;
    receiverToPayFee?: boolean;
    feeRate?: number;
    dump?: boolean;
    data?: string;
    txInfo?: InternalTransaction;
}): Promise<bitcoin.Psbt>;
export declare function createSendOrd({ utxos, toAddress, toOrdId, wallet, network, changeAddress, feeRate, outputValue, dump, data, txInfo, }: {
    utxos: UnspentOutput[];
    toAddress: string;
    toOrdId: string;
    wallet: any;
    network: any;
    changeAddress: string;
    feeRate?: number;
    outputValue: number;
    dump?: boolean;
    data?: string;
    txInfo?: InternalTransaction;
}): Promise<bitcoin.Psbt>;
export declare function createSendMultiOrds({ utxos, toAddress, toOrdIds, receivers, wallet, network, changeAddress, feeRate, dump, data, txInfo, }: {
    utxos: UnspentOutput[];
    toAddress: string;
    toOrdIds: string[];
    receivers: {
        address: string;
        amount: number;
    }[];
    wallet: any;
    network: any;
    changeAddress: string;
    feeRate?: number;
    dump?: boolean;
    data?: string | string[];
    txInfo?: InternalTransaction;
}): Promise<bitcoin.Psbt>;
export declare function createSendMultiBTC({ utxos, receivers, wallet, network, changeAddress, feeRate, dump, data, txInfo, }: {
    utxos: UnspentOutput[];
    receivers: {
        address: string;
        amount: number;
    }[];
    wallet: any;
    network: any;
    changeAddress: string;
    feeRate?: number;
    dump?: boolean;
    data?: string;
    txInfo?: InternalTransaction;
}): Promise<bitcoin.Psbt>;
export declare function createSendRunes({ utxos, receivers, wallet, network, changeAddress, feeRate, dump, data, runestone, txInfo, }: {
    utxos: UnspentOutput[];
    receivers: {
        address: string;
        amount: number;
    }[];
    wallet: any;
    network: any;
    changeAddress: string;
    feeRate?: number;
    dump?: boolean;
    data?: string;
    runestone?: string;
    txInfo?: InternalTransaction;
}): Promise<bitcoin.Psbt>;
export declare function inscribe({ address, utxos, inscription, wallet, network, feeRate, changeAddress, dump, }: {
    address: string;
    utxos: UnspentOutput[];
    inscription: {
        body: Buffer;
        contentType: string;
    };
    wallet: any;
    network: any;
    changeAddress: string;
    feeRate: number;
    dump: boolean;
}): Promise<bitcoin.Psbt>;
export declare function inscribeWithOneStep({ address, utxos, inscription, wallet, network, pubkey, feeRate, }: {
    address: string;
    utxos: UnspentOutput[];
    inscription: {
        body: Buffer;
        contentType: string;
    };
    wallet: any;
    network: any;
    pubkey: string;
    changeAddress: string;
    feeRate: number;
    dump: boolean;
}): Promise<bitcoin.Psbt>;
