import { Keypair } from "@solana/web3.js";
import { performance } from "perf_hooks";

function generateKeypairWithPrefix(prefix: string): { keypair: Keypair; timeTaken: number } {
    const start = performance.now();
    let keypair: Keypair;
    let publicKey: string;

    do {
        keypair = Keypair.generate();
        publicKey = keypair.publicKey.toBase58();
    } while (!publicKey.startsWith(prefix));

    const end = performance.now();
    const timeTaken = end - start;

    return { keypair, timeTaken };
}

const prefix = "VV"; //My name and surname initials
const { keypair, timeTaken } = generateKeypairWithPrefix(prefix);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished! Time taken: ${timeTaken.toFixed(2)} milliseconds`);
