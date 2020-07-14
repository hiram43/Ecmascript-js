// Ecma

//Json Info from API(Simulation)
const JsonAp = [
    {
        Name: 'Gabriel',
        Birth: 1992,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#"],
        source:"https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"
    }
    ,
     
    {
        Name: 'Karla',
        Birth: 1989,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#", "Bootstrap"],
        source: "https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"

    },
    {
        Name: 'Sergio',
        Birth: 1985,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#", "Bootstrap", "Java"],
        source: "https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"
    }

]



function age(Args) {
    let Calculdate = new Date().getFullYear() - Args;
    let consola;
    Args >= 1 ? Calculdate = `${Calculdate} years ` : ` ${Calculdate} year`
    return Calculdate;
}
function Devs(Langs) {
    return `
    <ul>
        ${Langs.map(lan => `<li>${lan}</li>`).join("")} 
    </ul>
`
}



function FullInfo(worker) {
     return `
    <div class="flex-container">
        <div><strong>Name: </strong> ${worker.Name} </div>
        <div><strong>Devs:</strong>${worker.DevLan?Devs(worker.DevLan):''}</div>
        <div><strong>Workplace :</strong>${worker.workplace}</div>
        <div><strong>Age:</strong> ${age(worker.Birth)}</div>
        <img class="img"/ src="${worker.source}">

    </div>
`


}
let BodyMn = document.getElementById("Count");
BodyMn.innerHTML = `${JsonAp.map(FullInfo).join(" ")}`

