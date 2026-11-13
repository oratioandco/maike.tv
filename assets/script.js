document.getElementById('sendEmail').addEventListener('click', function() {
	var username = 'hello'; // user part of the email
	var hostname = 'maike.tv'; // host part of the email
	var subject = 'Website Inquiry for Maike Treppmann';
	var body = '';

	// Construct the email
	var link = 'mailto:' + username + '@' + hostname +
			   '?subject=' + encodeURIComponent(subject) +
			   '&body=' + encodeURIComponent(body);

	// Trigger the mail client
	window.location.href = link;
});





// Get canvas and context
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

// Variables to keep track of the mouse position and drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Function to start drawing
function startDrawing(e) {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
	isDrawing = false;
}

// Function to draw
function draw(e) {

if (!isDrawing) return;

let x = e.offsetX;
let y = e.offsetY;

// Size and color of the heart
let heartWidth = 100;  // Width of the heart
let heartHeight = 100; // Height of the heart
let color = 'rgba(216, 126, 125, 0.2)'; // Translucent pink

drawHeart(ctx, x, y, heartWidth, heartHeight, color);

[lastX, lastY] = [e.offsetX, e.offsetY];
}

// Attach the event listeners to the canvas
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousemove', draw);

function drawHeart(ctx, x, y, width, height, color) {
	ctx.beginPath();
	var topCurveHeight = height * 0.3;
	ctx.moveTo(x, y + topCurveHeight);
	// top left curve
	ctx.bezierCurveTo(
		x, y, 
		x - width / 2, y, 
		x - width / 2, y + topCurveHeight
	);

	// bottom left curve
	ctx.bezierCurveTo(
		x - width / 2, y + (height + topCurveHeight) / 2, 
		x, y + (height + topCurveHeight) / 2, 
		x, y + height
	);

	// bottom right curve
	ctx.bezierCurveTo(
		x, y + (height + topCurveHeight) / 2, 
		x + width / 2, y + (height + topCurveHeight) / 2, 
		x + width / 2, y + topCurveHeight
	);

	// top right curve
	ctx.bezierCurveTo(
		x + width / 2, y, 
		x, y, 
		x, y + topCurveHeight
	);

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}
