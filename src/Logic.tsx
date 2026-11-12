import { type BottleType } from './Bottle'

function copyBottles(bottles: BottleType[]): BottleType[] {
    const copy: BottleType[] = []
    for (let i = 0; i< bottles.length; i+=1){
        const original = bottles[i];
        const newBottle: BottleType = {
            vecFill: original.vecFill.slice(),
            maxSize: original.maxSize
        };
        copy.push(newBottle);
    }
    return copy;
}

export function transferLiquid(bottles: BottleType[], senderIndex: number, receiverIndex: number): BottleType[] {
    if(senderIndex === receiverIndex) return bottles;

    if(!ableToTransfer(bottles[senderIndex], bottles[receiverIndex])){
        return bottles;
    }
    const copy = copyBottles(bottles);
    const color = copy[senderIndex].vecFill.pop();
    if(color === undefined){
        return bottles;
    }
    copy[receiverIndex].vecFill.push(color);
    return copy;
}

export function ableToTransfer(bottleSender: BottleType, bottleReceiver: BottleType): boolean {
    if(bottleSender.vecFill.length > 0){
        if(bottleReceiver.vecFill.length < bottleReceiver.maxSize){
            if(bottleSender.vecFill[bottleSender.vecFill.length - 1] === bottleReceiver.vecFill[bottleReceiver.vecFill.length - 1] || bottleReceiver.vecFill.length === 0){
                return true;
            }
        }
    }
    return false;
}
