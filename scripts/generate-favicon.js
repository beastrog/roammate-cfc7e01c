const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const sizes = [16, 32, 48, 64, 128, 256, 512];
const publicDir = path.join(__dirname, '../public');

// Create favicon files
sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw logo background
  ctx.fillStyle = '#4F46E5';
  ctx.fillRect(0, 0, size, size);
  
  // Draw a simple 'R' in the center
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${Math.floor(size * 0.6)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('R', size / 2, size / 2);
  
  // Save to file
  const filename = size === 16 ? 'favicon.ico' : `favicon-${size}x${size}.png`;
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(publicDir, filename), buffer);
  console.log(`✓ Generated ${filename}`);
});

// Create apple-touch-icon.png (180x180)
const appleSize = 180;
const appleCanvas = createCanvas(appleSize, appleSize);
const appleCtx = appleCanvas.getContext('2d');
appleCtx.fillStyle = '#4F46E5';
appleCtx.fillRect(0, 0, appleSize, appleSize);
appleCtx.fillStyle = '#FFFFFF';
appleCtx.font = `bold ${Math.floor(appleSize * 0.6)}px Arial`;
appleCtx.textAlign = 'center';
appleCtx.textBaseline = 'middle';
appleCtx.fillText('R', appleSize / 2, appleSize / 2);
const appleBuffer = appleCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleBuffer);
console.log('✓ Generated apple-touch-icon.png');

// Create site.webmanifest
const manifest = {
  "name": "Roammate",
  "short_name": "Roammate",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#4f46e5",
  "background_color": "#ffffff",
  "display": "standalone"
};

fs.writeFileSync(
  path.join(publicDir, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2)
);
console.log('✓ Generated site.webmanifest');
