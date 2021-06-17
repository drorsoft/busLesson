const bus = {
  busLine: 46,
  busDriver: "יוחנן",
  maxSeats: 20,
  seats: [
    { id: 1, owner: 1, content: ["כל מיני", "עיתוני"] },
    { id: 2, owner: 1, content: ["חומוס", "טחינה", "מרגרינה"] },
    { id: 3, owner: 1, content: ["עגבניות", "גרעינים"] },
    { id: 4, owner: 1, content: ["מלפפונים"] },
    { id: 5, owner: 2, content: ["נוסע"] },
    { id: 6, owner: 3, content: ["נוסע", "מיקרופון"] },
    { id: 7, owner: 4, content: ["נוסע", "פסנתר כיס"] },
  ],
  clients: [
    { id: 1, name: "גברת עם סלים" },
    { id: 2, name: "ילד שיושב" },
    { id: 3, name: "אריק איינשין" },
    { id: 4, name: "יוני רכטר" },
    { id: 5, name: "נהג" },
  ],
};

//Mission one:
//make a function that returns all the products of the lady

function getAllItems() {}

//Mission two:
//for every client, found out how many seats he occupies

function getNumberOfSeatsPerClient() {}

//mission three:
//for every client, found out if he is seated or not.
//look at the seat object to find out how

function listIsSeated() {}

//mission four:
//make a function detecting how many empty seats are available
function getEmptySeats() {}

//mission five:
//the items are now arranged by SEATS, we want them to be arranged per person
//make a NEW OBJECT that describes all of the bus's client's items.
// e.g {yoni: [..., ...,...], lady: [... ,... ,... ]}
function transformToItemsPerClient() {}
