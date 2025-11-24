const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	//["G", "H", "I"],
];

// console.log(board.length) //row length
// console.log(board[0].length) //column length

const rowLength = board.length; //ถ้าต้องการหาจำนวนแถว เราไม่ต้องใช้ [0] เพราะ board.length ให้คำตอบนั้นโดยตรง
const colLength = board[0].length; //ใช้ 0 เพื่อบอกว่าดูที่แถวแรกนะ แล้วแถวแรกมีความยาวเท่าไหร่ =ซึ่งก็คือจำนวนคอลัมน์

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
if(col < colLength){
	col++;
	moves.push(board[row][col]) //บันทึกค่า r กับ c อันใหม่เข้าไป

} else{
	console.log("Invalid move") //มีเพื่อให้รู้ว่าถ้ามันไม่จริง ให้มันแสดงข้อความออกมาด้วยเพื่อให้เรารู้

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
	if(row < rowLength)
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
