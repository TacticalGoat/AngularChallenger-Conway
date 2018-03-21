import { Cell, State } from '../Cell/cell';

export class Board {
    public cellGrid: Array<Array<Cell>>;
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

    private get_neighbours(cell: Cell): Array<Cell>{
        let neighbours: Array<Cell> = []
        for(let i: number = cell.xPosition - 1; i < cell.xPosition + 2; i++){
            for(let j: number = cell.yPosition -1; j < cell.yPosition + 2; j++){
                if(this.cellGrid[i][j] != cell 
                   && (i < this.gridSize - 1) 
                   && (j < this.gridSize) 
                   && (i > -1 ) 
                   && (j > -1)){
                    neighbours.push(this.cellGrid[i][j]);
                }
            }
        }
        return neighbours;
    }

    private get_alive_neighbours(cell: Cell): number {
        let neighbours: Array<Cell> = this.get_neighbours(cell);
        let total_alive: number = 0;
        for(let i: number = 0; i < neighbours.length; i++){
            if(neighbours[i].currentState == State.ALIVE){
                total_alive++;
            }
        }
        return total_alive;
    }

    private compute_next_state(cell: Cell): void{
        let alive_neighbours = this.get_alive_neighbours(cell);
        if(alive_neighbours < 2 || alive_neighbours > 3){
            cell.nextState = State.DEAD;
        }else if(alive_neighbours == 3){
            cell.nextState == State.ALIVE;
        }else if(alive_neighbours == 2){
            cell.nextState == cell.currentState;
        }
    }

    private compute_next_generation(): void {
        for(let i: number = 0; i < this.gridSize; i++){
            for(let j: number = 0; j < this.gridSize; j++){
                this.compute_next_state(this.cellGrid[i][j]);
            }
        }
    }

    private update_cell_states(): void {
        for(let i: number = 0; i < this.gridSize; i++){
            for(let j: number = 0; j < this.gridSize; j++){
                this.cellGrid[i][j].step();
            }
        }
    }

    public step(): void {
        this.compute_next_generation();
        this.update_cell_states();
    }
}