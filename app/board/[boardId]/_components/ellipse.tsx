import { colorToCss } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  Layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const Ellipse=({
    id,
    Layer,
    onPointerDown,
    selectionColor,

}:EllipseProps)=>{
    return (
        <ellipse
            className="drop-shadow-md"
            onPointerDown={(e)=>onPointerDown(e, id)}
            style={{
                transform:`translate(
                    ${Layer.x}px, 
                    ${Layer.y}px)`
            }}
            cx={Layer.width/2}
            cy={Layer.height/2}
            rx={Layer.width/2}
            ry={Layer.height/2}
            fill={Layer.fill?colorToCss(Layer.fill):"#000"}
            stroke={selectionColor ||"transparent"}
            strokeWidth="1"
            />
            
            )
}