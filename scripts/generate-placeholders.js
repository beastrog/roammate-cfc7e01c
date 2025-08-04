const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to generate a placeholder image
function generatePlaceholder(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Generate a pastel background color based on the filename
  const hue = Math.floor(Math.random() * 360);
  ctx.fillStyle = `hsl(${hue}, 70%, 85%)`;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.min(width, height) * 0.1}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Split text into multiple lines if needed
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width < width * 0.8) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  
  // Draw text lines
  const lineHeight = Math.min(width, height) * 0.12;
  const startY = (height - (lines.length - 1) * lineHeight) / 2;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, startY + index * lineHeight);
  });
  
  // Save to file
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.8 });
  fs.writeFileSync(path.join(imagesDir, filename), buffer);
  console.log(`✓ Generated ${filename}`);
}

// Generate all placeholder images
const placeholders = [
  { width: 200, height: 200, text: 'Avatar', filename: 'avatar.jpg' },
  { width: 1200, height: 400, text: 'Cover Photo', filename: 'cover.jpg' },
  { width: 800, height: 600, text: 'Ladakh Trip', filename: 'ladakh-trip.jpg' },
  { width: 800, height: 600, text: 'Andaman Trip', filename: 'andaman-trip.jpg' },
  { width: 800, height: 600, text: 'Bhutan Trip', filename: 'bhutan-trip.jpg' },
  { width: 400, height: 300, text: 'Photo 1', filename: 'photo1.jpg' },
  { width: 400, height: 300, text: 'Photo 2', filename: 'photo2.jpg' },
  { width: 400, height: 300, text: 'Photo 3', filename: 'photo3.jpg' },
  { width: 400, height: 300, text: 'Trip 1', filename: 'trip-1.jpg' },
  { width: 400, height: 300, text: 'Trip 2', filename: 'trip-2.jpg' },
  { width: 400, height: 300, text: 'Trip 3', filename: 'trip-3.jpg' },
  { width: 1200, height: 630, text: 'Roammate', filename: 'og-image.jpg' },
  { width: 200, height: 200, text: 'User 2', filename: 'avatar-2.jpg' },
  { width: 200, height: 200, text: 'User 3', filename: 'avatar-3.jpg' }
];

// Generate all placeholders
placeholders.forEach(({ width, height, text, filename }) => {
  generatePlaceholder(width, height, text, filename);
});

console.log('✅ All placeholder images generated successfully!');
