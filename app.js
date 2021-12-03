const Personne = function (sonNom, sonPrenom, sonAge, sonMetier, saVille){
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.metier = sonMetier;
    this.ville = saVille;

    this.getData = function (){
        return "Le nom de ma personne est " + this.nom + ", son prénom est " + this.prenom + ", ma personne a " +
            this.age + " ans, et est " + this.metier + " à " + this.ville
    }

    this.setData = function (metier, ville){
        this.metier = metier;
        this.ville = ville;
    }
}

let array = [];
let Corinne = new Personne("Mairessse", "Corinne", 49, "femme de ménage", "Poubezre");
let Nicolas = new Personne("Browers", "Nicolas", 35, "barman", "Lille");
let James = new Personne("Bond", "James", 70, "espion", "Londre");
let Frodon = new Personne("saquet", "Frodon", 50, "hobbit", "cul de sac");
let Legolas = new Personne("Verte-feuille", "Legolas", 140, "efle", "Foncombe");

array.push(Corinne, Nicolas, James, Frodon, Legolas);

for(let item of array){
    let div = document.createElement('div');
    div.innerHTML = item.getData();
    document.body.appendChild(div);
}

let classe = {
    perso1 : Corinne,
    perso2 : Nicolas,
    perso3 : James,
    perso4 : Frodon,
    perso5 : Legolas
}

