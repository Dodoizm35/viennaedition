const questions = [{
        q: "Sipped a Melange in one of Vienna's historic coffee houses, soaking in the city's renowned cafe culture."
    },
    {
        q: "Strolled through the grand halls of the Schönbrunn Palace, imagining life as Austrian royalty."
    },
    {
        q: "Tasted an authentic Wiener Schnitzel at a traditional Viennese restaurant, comparing it to versions elsewhere."
    },
    {
        q: "Enjoyed an evening at the Vienna State Opera, marveling at the world-class performances and opulent architecture."
    },
    {
        q: "Ridden the giant Ferris wheel at the Prater amusement park, capturing panoramic views of the city's skyline."
    },
    {
        q: "Ate at Steirereck and tried their modern Tafelspitz."
    },
    {
        q: "Enjoyed the iconic Wiener Schnitzel at Figlmüller."
    },
    {
        q: "Sampled the famous Beinschinken sandwiches at Zum Schwarzen Kameel."
    },
    {
        q: "Had the Wiener Zwiebelrostbraten at Plachutta."
    },
    {
        q: "Tasted the seasonal blend at Konstantin Filippou."
    },
    {
        q: "Partied at Grelle Forelle."
    },
    {
        q: "Had cocktails at Loos American Bar."
    },
    {
        q: "Listened to live jazz at Porgy & Bess."
    },
    {
        q: "Partied at Flex by the river."
    },
    {
        q: "Enjoyed beach vibes at Tel Aviv Beach."
    },
    {
        q: "Discovered indie music at Rhiz."
    },
    {
        q: "Dined and danced at Albertina Passage."
    },
    {
        q: "Swam and partied at Pratersauna."
    },
    {
        q: "Relaxed at Sand in the City."
    },
    {
        q: "Crashed an HipHop party at Das Loft."
    },
    {
        q: "Strolled through the Belvedere Palace gardens at sunset."
    },
    {
        q: "Enjoyed a candlelit dinner at Café Landtmann."
    },
    {
        q: "Took a horse-drawn carriage ride around the Inner Stadt."
    },
    {
        q: "Shared a slice of Sachertorte at Café Sacher."
    },
    {
        q: "Admired the view from the Vienna Ferris Wheel at Prater."
    },
    {
        q: "Walked hand in hand along the Danube Canal."
    },
    {
        q: "Tasted wine at a Heuriger in Grinzing."
    },
    {
        q: "Watched an opera performance at the Vienna State Opera."
    },
    {
        q: "Picnicked in the Stadtpark with a view of the Johann Strauss monument."
    },
    {
        q: "Explored the Schönbrunn Palace's hidden gardens and mazes."
    },
    {
        q: "Explored the vast collection of art at the Kunsthistorisches Museum."
    },
    {
        q: "Discovered the wonders of science and technology at the Technisches Museum."
    },
    {
        q: "Admired modern and contemporary art at the (MUMOK)."
    },
    {
        q: "Delved into Austrian cultural history at the Volkskundemuseum."
    },
    {
        q: "Explored the life and work of Sigmund Freud at the Freud Museum."
    },
    {
        q: "Wandered through the Belvedere Palace, enjoying the art and gardens."
    },
    {
        q: "Learned about Vienna's history at the Wien Museum."
    },
    {
        q: "Visited the Leopold Museum for its extensive collection of Egon Schiele."
    },
    {
        q: "Explored the world of illusions at the Museum of Illusions.."
    },
    {
        q: "Discovered the Habsburgs' imperial treasures at the Imperial Treasury."
    },
    {
        q: "Booked a trip of ErasBus Trips."
    },
    {
        q: "Jogged around the scenic Ringstrasse early in the morning."
    },
    {
        q: "Rented a bike and explored the Danube Island's extensive trails."
    },
    {
        q: "Watched a live game of Rapid Vienna."
    },
    {
        q: "Participated in a yoga session in Stadtpark."
    },
    {
        q: "Climbed at an indoor rock climbing gym."
    },
    {
        q: "Took a traditional Viennese waltz dance lesson."
    },
    {
        q: "Rowed a boat on the Danube."
    },
    {
        q: "Played a round of golf at one of Vienna's picturesque courses."
    },
    {
        q: "Engaged in a friendly match of beach volleyball at Danube Island."
    },
    {
        q: "Attended a fitness boot camp in the Prater for a challenging workout."
    },
    {
        q: "Shared a kiss atop the giant Ferris wheel at Prater."
    },
    {
        q: "Held hands walking through the vineyards of Grinzing."
    },
    {
        q: "Enjoyed a candlelit dinner at a cozy restaurant in the Inner City."
    },
    {
        q: "Watched the sunset from the Kahlenberg."
    },
    {
        q: "Strolled along the Danube Canal, stopping at riverside bars."
    },
    {
        q: "Shared a bench with a view in the Stadtpark listening to live musicians."
    },
    {
        q: "Tasted wines together at a traditional Viennese Heuriger."
    },
    {
        q: "Watched a movie at an open-air cinema in the MuseumsQuartier."
    },
    {
        q: "Sipped a Melange at Café Central."
    },
    {
        q: "Played billiards at Café Sperl."
    },
    {
        q: "Enjoyed cakes at Café Demel."
    },
    {
        q: "asted Buchteln at Café Hawelka."
    },
    {
        q: "Visited Café Landtmann for coffee."
    },
    {
        q: "Had breakfast at Café Schwarzenberg."
    },
    {
        q: "Tried pastries at Café Diglas."
    },
    {
        q: "Explored Café Korb's art lounge."
    },
    {
        q: "Biked through the Prater for a green escape."
    },
    {
        q: "Studied at the grand reading room of the National Library."
    },
    {
        q: "Enjoyed student discounts at the Vienna State Opera."
    },
    {
        q: "Joined a student-led tour of the University of Vienna."
    },
    {
        q: "Explored local markets for fresh, affordable produce."
    },
    {
        q: "Attended to Donauinsel Fest."
    },
    {
        q: "Participated in the Vienna City Marathon as a volunteer."
    },
    {
        q: "Grabbed a falafel at Naschmarkt."
    },
    {
        q: "Joined a language exchange meetup to practice German."
    },
    {
        q: "Took advantage of free museum days for students."
    },
    {
        q: "Volunteered at a local charity, integrating with the community."
    },
    {
        q: "Enjoyed late-night studying at cozy coffee houses."
    },
    {
        q: "Participated in a student theater group’s performance."
    },
    {
        q: "Engaged in debates at the Café Philosophique."
    },
    {
        q: "Rented a Citybike."
    },
    {
        q: "Attended a lecture at the Freud Museum."
    },
    {
        q: "Visited the Schönbrunn Zoo with a student pass."
    },
    {
        q: "Explored street art and murals in the 7th district."
    },
    {
        q: "Went to the Loco Club."
    },
    {
        q: "Joined a sports club at the university."
    },
    {
        q: "Participated in an international cooking night."
    },
    {
        q: "Took a day trip to Hallstatt."
    }
];

