/*https://www.intersport.ch/fr/mountain-hardwear-cloud-bank-gore-tex-lt-insulated-jacket-vetements-orange-ich.mountainhardwear.1942841.838.html?dwvar_ich.mountainhardwear.1942841.838_color=838&dwvar_ich.mountainhardwear.1942841.838_size=XL*/
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
            {
                listeItem: [],
                totalBleu: 0,
                totalOrange: 0,
                totalNoir: 0,
                totalBrun: 0
            }


        ]

    },
    methods:{
        ajouterAuPanier(couleur){
            this.Vestes.forEach(veste => {
                if(veste.couleur === couleur){
                    /*verifier si le produit est deja dans le panier*/
                    let dejaDansPanier = false;
                    this.panier.listeItem.forEach(item => {
                        if(item.id === veste.id){
                            dejaDansPanier = true;
                        }
                        /*vérifier si le produit est en stock*/
                        if(veste.quantite > 0){
                            if(dejaDansPanier){
                                item.quantite++;
                            }else{
                                veste.quantite = 1;
                                this.panier.listeItem.push(veste);

                            }
                            veste.quantite--;
                        }else{
                            alert("Le produit n'est plus en stock");
                        }
                    });

                }
            });
        },

        totalPrix(){
            let total = 0;
            this.panier.listeItem.forEach(item => {
                total += item.prix;
            });
            return total;       
        }
    }
});