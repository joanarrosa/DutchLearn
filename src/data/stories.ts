import type { Story, StoryLevel, StoryTheme } from "../types";

export const LEVEL_INFO: Record<StoryLevel, { label: string; description: string }> = {
  A0: { label: "A0 · Starter", description: "Very short sentences, the most common words" },
  A1: { label: "A1 · Beginner", description: "Simple everyday situations and dialogue" },
  A2: { label: "A2 · Elementary", description: "Longer sentences, past and future events" },
};

export const THEME_INFO: Record<StoryTheme, { label: string; emoji: string }> = {
  daily: { label: "Daily life", emoji: "🏠" },
  netherlands: { label: "Living in NL", emoji: "🇳🇱" },
  travel: { label: "Travel", emoji: "🚆" },
  fiction: { label: "Stories & tales", emoji: "📚" },
};

export const STORIES: Story[] = [
  // ---------------------------------------------------------------- Daily life
  {
    id: "mijn-ochtend",
    title: "Mijn ochtend",
    titleEn: "My morning",
    level: "A0",
    theme: "daily",
    emoji: "☕",
    summary: "Emma gets up, has breakfast with her cat and cycles to work in the rain.",
    sentences: [
      { nl: "Hallo! Ik ben Emma.", en: "Hello! I am Emma." },
      { nl: "Ik woon in Utrecht.", en: "I live in Utrecht." },
      { nl: "Het is zeven uur.", en: "It is seven o'clock." },
      {
        nl: "Ik sta op.",
        en: "I get up.",
        note: "opstaan (to get up) is a separable verb: the 'op' moves to the end — ik sta op.",
      },
      { nl: "Ik drink koffie.", en: "I drink coffee." },
      { nl: "De koffie is warm.", en: "The coffee is hot." },
      { nl: "Ik eet brood met kaas.", en: "I eat bread with cheese." },
      { nl: "Mijn kat heet Poes.", en: "My cat is called Poes." },
      { nl: "Poes eet ook.", en: "Poes eats too." },
      {
        nl: "Dan pak ik mijn tas.",
        en: "Then I grab my bag.",
        note: "When a sentence starts with a word like 'dan', the verb comes second and the subject moves after it: dan pak ik.",
      },
      { nl: "Ik ga naar mijn werk.", en: "I go to work." },
      { nl: "Ik ga met de fiets.", en: "I go by bike." },
      { nl: "Het regent.", en: "It is raining." },
      { nl: "Maar dat is normaal in Nederland!", en: "But that is normal in the Netherlands!" },
      { nl: "Tot straks, Poes!", en: "See you later, Poes!" },
    ],
  },
  {
    id: "in-de-supermarkt",
    title: "In de supermarkt",
    titleEn: "At the supermarket",
    level: "A1",
    theme: "daily",
    emoji: "🛒",
    summary: "Tom's fridge is empty. He goes shopping, asks for help and pays at the till.",
    sentences: [
      { nl: "Het is zaterdag en Tom heeft geen eten meer.", en: "It is Saturday and Tom has no food left." },
      { nl: "Hij loopt naar de supermarkt op de hoek.", en: "He walks to the supermarket on the corner." },
      { nl: "Hij pakt een mandje bij de deur.", en: "He takes a basket by the door." },
      {
        nl: "Eerst koopt hij groenten: tomaten, uien en een komkommer.",
        en: "First he buys vegetables: tomatoes, onions and a cucumber.",
      },
      { nl: "Dan zoekt hij de melk.", en: "Then he looks for the milk." },
      {
        nl: "“Pardon, waar is de melk?” vraagt hij aan een medewerker.",
        en: "“Excuse me, where is the milk?” he asks an employee.",
      },
      { nl: "“Achterin, naast de yoghurt,” zegt de vrouw.", en: "“At the back, next to the yoghurt,” says the woman." },
      {
        nl: "“Dank u wel!”",
        en: "“Thank you!”",
        note: "'u' is the polite 'you', used with strangers and staff. 'je/jij' is informal.",
      },
      {
        nl: "Tom neemt ook brood, kaas en een pak hagelslag.",
        en: "Tom also takes bread, cheese and a box of chocolate sprinkles.",
      },
      {
        nl: "Hagelslag op brood is heel populair in Nederland.",
        en: "Chocolate sprinkles on bread are very popular in the Netherlands.",
      },
      {
        nl: "Bij de kassa zegt de caissière: “Dat is dan vijftien euro twintig.”",
        en: "At the till the cashier says: “That will be fifteen euros twenty.”",
      },
      { nl: "“Wilt u een tasje?”", en: "“Would you like a bag?”" },
      {
        nl: "“Nee, dank u, ik heb mijn eigen tas.”",
        en: "“No, thank you, I have my own bag.”",
      },
      {
        nl: "Tom betaalt met zijn pinpas.",
        en: "Tom pays with his debit card.",
        note: "In the Netherlands you pay almost everywhere by card: 'pinnen' means to pay by card.",
      },
      { nl: "“Fijne dag nog!” “U ook!”", en: "“Have a nice day!” “You too!”" },
    ],
  },
  {
    id: "bij-de-huisarts",
    title: "Bij de huisarts",
    titleEn: "At the doctor's",
    level: "A2",
    theme: "daily",
    emoji: "🩺",
    summary: "Sara has been ill for three days and makes an appointment with her GP.",
    sentences: [
      {
        nl: "Sara voelt zich al drie dagen niet lekker.",
        en: "Sara hasn't felt well for three days.",
        note: "'Ik voel me niet lekker' = I don't feel well. Dutch uses the present tense + 'al' for something still going on.",
      },
      {
        nl: "Ze heeft hoofdpijn, keelpijn en ze is heel moe.",
        en: "She has a headache, a sore throat and she is very tired.",
      },
      { nl: "Op maandagochtend belt ze de huisarts.", en: "On Monday morning she calls the GP." },
      { nl: "De assistente vraagt: “Wat zijn uw klachten?”", en: "The assistant asks: “What are your symptoms?”" },
      {
        nl: "Sara legt het uit, en ze mag om half elf komen.",
        en: "Sara explains, and she can come at half past ten.",
        note: "'half elf' means half TO eleven, so 10:30 — not 11:30!",
      },
      {
        nl: "In de wachtkamer zitten nog twee andere mensen.",
        en: "There are two other people in the waiting room.",
      },
      { nl: "Na tien minuten roept de dokter haar naam.", en: "After ten minutes the doctor calls her name." },
      {
        nl: "“Goedemorgen, gaat u zitten. Wat kan ik voor u doen?”",
        en: "“Good morning, have a seat. What can I do for you?”",
      },
      {
        nl: "De dokter kijkt in haar keel en luistert naar haar longen.",
        en: "The doctor looks in her throat and listens to her lungs.",
      },
      { nl: "“Het is gewoon een griepje,” zegt hij.", en: "“It's just a touch of flu,” he says." },
      { nl: "“U hoeft geen medicijnen te nemen.”", en: "“You don't need to take any medicine.”" },
      {
        nl: "“Drink veel water, neem rust en blijf een paar dagen thuis.”",
        en: "“Drink lots of water, get some rest and stay at home for a few days.”",
      },
      {
        nl: "“Als het niet beter wordt, belt u me volgende week.”",
        en: "“If it doesn't get better, call me next week.”",
      },
      { nl: "Sara is opgelucht.", en: "Sara is relieved." },
      { nl: "Op weg naar huis koopt ze thee en honing.", en: "On the way home she buys tea and honey." },
    ],
  },

  // ---------------------------------------------------------- Living in NL
  {
    id: "mijn-fiets",
    title: "Mijn fiets",
    titleEn: "My bike",
    level: "A0",
    theme: "netherlands",
    emoji: "🚲",
    summary: "Why almost everyone in the Netherlands has a bike — and a good lock.",
    sentences: [
      { nl: "Dit is mijn fiets.", en: "This is my bike." },
      { nl: "Mijn fiets is oud, maar goed.", en: "My bike is old, but good." },
      {
        nl: "Hij is zwart.",
        en: "It is black.",
        note: "'de' words like 'de fiets' are often called 'hij' (he), even when they are things.",
      },
      { nl: "In Nederland heeft bijna iedereen een fiets.", en: "In the Netherlands almost everyone has a bike." },
      { nl: "Er zijn meer fietsen dan mensen!", en: "There are more bikes than people!" },
      { nl: "Ik fiets elke dag.", en: "I cycle every day." },
      { nl: "Ik fiets naar school en naar de winkel.", en: "I cycle to school and to the shop." },
      { nl: "Het land is plat.", en: "The country is flat." },
      { nl: "Dat is makkelijk.", en: "That is easy." },
      { nl: "Maar de wind is soms sterk.", en: "But the wind is sometimes strong." },
      { nl: "Ik heb altijd een goed slot.", en: "I always have a good lock." },
      { nl: "Waarom?", en: "Why?" },
      { nl: "Veel fietsen worden gestolen.", en: "Lots of bikes get stolen." },
      { nl: "Ik hou van mijn fiets.", en: "I love my bike." },
    ],
  },
  {
    id: "koningsdag",
    title: "Koningsdag",
    titleEn: "King's Day",
    level: "A1",
    theme: "netherlands",
    emoji: "👑",
    summary: "The whole country turns orange. Lisa sells her old things at the street market.",
    sentences: [
      { nl: "Op 27 april is het Koningsdag in Nederland.", en: "On 27 April it is King's Day in the Netherlands." },
      {
        nl: "Het is de verjaardag van de koning, Willem-Alexander.",
        en: "It is the birthday of the king, Willem-Alexander.",
      },
      { nl: "Die dag draagt bijna iedereen oranje kleren.", en: "That day almost everyone wears orange clothes." },
      { nl: "Oranje is de kleur van de koninklijke familie.", en: "Orange is the colour of the royal family." },
      {
        nl: "Lisa en haar broer gaan vroeg naar de vrijmarkt.",
        en: "Lisa and her brother go to the free market early.",
      },
      {
        nl: "Op de vrijmarkt mag iedereen spullen verkopen op straat.",
        en: "At the free market anyone may sell things on the street.",
      },
      { nl: "Lisa verkoopt haar oude boeken en speelgoed.", en: "Lisa sells her old books and toys." },
      { nl: "Haar broer verkoopt zelfgebakken taart.", en: "Her brother sells home-baked cake." },
      {
        nl: "Er is overal muziek en de mensen dansen op straat.",
        en: "There is music everywhere and people dance in the street.",
      },
      {
        nl: "'s Middags eten ze een oranje tompouce.",
        en: "In the afternoon they eat an orange tompouce.",
        note: "A tompouce is a Dutch pastry with pink icing — on King's Day the icing is orange.",
      },
      {
        nl: "Aan het eind van de dag heeft Lisa twintig euro verdiend.",
        en: "At the end of the day Lisa has earned twenty euros.",
        note: "Perfect tense: 'heeft ... verdiend'. The past participle goes to the end of the sentence.",
      },
      { nl: "Ze is moe, maar heel blij.", en: "She is tired, but very happy." },
      { nl: "“Volgend jaar weer!” zegt ze.", en: "“Again next year!” she says." },
    ],
  },
  {
    id: "sinterklaas",
    title: "Sinterklaas",
    titleEn: "Sinterklaas",
    level: "A2",
    theme: "netherlands",
    emoji: "🎁",
    summary: "The most 'gezellig' Dutch celebration: shoes, sweets, presents and poems.",
    sentences: [
      {
        nl: "Elk jaar in november komt Sinterklaas met de stoomboot naar Nederland.",
        en: "Every year in November Sinterklaas comes to the Netherlands by steamboat.",
      },
      { nl: "Volgens het verhaal woont hij in Spanje.", en: "According to the story he lives in Spain." },
      {
        nl: "Hij is een oude man met een lange witte baard en een rode mantel.",
        en: "He is an old man with a long white beard and a red cloak.",
      },
      { nl: "Hij rijdt op een wit paard over de daken.", en: "He rides a white horse over the rooftops." },
      {
        nl: "Kinderen zetten 's avonds hun schoen bij de open haard.",
        en: "In the evening children put their shoe by the fireplace.",
      },
      { nl: "In de schoen stoppen ze een wortel voor het paard.", en: "In the shoe they put a carrot for the horse." },
      { nl: "Ze zingen liedjes en hopen op een cadeautje.", en: "They sing songs and hope for a little present." },
      {
        nl: "De volgende ochtend zit er vaak iets lekkers in de schoen, zoals pepernoten of een chocoladeletter.",
        en: "The next morning there is often something tasty in the shoe, like pepernoten or a chocolate letter.",
      },
      {
        nl: "Op 5 december is het pakjesavond.",
        en: "On 5 December it is 'pakjesavond' (present evening).",
      },
      { nl: "Dan krijgen de kinderen hun cadeaus.", en: "Then the children get their presents." },
      {
        nl: "Volwassenen geven elkaar vaak een surprise: een zelfgemaakt cadeau met een grappig gedicht.",
        en: "Adults often give each other a 'surprise': a homemade present with a funny poem.",
      },
      { nl: "In het gedicht plagen ze elkaar een beetje.", en: "In the poem they tease each other a little." },
      {
        nl: "Sinterklaas is voor veel Nederlanders het gezelligste feest van het jaar.",
        en: "For many Dutch people Sinterklaas is the cosiest celebration of the year.",
        note: "'gezellig' is a famous Dutch word: cosy, pleasant, fun to be together. It has no exact English translation.",
      },
    ],
  },

  // ---------------------------------------------------------------- Travel
  {
    id: "een-dag-in-amsterdam",
    title: "Een dag in Amsterdam",
    titleEn: "A day in Amsterdam",
    level: "A0",
    theme: "travel",
    emoji: "🏙️",
    summary: "Marco from Italy visits Amsterdam: canals, herring and Van Gogh.",
    sentences: [
      { nl: "Ik ben Marco. Ik kom uit Italië.", en: "I am Marco. I come from Italy." },
      { nl: "Vandaag ben ik in Amsterdam.", en: "Today I am in Amsterdam." },
      { nl: "Amsterdam is mooi.", en: "Amsterdam is beautiful." },
      { nl: "Er zijn veel grachten en bruggen.", en: "There are many canals and bridges." },
      { nl: "De huizen zijn smal en hoog.", en: "The houses are narrow and tall." },
      { nl: "Ik loop langs het water.", en: "I walk along the water." },
      { nl: "Ik zie veel fietsen.", en: "I see lots of bikes." },
      {
        nl: "Om twaalf uur heb ik honger.",
        en: "At twelve o'clock I am hungry.",
        note: "Dutch says 'I have hunger' (ik heb honger) instead of 'I am hungry'.",
      },
      {
        nl: "Ik koop een broodje haring.",
        en: "I buy a herring sandwich.",
        note: "Raw herring with chopped onion is a classic Dutch street food.",
      },
      { nl: "Het is lekker, maar een beetje vreemd!", en: "It is tasty, but a bit strange!" },
      { nl: "'s Middags ga ik naar een museum.", en: "In the afternoon I go to a museum." },
      {
        nl: "Ik zie schilderijen van Rembrandt en Van Gogh.",
        en: "I see paintings by Rembrandt and Van Gogh.",
      },
      { nl: "'s Avonds maak ik een boottocht.", en: "In the evening I take a boat trip." },
      { nl: "Wat een mooie dag!", en: "What a beautiful day!" },
    ],
  },
  {
    id: "met-de-trein",
    title: "Met de trein naar Utrecht",
    titleEn: "By train to Utrecht",
    level: "A1",
    theme: "travel",
    emoji: "🚆",
    summary: "Anna takes the train to visit her grandma — and learns to tell Dutch time.",
    sentences: [
      {
        nl: "Anna woont in Amsterdam, maar haar oma woont in Utrecht.",
        en: "Anna lives in Amsterdam, but her grandma lives in Utrecht.",
      },
      { nl: "Op zondag gaat ze haar oma bezoeken.", en: "On Sunday she goes to visit her grandma." },
      { nl: "Ze neemt de trein vanaf Amsterdam Centraal.", en: "She takes the train from Amsterdam Central." },
      {
        nl: "Op het station checkt ze in met haar bankpas.",
        en: "At the station she checks in with her bank card.",
        note: "On Dutch public transport you tap your card when you get on (inchecken) and when you get off (uitchecken).",
      },
      {
        nl: "De trein vertrekt om tien over half twee van spoor vijf.",
        en: "The train leaves at 1:40 from platform five.",
        note: "'tien over half twee' = ten past half-to-two = 1:40. Dutch time counts from the half hour.",
      },
      { nl: "Ze zoekt een plekje bij het raam.", en: "She looks for a seat by the window." },
      { nl: "De reis duurt maar een halfuur.", en: "The journey only takes half an hour." },
      {
        nl: "Ze kijkt naar buiten en ziet koeien, weilanden en molens.",
        en: "She looks outside and sees cows, meadows and windmills.",
      },
      {
        nl: "Dan hoort ze een stem: “Het volgende station is Utrecht Centraal.”",
        en: "Then she hears a voice: “The next station is Utrecht Central.”",
      },
      {
        nl: "Ze stapt uit en checkt uit bij het poortje.",
        en: "She gets off and checks out at the gate.",
      },
      { nl: "Oma staat al te wachten.", en: "Grandma is already waiting." },
      { nl: "“Dag lieverd! Wat fijn dat je er bent!”", en: "“Hello sweetheart! How lovely that you're here!”" },
      {
        nl: "Samen drinken ze koffie met appeltaart in de stad.",
        en: "Together they have coffee with apple pie in town.",
      },
    ],
  },
  {
    id: "verdwaald-in-rotterdam",
    title: "Verdwaald in Rotterdam",
    titleEn: "Lost in Rotterdam",
    level: "A2",
    theme: "travel",
    emoji: "🧭",
    summary: "Jonas's phone is dead and his job interview starts in 45 minutes.",
    sentences: [
      {
        nl: "Jonas is voor het eerst in Rotterdam voor een sollicitatiegesprek.",
        en: "Jonas is in Rotterdam for the first time, for a job interview.",
      },
      {
        nl: "Het gesprek begint om tien uur, en het is nu kwart over negen.",
        en: "The interview starts at ten, and it is now a quarter past nine.",
      },
      {
        nl: "Zijn telefoon is bijna leeg, dus hij kan de kaart niet gebruiken.",
        en: "His phone is almost dead, so he can't use the map.",
      },
      {
        nl: "Hij loopt een tijdje rond, maar alle straten lijken op elkaar.",
        en: "He walks around for a while, but all the streets look alike.",
      },
      {
        nl: "Uiteindelijk vraagt hij de weg aan een oudere man met een hond.",
        en: "Finally he asks an older man with a dog for directions.",
      },
      {
        nl: "“Neemt u me niet kwalijk, weet u waar de Coolsingel is?”",
        en: "“Excuse me, do you know where the Coolsingel is?”",
        note: "'Neemt u me niet kwalijk' is a very polite way to say 'excuse me'.",
      },
      { nl: "“Jazeker,” zegt de man.", en: "“Certainly,” says the man." },
      {
        nl: "“Loop hier rechtdoor tot aan het stoplicht en ga dan linksaf.”",
        en: "“Walk straight on to the traffic light and then turn left.”",
      },
      {
        nl: "“Na ongeveer vijf minuten ziet u aan uw rechterkant een groot wit gebouw.”",
        en: "“After about five minutes you will see a big white building on your right.”",
      },
      { nl: "“Daar begint de Coolsingel.”", en: "“That's where the Coolsingel begins.”" },
      { nl: "Jonas bedankt de man en loopt snel verder.", en: "Jonas thanks the man and quickly walks on." },
      {
        nl: "Om vijf voor tien staat hij voor de deur, een beetje buiten adem.",
        en: "At five to ten he is at the door, a little out of breath.",
      },
      { nl: "Het gesprek gaat goed.", en: "The interview goes well." },
      {
        nl: "Een week later krijgt hij een telefoontje: hij heeft de baan!",
        en: "A week later he gets a phone call: he got the job!",
      },
    ],
  },

  // ---------------------------------------------------------------- Fiction
  {
    id: "de-kat-en-de-maan",
    title: "De kat en de maan",
    titleEn: "The cat and the moon",
    level: "A0",
    theme: "fiction",
    emoji: "🌕",
    summary: "A curious little cat thinks the moon might be a big cheese.",
    sentences: [
      { nl: "Er is een kleine kat.", en: "There is a little cat." },
      { nl: "De kat heet Mimi.", en: "The cat is called Mimi." },
      { nl: "Mimi is wit en heel nieuwsgierig.", en: "Mimi is white and very curious." },
      { nl: "Het is nacht.", en: "It is night." },
      { nl: "Mimi zit op het dak.", en: "Mimi sits on the roof." },
      { nl: "Ze kijkt naar de maan.", en: "She looks at the moon." },
      { nl: "De maan is groot en rond.", en: "The moon is big and round." },
      { nl: "“Is de maan een grote kaas?” denkt Mimi.", en: "“Is the moon a big cheese?” Mimi thinks." },
      { nl: "Ze wil de maan pakken.", en: "She wants to grab the moon." },
      { nl: "Ze springt, maar de maan is te hoog.", en: "She jumps, but the moon is too high." },
      { nl: "Ze springt nog een keer.", en: "She jumps once more." },
      { nl: "Nee, de maan is echt te hoog.", en: "No, the moon really is too high." },
      { nl: "Mimi is moe.", en: "Mimi is tired." },
      { nl: "Ze gaat naar huis en drinkt melk.", en: "She goes home and drinks milk." },
      { nl: "“Morgen probeer ik het weer,” zegt ze.", en: "“Tomorrow I'll try again,” she says." },
    ],
  },
  {
    id: "de-verloren-sleutel",
    title: "De verloren sleutel",
    titleEn: "The lost key",
    level: "A1",
    theme: "fiction",
    emoji: "🔑",
    summary: "Daan comes home late in the rain and can't find his key anywhere.",
    sentences: [
      { nl: "Het is vrijdagavond en Daan komt laat thuis.", en: "It is Friday evening and Daan comes home late." },
      { nl: "Het is koud en het regent hard.", en: "It is cold and it is raining hard." },
      {
        nl: "Hij zoekt zijn sleutel in zijn jas, maar hij vindt hem niet.",
        en: "He looks for his key in his coat, but he can't find it.",
      },
      { nl: "Hij zoekt ook in zijn tas en in zijn broekzak.", en: "He also looks in his bag and in his trouser pocket." },
      { nl: "Niets!", en: "Nothing!" },
      { nl: "“O nee, waar is mijn sleutel?”", en: "“Oh no, where is my key?”" },
      {
        nl: "Hij belt zijn huisgenoot, maar die neemt niet op.",
        en: "He calls his housemate, but he doesn't answer.",
      },
      { nl: "Dan gaat de deur van de buren open.", en: "Then the neighbours' door opens." },
      { nl: "Mevrouw De Vries kijkt naar buiten.", en: "Mrs De Vries looks outside." },
      { nl: "“Daan, ben jij dat? Zoek je dit?”", en: "“Daan, is that you? Are you looking for this?”" },
      {
        nl: "In haar hand heeft ze een sleutel met een kleine rode fiets eraan.",
        en: "In her hand she has a key with a little red bike on it.",
      },
      { nl: "“Die lag vanochtend op de stoep,” zegt ze.", en: "“It was lying on the pavement this morning,” she says." },
      { nl: "“U bent een held!” roept Daan.", en: "“You're a hero!” Daan cries." },
      {
        nl: "Hij geeft haar de volgende dag een bos bloemen.",
        en: "The next day he gives her a bunch of flowers.",
      },
    ],
  },
  {
    id: "het-geheim-van-de-molen",
    title: "Het geheim van de molen",
    titleEn: "The secret of the windmill",
    level: "A2",
    theme: "fiction",
    emoji: "🌬️",
    summary: "The old windmill is said to be haunted. One night, Fleur sees a light inside.",
    sentences: [
      {
        nl: "Aan de rand van een klein dorp staat een oude molen.",
        en: "At the edge of a small village stands an old windmill.",
      },
      {
        nl: "Al jaren draait hij niet meer, en niemand gaat er ooit naar binnen.",
        en: "It hasn't turned for years, and nobody ever goes inside.",
      },
      {
        nl: "De kinderen in het dorp zeggen dat het er spookt.",
        en: "The children in the village say that it is haunted.",
      },
      { nl: "Op een avond ziet Fleur licht branden in de molen.", en: "One evening Fleur sees a light on in the windmill." },
      { nl: "Ze is bang, maar ook nieuwsgierig.", en: "She is scared, but also curious." },
      {
        nl: "Ze pakt een zaklamp en loopt voorzichtig naar de molen.",
        en: "She takes a torch and walks carefully to the windmill.",
      },
      { nl: "De deur staat op een kier.", en: "The door is ajar." },
      { nl: "Binnen hoort ze een vreemd geluid: tik, tik, tik.", en: "Inside she hears a strange sound: tick, tick, tick." },
      { nl: "Langzaam loopt ze de trap op.", en: "Slowly she walks up the stairs." },
      {
        nl: "Boven zit een oude man aan een tafel vol tandwielen en gereedschap.",
        en: "Upstairs an old man sits at a table full of gears and tools.",
      },
      { nl: "“Schrik maar niet,” zegt hij vriendelijk.", en: "“Don't be frightened,” he says kindly." },
      {
        nl: "“Ik ben de kleinzoon van de laatste molenaar.”",
        en: "“I am the grandson of the last miller.”",
      },
      {
        nl: "“Ik repareer de molen, zodat hij weer kan draaien.”",
        en: "“I'm repairing the windmill, so that it can turn again.”",
      },
      {
        nl: "Een maand later draaien de wieken weer, en het hele dorp komt kijken.",
        en: "A month later the sails turn again, and the whole village comes to watch.",
      },
      { nl: "Fleur staat vooraan, en ze lacht.", en: "Fleur stands at the front, and she smiles." },
    ],
  },
];

export function findStory(storyId: string): Story | undefined {
  return STORIES.find((s) => s.id === storyId);
}
