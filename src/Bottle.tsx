import { version } from 'react';
import './Bottle.css'

const COLORS = new Map<number, string>([
    [0, "red"],
    [1, "orange"],
    [2, "green"],
    [3, "purple"],
]);

export type BottleType = {
    vecFill: Array<number>;
    maxSize: number;
}

export type BottleProps = {
    bottle: BottleType;
}

export default function Bottle({bottle}: BottleProps){
    function transferLiquid(bottleReceiver : BottleType): void{
        if(ableToTransfer(bottleReceiver)){
            let color = bottle.vecFill.pop();
            bottleReceiver.vecFill.push(color);
        }
    }
    
    function ableToTransfer(bottleReceiver: BottleType): boolean{
        if(bottle.vecFill.length > 0){
            if(bottleReceiver.vecFill.length < bottleReceiver.maxSize){
                return true;
            }
        }
        return false;
    }
    
    return (<div>
        <span>{bottle.vecFill}</span>
    </div>)
}