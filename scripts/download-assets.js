const fs = require('fs');
const path = require('path');
const https = require('https');

// Create public directories if they don't exist
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

[publicDir, imagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// List of images to download with their URLs and local paths
const images = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    filename: 'cover.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    filename: 'avatar.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    filename: 'ladakh-trip.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-15893200111008-97c8b1a47d3e',
    filename: 'andaman-trip.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1587135991058-88116af670d7',
    filename: 'bhutan-trip.jpg'
  },
  // Add more images as needed
];

// Function to download a single image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting to download images...');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.filename);
    try {
      console.log(`Downloading ${image.filename}...`);
      await downloadImage(image.url, filepath);
      console.log(`✓ Downloaded ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('All images downloaded!');
}

// Generate favicon and logo files
function generateFavicon() {
  const faviconPath = path.join(publicDir, 'favicon.ico');
  const favicon16Path = path.join(publicDir, 'favicon-16x16.png');
  const favicon32Path = path.join(publicDir, 'favicon-32x32.png');
  const appleTouchIconPath = path.join(publicDir, 'apple-touch-icon.png');
  const siteWebmanifest = path.join(publicDir, 'site.webmanifest');
  
  // Create a simple favicon.ico (empty file as placeholder)
  if (!fs.existsSync(faviconPath)) {
    fs.writeFileSync(faviconPath, '');
    console.log('✓ Created favicon.ico');
  }
  
  // Create other favicon sizes (empty files as placeholders)
  [favicon16Path, favicon32Path, appleTouchIconPath].forEach(file => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, '');
      console.log(`✓ Created ${path.basename(file)}`);
    }
  });
  
  // Create site.webmanifest
  if (!fs.existsSync(siteWebmanifest)) {
    const manifest = {
      name: 'Roammate',
      short_name: 'Roammate',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#4f46e5',
      background_color: '#ffffff',
      display: 'standalone'
    };
    
    fs.writeFileSync(siteWebmanifest, JSON.stringify(manifest, null, 2));
    console.log('✓ Created site.webmanifest');
  }
}

// Run the script
downloadAllImages()
  .then(() => generateFavicon())
  .catch(error => console.error('Error:', error));
