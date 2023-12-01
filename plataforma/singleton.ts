class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaSecreta: string = "senha123";
  private constructor() {}

  static obterInstancia(): SistemaSeguranca {
    if (!this.instancia) {
      this.instancia = new SistemaSeguranca();
    }
    return this.instancia;
  }

  acessarBaseSecreta(senha: string): void {
    if (senha === this.senhaSecreta) {
      console.log("Acesso concedido à Secret Base. Missão bem-sucedida!");
    } else {
      console.log("Senha incorreta. Acesso negado! Intruso detectado!");
    }
  }
}

const agenteSecreto = SistemaSeguranca.obterInstancia();
agenteSecreto.acessarBaseSecreta("senha123");
agenteSecreto.acessarBaseSecreta("senhaErrada");
