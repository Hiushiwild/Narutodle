// La même liste de personnages
const personnages = [
    "Minato Namikaze","Itachi Uchiha","Naruto Uzumaki","Kakashi Hatake","Sakura Haruno",
    "Shisui Uchiha","Sakumo Hatake","Madara Uchiha","Obito Uchiha","Hinata Hyuga",
    "Jiraiya","Sasuke Uchiha","Shikamaru Nara","Neji Hyuga","Tobirama Senju",
    "Hashirama Senju","Deidara","Gaara","Sasori","Might Guy","Hidan","Rock Lee",
    "Kushina Uzumaki","Orochimaru","Kurama","Zabuza Momochi","Nagato","Kaguya Otsutsuki",
    "Iruka Umino","Fugaku Uchiha","Tsunade","Haku","Tenten","Mito Uzumaki","Yamato",
    "Kisame Hoshigaki","Teuchi","Konan","Temari","Sai","Killer B","Indra Otsutsuki",
    "Hiruzen Sarutobi","Izuna Uchiha","Rin Nohara","Kiba Inuzuka","Kimimaro","Kakuzu",
    "Might Duy","Ino Yamanaka","Kankuro","Kabuto Yakushi","Mei Terumi","Shino Aburame",
    "Suigetsu Hozuki","Genma Shiranui","Hagoromo Otsutsuki","Asuma Sarutobi","Tayuya",
    "Konohamaru Sarutobi","Akamaru","Karin","Danzo Shimura","Hayate Gekko","Asura Otsutsuki",
    "Utakata","Yagura Karatachi","Samui","Black Zetsu","Darui","Yahiko","Shikaku Nara",
    "Gamabunta","Ten-Tails","Chiyo","Mikoto Uchiha","Shizune","Choji Akimichi","Hanzo",
    "Pakkun","Omoi","Gamatatsu","Chojuro","Gengetsu Hozuki","Yugito Nii","Mu","Karui",
    "Baki","Homura Mitokado","Ebisu","Shima","Hiashi Hyuga","Katsuyu","Gamakichi","Gyuki",
    "Choza Akimichi","Fukasaku","Ao","Koharu Utatane","Mifune","Kurenai Yuhi",
    "Inoichi Yamanaka","Jugo","A (Fourth Raikage)","Onoki"
];

// On récupère les éléments HTML par leur 'id'
const ziyadChar = document.getElementById('ziyad-char');
const georgesChar = document.getElementById('georges-char');
const gaspardChar = document.getElementById('gaspard-char');

// Fonction pour mélanger un tableau en utilisant notre générateur "seedé"
function melangerTableau(array, generateur) {
    let copie = [...array];
    for (let i = copie.length - 1; i > 0; i--) {
        // On utilise notre générateur (generateur()) au lieu de Math.random()
        const j = Math.floor(generateur() * (i + 1));
        [copie[i], copie[j]] = [copie[j], copie[i]]; // Échange les éléments
    }
    return copie;
}

// Fonction principale qui fait le tirage
function attribuerPersonnagesDuJour() {
    // 1. Créer la "graine" (le seed) basée sur la date du jour.
    // On utilise UTC (temps universel) pour éviter les problèmes de fuseaux horaires.
    const date = new Date();
    const seed = date.getUTCFullYear().toString() + 
                 (date.getUTCMonth() + 1).toString() + // +1 car les mois vont de 0 à 11
                 date.getUTCDate().toString();
    
    // `seed` sera par exemple "20251117"

    // 2. Initialiser notre générateur aléatoire avec ce seed.
    // Cette fonction `Math.seedrandom` existe grâce au script qu'on a chargé dans l'HTML.
    const generateur = new Math.seedrandom(seed);
    
    // 3. Mélanger la liste en utilisant ce générateur spécifique
    // Puisque le seed est le même pour tout le monde, le mélange sera le même !
    const personnagesMelanges = melangerTableau(personnages, generateur);
    
    // 4. Prendre les 3 premiers personnages de la liste mélangée
    const choix = personnagesMelanges.slice(0, 3);
    
    // 5. Mettre à jour le texte sur la page HTML
    ziyadChar.textContent = choix[0];
    georgesChar.textContent = choix[1];
    gaspardChar.textContent = choix[2];
}

// Lancer la fonction une seule fois au chargement de la page
attribuerPersonnagesDuJour();