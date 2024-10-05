// Your code here

function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  console.log(`Current left position: ${left}`);

  if (left > 0) {
      dodger.style.left = `${left - 10}px`;
      console.log(`New left position: ${left - 10}`);
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  console.log(`Current left position: ${left}`);

  if (left < 360) { 
      dodger.style.left = `${left + 10}px`;
      console.log(`New left position: ${left + 10}`);
  }
}