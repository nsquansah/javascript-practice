function generateRandomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      console.log('Invalid input. Please provide valid numbers.');
      return;
    }
  
    if (min >= max) {
      console.log('Invalid range. The minimum value should be less than the maximum value.');
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  