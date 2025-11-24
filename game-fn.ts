const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
	if(col < board[row].length-1){
		col++;
		moves.push(board[row][col]) //บันทึกค่า r กับ c อันใหม่เข้าไป
	}
}

function moveLeft() {
	if(col > 0)
		col--;
	moves.push(board[row][col])
}

function moveUp() {
	if(row > 0)
		row--;
	moves.push(board[row][col])
}

function moveDown() {
	if(row < board[row].length -1)
		row++;
	moves.push(board[row][col])
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