const order = initialiseOrder(questions.length);
let current = order.pop();

const questionText = document.getElementById("question");
const nextButton = document.getElementById("next");

function showNextQuestion() {
    current = order.pop();
    console.log(order.length);
    if (order.length === 0) {
        questionText.innerHTML = "The end";
        order = initialiseOrder(questions.length); // Sırayı tekrar başlat
    } else {
        questionText.innerHTML = questions[current].q;
    }
}

// Düğme tıklama işlevselliği
nextButton.addEventListener("click", showNextQuestion);

// Swipe işlevselliği
let touchstartX = 0;
let touchendX = 0;

function handleSwipe() {
    if (touchendX < touchstartX) showNextQuestion();
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

// Kullanıcının dokunuşunu bıraktığı yeri kaydet ve yönlendirmeyi kontrol et
document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Swipe işlevini kontrol etmek için işlevleri güncelle
function handleSwipe() {
    const threshold = 50; // Kaydırma için minimum mesafe
    // Soldan sağa doğru bir kaydırma işlemi algılanırsa bir sonraki soruyu göster
    if (touchendX - touchstartX > threshold) {
        showNextQuestion();
    }
}


function initialiseOrder(length) {
    let order = [];
    for (let i = 0; i < length; i++) {
        order[i] = i;
    }
    // Diziyi karıştır
    for (let i = length - 1; i > 0; i--) {
        const randIndx = Math.floor(Math.random() * (i + 1));
        [order[i], order[randIndx]] = [order[randIndx], order[i]];
    }
    return order;
}
