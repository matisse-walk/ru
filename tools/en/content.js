/* Matisse's Montparnasse — all station content in one place. Edit here, never in app.js.
   Coordinates are [lon, lat]. Panel framings default to a 2 × 3 page with 2.5% margins. */
window.WALK = {
  title: "Matisse's Montparnasse",
  date: "Wednesday 21 October 2026",
  hotel: { name: "Drawing House", coord: [2.319941, 48.837350] },
  defaultFrames: [
    { x: 0.025, y: 0.020, w: 0.46, h: 0.30 }, { x: 0.515, y: 0.020, w: 0.46, h: 0.30 },
    { x: 0.025, y: 0.350, w: 0.46, h: 0.30 }, { x: 0.515, y: 0.350, w: 0.46, h: 0.30 },
    { x: 0.025, y: 0.680, w: 0.46, h: 0.30 }, { x: 0.515, y: 0.680, w: 0.46, h: 0.30 }
  ],
  stations: [
    {
      id: "intro", n: 0, sticker: "house", accent: "#1F3A93", accentInk: "#FAF6EE",
      title: "Matisse in sixty seconds", place: "Drawing House, 21 rue Vercingétorix", time: "17:45",
      coord: [2.319941, 48.837350],
      audio: "audio/ep-00.mp3", audioLabel: "Who was Matisse? · 5 min",
      panels: "comic/panels-00.jpg",
      captions: [
        "Around 1890. Henri Matisse, a lawyer's clerk of about twenty, in bed after appendicitis. “A sort of paradise.”",
        "Paris, poor years. He buys a small Cézanne he cannot afford and keeps it 37 years.",
        "1905. A critic calls his colours “wild beasts”. Matisse looks like a professor.",
        "1908. He opens the Académie Matisse: a hundred students, nearly all foreigners.",
        "1941, aged 71. A cancer operation. Matisse asks the surgeon for three or four years.",
        "He gets thirteen, and invents a new art: drawing with scissors."
      ],
      then: { src: "art/matisse-self-portrait-1906.jpg", credit: "Henri Matisse, Self-portrait in a striped T-shirt, 1906. SMK Copenhagen. Public domain." },
      more: [
        { src: "art/woman-with-a-hat.jpg", credit: "Woman with a Hat, 1905. SFMOMA." },
        { src: "art/dance-1910.jpg", credit: "Dance, 1910. Hermitage." },
        { src: "art/red-studio-1911.jpg", credit: "The Red Studio, 1911. MoMA." }
      ],
      story: "Henri Matisse (1869–1954) came late to painting. A lawyer's clerk given a paint box in bed; the wild beasts of 1905; a school in 1908; Nice for the light; and after a cancer operation at 71, thirteen bonus years spent drawing with scissors.",
      fact: "The leader of the wild beasts wore gold-rimmed spectacles and a neat trimmed beard. A writer said you would take him for a professor or a doctor.",
      quiz: { q: "What did Matisse draw with in his last years?", a: "Scissors." }
    },
    {
      id: "gauguin", n: 1, sticker: "window", accent: "#2E7D4F", accentInk: "#FAF6EE",
      title: "Gauguin's street", place: "6 rue Vercingétorix", time: "17:50", leg: "then 700 m along avenue du Maine",
      coord: [2.321818, 48.838245],
      audio: "audio/ep-01.mp3", audioLabel: "The yellow studio · 4 min",
      panels: "comic/panels-01.jpg",
      captions: [
        "January 1894. Paul Gauguin, back from Tahiti, rents a top-floor studio at number 6.",
        "He paints the walls bright yellow and hangs them with Tahiti, four Van Goghs and a Cézanne.",
        "Every Thursday, an open evening: Mallarmé, Strindberg, Ravel, Delius, and the dealer Vollard.",
        "February 1894. Snow. Gauguin puts his easel at the window and paints the courtyard.",
        "July 1895. He leaves for Tahiti for good. The house is gone; the street was rebuilt.",
        "1899. Vollard sells the young Matisse a small Cézanne he cannot afford."
      ],
      then: { src: "art/gauguin-paris-in-the-snow-1894.jpg", credit: "Paul Gauguin, Paris in the Snow, 1894, painted from his window on this street. Van Gogh Museum. Public domain." },
      more: [ { src: "art/signac-rue-vercingetorix-1885.jpg", credit: "Paul Signac, Rue Vercingétorix, 1885. Louvre. Public domain." } ],
      stand: "Nothing from 1894 survives on this street; the painting is the view from a top-floor window here.",
      story: "Gauguin lived at number 6 from January 1894 to July 1895, in a studio painted bright yellow and hung with Tahiti, four Van Goghs and a Cézanne. Thursday evenings: Degas, Mallarmé, Strindberg, Ravel, and the dealer Vollard, who in 1899 sold the penniless Matisse a small Cézanne he kept for thirty-seven years.",
      fact: "The composer of Boléro came to Gauguin's parties on this street.",
      quiz: { q: "Which composer, famous for Boléro, came to Gauguin's Thursdays here?", a: "Maurice Ravel." }
    },
    {
      id: "canteen", n: 2, sticker: "bowl", accent: "#E63312", accentInk: "#FAF6EE",
      title: "The artists' canteen", place: "21 avenue du Maine", time: "18:07", leg: "then 400 m to the station square",
      coord: [2.320739, 48.843459],
      audio: "audio/ep-02.mp3", audioLabel: "Sixty-five centimes and no curfew · 4 min",
      panels: "comic/panels-02.jpg",
      captions: [
        "February 1915. War. Marie Vassilieff turns her studio into a canteen for artists.",
        "Broth, meat, vegetables, dessert, coffee: 65 centimes. Wine, 10 more.",
        "Registered as a private club, not a restaurant, so the curfew did not apply.",
        "January 1917. A banquet for Braque, back from the front. Modigliani is not invited.",
        "Modigliani comes anyway, drunk, and then a pistol appears. “Out!”",
        "All five feet of Marie push him down the stairs while Picasso holds the door."
      ],
      then: { src: "art/modigliani-marie-vassilieff.jpg", credit: "Amedeo Modigliani, Portrait of Marie Vassilieff, c. 1918. Public domain." },
      more: [ { src: "art/villa-vassilieff-alley-2016.jpg", credit: "The alley today, Villa Marie-Vassilieff. Photo Guilhem Vellut, 2016, CC BY 2.0." } ],
      stand: "Stand at the gate of the cobbled alley. The studio at the end is empty this autumn, between tenants.",
      story: "Marie Vassilieff, Russian, five feet tall, a student of Matisse's school, turned her studio into a canteen in February 1915: a full meal for sixty-five centimes, wine ten more, and no curfew, because on paper it was a club. In 1917 she threw a drunk Modigliani down the stairs.",
      fact: "She made portrait dolls of her famous friends, shown at the couturier Poiret's in 1916. One doll was Picasso.",
      quiz: { q: "Why could the canteen keep serving after the wartime curfew?", a: "It was registered as a private club, not a restaurant." }
    },
    {
      id: "station", n: 3, sticker: "hat", accent: "#1F3A93", accentInk: "#FAF6EE",
      title: "The old station and the Americans", place: "Place du 18-Juin-1940", time: "18:20", leg: "then 500 m east along the boulevard",
      coord: [2.324140, 48.844166],
      audio: "audio/ep-03.mp3", audioLabel: "The Swedes and the four hundred francs · 4 min",
      panels: "comic/panels-03.jpg",
      captions: [
        "October 1905. The Salon d'Automne. One room is full of violent colour. “Wild beasts!”",
        "Matisse's Woman with a Hat: colours nobody has seen on a face.",
        "Leo Stein, an American collector, stops in front of it. “The nastiest smear of paint I ever saw.”",
        "He comes back. And back. He wants it.",
        "Matisse asks 500 francs. Refuses 300. Writes: not under 450.",
        "Leo pays 400. Twenty per cent off the painting that started modern art."
      ],
      then: { src: "art/marquet-gare-montparnasse-1912.jpg", credit: "Albert Marquet, La Gare Montparnasse, 1912. The station stood on this square until the 1960s. Public domain." },
      more: [
        { src: "art/steins-studio-wall-1906.jpg", credit: "The Steins' studio, 27 rue de Fleurus, c. 1906; Woman with a Hat hangs top centre. Public domain." },
        { src: "art/souza-cardoso-brasserie-dumesnil.jpg", credit: "Amadeo de Souza-Cardoso, Brasserie Dumesnil, c. 1908–10, a café by this square. Photo Pedro Ribeiro Simões, CC BY 2.0." }
      ],
      stand: "Stand at the foot of rue de Rennes with the modern station behind you; the old one faced this square.",
      story: "At the Café de Versailles on this square, Matisse's students met; in 1908 the Swede Grünewald signed up his friends here. Up rue de Rennes lived the Americans who made Matisse: Leo Stein called Woman with a Hat the nastiest smear of paint he had ever seen, and bought it for 400 francs.",
      fact: "Not one Finn is recorded at Matisse's school. About forty Swedes were.",
      quiz: { q: "Five hundred francs asked. What did the buyer pay?", a: "Four hundred." }
    },
    {
      id: "vavin", n: 4, sticker: "dove", accent: "#F5C518", accentInk: "#141414",
      title: "Carrefour Vavin", place: "Balzac, Le Dôme, La Rotonde, La Coupole", time: "18:33", leg: "then 250 m east to stop 5",
      coord: [2.32905, 48.84215],
      audio: "audio/ep-04.mp3", audioLabel: "Rodin sends Matisse away · 6 min",
      panels: "comic/panels-04.jpg",
      captions: [
        "Paris, 1899. Henri Matisse, unknown, brings his drawings to Auguste Rodin.",
        "Rodin's verdict. “A facile hand. Draw fussier. Come back.”",
        "Matisse never went back. “Facile? That was false.”",
        "Instead he hired Rodin's own model, Bevilacqua, for up to 500 sittings.",
        "Rodin's own Balzac: shown in 1898, mocked, refused, kept at home.",
        "Unveiled on this island on 2 July 1939, forty-one years later."
      ],
      then: { src: "art/rol-le-dome-1931.jpg", credit: "Le Dôme, photographed by Agence Rol, 25 August 1931. BnF, public domain." },
      more: [
        { src: "art/balzac-rodin-vavin.jpg", credit: "Rodin's Balzac at carrefour Vavin today. Photo Celette, CC BY-SA 4.0." },
        { src: "art/matisse-portrait-de-bevilacqua.jpg", credit: "Henri Matisse, Portrait de Bevilacqua, c. 1900. Musée des Beaux-Arts de Bordeaux. Photo Tylwyth Eldar, CC BY-SA 4.0." },
        { src: "art/rol-la-rotonde-1924.jpg", credit: "La Rotonde, Agence Rol, 1924. BnF, public domain." }
      ],
      stand: "Stand on the wide pavement in front of Le Dôme, facing the statue on the island.",
      story: "In 1899 Rodin told the unknown Matisse he had a facile hand and to come back with fussier drawings. He never went back; he hired Rodin's model instead. Rodin's own Balzac was refused in 1898 and stood here only in 1939. At La Rotonde a broke painter could pay with a drawing.",
      fact: "Picasso's Dove of Peace (1949) was one of Matisse's pet pigeons, rehomed when his building banned the aviary. The island is named place Pablo-Picasso.",
      quiz: { q: "How did a painter with no money pay his bill at La Rotonde?", a: "With a drawing, which the owner kept until the painter could pay." }
    },
    {
      id: "door", n: 5, sticker: "swallow", accent: "#141414", accentInk: "#FAF6EE",
      title: "Matisse's front door", place: "132 boulevard du Montparnasse", time: "18:45", leg: "the last stop; back via rue de la Gaîté",
      coord: [2.331957, 48.841013],
      audio: "audio/ep-05.mp3", audioLabel: "A swallow over a stain · 4 min",
      panels: "comic/panels-05.jpg",
      frames: [
        { x: 0.030, y: 0.025, w: 0.455, h: 0.300 }, { x: 0.515, y: 0.025, w: 0.455, h: 0.300 },
        { x: 0.030, y: 0.350, w: 0.455, h: 0.300 }, { x: 0.515, y: 0.350, w: 0.455, h: 0.300 },
        { x: 0.030, y: 0.675, w: 0.455, h: 0.300 }, { x: 0.515, y: 0.675, w: 0.455, h: 0.300 }
      ],
      captions: [
        "1941. Matisse, aged 71, after a cancer operation, asks for three or four years.",
        "Summer 1946, in his flat at number 132. A stain on the wall.",
        "He cuts a swallow from writing paper and pins it over the stain.",
        "Then another shape, and another, until the wall is Océanie: sky and sea.",
        "Zika Ascher calls about scarves, sees the walls, prints them on linen: 30 copies.",
        "1961, New York. MoMA hangs his cut-out The Boat upside down for 47 days. Nobody notices."
      ],
      then: { src: "art/matisse-oceanie-le-ciel-1946.jpg", credit: "Henri Matisse, Océanie, le ciel, 1946, printed on linen 1948. Public domain in the EU." },
      more: [
        {"src": "art/matisse-nu-bleu-iv-1952.jpg", "credit": "Henri Matisse, Nu bleu IV, 1952, cut and pasted paper. Musée Matisse, Nice. Public domain in the EU. Photo Yair-haklai, CC BY-SA 4.0."},
        {"src": "art/matisse-composition-1947.jpg", "credit": "Henri Matisse, Composition in yellow, blue and black, 1947, cut paper. Public domain in the EU. Photo Francesco Bini, CC BY-SA 4.0."}
      ],
      stand: "Stand opposite the doorway of number 132. A plain residential building, no plaque.",
      story: "Matisse kept a flat here. In the summer of 1946 there was a stain on the wall; he pinned a paper swallow over it, then another shape, and another, until the wall was Tahiti. The cut-outs, the works he is most loved for, began as home repair.",
      fact: "In 1961 MoMA hung his cut-out The Boat upside down for 47 days. About 116,000 visitors walked past. The guard: \"You don't know what's up and you don't know what's down and neither do we.\"",
      quiz: { q: "What did he pin over the stain on this wall in 1946?", a: "A paper swallow. The cut-outs began." },
      finale: true
    },
    {
      id: "steins", n: 6, bonus: true, sticker: "frame", accent: "#1F3A93", accentInk: "#FAF6EE",
      title: "The Steins and the school", place: "27 rue de Fleurus · 58 rue Madame", time: "bonus",
      coord: [2.329331, 48.846924],
      audio: "audio/ep-06.mp3", audioLabel: "How the Steins made Matisse · 5 min",
      panels: "comic/panels-06.jpg",
      captions: [
        "1904. Michael and Sarah Stein hang Matisse's paintings four and five high at 58 rue Madame.",
        "1908. Sarah Stein and the Swede Carl Palme talk him into opening a school. “Teach them.”",
        "Over a hundred students, all but three foreigners, more than half Scandinavian.",
        "First critique: huge canvases of tortured shapes and garish colour.",
        "Matisse walks out, comes back with a plaster Greek head, sets it in the middle. “The antique first.”",
        "1911. “Monday to Saturday I tried to turn sheep into lions.” He closes the school."
      ],
      then: { src: "art/steins-studio-wall-1906.jpg", credit: "The studio at 27 rue de Fleurus, c. 1906. Woman with a Hat hangs top centre. Public domain." },
      more: [
        { src: "art/fougstedt-in-matisses-studio.jpg", credit: "Arvid Fougstedt, In Matisse's studio, c. 1910. Public domain." },
        { src: "art/academie-matisse-class-1909.jpg", credit: "Matisse and his students, 1909. Nasjonalmuseet, Oslo. Public domain." },
        { src: "art/matisse-portrait-of-sarah-stein-1916.jpg", credit: "Henri Matisse, Portrait of Sarah Stein, 1916. SFMOMA. Public domain." }
      ],
      story: "Leo and Gertrude Stein at 27 rue de Fleurus, Michael and Sarah at 58 rue Madame: the family who bought the wild beasts and talked Matisse into a school. A plaster Greek head at the first critique; sheep into lions; nineteen paintings lost to the war in Berlin.",
      fact: "Picasso needed eighty or ninety sittings for Gertrude's portrait. Told it did not look like her: \"She will.\"",
      quiz: { q: "What did Matisse put in the middle of the room at the first critique of his school?", a: "A plaster cast of an antique Greek head." }
    },
    {
      id: "garden", n: 7, bonus: true, sticker: "leaf", accent: "#2E7D4F", accentInk: "#FAF6EE",
      title: "The garden two friends painted", place: "Jardin du Luxembourg (gates close 18:15)", time: "bonus",
      coord: [2.33265, 48.84555],
      audio: "audio/ep-07.mp3", audioLabel: "The garden turned into Tahiti · 4 min",
      panels: "comic/panels-07.jpg",
      captions: [
        "About 1898. Matisse and Marquet, broke, carry easels into the Luxembourg garden.",
        "Same alley, same year, 1901. Two canvases.",
        "Marquet paints the trees quietly, in grey-green.",
        "Matisse paints a red tree, two pink trees, blue shadows. No palace, no statue. “That is not Paris.”",
        "1906. The Russian collector Shchukin buys it. It hangs today in Saint Petersburg.",
        "A scholar: without the signature, you would hardly take it for Paris. “Tahiti?”"
      ],
      then: { src: "art/matisse-luxembourg-gardens-1901.jpg", credit: "Henri Matisse, Le Jardin du Luxembourg, c. 1901. Hermitage. Public domain." },
      more: [
        { src: "art/marquet-alley-luxembourg-1901.jpg", credit: "Albert Marquet, An Alley in the Jardin du Luxembourg, 1901. Hermitage. Public domain." },
        { src: "art/namik-ismail-carpeaux-fountain-1924.jpg", credit: "Namık İsmail, Carpeaux Fountain in Paris, 1924. Istanbul. Public domain." },
        { src: "art/rousseau-monument-to-chopin-1909.jpg", credit: "Henri Rousseau, Monument to Chopin, 1909. Hermitage. Public domain." }
      ],
      story: "From about 1898 Matisse and Marquet painted this garden side by side. Matisse's alley has a red tree and blue shadows and no Paris in it at all; a scholar said that without the signature you would not know. It hangs in Saint Petersburg next to Marquet's.",
      fact: "In 1922 the State bought a Matisse for the museum at the garden's corner: seventeen years after the wild beasts, the first Matisse bought for a Paris museum.",
      quiz: { q: "Which city holds both friends' paintings of these alleys today?", a: "Saint Petersburg, in the Hermitage." }
    }
  ],
  /* the cafés and the vanished one: small cup markers with a card, no episode */
  pois: [
    { id: "dome", name: "Le Dôme", sub: "108 bd du Montparnasse · opened 1898", coord: [2.328911, 48.84202],
      text: "Headquarters of the German painters, the Dômiers: Rudolf Levy, Hans Purrmann, Walter Bondy, Albert Weisgerber. Purrmann and Levy later ran Matisse's school for him. A Swedish corner too. Matisse himself is not recorded here: these were his students' cafés.",
      img: "art/rol-le-dome-1931.jpg", credit: "Agence Rol, 25 August 1931. BnF, public domain." },
    { id: "rotonde", name: "La Rotonde", sub: "105 bd du Montparnasse · opened 1911", coord: [2.329132, 48.842361],
      text: "Victor Libion let painters with no money pay with a drawing, kept until they could pay. Kiki wrote in 1938: \"That blessed Rotonde, going there was like going home. Old Libion was the best of men.\" The story goes that women had to wear a hat to sit in the artists' room, so the teenage Kiki made herself one.",
      img: "art/rol-la-rotonde-1924.jpg", credit: "Agence Rol, 1924. BnF, public domain." },
    { id: "select", name: "Le Select", sub: "99 bd du Montparnasse · opened 1923", coord: [2.328367, 48.842614],
      text: "The late arrival of the four, open all night from the start, the Americans' café of the 1920s.",
      img: "art/select-2011.jpg", credit: "Le Select in 2011. Photo DIMSFIKAS (Greek Wikipedia), CC BY-SA 3.0." },
    { id: "coupole", name: "La Coupole", sub: "102 bd du Montparnasse · opened 20 December 1927", coord: [2.328069, 48.8423],
      text: "Built by two managers of the Dôme who had tried to buy it and failed. Opening night: more than 2,000 guests, about 1,200 bottles of champagne, the police at five in the morning. Twenty-seven painters decorated the pillars, Marie Vassilieff among them. Legend says they were paid in drinks; the invoice, found in 1993, says 23,000 francs.",
      img: "art/coupole-facade.jpg", credit: "La Coupole today. Photo Britchi Mirela, CC BY-SA 4.0." },
    { id: "closerie", name: "La Closerie des Lilas", sub: "171 bd du Montparnasse · the poets' café", coord: [2.335975, 48.840102],
      text: "The poet Paul Fort's Tuesdays, with Apollinaire and Jarry; Apollinaire brought Picasso here in 1905. On the terrace Fitzgerald handed Hemingway the manuscript of The Great Gatsby. Across the road stood the Bal Bullier, where the Delaunays danced the tango in painted clothes; Jules Flandrin, Matisse's classmate under Moreau, painted it in 1931.",
      img: "art/closerie-des-lilas-1909.jpg", credit: "La Closerie des Lilas, postcard, 1909. Public domain." },
    { id: "versailles", img: "art/cafe-de-versailles-place-de-rennes.jpg", credit: "Place de Rennes with the old station, postcard, early 1900s; the Café de Versailles stood at number 3. Public domain.", name: "Café de Versailles (gone)", sub: "3 place de Rennes, now place du 18-Juin-1940", coord: [2.324437, 48.844121],
      text: "Facing the old station. Matisse's students met here; in 1908 the Swede Isaac Grünewald signed up his friends for the school over discussions at these tables. The management seated \"these good lads\" (Matisse, Marie Laurencin, Vlaminck among them) at the back, away from the window." },
    {"id": "quai-saint-michel", "kind": "place", "name": "19 quai Saint-Michel", "sub": "Matisse's studio, 1895–1907 and 1914–17", "coord": [2.345464, 48.853345], "text": "His Paris views were all painted from these windows: Notre-Dame and the Pont Saint-Michel, from the naturalistic canvases of 1900–04 to the blue lines of 1914, and the Studio, quai Saint-Michel of 1916–17. A plaque names the painters who worked here, Matisse and Marquet among them.", "img": "art/quai-saint-michel.jpg", "credit": "Henri Matisse, Notre-Dame, une fin d'après-midi, 1902. Buffalo AKG. Public domain."},
    {"id": "couvent-des-oiseaux", "kind": "place", "name": "Couvent des Oiseaux", "sub": "The Académie Matisse opened here, January 1908", "coord": [2.317355, 48.847193], "text": "A disused convent at 84–88 rue de Sèvres. Sarah Stein and Hans Purrmann talked Matisse into teaching; Michael Stein paid; the Swede Carl Palme had begged first. The school opened here in January 1908 and moved within months to the Hôtel Biron. The convent was demolished at the end of 1909; nothing survives.", "img": "art/couvent-des-oiseaux.jpg", "credit": "The convent garden, photographed in May 1909, months before demolition. Paris Musées, CC0."},
    {"id": "hotel-biron", "kind": "place", "name": "Hôtel Biron", "sub": "The school's second home, 1908–09; Rodin next door", "coord": [2.314848, 48.8523], "text": "In spring 1908 Matisse moved his family, his studio and the school into the former Sacré-Cœur convent on the Hôtel Biron estate. Rodin had rooms in the mansion: the man who had sent him away in 1899 was now his neighbour. Dance (I) was painted here in early 1909. Matisse left for Issy in July 1909; the mansion is the Musée Rodin today.", "img": "art/hotel-biron.jpg", "credit": "The Hôtel Biron around 1910. Public domain."},
    {"id": "musee-du-luxembourg", "kind": "place", "name": "Musée du Luxembourg", "sub": "The State's first Matisse for a Paris museum, 1922", "coord": [2.334074, 48.848891], "text": "The museum of living artists at the garden's corner. From 1897 it showed the Caillebotte bequest, the first Impressionists in a national museum, which drew young painters to this side of the river. In 1922 the State bought Odalisque à la culotte rouge for it, seventeen years after the wild beasts; Matisse agreed by letter on 7 March 1922. The picture is at the Centre Pompidou now.", "img": "art/musee-du-luxembourg.jpg", "credit": "Henri Matisse, Odalisque à la culotte rouge, 1921. Centre Pompidou. Public domain in the EU."},
    {"id": "hotel-lutetia", "kind": "place", "name": "Hôtel Lutetia", "sub": "Matisse wrote from here, August 1939", "coord": [2.327156, 48.85117], "text": "On 19 August 1939, with war days away, Matisse wrote to his dealer Paul Rosenberg on Lutetia letterhead while his paintings in the boulevard du Montparnasse flat were being packed for the vaults of the Banque de France.", "img": "art/hotel-lutetia.jpg", "credit": "The Lutetia today. Photo Celette, CC BY-SA 4.0."},
    {"id": "musee-bourdelle", "kind": "place", "name": "Bourdelle's studio", "sub": "Where Matisse took sculpture classes, around 1900", "coord": [2.318588, 48.842975], "text": "Antoine Bourdelle lived and worked here from 1885 to his death in 1929. Around 1900 Rodin, Bourdelle and Desbois ran a free sculpture school, and one of the students was Henri Matisse. Bourdelle's Héraklès archer stands in the street-side garden; the model was a cavalry officer who could hold the pose twenty minutes at a time. Museum open 10–18, free.", "img": "art/musee-bourdelle-herakles.jpg", "credit": "Héraklès archer in the street-side garden of the Musée Bourdelle. Paris Musées, CC0."},
    {"id": "friesz-studio", "kind": "place", "name": "Othon Friesz's studio", "sub": "A wild beast of 1905, here from 1914 to 1949", "coord": [2.331647, 48.843114], "text": "The Fauve Othon Friesz hung beside Matisse in the room the press called the cage of wild beasts at the 1905 Salon d'Automne. He worked in this building, Bouguereau's former studio, for thirty-five years and lies in the Montparnasse cemetery. At number 86 across the street, in 1917–20, American sculptors made painted copper masks for soldiers whose faces the war had destroyed.", "img": "art/friesz-plaque.jpg", "credit": "The plaque to Othon Friesz at 73 rue Notre-Dame-des-Champs. Photo Monceau from San Antonio, CC BY 2.0."},
    {"id": "grand-palais", "kind": "place", "name": "Grand Palais", "sub": "Where the wild beasts were named, October 1905", "coord": [2.312678, 48.867188], "text": "The Salon d'Automne of 1905 hung Matisse, Derain, Vlaminck, Marquet, Manguin and Friesz together in Room VII. The critic Louis Vauxcelles, seeing a classical-style bust by Albert Marque in the middle of the room, wrote in Gil Blas on 17 October: Donatello among the wild beasts. Leo Stein bought Woman with a Hat straight out of the show. Across the river and a walk away; the story is told at the station square.", "img": "art/grand-palais.jpg", "credit": "Gil Blas, 17 October 1905: the review that named the Fauves. Gallica, public domain."},
    {"id": "musee-gustave-moreau", "kind": "place", "name": "Musée Gustave-Moreau", "sub": "House and studio of Matisse's teacher, museum since 1903", "coord": [2.334416, 48.877912], "text": "Gustave Moreau taught Matisse at the École des Beaux-Arts from 1895 until his death in 1898; Matisse called him his favourite master, and Rouault, Marquet, Manguin and Camoin were fellow pupils. Moreau left this house and its contents to the State; Rouault became the museum's first curator. The upper floors are his studio, walls covered with sketches. Open daily except Tuesday, 10–18.", "img": "art/musee-gustave-moreau.jpg", "credit": "Velvet, via Wikimedia Commons, CC BY-SA 3.0"},
    {"id": "ecole-des-beaux-arts", "kind": "place", "name": "École des Beaux-Arts, Moreau's studio", "sub": "Where Matisse trained under Gustave Moreau, 1892–98", "coord": [2.334499, 48.856491], "text": "Matisse failed the entrance competition in January 1892 but drew in Gustave Moreau's studio as an unofficial pupil, was formally admitted in 1895, and stayed until Moreau died in 1898. Here he met Albert Marquet, Henri Manguin, Charles Camoin and Georges Rouault, the future Fauve circle, and was sent to the Louvre to copy. The school still occupies the rue Bonaparte site.", "img": "art/ecole-des-beaux-arts.jpg", "credit": "DIMSFIKAS, via Wikimedia Commons, CC BY-SA 3.0"},
    {"id": "ecole-des-arts-decoratifs", "kind": "place", "name": "Former École des Arts décoratifs (amphithéâtre Saint-Côme)", "sub": "Evening drawing classes where Matisse met Marquet, 1892", "coord": [2.341955, 48.850587], "text": "In 1892 Matisse left the Académie Julian for evening classes at the École nationale des arts décoratifs, then housed in the old surgeons' amphitheatre of Saint-Côme. Here he met Albert Marquet, enrolled since 1890, who became a lifelong friend. Both appear on the school's alumni roll. The school moved to rue d'Ulm in 1928; the domed 1690s building survives.", "img": "art/ecole-des-arts-decoratifs.jpg", "credit": "Eugène Atget, Musée Carnavalet / Paris Musées, CC0, via Wikimedia Commons"},
    {"id": "galerie-vollard", "kind": "place", "name": "Site of Ambroise Vollard's gallery", "sub": "Cézanne's Three Bathers bought 1899; first solo show, June 1904", "coord": [2.337423, 48.872583], "text": "Ambroise Vollard traded at 6 rue Laffitte from 1896 to 1924. In 1899 Matisse, hard up, bought Cézanne's Three Bathers here, and in June 1904 Vollard mounted his first solo exhibition, with a catalogue preface by Roger Marx; little sold. Vollard was evicted when boulevard Haussmann was cut through, and the low even numbers no longer exist; the block has been rebuilt.", "img": "art/galerie-vollard.jpg", "credit": "Guilhem Vellut, via Wikimedia Commons, CC BY 2.0"},
    {"id": "galerie-berthe-weill", "kind": "place", "name": "Galerie B. Weill", "sub": "Matisse's first sale through a dealer, April 1902", "coord": [2.338036, 48.880796], "text": "Berthe Weill, a pioneering woman dealer, opened the Galerie B. Weill here on 1 December 1901 as 'a place for the young'. In April 1902 she sold a Matisse still life, his first sale through a dealer, and from 1902 showed the painters around him repeatedly before the Fauve scandal of 1905. A plaque on the building now honours her.", "img": "art/galerie-berthe-weill.jpg", "credit": "Polymagou, via Wikimedia Commons, CC BY-SA 4.0"},
    {"id": "galerie-druet", "kind": "place", "name": "Site of the Galerie Druet", "sub": "Matisse's second solo show, 19 March – 7 April 1906", "coord": [2.314532, 48.871752], "text": "Eugène Druet opened his gallery at this address in 1903 and moved to 20 rue Royale in 1908. Matisse's second one-man show ran here from 19 March to 7 April 1906, some sixty works opening the day before the Salon des Indépendants; Druet also bought a stock of recent paintings for 2,000 francs. The site is now part of the Hôtel Le Bristol, opened in 1925.", "img": "art/galerie-druet.jpg", "credit": "Erwmat, via Wikimedia Commons, CC BY-SA 3.0"},
    {"id": "galerie-bernheim-jeune", "kind": "place", "name": "Galerie Bernheim-Jeune (1906–25 premises)", "sub": "Matisse's first dealer contract, 18 September 1909", "coord": [2.325463, 48.869311], "text": "Josse and Gaston Bernheim opened here in 1906, with the critic Félix Fénéon hired to recruit younger artists. On 18 September 1909 Matisse signed his first dealer contract, 25 per cent of sale prices, renewed for years; the gallery gave him a show in 1910. Bernheim-Jeune moved to 83 rue du Faubourg-Saint-Honoré in 1925. The corner building was photographed in 1910.", "img": "art/galerie-bernheim-jeune.jpg", "credit": "Anonymous photograph, 1910, Galerie Bernheim-Jeune, public domain, via Wikimedia Commons"},
    {"id": "serres-cours-la-reine", "kind": "place", "name": "Site of the Serres de la Ville (Salon des Indépendants)", "sub": "Le Bonheur de vivre shown, March 1906", "coord": [2.313389, 48.865378], "text": "The jury-free Salon des Indépendants was held in the municipal greenhouses along Cours-la-Reine in the 1900s. Here in March 1906 Matisse exhibited a single huge canvas, Le Bonheur de vivre, whose cadmium colours and distorted figures provoked outrage; Leo Stein bought it. The greenhouses are gone, and the painting is at the Barnes Foundation, Philadelphia.", "img": "art/serres-cours-la-reine.jpg", "credit": "Henri Matisse, Le Bonheur de vivre, 1905–06, Barnes Foundation, public domain, via Wikimedia Commons"},
    {"id": "petit-palais", "kind": "place", "name": "Petit Palais", "sub": "Cézanne's Three Bathers, Matisse's gift of 1936", "coord": [2.314429, 48.8659], "text": "Cézanne's Three Bathers (1879–82), bought from Vollard in 1899 at great sacrifice, hung in Matisse's home for 37 years. In November 1936 he gave it to the City of Paris, telling curator Raymond Escholier it had sustained him morally at critical moments. The first bathers composition to enter a Western European museum, it is on view in the free permanent collection.", "img": "art/petit-palais.jpg", "credit": "Paul Cézanne, Trois baigneuses, Petit Palais / Paris Musées, public domain, via Wikimedia Commons"},
    {"id": "musee-de-l-orangerie", "kind": "place", "name": "Musée de l'Orangerie", "sub": "Ten Matisses in the Walter-Guillaume collection", "coord": [2.322354, 48.863549], "text": "The Walter-Guillaume collection, assembled by dealer Paul Guillaume and his widow Domenica, includes ten paintings by Matisse, mostly Nice-period interiors and odalisques such as Odalisque à la culotte grise and Odalisque bleue ou l'Esclave blanche. They hang in the lower galleries beneath Monet's Water Lilies, alongside Derain, Picasso and Soutine.", "img": "art/musee-de-l-orangerie.jpg", "credit": "Jebulon, CC0, via Wikimedia Commons"},
    {"id": "centre-pompidou", "kind": "place", "name": "Centre Pompidou (closed for works until 2030)", "sub": "The French State's Matisse collection", "coord": [2.351132, 48.860307], "text": "The Musée national d'art moderne holds the State's Matisse collection, from Luxe, calme et volupté (1904) to the twenty cut-paper maquettes for Jazz and La Tristesse du roi (1952). The building closed on 22 September 2025 for a five-year renovation; works are shown meanwhile at the Grand Palais, Centre Pompidou-Metz and abroad, so check before visiting.", "img": "art/centre-pompidou.jpg", "credit": "Alfvanbeem, CC0, via Wikimedia Commons"},
    {"id": "musee-d-art-moderne-de-paris", "kind": "place", "name": "Musée d'Art Moderne de Paris", "sub": "La Danse inachevée and La Danse de Paris, 1931–33", "coord": [2.297874, 48.863807], "text": "In 1930 Albert Barnes commissioned a mural for his foundation near Philadelphia; Matisse chose the dance and painted three versions. The first, La Danse inachevée, judged too decorative, was found in his Nice studio in 1990; the second, La Danse de Paris (1931–33), planned with cut paper, did not fit Barnes's arches. Both fill the Salle Matisse; the permanent collection is free.", "img": "art/musee-d-art-moderne-de-paris.jpg", "credit": "Photo Francesco Bini (Sailko), via Wikimedia Commons, CC BY-SA 4.0; Henri Matisse, La Danse de Paris, 1931–33, public domain"},
    {"id": "musee-picasso", "kind": "place", "name": "Musée national Picasso-Paris (Hôtel Salé)", "sub": "Matisse's Marguerite (1907), from Picasso's own collection", "coord": [2.362517, 48.859604], "text": "Picasso kept Matisses all his life; they entered the State collection with his 1978 donation. Among them is Marguerite, painted in Collioure in 1906–07, the portrait of Matisse's daughter that Picasso chose when the two exchanged paintings in 1907, giving Pitcher, Bowl and Lemon in return. Gertrude Stein recorded the swap. It hangs in the Hôtel Salé's permanent display.", "img": "art/musee-picasso.jpg", "credit": "Henri Matisse, Marguerite, 1906–07, Musée national Picasso-Paris, public domain, via Wikimedia Commons"},
    {"id": "galerie-georges-petit", "kind": "place", "name": "Site of the Galerie Georges Petit", "sub": "Matisse retrospective, 16 June – 25 July 1931", "coord": [2.327186, 48.870278], "text": "The Galerie Georges Petit, at 8 rue de Sèze from 1890, staged Matisse's great retrospective from 16 June to 25 July 1931. The show travelled to the Kunsthalle Basel and to New York, where it became MoMA's first monographic Matisse exhibition that November. The gallery closed in 1933; the building survives.", "img": "art/galerie-georges-petit.jpg", "credit": "Agence Rol, 1931, Bibliothèque nationale de France, public domain, via Wikimedia Commons"},
    {"id": "palais-garnier", "kind": "place", "name": "Palais Garnier (Opéra de Paris)", "sub": "Le Chant du Rossignol, Matisse's first stage designs, 2 February 1920", "coord": [2.332135, 48.871044], "text": "Matisse's first work for the theatre: sets and costumes for Diaghilev's Ballets Russes in Le Chant du Rossignol, music by Stravinsky, choreography by Massine, premiered here on 2 February 1920. He drew on Ming court dress and Chinese ceramics and first used cut coloured paper to plan the designs. The Bibliothèque-musée de l'Opéra, inside the building, keeps his costume maquettes.", "img": "art/palais-garnier.jpg", "credit": "Henri Matisse, costume maquette for Le Chant du Rossignol, Bibliothèque nationale de France, public domain, via Wikimedia Commons"},
    {"id": "galerie-paul-rosenberg", "kind": "place", "name": "Galerie Paul Rosenberg", "sub": "Matisse's dealer from 1936; show of recent works, May 1936", "coord": [2.316857, 48.873983], "text": "Paul Rosenberg's gallery and home from 1910. He became Matisse's dealer in 1936 and showed his recent work here from 2 to 30 May 1936; 119 photographs of Matisses survive in the gallery's glass-plate archive at the Centre Pompidou. In July 1940 the building was seized and used for antisemitic propaganda until 1944. A plaque now commemorates Rosenberg.", "img": "art/galerie-paul-rosenberg.jpg", "credit": "Polymagou, via Wikimedia Commons, CC BY 4.0"},
    {"id": "galerie-maeght", "kind": "place", "name": "Galerie Maeght (original premises)", "sub": "Opened with a Matisse exhibition, late 1945", "coord": [2.312627, 48.87684], "text": "Aimé Maeght closed his Cannes gallery in late 1945 and opened the Galerie Maeght in this townhouse with a solo exhibition of Matisse, launching the Paris dealership that later created the Fondation Maeght. Matisse, already tied to other dealers, never signed exclusively with him. The gallery later left rue de Téhéran; the building remains.", "img": "art/galerie-maeght.jpg", "credit": "CVB, via Wikimedia Commons, CC BY 4.0"},
    {"id": "editions-verve-teriade", "kind": "place", "name": "Éditions Verve (Tériade)", "sub": "Publisher of Jazz, 1947", "coord": [2.33397, 48.849672], "text": "Tériade published his review Verve from 4 rue Férou, founded in 1937. He first proposed a colour book to Matisse in 1941; the artist cut the gouache plates of Jazz mostly in 1943–44, wrote its text in 1946, and the album appeared in September 1947 in 250 copies, the manifesto of the cut-outs. Verve 21–22 (1948) was devoted entirely to his Vence work.", "img": "art/editions-verve-teriade.jpg", "credit": "CVB, via Wikimedia Commons, CC BY-SA 4.0"},
    {"id": "musee-du-louvre", "kind": "place", "name": "Musée du Louvre", "sub": "Where the student Matisse copied Chardin, Raphael and Poussin", "coord": [2.334832, 48.862725], "text": "As Moreau's pupil Matisse copied old masters here for money and training: Chardin's The Pipe, The Ray and The Buffet, then Raphael, Poussin and Ruysdael. His copy of Chardin's La Pourvoyeuse, made between 1896 and 1903, was acquired by the Musée Matisse at Le Cateau-Cambrésis; the originals still hang in the Louvre's French painting rooms.", "img": "art/musee-du-louvre.jpg", "credit": "Benh LIEU SONG, via Wikimedia Commons, CC BY-SA 3.0"},
    {"id": "pere-lachaise-gertrude-stein", "kind": "place", "name": "Grave of Gertrude Stein, Père-Lachaise", "sub": "Matisse's first great patron, buried in division 94", "coord": [2.397629, 48.863151], "text": "Gertrude Stein (1874–1946), who with her brother Leo bought Matisse's Woman with a Hat from the 1905 Salon d'Automne and received him at 27 rue de Fleurus, is buried in division 94, near the Gambetta entrance. Alice B. Toklas (died 1967) lies with her; her name is engraved on the back of the stone.", "img": "art/pere-lachaise-gertrude-stein.jpg", "credit": "ManoSolo13241324, CC0, via Wikimedia Commons"},
    {"id": "issy-les-moulineaux-matisse-house", "kind": "place", "name": "Matisse's house and garden studio, Issy-les-Moulineaux", "sub": "Home and studio 1909–17: The Red Studio, The Piano Lesson (location approximate)", "coord": [2.27751, 48.818549], "text": "In 1909 Matisse rented a villa with a garden on the route de Clamart and had a prefabricated studio built beside it, finished in October 1909. Here he painted The Red Studio (1911), The Piano Lesson and The Moroccans (1916), and ran his academy until 1911. His 1917 letterhead reads 92 route de Clamart; the house reportedly survives, and the family's Archives Henri Matisse are based in Issy.", "img": "art/issy-les-moulineaux-matisse-house.jpg", "credit": "Henri Matisse, Jardin de l'artiste à Issy-les-Moulineaux, public domain, via Wikimedia Commons"}
  ],
  dinner: [
    { q: "Upside down for 47 days at MoMA: how many visitors passed it before a stockbroker noticed?", a: "About 116,000." },
    { q: "What did Leo Stein pay for Woman with a Hat?", a: "400 francs. Matisse had asked 500." },
    { q: "Which Nordic country sent no student to Matisse's school?", a: "Finland." },
    { q: "Why could Vassilieff's canteen ignore the curfew?", a: "It was a private club, not a restaurant." },
    { q: "What did Matisse pin over the stain on his wall?", a: "A paper swallow." },
    { q: "In 1913 students in Chicago put Matisse on trial under what name?", a: "\"Henry Hair Mattress\", and burned copies of Blue Nude." }
  ]
};
