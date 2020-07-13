// Ecma

//Json Infro from API
const JsonAp = [
    {
        Name: 'Gabriel',
        Age: 27,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#"],
        source:"https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"
    }
    ,
     
    {
        Name: 'Karla',
        Age: 30,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#", "Bootstrap"],
        source: "https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"

    },
    {
        Name: 'Sergio',
        Age: 33,
        workplace: "Softtek",
        DevLan: ["Python", "Javascript", "C#", "Bootstrap", "Java"],
        source: "https://s2.eestatic.com/2019/05/17/social/La_Jungla_399220954_123067375_1024x576.jpg"
    }

]
function FullInfo(worker) {
    return `<div class="worker">
        <img src="${worker.source}" style="width:15%;margin:2%"/>
        <h2>Name:${worker.Name}<span> Age:${worker.Age}<span/><h2/>
        <h3>
    </div>`
}
let NewTable = document.getElementById("ListApp");
let contador = document.getElementById("Count");

    contador.innerHTML = `<h1>The total number of workers is ${JsonAp.length}</h1>
    ${JsonAp.map(FullInfo).join(" ")}
    <p class="footer">These ${JsonAp.length} where added recently</p>
    `
