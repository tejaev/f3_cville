export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const OPPOSITES = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT",
};

function keyForCell(cell) {
  return `${cell.x},${cell.y}`;
}

function equalsCell(a, b) {
  return a.x === b.x && a.y === b.y;
}

export function randomFoodPosition(cols, rows, snake, rng = Math.random) {
  const occupied = new Set(snake.map(keyForCell));
  const empty = [];

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (!occupied.has(`${x},${y}`)) {
        empty.push({ x, y });
      }
    }
  }

  if (empty.length === 0) {
    return null;
  }

  const index = Math.floor(rng() * empty.length);
  return empty[index];
}

export function createInitialState(
  { cols = 20, rows = 20 } = {},
  rng = Math.random
) {
  const startX = Math.floor(cols / 2);
  const startY = Math.floor(rows / 2);
  const snake = [
    { x: startX, y: startY },
    { x: startX - 1, y: startY },
    { x: startX - 2, y: startY },
  ];

  return {
    cols,
    rows,
    snake,
    direction: "RIGHT",
    pendingDirection: null,
    food: randomFoodPosition(cols, rows, snake, rng),
    score: 0,
    gameOver: false,
    won: false,
    paused: false,
  };
}

export function queueDirection(state, direction) {
  if (!DIRECTIONS[direction]) {
    return state;
  }

  if (direction === OPPOSITES[state.direction]) {
    return state;
  }

  return {
    ...state,
    pendingDirection: direction,
  };
}

export function togglePause(state) {
  if (state.gameOver) {
    return state;
  }

  return {
    ...state,
    paused: !state.paused,
  };
}

export function restartState(state, rng = Math.random) {
  return createInitialState({ cols: state.cols, rows: state.rows }, rng);
}

export function tick(state, rng = Math.random) {
  if (state.gameOver || state.paused) {
    return state;
  }

  const direction = state.pendingDirection || state.direction;
  const delta = DIRECTIONS[direction];
  const nextHead = {
    x: state.snake[0].x + delta.x,
    y: state.snake[0].y + delta.y,
  };
  const eatsFood = equalsCell(nextHead, state.food);
  const bodyToCheck = eatsFood ? state.snake : state.snake.slice(0, -1);

  const hitWall =
    nextHead.x < 0 ||
    nextHead.y < 0 ||
    nextHead.x >= state.cols ||
    nextHead.y >= state.rows;
  const hitSelf = bodyToCheck.some((cell) => equalsCell(cell, nextHead));

  if (hitWall || hitSelf) {
    return {
      ...state,
      direction,
      pendingDirection: null,
      gameOver: true,
      paused: false,
      won: false,
    };
  }

  const snake = [nextHead, ...state.snake];

  if (!eatsFood) {
    snake.pop();
    return {
      ...state,
      snake,
      direction,
      pendingDirection: null,
    };
  }

  const food = randomFoodPosition(state.cols, state.rows, snake, rng);
  const won = food === null;

  return {
    ...state,
    snake,
    direction,
    pendingDirection: null,
    food,
    score: state.score + 1,
    gameOver: won,
    won,
    paused: false,
  };
}
