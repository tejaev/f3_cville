# Snake Game

Minimal classic Snake implementation with:
- Grid-based movement
- Snake growth after eating food
- Random food spawn on empty cells
- Score tracking
- Game-over on wall/self collision
- Restart and pause/resume controls

## Run

From `/Users/tvadlamudi/Documents/New project`:

```bash
python3 -m http.server 4173
```

Then open:
- `http://localhost:4173/index.html`

## Controls

- Keyboard: Arrow keys or `W/A/S/D`
- Pause/Resume: `Space` or the `Pause` button
- Restart: `R` or the `Restart` button
- On-screen mobile-friendly direction buttons are included

## Manual Verification Checklist

- Movement starts to the right and changes with arrow keys/WASD
- Opposite-direction input is ignored (no immediate 180-degree turn)
- Eating food increases score by 1 and grows snake by 1 segment
- Food never appears on top of the snake
- Hitting a wall ends the game
- Running into the snake body ends the game
- Pause stops movement, Resume continues from same state
- Restart resets snake, score, and food
