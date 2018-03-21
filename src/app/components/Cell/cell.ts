export enum State {
    DEAD, ALIVE
}

export class Cell {
    public xPosition: number;
    public yPosition: number;
    gridSize: number;
    previousState: State;
    currentState: State;
    nextState: State;
    constructor(x: number, y:number, gridSize: number){
        this.xPosition = x;
        this.yPosition = y;
        this.previousState = State.DEAD;
        this.currentState = State.DEAD;
        this.nextState = State.DEAD;
        this.gridSize = gridSize;
    }
    public step(): void{
        this.previousState = this.currentState;
        this.currentState = this.nextState;
    }
}