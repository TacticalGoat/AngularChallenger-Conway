import { Cell } from '../Cell/cell';

export class Board {
    cellGrid: Array<Array<Cell>>;
    gridSize: number;
    constructor(gridSize: number){
        this.gridSize = gridSize;
        this.initiate_board();
    }

    private initiate_board(){
        for(let i: number = 0; i < this.gridSize; i++){
            this.cellGrid.push(new Array<Cell>());
            for(let j: number = 0; j < this.gridSize; j++){
                this.cellGrid[i].push(new Cell(i, j, this.gridSize));
            }
        }
    }

    
}