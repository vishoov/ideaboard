import { PointerEventHandler } from "react";

export type Color = {
    r:number;
    g:number;
    b:number;
  
};

export type Camera={
    x:number;
    y:number;

};

export enum LayerType{
    Rectangle,
    Ellipse,
    Text,
    Path,
    Note,

};

export type RectangleLayer={
    type:LayerType.Rectangle;
    x:number;
    y:number;
    width:number;
    height:number;
    fill:Color;
    value?:string;
};

export type EllipseLayer={
    type:LayerType.Ellipse;
    x:number;
    y:number;
    width:number;
    height:number;
    fill:Color;
    value?:string;
};

export type PathLayer={
    type:LayerType.Path;
    x:number;
    y:number;
    width:number;
    height:number;
    fill:Color;
    points:number[][];
    value?:string;
};

export type TextLayer={
    type:LayerType.Text;
    x:number;
    y:number;
    width:number;
    height:number;
    fill:Color;
    value?:string;
};

export type NoteLayer={
    type:LayerType.Note;
    x:number;
    y:number;
    width:number;
    height:number;
    fill:Color;
    value?:string;
};

export type point= {
    x:number;
    y:number;
};

export type XYWH={
    x:number;
    y:number;
    width:number;
    height:number;
};

export enum Side{
    Top=1,
    Right=8,
    Bottom=2,
    Left=4,
};




export type CanvasState=
| {
    mode:CanvasMode.None;
}
| {
    mode:CanvasMode.SelectionNet,
    origin:point;
    current?:point;

}
| {
    mode:CanvasMode.Translating;
    current:point;
}
| {
    mode:CanvasMode.Inserting;
    layerType:LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note;
}
| {
    mode:CanvasMode.Pencil;
}
| {
    mode:CanvasMode.Resizing;
    initialBounds:XYWH;
    corner:Side;
}   
| {
    mode:CanvasMode.Pressing;
    origin:point;
};

export enum CanvasMode{
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil
};


export type Layer= RectangleLayer | EllipseLayer | PathLayer | TextLayer | NoteLayer; 