/* 
* Rock Paper Scissors!
* https://www.codewars.com/kata/5672a98bdbdd995fad00000f
*
* Let's play! You have to return which player won! In case of a draw return Draw!.
* 
* Examples(Input1, Input2 --> Output):
* 
* "scissors", "paper" --> "Player 1 won!"
* "scissors", "rock" --> "Player 2 won!"
* "paper", "paper" --> "Draw!"
*/

const beats: {[index: string]: string} = {
  'scissors': 'paper',
  'paper': 'rock',
  'rock': 'scissors'
}

export function rps(p1: string, p2: string): string {
  if (p1 === p2)
    return 'Draw!';
  
  if (beats[p1] === p2)
    return 'Player 1 won!';
  
  return 'Player 2 won!';
}
