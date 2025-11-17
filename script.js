document.addEventListener('DOMContentLoaded', (event) => {

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

    const ziyadChar = document.getElementById('ziyad-char');
    const georgesChar = document.getElementById('georges-char');
    const gaspardChar = document.getElementById('gaspard-char');

    function melangerTableau(array, generateur) {
        let copie = [...array];
        for (let i = copie.length - 1; i > 0; i--) {
            const j = Math.floor(generateur() * (i + 1));
            [copie[i], copie[j]] = [copie[j], copie[i]];
        }
        return copie;
    }

    function attribuerPersonnagesDuJour() {
        const date = new Date();
        const seed = date.getUTCFullYear().toString() + 
                     (date.getUTCMonth() + 1).toString() +
                     date.getUTCDate().toString();
        
        const generateur = new Math.seedrandom(seed);
        
        const personnagesMelanges = melangerTableau(personnages, generateur);
        
        const choix = personnagesMelanges.slice(0, 3);
        
        ziyadChar.textContent = choix[0];
        georgesChar.textContent = choix[1];
        gaspardChar.textContent = choix[2];
    }

    attribuerPersonnagesDuJour();

});
