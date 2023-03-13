/*https://www.intersport.ch/fr/mountain-hardwear-cloud-bank-gore-tex-lt-insulated-jacket-vetements-orange-ich.mountainhardwear.1942841.838.html?dwvar_ich.mountainhardwear.1942841.838_color=838&dwvar_ich.mountainhardwear.1942841.838_size=XL*/
const inputElement = document.getElementById("form1");
let previousValue = inputElement.value;
let app = new Vue({
    el: '#app',
    data: {
        vestes: [
            {
                id:1,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski bleu légère avec un tissu extérieur 2L Gore-Tex et une isolation synthétique entièrement recyclée placée stratégiquement pour réduire le poids et le volume, tout en assurant une excellente protection contre l'humidité. Assurant une chaleur optimale même dans les conditions les plus difficiles, elle est idéale pour tous vos séjours en station.",
                image: "image/veste_bleu.jpg",
                couleur: "bleu",
                prix: 510,
                quantite: 4,

            },
            {
                id:2,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski orange légère avec un tissu extérieur 2L Gore-Tex et une isolation synthétique entièrement recyclée placée stratégiquement pour réduire le poids et le volume, tout en assurant une excellente protection contre l'humidité. Assurant une chaleur optimale même dans les conditions les plus difficiles, elle est idéale pour tous vos séjours en station.",
                image: "image/veste_orange.jpg",
                couleur: "orange",
                prix: 520,
                quantite: 8
            },
            {
                id:3,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski noir légère avec un tissu extérieur 2L Gore-Tex et une isolation synthétique entièrement recyclée placée stratégiquement pour réduire le poids et le volume, tout en assurant une excellente protection contre l'humidité. Assurant une chaleur optimale même dans les conditions les plus difficiles, elle est idéale pour tous vos séjours en station.",
                image: "image/veste_noir.jpg",
                couleur: "noir",
                prix: 550,
                quantite: 5
            },
            {
                id:4,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski brun légère avec un tissu extérieur 2L Gore-Tex et une isolation synthétique entièrement recyclée placée stratégiquement pour réduire le poids et le volume, tout en assurant une excellente protection contre l'humidité. Assurant une chaleur optimale même dans les conditions les plus difficiles, elle est idéale pour tous vos séjours en station.",
                image: "image/veste_brun.jpg",
                couleur: "brun",
                prix: 400,
                quantite: 5
            }
        ],

        panier: [

        ]

    },
    methods:{
        ajouterAuPanier(couleur){
            this.vestes.forEach(veste => {
                if(veste.couleur == couleur){                   
                    if(this.compteNBVestesMMCouleur(couleur) < veste.quantite){
                        this.panier.push(veste);
                    } else {
                        alert("Vous avez atteint la quantité maximale de cette veste");
                    }
                }
            });
        },

        supprimerDuPanier(couleur){
            this.panier.forEach(veste => {
                if(veste.couleur == couleur){
                    this.panier.splice(this.panier.indexOf(veste), 1);
                }
            });
        },

        compteNBVestesMMCouleur(couleur){
            let nbVestes = 0;
            this.panier.forEach(veste => {
                if(veste.couleur == couleur){
                    nbVestes++;
                }
            });
            return nbVestes;
        },

        totalPrix(){
            let total = 0;
            this.panier.forEach(veste => {
                total += veste.prix;
            });
            return total;
        },
        changeValeurVeste(couleur){
            const currentValue = event.target.value;
            if (currentValue > previousValue) {
                this.ajouterAuPanier(couleur);
              } else if (currentValue < previousValue) {
                this.supprimerDuPanier(couleur);
              }
              previousValue = currentValue;
        },
        viderPanier(){
            this.panier = [];
        },
        epuisementStock(couleur){
            /*si il ne reste plus que 2 veste/
            /*et si il n'y a plus de veste*/
            nbvesteRestant=this.vestes.find(veste => veste.couleur == couleur).quantite
            if(nbvesteRestant-this.compteNBVestesMMCouleur(couleur) == 0){
                return "en rupture de stock";
            }else if(nbvesteRestant-this.compteNBVestesMMCouleur(couleur) <= 2){
                return "presque épuisé";
            }else {
                return "";
            }
            /*return this.compteNBVestesMMCouleur(couleur) >= 2 && this.compteNBVestesMMCouleur(couleur) == this.vestes.find(veste => veste.couleur == couleur).quantite;*/
        },
        clientPremium(){
            return this.panier.length >= 4    
        },


    }
});