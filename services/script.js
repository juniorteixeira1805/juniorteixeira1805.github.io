/* =========================== TABELA ======================*/

const grupoA = [
    {
        nome: 'Campus 2 p²',
        jogos: 1,
        golsFeitos: 0,
        golsSofridos: 1,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 0
    },
    {
        nome: 'Campus 1 p¹',
        jogos: 1,
        golsFeitos: 1,
        golsSofridos: 0,
        cartaoAmarelo: 0,
        cartaoVermelho: 0,
        pontos: 3,
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
            <td class="text-center" >${index + 1}°</td>
            <td class="text-center">${clube.nome}</td>
            <td class="text-center">${clube.jogos}</td>
            <td class="text-center">${clube.golsSofridos}</td>
            <td class="text-center">${clube.golsFeitos}</td>
            <td class="text-center">${clube.golsFeitos - clube.golsSofridos}</td>
            <td class="text-center">${clube.cartaoAmarelo}</td>
            <td class="text-center">${clube.cartaoVermelho}</td>
            <td class="text-center">${clube.pontos}</td>
        `;
    })

    grupoB.map((clube, index) => {
        document.getElementsByClassName('row-group-b')[index].innerHTML = `
            <td class="text-center" >1°</td>
            <td class="text-center">${clube.nome}</td>
            <td class="text-center">${clube.jogos}</td>
            <td class="text-center">${clube.golsSofridos}</td>
            <td class="text-center">${clube.golsFeitos}</td>
            <td class="text-center">${clube.golsFeitos - clube.golsSofridos}</td>
            <td class="text-center">${clube.cartaoAmarelo}</td>
            <td class="text-center">${clube.cartaoVermelho}</td>
            <td class="text-center">${clube.pontos}</td>
        `;
    })
}
adicionarClubesNoGrupo()

// ================= RODADAS ==========================//

const rodada1 = [
    {
        clube1: grupoA[0].nome,
        golsClube1: 0,
        clube2: grupoA[1].nome,
        golsClube2: 1,
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
        document.getElementById("title-round-table").innerText = "1° RODADA - FASE DE GRUPOS (07/12)"
        rodada1.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="text-center round">Jogo ${index + 1}</td>
                <td class="text-center round">${jogo.clube1}</td>
                <td class="text-center round">${jogo.golsClube1 ?? '-'}</td>
                <td class="text-center round"></td>
                <td class="text-center round">${jogo.golsClube2 ?? '-'}</td>
                <td class="text-center round">${jogo.clube2}</td>
                <td class="text-center round">${jogo.hora}</td>
                <td class="text-center round">${jogo.grupo}</td>
            </tr>`
        })
    }

    if(value == 2){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "2° RODADA - FASE DE GRUPOS (08/12)"
        rodada2.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="text-center round">Jogo ${index + 4}</td>
                <td class="text-center round">${jogo.clube1}</td>
                <td class="text-center round">${jogo.golsClube1 ?? '-'}</td>
                <td class="text-center round"></td>
                <td class="text-center round">${jogo.golsClube2 ?? '-'}</td>
                <td class="text-center round">${jogo.clube2}</td>
                <td class="text-center round">${jogo.hora}</td>
                <td class="text-center round">${jogo.grupo}</td>
            </tr>`
        })
    }

    if(value == 3){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "3° RODADA - SEMI-FINAIS (08/12)"

        rodada3.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="text-center round">Jogo ${index + 7}</td>
                <td class="text-center round">${jogo.clube1}</td>
                <td class="text-center round">${jogo.golsClube1 ?? '-'}</td>
                <td class="text-center round"></td>
                <td class="text-center round">${jogo.golsClube2 ?? '-'}</td>
                <td class="text-center round">${jogo.clube2}</td>
                <td class="text-center round">${jogo.hora}</td>
                <td class="text-center round">Semi-final</td>

            </tr>`
        })
    }

    if(value == 4){
        rounds.innerHTML = '<tr></tr>';
        document.getElementById("title-round-table").innerText = "4° RODADA - FINAIS (08/12)"

        rodada4.map((jogo, index) => {
            rounds.innerHTML += `
            <tr>
                <td class="text-center round">Jogo ${index + 1}</td>
                <td class="text-center round">${jogo.clube1}</td>
                <td class="text-center round">${jogo.golsClube1 ?? '-'}</td>
                <td class="text-center round"></td>
                <td class="text-center round">${jogo.golsClube2 ?? '-'}</td>
                <td class="text-center round">${jogo.clube2}</td>
                <td class="text-center round">${jogo.hora}</td>
                <td class="text-center round">${index == 0 ? 'Terceiro lugar' : 'Final'}</td>

            </tr>`
        })
    }
}

exibirRodada(1)

