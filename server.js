// Proxy file to run the backend server from root directory
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const backendDir = join(__dirname, 'backendportofolio');
const serverPath = join(backendDir, 'server.js');

console.log('Starting backend server...');

const serverProcess = spawn('node', [`"${serverPath}"`], {
    cwd: backendDir,
    stdio: 'inherit',
    shell: true
});

serverProcess.on('error', (error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});

serverProcess.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Server exited with code ${code}`);
    }
    process.exit(code);
});
