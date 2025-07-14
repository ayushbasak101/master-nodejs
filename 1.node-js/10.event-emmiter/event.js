import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 69);