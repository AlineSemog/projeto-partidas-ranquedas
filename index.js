 
    function saldoVitoria(victory, defeat) {
    let saldoVitorias = victory-defeat;
    let nivel = '';
        if (saldoVitorias <= 10) {
            nivel = "Ferro"
        }else if (saldoVitorias <= 20) {
            nivel = "Bronze"
        } else if (saldoVitorias <= 50) {
            nivel = "Prata"
        } else if (saldoVitorias <= 80) {
            nivel = "Ouro"
        } else if (saldoVitorias <= 90) {
            nivel = "Diamante"
        } else if (saldoVitorias <= 100) {
            nivel = "Lendário"
        } else if (saldoVitorias >= 100) {
            nivel = "Imortal"
        }
        return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`
    }
  
   console.log(saldoVitoria(110,10))