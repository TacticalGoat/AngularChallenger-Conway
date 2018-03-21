export enum State {
    DEAD, ALIVE
}

export class Cell {
    xPosition: number;
    yPosition: number;
    gridSize: number;
    neighbours: Cell[];
    currentState: State;
    constructor(x: number, y:number, gridSize: number){
        this.xPosition = x;
        this.yPosition = y;
        this.neighbours = [];
        this.currentState = State.DEAD;
        this.gridSize = gridSize;
    }

}