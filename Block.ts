import * as crypto from 'crypto';
import { Transaction } from "./Transaction";

export class Block {
    public List: Transaction[];
    public PrevHash = "";
    public RandomSequence: number = 0;
    public difficult: number;
    constructor(difficult_: number, prevHash_: string) {
        this.List = [];
        this.PrevHash = prevHash_;

        this.difficult = difficult_;
    }
    public Add(el: Transaction) {
        this.List.push(el);
    }
    public Hash(): string {
        return crypto.createHmac('sha256',"").update(JSON.stringify(this)).digest('hex');
    }
    public async Mine() {
        while(this.Hash().substr(0,this.difficult) != "0".repeat(this.difficult)) {
            this.RandomSequence++;
        }
        return this.Hash();
    }
}