function area(){
    let raio = document.getElementById("raio2").value;
    let area = (3.14 * (raio * raio));
    raio < 0 ?
        document.getElementById("result-area2").value ="Medida do raio não pode ser negativa"
    :
        document.getElementById("result-area2").value = area.toFixed(1);

}
document.getElementById("raio2").addEventListener("change", area);

function perime(){
    let raiopr = document.getElementById("raio2").value;
    if (raiopr < 0) {
        document.getElementById("result-peri").value ="Medida do raio não pode ser negativa";
    } else{
        let peri = (2 * 3.14 * (raiopr));
        document.getElementById("result-peri").value = peri.toFixed(1);
    }

}
document.getElementById("raio2").addEventListener("change", perime);

function areaE(){
    let areae = document.getElementById("raio").value;
    if (areae < 0) {
        document.getElementById("result-area").value ="Medida do raio não pode ser negativa";
    } else{
        let areaesf = (4 * 3.14 * (areae * areae));
        document.getElementById("result-area").value = areaesf.toFixed(1);
    }

}
document.getElementById("raio").addEventListener("change", areaE);

function volumeE(){
    let volumee = document.getElementById("raio").value;
    if (volumee < 0) {
        document.getElementById("result-volume").value ="Medida do raio não pode ser negativa";
    } else{
        let volumeesf = (4/3) * 3.14 * (volumee * volumee * volumee);
        document.getElementById("result-volume").value = volumeesf.toFixed(1);
    }

}
document.getElementById("raio").addEventListener("change", volumeE);

function ftoc(){
    let fahrenheitesfcel = document.getElementById("entrada-F").value;
    let fpc = (fahrenheitesfcel-32)/1.8;
    document.getElementById("result-c").value = fpc.toFixed(1);
}

function ftok(){
    let fahrenheitkelv = document.getElementById("entrada-F").value;
    let fpk = (fahrenheitkelv-32) * 5/9 + 273.15;
    document.getElementById("result-k").value = fpk.toFixed(1);
}

document.getElementById("entrada-F").addEventListener("change", ftoc);
document.getElementById("entrada-F").addEventListener("change", ftok);






function seleciona( aba ){
    let lista = document.getElementsByClassName("wrapper");
    for (let i = 0; i < lista.length ; i++){
        document.getElementById("wrapper-" + i).style.display="none";

        document.getElementById("btn-"+ i).classList.remove("ativa");
    }
    document.getElementById("wrapper-" + aba).style.display="grid";

    document.getElementById("btn-"+ aba).classList.add("ativa");
}

window.onload = seleciona(0);

document.getElementById("btn-0").addEventListener("click", function(){seleciona(0)});
document.getElementById("btn-1").addEventListener("click", function(){seleciona(1)});
document.getElementById("btn-2").addEventListener("click", function(){seleciona(2)});