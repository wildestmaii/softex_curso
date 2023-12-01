class Sanduiche {
    custo() {
    return 0;
    }
    
    descricao() {
    return 'Sanduíche';
    }
}

class SanduicheFrangoAssado extends Sanduiche {
    custo() {
    return 4.50;
    }
    
    descricao() {
    return 'Sanduíche de Frango Assado';
    }
}

class AdicionalPepperoni extends Sanduiche {
    constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
    }
    
    custo() {
    return this.sanduiche.custo() + 0.99;
    }
    
    descricao() {
    return `${this.sanduiche.descricao()}, Pepperoni`;
    }
}

class AdicionalQueijoMozzarella extends Sanduiche {
    constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
    }
    
    custo() {
    return this.sanduiche.custo() + 2.00;
    }
    
    descricao() {
    return `${this.sanduiche.descricao()}, Queijo Mozzarella Ralado`;
    }
}

const sanduicheFinal = new AdicionalQueijoMozzarella(new AdicionalPepperoni(new SanduicheFrangoAssado()));
console.log(`${sanduicheFinal.descricao()} custa $${sanduicheFinal.custo().toFixed(2)}.`);




