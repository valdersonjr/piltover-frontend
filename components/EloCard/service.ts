export const getPath = (name:string):string => {
    for(let i=0; i < elos.length; i = i + 1){
        if(elos[i].name === name){
            return elos[i].src;
        }
    }

    return "";
}

export const elos = [{
    name: 'Challenger',
    src: "../../assets/elos/challengerElo.png",
    alt: 'challenger elo',
    key: 0
},
{
    name: 'Grão Mestre',
    src: "../../assets/elos/grandmasterElo.png",
    alt: 'grao mestre elo',
    key: 1
},
{
    name: 'Mestre',
    src: "../../assets/elos/masterElo.png",
    alt: 'mestre elo',
    key: 2
},
{
    name: 'Diamante',
    src: "../../assets/elos/diamondElo.png",
    alt: 'diamante elo',
    key: 3
},
{
    name: 'Platina',
    src: "../../assets/elos/platinumElo.png",
    alt: 'platina elo',
    key: 4
},
{
    name: 'Ouro',
    src: "../../assets/elos/goldElo.png",
    alt: 'ouro elo',
    key: 5
},
{
    name: 'Prata',
    src: "../../assets/elos/silverElo.png",
    alt: 'prata elo',
    key: 6
},
{
    name: 'Bronze',
    src: "../../assets/elos/bronzeElo.png",
    alt: 'bronze elo',
    key: 7
},
{
    name: 'Ferro',
    src: "../../assets/elos/ironElo.png",
    alt: 'ferro elo',
    key: 8
}];

export const tiers = [{
    name: 'I',
    key: 0,
},
{
    name: 'II',
    key: 1,
},
{
    name: 'III',
    key: 3,
},
{
    name: 'IV',
    key: 4,
}];