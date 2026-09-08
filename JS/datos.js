const componentes = [
    { id: 'cpu1', tipo: 'cpu', marca: 'AMD', modelo: 'Ryzen 5 7600X', precio: 250000, socket: 'AM5', tdp: 105, estado: 'activo', img: 'placeholder-cpu.jpg' },
    { id: 'cpu2', tipo: 'cpu', marca: 'Intel', modelo: 'Core i5-13400F', precio: 210000, socket: 'LGA1700', tdp: 65, estado: 'activo', img: 'placeholder-cpu.jpg' },
    { id: 'gpu1', tipo: 'gpu', marca: 'NVIDIA', modelo: 'RTX 4060', precio: 320000, vram: '8GB', tdp: 115, estado: 'activo', img: 'placeholder-gpu.jpg' },
    { id: 'gpu2', tipo: 'gpu', marca: 'NVIDIA', modelo: 'GTX 1060', precio: 120000, vram: '6GB', tdp: 120, estado: 'descontinuado', img: 'placeholder-gpu.jpg' },
    { id: 'mb1', tipo: 'mb', marca: 'MSI', modelo: 'PRO B650-P', precio: 180000, socket: 'AM5', ramSoportada: 'DDR5', maxRam: 128, estado: 'activo', img: 'placeholder-mb.jpg' },
    { id: 'ram1', tipo: 'ram', marca: 'Corsair', modelo: 'Vengeance 32GB (2x16)', precio: 110000, tipoRam: 'DDR5', capacidad: 32, estado: 'activo', img: 'placeholder-ram.jpg' },
    { id: 'psu1', tipo: 'psu', marca: 'EVGA', modelo: '600 W1', precio: 50000, potencia: 600, certificacion: '80+ White', estado: 'activo', img: 'placeholder-psu.jpg' }
];
const buildsDestacadas = [
    { id: 'b1', nombre: 'Build Entry Level', desc: 'Ideal para e-Sports en 1080p.', precio: 550000 },
    { id: 'b2', nombre: 'Build High End', desc: 'Juego en 4K y productividad.', precio: 1850000 }
];
const formatearDinero = (monto) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(monto);
};