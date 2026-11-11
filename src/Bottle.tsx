import './Bottle.css';

const COLORS = new Map<number, string>([
    [0, "red"],
    [1, "orange"],
    [2, "green"],
    [3, "purple"],
]);

export type BottleType = {
    vecFill: number[];
    maxSize: number;
};

type BottleProps = {
    bottle: BottleType;
};

export default function Bottle({ bottle }: BottleProps) {
    return (
        <div className="bottle">
            {bottle.vecFill.map((color, index) => (
                <span key={index} style={{ color: COLORS.get(color) }}>
                    {color}
                </span>
            ))}
        </div>
    );
}