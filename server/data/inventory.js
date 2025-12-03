/**
 * Product Inventory Database
 * Simulates a product database with comprehensive product information
 */

export const productInventory = [
  {
    id: 1,
    name: 'Laptop Pro 15',
    category: 'Electronics',
    subcategory: 'Computers',
    brand: 'TechPro',
    price: 1299.99,
    stock: 45,
    description: 'High-performance laptop with 16GB RAM, 512GB SSD, Intel Core i7 processor',
    specifications: {
      processor: 'Intel Core i7-12700H',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      display: '15.6" Full HD IPS',
      graphics: 'Intel Iris Xe',
      battery: 'Up to 10 hours',
      weight: '1.8 kg'
    },
    warranty: '2 years',
    inStock: true
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    category: 'Accessories',
    subcategory: 'Input Devices',
    brand: 'ErgoTech',
    price: 29.99,
    stock: 150,
    description: 'Ergonomic wireless mouse with USB receiver, 6 programmable buttons',
    specifications: {
      connectivity: '2.4GHz Wireless',
      dpi: '800-3200 adjustable',
      buttons: '6 programmable',
      battery: '2 AA batteries (included)',
      range: 'Up to 10 meters',
      compatibility: 'Windows, Mac, Linux'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 3,
    name: 'USB-C Hub',
    category: 'Accessories',
    subcategory: 'Adapters',
    brand: 'ConnectPlus',
    price: 49.99,
    stock: 80,
    description: '7-in-1 USB-C hub with HDMI, USB 3.0 ports, SD/microSD card reader, and USB-C PD charging',
    specifications: {
      ports: '1x HDMI 4K@30Hz, 3x USB 3.0, 1x SD card, 1x microSD, 1x USB-C PD',
      powerDelivery: 'Up to 100W',
      dataTransfer: 'Up to 5Gbps',
      material: 'Aluminum alloy',
      compatibility: 'USB-C devices'
    },
    warranty: '18 months',
    inStock: true
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    subcategory: 'Input Devices',
    brand: 'KeyMaster',
    price: 89.99,
    stock: 60,
    description: 'RGB backlit mechanical keyboard with blue switches, full-size layout',
    specifications: {
      switchType: 'Blue mechanical switches',
      layout: 'Full-size (104 keys)',
      backlighting: 'RGB per-key',
      connectivity: 'USB-C wired',
      keycaps: 'Double-shot PBT',
      features: 'N-key rollover, anti-ghosting'
    },
    warranty: '2 years',
    inStock: true
  },
  {
    id: 5,
    name: '27" 4K Monitor',
    category: 'Electronics',
    subcategory: 'Displays',
    brand: 'ViewPro',
    price: 399.99,
    stock: 25,
    description: '27-inch 4K UHD IPS monitor with HDR support, 60Hz refresh rate',
    specifications: {
      resolution: '3840x2160 (4K UHD)',
      panelType: 'IPS',
      refreshRate: '60Hz',
      responseTime: '5ms',
      brightness: '350 cd/m²',
      contrast: '1000:1',
      ports: '2x HDMI 2.0, 1x DisplayPort 1.4, 4x USB 3.0',
      hdr: 'HDR10',
      stand: 'Height adjustable, tilt, swivel'
    },
    warranty: '3 years',
    inStock: true
  },
  {
    id: 6,
    name: 'Webcam HD Pro',
    category: 'Electronics',
    subcategory: 'Video Devices',
    brand: 'StreamCam',
    price: 79.99,
    stock: 95,
    description: '1080p HD webcam with auto-focus, built-in microphone, and privacy shutter',
    specifications: {
      resolution: '1920x1080 @ 30fps',
      focusType: 'Auto-focus',
      fieldOfView: '90 degrees',
      microphone: 'Dual stereo microphones',
      mount: 'Universal clip, tripod compatible',
      features: 'Privacy shutter, low-light correction'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 7,
    name: 'Wireless Headphones',
    category: 'Audio',
    subcategory: 'Headphones',
    brand: 'SoundWave',
    price: 149.99,
    stock: 70,
    description: 'Active noise-cancelling wireless headphones with 30-hour battery life',
    specifications: {
      connectivity: 'Bluetooth 5.0',
      noiseCancellation: 'Active ANC',
      battery: 'Up to 30 hours',
      charging: 'USB-C fast charging',
      drivers: '40mm dynamic',
      weight: '250g',
      features: 'Foldable, carrying case included'
    },
    warranty: '2 years',
    inStock: true
  },
  {
    id: 8,
    name: 'External SSD 1TB',
    category: 'Storage',
    subcategory: 'External Storage',
    brand: 'DataFast',
    price: 129.99,
    stock: 110,
    description: 'Portable external SSD with 1TB capacity, USB 3.2 Gen 2 interface',
    specifications: {
      capacity: '1TB',
      interface: 'USB 3.2 Gen 2 (10Gbps)',
      readSpeed: 'Up to 1050 MB/s',
      writeSpeed: 'Up to 1000 MB/s',
      dimensions: '10 x 5.5 x 1 cm',
      weight: '50g',
      compatibility: 'Windows, Mac, Linux, PS4/PS5, Xbox'
    },
    warranty: '5 years',
    inStock: true
  },
  {
    id: 9,
    name: 'Gaming Mouse Pad',
    category: 'Accessories',
    subcategory: 'Gaming',
    brand: 'GamePro',
    price: 19.99,
    stock: 200,
    description: 'Large RGB gaming mouse pad with non-slip rubber base',
    specifications: {
      size: '800 x 300 x 4 mm',
      surface: 'Micro-textured cloth',
      base: 'Anti-slip rubber',
      lighting: 'RGB LED (10 modes)',
      power: 'USB powered',
      features: 'Water-resistant, machine washable'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 10,
    name: 'Laptop Stand',
    category: 'Accessories',
    subcategory: 'Ergonomics',
    brand: 'ErgoDesk',
    price: 39.99,
    stock: 85,
    description: 'Adjustable aluminum laptop stand with cooling ventilation',
    specifications: {
      material: 'Aluminum alloy',
      compatibility: '10-17 inch laptops',
      adjustment: '6 height levels',
      weight: '900g',
      maxLoad: '10 kg',
      features: 'Foldable, portable, cable management'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 11,
    name: 'USB Microphone',
    category: 'Audio',
    subcategory: 'Microphones',
    brand: 'VoicePro',
    price: 99.99,
    stock: 55,
    description: 'Professional USB condenser microphone for streaming and recording',
    specifications: {
      type: 'Condenser',
      connectivity: 'USB-C',
      polarPattern: 'Cardioid',
      sampleRate: '96kHz/24-bit',
      features: 'Mute button, gain control, headphone jack',
      mount: 'Shock mount and boom arm compatible',
      compatibility: 'Plug-and-play, Windows/Mac'
    },
    warranty: '2 years',
    inStock: true
  },
  {
    id: 12,
    name: 'Desk Lamp LED',
    category: 'Office',
    subcategory: 'Lighting',
    brand: 'BrightWork',
    price: 44.99,
    stock: 120,
    description: 'LED desk lamp with adjustable brightness and color temperature',
    specifications: {
      lightSource: 'LED',
      brightness: '5 levels',
      colorTemperature: '3000K-6000K adjustable',
      power: '12W',
      features: 'Touch control, USB charging port, timer',
      armType: 'Flexible gooseneck',
      lifespan: '50,000 hours'
    },
    warranty: '2 years',
    inStock: true
  },
  {
    id: 13,
    name: 'Cable Management Kit',
    category: 'Accessories',
    subcategory: 'Organization',
    brand: 'OrganiTech',
    price: 24.99,
    stock: 180,
    description: 'Complete cable management solution with clips, sleeves, and ties',
    specifications: {
      includes: '10x cable clips, 2x cable sleeves (1.5m each), 20x velcro ties, 5x adhesive mounts',
      material: 'Neoprene sleeves, ABS clips',
      capacity: 'Sleeves hold up to 10 cables',
      installation: 'Adhesive backing, no drilling',
      color: 'Black'
    },
    warranty: '6 months',
    inStock: true
  },
  {
    id: 14,
    name: 'Portable Charger 20000mAh',
    category: 'Accessories',
    subcategory: 'Power',
    brand: 'PowerBank Pro',
    price: 59.99,
    stock: 90,
    description: 'High-capacity portable charger with fast charging and multiple ports',
    specifications: {
      capacity: '20000mAh',
      input: 'USB-C 18W PD',
      output: '2x USB-A (18W), 1x USB-C (20W PD)',
      fastCharging: 'QC 3.0, PD 3.0',
      display: 'LED battery indicator',
      weight: '380g',
      features: 'Simultaneous charging, low-current mode'
    },
    warranty: '18 months',
    inStock: true
  },
  {
    id: 15,
    name: 'Graphics Tablet',
    category: 'Electronics',
    subcategory: 'Input Devices',
    brand: 'ArtPro',
    price: 179.99,
    stock: 35,
    description: 'Digital drawing tablet with 8192 pressure levels and battery-free pen',
    specifications: {
      activeArea: '10 x 6.25 inches',
      pressureLevels: '8192',
      resolution: '5080 LPI',
      reportRate: '266 PPS',
      pen: 'Battery-free, 2 buttons',
      expressKeys: '8 customizable',
      compatibility: 'Windows, Mac, Chrome OS'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 16,
    name: 'Smart Plug 4-Pack',
    category: 'Smart Home',
    subcategory: 'Automation',
    brand: 'SmartLife',
    price: 34.99,
    stock: 140,
    description: 'WiFi smart plugs with voice control and energy monitoring',
    specifications: {
      connectivity: 'WiFi 2.4GHz',
      maxLoad: '15A, 1800W',
      voiceControl: 'Alexa, Google Assistant',
      features: 'Scheduling, timer, energy monitoring',
      app: 'iOS and Android',
      size: 'Compact design'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 17,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    subcategory: 'Speakers',
    brand: 'SoundBlast',
    price: 69.99,
    stock: 75,
    description: 'Portable waterproof Bluetooth speaker with 360° sound',
    specifications: {
      connectivity: 'Bluetooth 5.0',
      battery: 'Up to 12 hours',
      waterproof: 'IPX7',
      power: '20W',
      features: 'TWS pairing, built-in microphone, AUX input',
      weight: '600g',
      range: 'Up to 30 meters'
    },
    warranty: '1 year',
    inStock: true
  },
  {
    id: 18,
    name: 'Monitor Arm Mount',
    category: 'Accessories',
    subcategory: 'Ergonomics',
    brand: 'FlexiMount',
    price: 54.99,
    stock: 65,
    description: 'Adjustable monitor arm for 17-32 inch displays with gas spring',
    specifications: {
      compatibility: '17-32 inch monitors',
      weightCapacity: '2-9 kg',
      vesa: '75x75mm, 100x100mm',
      adjustment: 'Height, tilt, swivel, rotation',
      mounting: 'Desk clamp or grommet',
      cableManagement: 'Integrated channels'
    },
    warranty: '5 years',
    inStock: true
  },
  {
    id: 19,
    name: 'Wireless Charging Pad',
    category: 'Accessories',
    subcategory: 'Power',
    brand: 'ChargeFast',
    price: 29.99,
    stock: 160,
    description: '15W fast wireless charging pad with LED indicator',
    specifications: {
      power: 'Up to 15W',
      compatibility: 'Qi-enabled devices',
      features: 'Foreign object detection, overheat protection',
      indicator: 'LED status light',
      material: 'Tempered glass surface',
      cable: '1m USB-C cable included'
    },
    warranty: '18 months',
    inStock: true
  },
  {
    id: 20,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    subcategory: 'Seating',
    brand: 'ComfortSit',
    price: 299.99,
    stock: 20,
    description: 'Ergonomic mesh office chair with lumbar support and adjustable armrests',
    specifications: {
      backrest: 'Breathable mesh',
      lumbarSupport: 'Adjustable',
      armrests: '3D adjustable',
      seatHeight: 'Pneumatic adjustment',
      tilt: 'Multi-position lock',
      weightCapacity: '150 kg',
      wheels: '360° smooth-rolling casters'
    },
    warranty: '3 years',
    inStock: true
  }
];

/**
 * Get all products
 */
export function getAllProducts() {
  return productInventory
}

/**
 * Get product by ID
 */
export function getProductById(id) {
  return productInventory.find(product => product.id === parseInt(id))
}

/**
 * Search products by name or description
 */
export function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return productInventory.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Get products by category
 */
export function getProductsByCategory(category) {
  return productInventory.filter(product =>
    product.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get products in stock
 */
export function getInStockProducts() {
  return productInventory.filter(product => product.inStock && product.stock > 0)
}

/**
 * Get low stock products (stock < 50)
 */
export function getLowStockProducts() {
  return productInventory.filter(product => product.stock < 50 && product.stock > 0)
}

/**
 * Get products by price range
 */
export function getProductsByPriceRange(minPrice, maxPrice) {
  return productInventory.filter(product =>
    product.price >= minPrice && product.price <= maxPrice
  )
}

/**
 * Get all categories
 */
export function getAllCategories() {
  return [...new Set(productInventory.map(product => product.category))]
}

/**
 * Get all brands
 */
export function getAllBrands() {
  return [...new Set(productInventory.map(product => product.brand))]
}

/**
 * Get inventory statistics
 */
export function getInventoryStats() {
  return {
    totalProducts: productInventory.length,
    totalValue: productInventory.reduce((sum, product) => sum + (product.price * product.stock), 0),
    inStockCount: productInventory.filter(p => p.inStock && p.stock > 0).length,
    lowStockCount: productInventory.filter(p => p.stock < 50 && p.stock > 0).length,
    outOfStockCount: productInventory.filter(p => p.stock === 0).length,
    categories: getAllCategories().length,
    brands: getAllBrands().length
  }
}