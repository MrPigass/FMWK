/*https://www.intersport.ch/fr/mountain-hardwear-cloud-bank-gore-tex-lt-insulated-jacket-vetements-orange-ich.mountainhardwear.1942841.838.html?dwvar_ich.mountainhardwear.1942841.838_color=838&dwvar_ich.mountainhardwear.1942841.838_size=XL*/
let app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        vestes: [
            {
                id:1,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski bleu",
                image: "image/veste_bleu.jpg",
                couleur: "bleu",
                prix: 510,
                quantite: 4,

            },
            {
                id:2,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski orange",
                image: "image/veste_orange.jpg",
                couleur: "orange",
                prix: 520,
                quantite: 8
            },
            {
                id:3,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski noir",
                image: "image/veste_noir.jpg",
                couleur: "noir",
                prix: 550,
                quantite: 5
            },
            {
                id:4,
                nom: "Mountain Hardwear · Cloud Bank Gore Tex LT Insulated Jacket Hommes",
                description: "La Cloud Bank est une veste de ski brun",
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
        mouseover(index) {
          
            /* Affichage de l'index dans la console */
            console.log(index)
  
            /* Mise en évidence de la zone sélectionnée => obsolete => voir CSS
            event.target.style.backgroundColor = 'red'; */
  
            /* Changement d'index, afin que l'image change */
            this.currentIndex = index;
      },
        /*ajouter au panier*/
        ajouterAuPanier(couleur){
            this.vestes.forEach(veste => {
                if(veste.couleur == couleur){                   
                    if(this.compteNBVestesMMCouleur(couleur) < veste.quantite){
                        this.panier.push(veste);
                        /*protéger le stock pour ne pas ajouter en plus*/
                    } else {
                        alert("Vous avez atteint la quantité maximale de cette veste");
                    }
                }
            });
        },
        /*supprimer du panier*/
        supprimerDuPanier(couleur){
            const index = this.panier.findIndex(veste => veste.couleur === couleur);
            if (index !== -1) {
                this.panier.splice(index, 1);
            }
        },

        /*compter le nombre de veste dans le panier de la même couleur*/
        compteNBVestesMMCouleur(couleur){
            let nbVestes = 0;
            this.panier.forEach(veste => {
                if(veste.couleur == couleur){
                    nbVestes++;
                }
            });
            return nbVestes;
        },
        /*compter le prix total du panier*/
        totalPrix(){
            let total = 0;
            this.panier.forEach(veste => {
                total += veste.prix;
            });
            return total;
        },

        /*vider le panier*/
        viderPanier(){
            this.panier = [];
        },
        /*calcule si il en reste 3 ou moins ou si il n'y a plus rien */
        epuisementStock(couleur){
             /*on récupère le nombre de veste restant dans le stock*/          
            nbvesteRestant=this.vestes.find(veste => veste.couleur == couleur).quantite
            /*si il n'y a plus de veste*/
            if(nbvesteRestant-this.compteNBVestesMMCouleur(couleur) == 0){
                return "en rupture de stock";
            /*si il ne reste plus que 2 veste*/ 
            }else if(nbvesteRestant-this.compteNBVestesMMCouleur(couleur) <= 2){
                return "presque épuisé";
            }else {
                return "";
            }
        },
        /*calcule si le client est premium ou non*/
        clientPremium(){
            return this.panier.length >= 4    
        }
    }
});