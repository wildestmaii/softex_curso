const readlineSync = require('readline-sync');

// todos os computadores
class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

// mostrando atributos
  toString() {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// pc
class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'PC');
  }
}

// server
class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'Server');
  }
}

// fabrica para instancias
class ComputerFactory {
  createComputer(type, ram, hdd, cpu) {
    switch (type) {
      case 'PC':
        return new PC(ram, hdd, cpu);
      case 'Server':
        return new Server(ram, hdd, cpu);
      default:
        throw new Error('Tipo de computador desconhecido');
    }
  }
}

const type = readlineSync.question('Digite o tipo de computador (PC ou Server): ');
const ram = parseFloat(readlineSync.question('Digite a quantidade de RAM (em GB): '));
const hdd = parseFloat(readlineSync.question('Digite a capacidade do HD (em GB): '));
const cpu = parseFloat(readlineSync.question('Digite a velocidade da CPU (em GHz): '));

// usando a fabrica
const factory = new ComputerFactory();

try {
  const userComputer = factory.createComputer(type, ram, hdd, cpu);
  console.log(userComputer.toString());
} catch (error) {
  console.error(error.message);
}