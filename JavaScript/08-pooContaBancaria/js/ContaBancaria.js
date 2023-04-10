class ContaBancaria{
    constructor(titular, nConta, saldo){
        this.titular = titular;
        this.nConta = nConta;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo = this.saldo + valor;
    }

    sacar(valor){
        this.saldo = this.saldo - valor;
    }
}
