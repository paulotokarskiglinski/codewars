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
