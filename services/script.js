/* =========================== TABELA ======================*/

const grupoA = [
    {
        nome: 'Campus 2 p²',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0
    },
    {
        nome: 'Campus 1 p¹',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0,
    },
    {
        nome: 'Campus 3 p¹',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0,
    }
]

const grupoB = [
    {
        nome: 'Campus 3 p²',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0
    },
    {
        nome: 'Campus 1 p²',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0,
    },
    {
        nome: 'Campus 3 p³',
        jogos: 0,
        golsFeitos: 0,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0,
    }
]

function sortGroups(a,b){
    if (a.pontos < b.pontos) {
        return 1;
    }
    if (a.pontos > b.pontos) {
        return -1;
    }

    if (a.golsFeitos - a.golsSofridos < b.golsFeitos - b.golsSofridos) {
        return 1;
    }
    if (a.golsFeitos - a.golsSofridos > b.golsFeitos - b.golsSofridos) {
        return -1;
    }

    if (a.golsFeitos < b.golsFeitos) {
        return 1;
    }
    if (a.golsFeitos > b.golsFeitos) {
        return -1;
    }

    if (a.golsSofridos < b.golsSofridos) {
        return 1;
    }
    if (a.golsSofridos > b.golsSofridos) {
        return -1;
    }

    if (a.cartaoAmarelo < b.cartaoAmarelo) {
        return 1;
    }
    if (a.cartaoAmarelo > b.cartaoAmarelo) {
        return -1;
    }

    if (a.cartaoVermelho < b.cartaoVermelho) {
        return 1;
    }
    if (a.cartaoVermelho > b.cartaoVermelho) {
        return -1;
    }
    
      // names must be equal
      return 0;
}

function adicionarClubesNoGrupo(){

    grupoA.sort(sortGroups);
    grupoB.sort(sortGroups);

    grupoA.map((clube, index) => {
        document.getElementsByClassName('row-group-a')[index].innerHTML = `
            <td >${index + 1}°</td>
            <td>${clube.nome}</td>
            <td>${clube.jogos}</td>
            <td>${clube.golsSofridos}</td>
            <td>${clube.golsFeitos}</td>
            <td>${clube.golsFeitos - clube.golsSofridos}</td>
            <td>${clube.cartaoAmarelo}</td>
            <td>${clube.cartaoVermelho}</td>
            <td>${clube.pontos}</td>
        `;
    })

    grupoB.map((clube, index) => {
        document.getElementsByClassName('row-group-b')[index].innerHTML = `
            <td >1°</td>
            <td>${clube.nome}</td>
            <td>${clube.jogos}</td>
            <td>${clube.golsSofridos}</td>
            <td>${clube.golsFeitos}</td>
            <td>${clube.golsFeitos - clube.golsSofridos}</td>
            <td>${clube.cartaoAmarelo}</td>
            <td>${clube.cartaoVermelho}</td>
            <td>${clube.pontos}</td>
        `;
    })
}
adicionarClubesNoGrupo()

// ================= RODADAS ==========================//

const rodada1 = [
    {
        clube1: grupoA[0].nome,
        golsClube1: null,
        clube2: grupoA[1].nome,
        golsClube2: null,
        hora: "22:15",
        grupo: "A"
    },
    {
        clube1: grupoB[0].nome,
        golsClube1: null,
        clube2: grupoB[1].nome,
        golsClube2: null,
        hora: "22:45",
        grupo: "B"
    },
    {
        clube1: grupoA[2].nome,
        golsClube1: null,
        clube2: grupoA[1].nome,
        golsClube2: null,
        hora: "23:15",
        grupo: "A"
    }
]

const rodada2 = [
    {
        clube1: grupoB[0].nome,
        golsClube1: null,
        clube2: grupoB[2].nome,
        golsClube2: null,
        hora: "22:15",
        grupo: "B"
    },
    {
        clube1: grupoA[0].nome,
        golsClube1: null,
        clube2: grupoA[2].nome,
        golsClube2: null,
        hora: "22:45",
        grupo: "A"
    },
    {
        clube1: grupoB[2].nome,
        golsClube1: null,
        clube2: grupoB[1].nome,
        golsClube2: null,
        hora: "23:15",
        grupo: "B"
    }
]

const rodada3 = [
    {
        clube1: "1° Colocado do A",
        golsClube1: null,
        clube2: "'2° Colocado do B",
        golsClube2: null,
        hora: "22:15",
        grupo: "A"
    },
    {
        clube1: "1° Colocado do B",
        golsClube1: null,
        clube2: "2° Colocado do A",
        golsClube2: null,
        hora: "22:45",
    },
]

const rodada4 = [
    {
        clube1: "Perdedor do jogo 7",
        golsClube1: null,
        clube2: "Perdedor do jogo 8",
        golsClube2: null,
        hora: "22:15",
        grupo: "A"
    },
    {
        clube1: "Vencedor jogo 7",
        golsClube1: null,
        clube2: "Vencedor jogo 8",
        golsClube2: null,
        hora: "22:45",
        grupo: "B"
    },
]

function exibirRodada(value){
    var rounds = document.getElementById("round-table")

    if(value == 1){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "1° RODADA - FASE DE GRUPOS (06/12)"
        rodada1.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="round">Jogo ${index + 1}</td>
                <td class="round">${jogo.clube1}</td>
                <td class="round">${jogo.golsClube1 ?? '-'}</td>
                <td class="round"></td>
                <td class="round">${jogo.golsClube2 ?? '-'}</td>
                <td class="round">${jogo.clube2}</td>
                <td class="round">${jogo.hora}</td>
                <td class="round">${jogo.grupo}</td>
            </tr>`
        })
    }

    if(value == 2){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "2° RODADA - FASE DE GRUPOS (08/12)"
        rodada2.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="round">Jogo ${index + 4}</td>
                <td class="round">${jogo.clube1}</td>
                <td class="round">${jogo.golsClube1 ?? '-'}</td>
                <td class="round"></td>
                <td class="round">${jogo.golsClube2 ?? '-'}</td>
                <td class="round">${jogo.clube2}</td>
                <td class="round">${jogo.hora}</td>
                <td class="round">${jogo.grupo}</td>
            </tr>`
        })
    }

    if(value == 3){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "3° RODADA - SEMI-FINAIS (08/12)"

        rodada3.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="round">Jogo ${index + 7}</td>
                <td class="round">${jogo.clube1}</td>
                <td class="round">${jogo.golsClube1 ?? '-'}</td>
                <td class="round"></td>
                <td class="round">${jogo.golsClube2 ?? '-'}</td>
                <td class="round">${jogo.clube2}</td>
                <td class="round">${jogo.hora}</td>
                <td class="round">Semi-final</td>

            </tr>`
        })
    }

    if(value == 4){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "4° RODADA - FINAIS (08/12)"

        rodada4.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="round">Jogo ${index + 1}</td>
                <td class="round">${jogo.clube1}</td>
                <td class="round">${jogo.golsClube1 ?? '-'}</td>
                <td class="round"></td>
                <td class="round">${jogo.golsClube2 ?? '-'}</td>
                <td class="round">${jogo.clube2}</td>
                <td class="round">${jogo.hora}</td>
                <td class="round">${index == 0 ? 'Terceiro lugar' : 'Final'}</td>

            </tr>`
        })
    }
}

exibirRodada(1)

