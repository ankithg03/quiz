export const AlphabetsList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const CategoryList = [
  "Movies & Series",
  "Superheroes",
  "Naruto"
];

export const Colors = [
  
];

export const Shapes = [
  
];

export const Movies = [
  "chamak~Movie of a Golden Star which Glows.",
  "bhootayyana maga ayyu~Ondu Unlimited Oota Mooru Jana😂.",
  "the vampire diaries~Love Story of Two Brothers.",
  "your name~the first anime movie you saw.",
  "zenitsu~shock boy's name.",
  "tanjiro~Demon Slayer protagonist.",
  "The Last~The movie in which naruto understands hinata's love interest."
];

export const Superheroes = [
  "thor~God of Thunder.",
  "wonder woman~Amazonian warrior queen.",
  "superman~Man of Steel.",
  "black panther~Wakandan king.",
  "hawkeye~Master marksman and a former special agent of S.H.I.E.L.D.",
  "captain america~God's righteous man who leads the Avengers.",
  "ironman~Genius. Billionaire. Playboy. Philanthropist.",
  "black widow~Super spy who has become one of S.H.I.E.L.D.'s most deadly assassins.",
  "starlord~Leader of the Guardians of the Galaxy",
  "scarlet witch~Powerful mutant sorceress, has been a part of both Avengers and X-Men.",
  "green lantern~Part of an alien interstellar police force who fights evil with the aid of his ring.",
  "batman~The Dark Knight.",
  "spiderman~The friendly neighbourhood superhero.",
  "antman~Master thief and now a superhero who can shrink and expand with the help of his futuristic suit.",
  "flash~The fastest man alive who fights against evil with his super speed.",
  "captain marvel~Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers.",
  "wolverine~A mutant with healing power, adamantium metal claws and a no-nonsense attitude.",
  "aquaman~King of the Seven Seas.",
  "invisible woman~Uses her power of invisibility and mental ability to manipulate ambient cosmic energy to save Earth."
];

export const Countries = [
  
];

export const Naruto = [
  "naruto uzumaki~The unpredictable number one hyperactive ninja.",
  "rasenshuriken~Shuriken shaped variant of Wind Release : Rasengan.",
  "susanoo~Gigantic humanoid avatar belonging to those who have awakened Mangekyou Sharingan.",
  "kotoamatsukami~The greatest genjutsu belonging to Shisui.",
  "sasuke uchiha~The last of his family who later became the Shadow Hokage.",
  "mangekyou sharingan~The visual prowess of Itachi Uchiha.",
  "madara uchiha~Indra's reincarnation and first Uchiha clan head.",
  "chidori~Kakashi's original jutsu.",
  "konohagakure~The Village Hidden in the Leaves.",
  "kakashi hatake~A natural prodigy and one of Leaf's greatest, the Sixth Hokage.",
  "genjutsu~Sensory illusions jutsu and among the main three besides Ninjutsu and Taijutsu.",
  "jiraiya~The Toad Sage and one of the Sannins.",
  "itachi uchiha~The unsung hero of the Leaf.",
  "orochimaru~The twisted Sannin.",
  "hashirama senju~Asura's recincarnation and the First Hokage.",
  "hokage~Leader of the Hidden Leaf village.",
  "shikamaru nara~Lazy but possesses the greatest intellect in Konoha.",
  "jinchuriki~Humans who have tailed beasts sealed within them.",
  "zabuza momochi~Demon of the Hidden Mist.",
  "yellow flash~The legendary Fourth Hokage and the fastest Shinobi ever.",
  "sakura haruno~Tsunade's apprentice and only the second person to acquire The Hundred Healings.",
  "hinata hyuga~Creator of the Twin Lion Fists.",
  "akatsuki~Group of S-ranked missing ninjas.",
  "kazekage~Leader of the Hidden Sand village.",
  "gamabunta~Chief toad of Mount Myoboku.",
  "flying raijin~The jutsu created by Tobirama and mastered by Minato.",
  "kekkei genkai~Anomaly of the DNA that allows the wielder to use unique techniques."
];

export const Flowers = [
  "orchid~Bright rich purple colored flowers.",
  "lily~Also the name of Harry's mother.",
  "rose~Proposal flowers, mostly.",
  "lotus~Sacred and national flower of India.",
  "jasmine~An important scent noted in perfumes, and also has herbal properties.",
  "daffodil~Along with tulips, this yellow colored flower is one of the most popular springtime bulbs.",
  "daisy~Girlfriend of Donald Duck.",
  "hibiscus~Native to warm temperate, subtropical and tropical regions throughout the world.",
  "gerbera~Also commonly known as the African daisy.",
  "sunflower~Bright yellow colored flowers named after the Sun.",
  "tulip~Large, showy and brightly colored, they are the most colorful of all spring flowers.",
  "peony~Large, showy and often fragrant, occuring in a glorious spectrum of colors including purple, red, white and yellow.",
  "dahlia~Declared the national flower of Mexico.",
  "marigold~Also called the herb of the sun.",
  "petunia~Harry's maternal aunt.",
  "lavender~Fragrance from the oils of this plant is believed to help promote calmness and wellness.",
  "periwinkle~A unique plant, which blends ornamental values and medicinal properties.",
  "cherry blossom~Found in abundance in Japan.",
  "bluebell~These blue colored sweet-smelling flowers nod or droop to one side of the flowering stem and have creamy white-coloured pollen inside.",
  "dandelion~Bright yellow flowers whose oil is often used in recipes designed to soothe and heal chapped or cracked skin.",
  "chrysanthemum~One of the most popular fall garden flowers.",
  "hyacinth~Highly fragrant, bell-shaped flowers with reflexed petals.",
  "snowdrop~White drooping bell shaped flower with six petal-like tepals in two circles.",
  "iris~Named for the Greek goddess of the rainbow.",
  "geranium~Bright flowers that grow in the eastern part of the Mediterranean region.",
  "honeysuckle~Derives its name from the edible sweet nectar obtainable from its tubular flowers.",
  "hazel~There's a nut named after this.",
  "mistletoe~Widely used as a Christmas tradition.",
  "nightshade~Grow in shade and flower at night."
];

export const Disney = [
  
];

export const HarryPotter = [
  
];

export const Music = [
  
];

export const Fantasy = [
  
];

export const TotalWords = 53;
export const TotalLives = 8;

export const getEmoji = (category) => {
  let emoji = "";
  switch (category) {
    case "Colors":
      emoji = " 🎨";
      break;
    case "Shapes":
      emoji = " ⬜️";
      break;
    case "Movies & Series":
      emoji = " 🎥";
      break;
    case "Superheroes":
      emoji = " 🦸";
      break;
    case "Countries":
      emoji = " 🏳️";
      break;
    case "Naruto":
      emoji = " 🌀";
      break;
    case "Flowers":
      emoji = " 🌼";
      break;
    case "Disney":
      emoji = " 🧜‍♀️";
      break;
    case "HarryPotter":
      emoji = " 🧙";
      break;
    case "Music":
      emoji = " 🎸";
      break;
    case "Fantasy":
      emoji = " 🦄";
      break;
    default:
      emoji = [];
  }
  return emoji;
};