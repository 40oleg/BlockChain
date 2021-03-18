import {Block} from './Block'

export class Chain {
    public blocks: Block[] = [];
    public Add(item: Block) {
        this.blocks.push(item);
    }
}