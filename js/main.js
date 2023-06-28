document.getElementById("search-button").addEventListener("click", function () {
  var searchTerm = document.getElementById("search-input").value;
  // Perform your search logic here
  console.log("Search term: " + searchTerm);
});

// according
function rotateImage() {
  const image = document.getElementById('image');
  const rotation = getRotation(image);

  // Add 90 degrees to the current rotation
  const newRotation = rotation + 180;

  // Apply the new rotation to the image
  image.style.transform = `rotate(${newRotation}deg)`;
}

function getRotation(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue('transform');
  
  // Extract the rotation angle from the transform property
  const matrix = transform.match(/^matrix\((.+)\)$/);
  if (matrix) {
    const values = matrix[1].split(', ');
    if (values.length === 6) {
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }
  }
  
  // If no rotation is found, return 0
  return 0;
}
// according

function rotateMessage() {
  const image = document.getElementById('message');
  const rotation = getRotation(image);

  // Add 90 degrees to the current rotation
  const newRotation = rotation + 180;

  // Apply the new rotation to the image
  image.style.transform = `rotate(${newRotation}deg)`;
}

function getRotation(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue('transform');
  
  // Extract the rotation angle from the transform property
  const matrix = transform.match(/^matrix\((.+)\)$/);
  if (matrix) {
    const values = matrix[1].split(', ');
    if (values.length === 6) {
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }
  }
  
  // If no rotation is found, return 0
  return 0;
}

function rotateSetting() {
  const image = document.getElementById('setting');
  const rotation = getRotation(image);

  // Add 90 degrees to the current rotation
  const newRotation = rotation + 180;

  // Apply the new rotation to the image
  image.style.transform = `rotate(${newRotation}deg)`;
}

function getRotation(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue('transform');
  
  // Extract the rotation angle from the transform property
  const matrix = transform.match(/^matrix\((.+)\)$/);
  if (matrix) {
    const values = matrix[1].split(', ');
    if (values.length === 6) {
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }
  }
  
  // If no rotation is found, return 0
  return 0;
}


function rotateSubmitVid() {
  const image = document.getElementById('submit-video');
  const rotation = getRotation(image);

  // Add 90 degrees to the current rotation
  const newRotation = rotation + 180;

  // Apply the new rotation to the image
  image.style.transform = `rotate(${newRotation}deg)`;
}

function getRotation(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue('transform');
  
  // Extract the rotation angle from the transform property
  const matrix = transform.match(/^matrix\((.+)\)$/);
  if (matrix) {
    const values = matrix[1].split(', ');
    if (values.length === 6) {
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }
  }
  
  // If no rotation is found, return 0
  return 0;
}