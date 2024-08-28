const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;

  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  // Requiere el servidor desde otro archivo
  const server = require('./server');
  // El servidor se está ejecutando en este worker
  server.listen(3840, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
