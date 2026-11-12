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
    index: number;
    selected: boolean;
    onClick: (index: number) => void;
}

export default function Bottle({bottle, index, selected, onClick}: BottleProps){    
    let buttonText = "Selecionar";
    
    function bottleClick() {
        onClick(index);
    }
    if(selected){
        buttonText = "Selecionado";
    }
    
    return (<div onClick={bottleClick} className={selected ? "selected" : ""}>
        <span>{bottle.vecFill.join(" ")}</span>
        <button>{buttonText}</button>
    </div>)
}