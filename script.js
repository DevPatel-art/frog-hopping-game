const pond = document.getElementById('pond');
    const gridSize = 4;
    let frogX = 0;
    let frogY = 0;

    function drawPond() {
      pond.innerHTML = '';
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          const tile = document.createElement('div');
          tile.className = 'tile';

          const pad = document.createElement('div');
          pad.className = 'lily-pad';
          tile.appendChild(pad);

          if (x === frogX && y === frogY) {
            const frog = document.createElement('div');
            frog.className = 'frog';
            tile.appendChild(frog);
          }

          pond.appendChild(tile);
        }
      }
    }

    function moveFrog(e) {
      if (e.key === 'ArrowUp' && frogY > 0) frogY--;
      else if (e.key === 'ArrowDown' && frogY < gridSize - 1) frogY++;
      else if (e.key === 'ArrowLeft' && frogX > 0) frogX--;
      else if (e.key === 'ArrowRight' && frogX < gridSize - 1) frogX++;
      drawPond();
    }

    document.addEventListener('keydown', moveFrog);
    drawPond();