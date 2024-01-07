function simulateLadybugs(input) {
    // Parse input
    const fieldSize = Number(input[0]);
    let ladybugPositions = input[1].split(' ').map(Number);
    const commands = input.slice(2);
  
    // Initialize the field with 0s (no ladybugs)
    const field = Array(fieldSize).fill(0);
  
    // Place ladybugs on the field
    ladybugPositions.forEach((position) => {
      if (position >= 0 && position < fieldSize) {
        field[position] = 1;
      }
    });
  
    // Process commands
    for (const command of commands) {
      const [initialPos, direction, flyLength] = command.split(' ');
  
      // Convert command arguments to numbers
      const ladybugIndex = Number(initialPos);
      const length = Number(flyLength);
  
      // Ensure the ladybug exists and is within the field
      if (
        field[ladybugIndex] === 1 &&
        ladybugIndex >= 0 &&
        ladybugIndex < fieldSize
      ) {
        // Clear the initial position
        field[ladybugIndex] = 0;
  
        // Calculate the new position
        let newPosition = ladybugIndex;
        if (direction === 'right') {
          newPosition += length;
        } else {
          newPosition -= length;
        }
  
        // Move the ladybug to its new position (if valid)
        while (newPosition >= 0 && newPosition < fieldSize) {
          if (field[newPosition] === 0) {
            field[newPosition] = 1;
            break;
          } else if (direction === 'right') {
            newPosition += length;
          } else {
            newPosition -= length;
          }
        }
      }
    }
  
    // Print the final state of the field
    console.log(field.join(' '));
  }