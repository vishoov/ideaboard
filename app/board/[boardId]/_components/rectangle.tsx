import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps{
    id:string;
    Layer:RectangleLayer;
    onPointerDown:(e:React.PointerEvent, id: string)=> void;
    selectionColor?:string;
};

export const Rectangle = ({
    id,
    Layer,
    onPointerDown,
    selectionColor,

}:RectangleProps)=>{
    const {x, y, width, height, fill}= Layer;

    return (
        <rect
            className="drop-shadow-md"
          
            onPointerDown={(e)=>onPointerDown(e,id)}
            style={{
                transform:`translate(${x}px, ${y}px)`
        }}
            x={0}
            y={0}
            width={width}
            height={height}
            strokeWidth={1}
            fill={fill?colorToCss(fill):"#000"}
            stroke={selectionColor || "transparent"}
            />
    
            )
}
