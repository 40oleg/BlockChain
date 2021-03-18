import { Wallet } from './Wallet'
import { Transaction } from './Transaction'
import { Block } from './Block'
import { Chain } from './Chain'

const wallet1: Wallet = new Wallet(); 
const wallet2: Wallet = new Wallet();
const walletn: Wallet = new Wallet();

let users: Wallet[] = [
    wallet1,
    wallet2
];

let chain: Chain = new Chain();

let last_hash: string = "0";

let block = new Block(4, last_hash);

block.Add(new Transaction(wallet1.id,wallet2.id,Math.round(Math.random()*100)));
block.Add(new Transaction(wallet2.id,wallet1.id,Math.round(Math.random()*100)));
chain.Add(block);

(async () => {
    last_hash = await block.Mine();
})()