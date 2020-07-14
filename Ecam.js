// Ecma

//Json Info from API
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
        ${Langs.map(lan => `${lan}`).join('/')}
    </ul>
`
}



function FullInfo(worker) {
     return `
    <div class="flex-container">
        <div>Name: ${worker.Name} </div>
        <div>Devs:${worker.DevLan?Devs(worker.DevLan):''}</div>
        <div>Workplace :${worker.workplace}</div>
        <div>Age: ${age(worker.Birth)}</div>
    </div>
`


}
let BodyMn = document.getElementById("Count");
BodyMn.innerHTML = `${JsonAp.map(FullInfo).join(" ")}`

