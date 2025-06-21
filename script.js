 // ========================================
// CONFIGURATIE - VERVANG DEZE WAARDEN!
// ========================================

const STORAGE_CONFIG = {
type: ‘jsonbin’,
binId: ‘6856feef8561e97a5028f33b’,
apiKey: ‘$2a$10$VUgmGwUgwRlPKxGI00D6pe6mR6q1.wvmkx0a34vpNrxdHpnClZ0Zy’
};

// ========================================
// LOCATIE DATA
// ========================================

const locationsData = {
“locations”: [
{
“title”: “Bezoekerscentrum Schaarsbergen”,
“category”: “nature”,
“description”: “Prachtig startpunt voor wandelingen met informatiecentrum en mooie tuinen. Ideaal voor gezinnen.”,
“distance”: 15,
“coordinates”: { “lat”: 52.0038, “lng”: 5.9461 },
“mapsUrl”: “https://maps.google.com/maps?q=Schaarsbergen+Bezoekerscentrum”
},
{
“title”: “Kasteel Cannenburch”,
“category”: “historic”,
“description”: “15e-eeuws kasteel met prachtige tuinen en een interessante geschiedenis. Mooie rondleidingen mogelijk.”,
“distance”: 12,
“coordinates”: { “lat”: 52.2931, “lng”: 6.0654 },
“mapsUrl”: “https://maps.google.com/maps?q=Kasteel+Cannenburch+Vaassen”
},
{
“title”: “Vischpoort Elburg”,
“category”: “village”,
“description”: “Historische stadspoort in het pittoreske vestingstadje Elburg. Prachtige oude binnenstad om doorheen te wandelen.”,
“distance”: 35,
“coordinates”: { “lat”: 52.4489, “lng”: 5.8413 },
“mapsUrl”: “https://maps.google.com/maps?q=Elburg+Vischpoort”
},
{
“title”: “Veluwemeer bij Harderwijk”,
“category”: “water”,
“description”: “Mooie plek aan het water met wandelpromenade en mogelijkheid voor een terrasje.”,
“distance”: 25,
“coordinates”: { “lat”: 52.3411, “lng”: 5.6197 },
“mapsUrl”: “https://maps.google.com/maps?q=Veluwemeer+Harderwijk”
},
{
“title”: “Sprielderbos”,
“category”: “nature”,
“description”: “Prachtig bos met oude beuken en eiken. Verschillende wandelroutes door gevarieerd landschap.”,
“distance”: 8,
“coordinates”: { “lat”: 52.2375, “lng”: 5.7845 },
“mapsUrl”: “https://maps.google.com/maps?q=Sprielderbos+wandelroute”
},
{
“title”: “Ruïne Schaffelaar”,
“category”: “historic”,
“description”: “Restanten van een middeleeuws kasteel in een bosrijke omgeving. Mooie wandeling erheen mogelijk.”,
“distance”: 20,
“coordinates”: { “lat”: 52.1367, “lng”: 5.5859 },
“mapsUrl”: “https://maps.google.com/maps?q=Ruïne+Schaffelaar+Barneveld”
},
{
“title”: “Centrum Oosterbeek”,
“category”: “village”,
“description”: “Historisch dorpje met oorlogsverleden. Charmante straatjes en mooie villa’s uit het begin van de 20e eeuw.”,
“distance”: 18,
“coordinates”: { “lat”: 51.9886, “lng”: 5.8361 },
“mapsUrl”: “https://maps.google.com/maps?q=Oosterbeek+Airborne+Museum”
},
{
“title”: “Planken Wambuis”,
“category”: “nature”,
“description”: “Uitgestrekte heide- en zandverstuivingen. Prachtig paars in de bloeitijd en mooi wandelgebied.”,
“distance”: 22,
“coordinates”: { “lat”: 52.0667, “lng”: 5.6833 },
“mapsUrl”: “https://maps.google.com/maps?q=Planken+Wambuis+Ede”
},
{
“title”: “Loenermark”,
“category”: “water”,
“description”: “Bosgebied met mooie vijvers en vennen. Ideaal voor rustige wandelingen en natuurfotografie.”,
“distance”: 14,
“coordinates”: { “lat”: 52.1167, “lng”: 5.9167 },
“mapsUrl”: “https://maps.google.com/maps?q=Loenermark+vijver”
},
{
“title”: “Grote Kerk Barneveld”,
“category”: “historic”,
“description”: “Imposante 15e-eeuwse kerk in het centrum van Barneveld. Mooie architectuur en interessante geschiedenis.”,
“distance”: 25,
“coordinates”: { “lat”: 52.1376, “lng”: 5.5859 },
“mapsUrl”: “https://maps.google.com/maps?q=Grote+Kerk+Barneveld”
},
{
“title”: “De Posbank”,
“category”: “viewpoint”,
“description”: “Een van de mooiste uitzichtpunten van de Veluwe. Prachtig over de heuvels en bossen, vooral bij zonsondergang.”,
“distance”: 28,
“coordinates”: { “lat”: 52.0406, “lng”: 6.0314 },
“mapsUrl”: “https://maps.google.com/maps?q=Posbank+Rheden”
},
{
“title”: “Bussumerheide”,
“category”: “nature”,
“description”: “Uitgestrekt heidegebied met schaapskuddes. Prachtige paarse bloei in augustus en september.”,
“distance”: 16,
“coordinates”: { “lat”: 52.2667, “lng”: 5.8000 },
“mapsUrl”: “https://maps.google.com/maps?q=Bussumerheide+wandelroute”
},
{
“title”: “Hattem”,
“category”: “village”,
“description”: “Middeleeuws Hanzestadje met goed bewaarde stadsmuren en poorten. Gezellige binnenstad met terrassen.”,
“distance”: 45,
“coordinates”: { “lat”: 52.4728, “lng”: 6.0689 },
“mapsUrl”: “https://maps.google.com/maps?q=Hattem+centrum”
},
{
“title”: “Uddelerbosch”,
“category”: “nature”,
“description”: “Afwisselend bosgebied met naaldbos, loofbos en open plekken. Mooie wandelpaden en mountainbikeroutes.”,
“distance”: 32,
“coordinates”: { “lat”: 52.4167, “lng”: 5.7833 },
“mapsUrl”: “https://maps.google.com/maps?q=Uddelerbosch+wandelroute”
},
{
“title”: “Wolderwijd”,
“category”: “water”,
“description”: “Groot meer met mogelijkheden voor watersport. Mooie wandel- en fietspaden langs de oevers.”,
“distance”: 38,
“coordinates”: { “lat”: 52.3667, “lng”: 5.4833 },
“mapsUrl”: “https://maps.google.com/maps?q=Wolderwijd+Zeewolde”
},
{
“title”: “Kasteel Ruurlo”,
“category”: “historic”,
“description”: “14e-eeuws kasteel met museum en prachtige kasteeltuinen. Regelmatig culturele evenementen.”,
“distance”: 48,
“coordinates”: { “lat”: 52.0831, “lng”: 6.4456 },
“mapsUrl”: “https://maps.google.com/maps?q=Kasteel+Ruurlo”
},
{
“title”: “Kroondomeinen”,
“category”: “nature”,
“description”: “Koninklijke bossen met afwisselende landschappen. Mooie wandelroutes door gevarieerd natuurgebied.”,
“distance”: 10,
“coordinates”: { “lat”: 52.2000, “lng”: 5.8500 },
“mapsUrl”: “https://maps.google.com/maps?q=Kroondomeinen+Appel”
},
{
“title”: “Vierhouten”,
“category”: “village”,
“description”: “Klein bosdorpje midden in de Veluwe. Gezellige dorpskern met restaurant en uitgangspunt voor wandelingen.”,
“distance”: 6,
“coordinates”: { “lat”: 52.3381, “lng”: 5.8183 },
“mapsUrl”: “https://maps.google.com/maps?q=Vierhouten+centrum”
},
{
“title”: “Veluwezoom Nationaal Park”,
“category”: “nature”,
“description”: “Gevarieerd natuurgebied met bossen, heide en uitzichtpunten. Vele wandelroutes van verschillende lengtes.”,
“distance”: 24,
“coordinates”: { “lat”: 52.0333, “lng”: 6.0000 },
“mapsUrl”: “https://maps.google.com/maps?q=Veluwezoom+Nationaal+Park”
},
{
“title”: “Nuldernauw”,
“category”: “water”,
“description”: “Smalle zeearm tussen Elburg en Nunspeet. Mooie wandelroutes langs het water met vogelkijkmogelijkheden.”,
“distance”: 30,
“coordinates”: { “lat”: 52.4000, “lng”: 5.8167 },
“mapsUrl”: “https://maps.google.com/maps?q=Nuldernauw+Elburg”
},
{
“title”: “Oude Kerk Nunspeet”,
“category”: “historic”,
“description”: “13e-eeuwse kerk in het centrum van Nunspeet. Mooie architectuur en interessante grafstenen.”,
“distance”: 28,
“coordinates”: { “lat”: 52.3772, “lng”: 5.7872 },
“mapsUrl”: “https://maps.google.com/maps?q=Hervormde+Kerk+Nunspeet”
},
{
“title”: “Horsterwold”,
“category”: “nature”,
“description”: “Grootste aangeplante loofbos van West-Europa. Prachtige wandel- en fietspaden door jong bos.”,
“distance”: 42,
“coordinates”: { “lat”: 52.3333, “lng”: 5.5000 },
“mapsUrl”: “https://maps.google.com/maps?q=Horsterwold+Zeewolde”
},
{
“title”: “Radiokootwijk”,
“category”: “viewpoint”,
“description”: “Voormalig zenderpark met markante zendmasten. Interessante architectuur en mooie wandelroutes in de omgeving.”,
“distance”: 18,
“coordinates”: { “lat”: 52.1833, “lng”: 5.8167 },
“mapsUrl”: “https://maps.google.com/maps?q=Zenderpark+Smilde”
},
{
“title”: “Putten”,
“category”: “village”,
“description”: “Gezellig Veluws dorpje met karakteristieke huizen en een mooie dorpskern. Goede uitgangspunt voor fietsroutes.”,
“distance”: 35,
“coordinates”: { “lat”: 52.2603, “lng”: 5.6039 },
“mapsUrl”: “https://maps.google.com/maps?q=Putten+centrum”
},
{
“title”: “Kootwijkerzand”,
“category”: “nature”,
“description”: “Europa’s grootste stuifzandgebied. Uniek landschap dat doet denken aan een woestijn, maar dan in Nederland.”,
“distance”: 16,
“coordinates”: { “lat”: 52.1667, “lng”: 5.7500 },
“mapsUrl”: “https://maps.google.com/maps?q=Kootwijkerzand+wandelroute”
},
{
“title”: “Randmeren bij Harderwijk”,
“category”: “water”,
“description”: “Mooie meren met wandelpromenades en jachthavens. Ideaal voor een ontspannen wandeling langs het water.”,
“distance”: 26,
“coordinates”: { “lat”: 52.3500, “lng”: 5.6000 },
“mapsUrl”: “https://maps.google.com/maps?q=Randmeren+Harderwijk”
},
{
“title”: “Sint Antoniuskapel Wekerom”,
“category”: “historic”,
“description”: “Kleine historische kapel in een bosrijke omgeving. Rustige plek voor bezinning en mooie wandelingen.”,
“distance”: 12,
“coordinates”: { “lat”: 52.1167, “lng”: 5.7167 },
“mapsUrl”: “https://maps.google.com/maps?q=Sint+Antoniuskapel+Wekerom”
},
{
“title”: “Bosgebied Harderwijkerweg”,
“category”: “nature”,
“description”: “Uitgestrekt bosgebied met diverse wandelroutes. Mooie oude bomen en rustige boswandelpaden.”,
“distance”: 8,
“coordinates”: { “lat”: 52.2500, “lng”: 5.8000 },
“mapsUrl”: “https://maps.google.com/maps?q=Harderwijkerweg+bos+wandelroute”
},
{
“title”: “Uitzichtpunt Leuvenum”,
“category”: “viewpoint”,
“description”: “Mooi uitzicht over de Veluwse bossen en heide. Vooral tijdens de herfst prachtige kleuren.”,
“distance”: 22,
“coordinates”: { “lat”: 52.2833, “lng”: 5.5333 },
“mapsUrl”: “https://maps.google.com/maps?q=Leuvenum+uitzichtpunt”
},
{
“title”: “Ermelo”,
“category”: “village”,
“description”: “Authentiek Veluws dorp met gezellige dorpskern. Mooie uitgangspunt voor fietstochten door de omgeving.”,
“distance”: 28,
“coordinates”: { “lat”: 52.3000, “lng”: 5.6167 },
“mapsUrl”: “https://maps.google.com/maps?q=Ermelo+centrum”
},
{
“title”: “Speulderbos”,
“category”: “nature”,
“description”: “Een van de oudste bossen van Nederland met monumentale beuken. Prachtige wandelroutes door oud bos.”,
“distance”: 14,
“coordinates”: { “lat”: 52.2667, “lng”: 5.7333 },
“mapsUrl”: “https://maps.google.com/maps?q=Speulderbos+wandelroute”
},
{
“title”: “Veluwe Meer bij Elburg”,
“category”: “water”,
“description”: “Groot meer met diverse recreatiemogelijkheden. Mooie wandelpaden langs de oever en vogelkijkplekken.”,
“distance”: 35,
“coordinates”: { “lat”: 52.4500, “lng”: 5.8500 },
“mapsUrl”: “https://maps.google.com/maps?q=Veluwe+Meer+Elburg”
},
{
“title”: “Oude Begraafplaats Apeldoorn”,
“category”: “historic”,
“description”: “Historische begraafplaats met monumentale graven en mooie oude bomen. Interessant voor geschiedenis en architectuur.”,
“distance”: 7,
“coordinates”: { “lat”: 52.2103, “lng”: 5.9694 },
“mapsUrl”: “https://maps.google.com/maps?q=Oude+Begraafplaats+Apeldoorn”
},
{
“title”: “Otterlose Bos”,
“category”: “nature”,
“description”: “Gevarieerd bosgebied vlak bij uw verblijf. Mooie wandelpaden door afwisselend landschap met vennen en heide.”,
“distance”: 3,
“coordinates”: { “lat”: 52.3167, “lng”: 5.8667 },
“mapsUrl”: “https://maps.google.com/maps?q=Otterlose+Bos+wandelroute”
},
{
“title”: “Garderen”,
“category”: “village”,
“description”: “Klein dorpje op de Veluwe met authentieke Veluwse architectuur. Goede uitgangspunt voor wandel- en fietsroutes.”,
“distance”: 18,
“coordinates”: { “lat”: 52.2333, “lng”: 5.7167 },
“mapsUrl”: “https://maps.google.com/maps?q=Garderen+centrum”
},
{
“title”: “Vennen bij Uddel”,
“category”: “water”,
“description”: “Kleine natuurlijke meertjes en vennen verscholen in het bos. Prachtige plekjes voor natuurfotografie.”,
“distance”: 20,
“coordinates”: { “lat”: 52.2667, “lng”: 5.7667 },
“mapsUrl”: “https://maps.google.com/maps?q=Gooimeertje+Bussum”
},
{
“title”: “Koepelkerk Nunspeet”,
“category”: “historic”,
“description”: “Bijzondere ronde kerk met koepel uit de 19e eeuw. Unieke architectuur en mooie ligging in het dorp.”,
“distance”: 28,
“coordinates”: { “lat”: 52.3772, “lng”: 5.7872 },
“mapsUrl”: “https://maps.google.com/maps?q=Koepelkerk+Nunspeet”
},
{
“title”: “Bossen bij Staverden”,
“category”: “nature”,
“description”: “Uitgestrekte bossen rond het kleinste stadje van Nederland. Mooie wandelroutes en rustige natuur.”,
“distance”: 24,
“coordinates”: { “lat”: 52.2833, “lng”: 5.9000 },
“mapsUrl”: “https://maps.google.com/maps?q=Staverden+bos+wandelroute”
},
{
“title”: “Zuiderheide”,
“category”: “viewpoint”,
“description”: “Heidegebied met mooie uitzichten over de omgeving. Vooral mooi tijdens de bloeitijd in augustus.”,
“distance”: 32,
“coordinates”: { “lat”: 52.2167, “lng”: 5.1833 },
“mapsUrl”: “https://maps.google.com/maps?q=Zuiderheide+Hilversum”
},
{
“title”: “Voorthuizen”,
“category”: “village”,
“description”: “Gezellig dorp met authentieke bebouwing en leuke winkeltjes. Mooie basis voor verkenning van de omgeving.”,
“distance”: 15,
“coordinates”: { “lat”: 52.1833, “lng”: 5.6167 },
“mapsUrl”: “https://maps.google.com/maps?q=Voorthuizen+centrum”
},
{
“title”: “Hulshorsterzand”,
“category”: “nature”,
“description”: “Groot zandverstuivingsgebied met unieke flora en fauna. Interessant natuurgebied voor een bijzondere wandeling.”,
“distance”: 36,
“coordinates”: { “lat”: 52.3833, “lng”: 5.6333 },
“mapsUrl”: “https://maps.google.com/maps?q=Hulshorsterzand+wandelroute”
},
{
“title”: “Hierdensche Beek”,
“category”: “water”,
“description”: “Natuurlijke beek die door bos en heide stroomt. Mooie wandelpaden langs het water met kans op dieren spotten.”,
“distance”: 20,
“coordinates”: { “lat”: 52.2333, “lng”: 5.6833 },
“mapsUrl”: “https://maps.google.com/maps?q=Hierdensche+Beek”
},
{
“title”: “Oude Kerk Kootwijk”,
“category”: “historic”,
“description”: “Kleine historische kerk in het dorpje Kootwijk. Mooie ligging en interessante geschiedenis van het dorp.”,
“distance”: 12,
“coordinates”: { “lat”: 52.1667, “lng”: 5.7667 },
“mapsUrl”: “https://maps.google.com/maps?q=Hervormde+Kerk+Kootwijk”
},
{
“title”: “Wekeromse Zand”,
“category”: “nature”,
“description”: “Zandverstuiving met heide en sparrenbossen. Afwisselend landschap met mooie wandelroutes van verschillende lengtes.”,
“distance”: 10,
“coordinates”: { “lat”: 52.1167, “lng”: 5.7167 },
“mapsUrl”: “https://maps.google.com/maps?q=Wekeromse+Zand+wandelroute”
},
{
“title”: “Uddel”,
“category”: “village”,
“description”: “Authentiek bosdorp met gezellige dorpskern. Veel mogelijkheden voor wandelingen en fietstochten in de omgeving.”,
“distance”: 25,
“coordinates”: { “lat”: 52.2667, “lng”: 5.7667 },
“mapsUrl”: “https://maps.google.com/maps?q=Uddel+centrum”
},
{
“title”: “De Galberg”,
“category”: “viewpoint”,
“description”: “Heuvel met uitzichtpunt over de Gelderse Vallei. Prachtig uitzicht en mooie wandelroutes in de omgeving.”,
“distance”: 25,
“coordinates”: { “lat”: 52.0833, “lng”: 5.6667 },
“mapsUrl”: “https://maps.google.com/maps?q=Galberg+Ede”
},
{
“title”: “Leuvenumse Bos”,
“category”: “nature”,
“description”: “Rustig bosgebied met afwisselende wandelroutes. Mooie oude bomen en kans op wilde dieren zoals reeën.”,
“distance”: 18,
“coordinates”: { “lat”: 52.2833, “lng”: 5.5333 },
“mapsUrl”: “https://maps.google.com/maps?q=Leuvenumse+Bos+wandelroute”
},
{
“title”: “Tongerense Beek”,
“category”: “water”,
“description”: “Schilderachtige beek die door bos en weiland stroomt. Mooie wandelpaden langs het water en rustige natuur.”,
“distance”: 14,
“coordinates”: { “lat”: 52.2000, “lng”: 5.7500 },
“mapsUrl”: “https://maps.google.com/maps?q=Tongerense+Beek”
},
{
“title”: “Oude Boerderij Garderen”,
“category”: “historic”,
“description”: “Authentieke Veluwse boerderij met karakteristieke architectuur. Interessant voor geschiedenis van de streek.”,
“distance”: 18,
“coordinates”: { “lat”: 52.2333, “lng”: 5.7167 },
“mapsUrl”: “https://maps.google.com/maps?q=Boerderij+Museum+Garderen”
}
],
“categoryLabels”: {
“nature”: “🌲 Natuur”,
“historic”: “🏰 Historisch”,
“village”: “🏘️ Dorpjes”,
“water”: “💧 Water”,
“viewpoint”: “👁️ Uitzicht”
}
};

// ========================================
// GEDEELDE OPSLAG KLASSE
// ========================================

class SharedStorage {
constructor(config) {
this.config = config;
this.syncStatus = document.getElementById(‘syncStatus’);
}

```
updateSyncStatus(message, type = 'normal') {
    this.syncStatus.textContent = message;
    this.syncStatus.className = `sync-status ${type}`;
}

async loadVisitedPlaces() {
    try {
        this.updateSyncStatus('🔄 Laden gedeelde lijst...', 'syncing');
        
        if (this.config.type === 'jsonbin') {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${this.config.binId}/latest`, {
                headers: {
                    'X-Master-Key': this.config.apiKey
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                this.updateSyncStatus('✅ Gedeelde lijst geladen');
                return data.record.visitedPlaces || [];
            }
        }
        
        this.updateSyncStatus('⚠️ Gebruikt lokale opslag', 'error');
        return this.loadLocalVisitedPlaces();
        
    } catch (error) {
        console.log('Fout bij laden:', error);
        this.updateSyncStatus('⚠️ Fout bij laden, gebruikt lokale opslag', 'error');
        return this.loadLocalVisitedPlaces();
    }
}

async saveVisitedPlaces(visitedPlaces) {
    try {
        this.updateSyncStatus('🔄 Opslaan naar gedeelde lijst...', 'syncing');
        
        if (this.config.type === 'jsonbin') {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${this.config.binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.config.apiKey
                },
                body: JSON.stringify({
                    visitedPlaces: visitedPlaces,
                    lastUpdated: new Date().toISOString()
                })
            });
            
            if (response.ok) {
                this.updateSyncStatus('✅ Opgeslagen in gedeelde lijst');
                this.saveLocalVisitedPlaces(visitedPlaces);
                return true;
            }
        }
        
        this.updateSyncStatus('⚠️ Opslaan lokaal alleen', 'error');
        this.saveLocalVisitedPlaces(visitedPlaces);
        return false;
        
    } catch (error) {
        console.log('Fout bij opslaan:', error);
        this.updateSyncStatus('⚠️ Fout bij opslaan, gebruikt lokale opslag', 'error');
        this.saveLocalVisitedPlaces(visitedPlaces);
        return false;
    }
}

saveLocalVisitedPlaces(visitedPlaces) {
    try {
        localStorage.setItem('veluwePlaces', JSON.stringify(visitedPlaces));
    } catch (e) {
        window.localVisitedPlaces = JSON.stringify(visitedPlaces);
    }
}

loadLocalVisitedPlaces() {
    try {
        const local = localStorage.getItem('veluwePlaces');
        if (local) return JSON.parse(local);
        if (window.localVisitedPlaces) return JSON.parse(window.localVisitedPlaces);
        return [];
    } catch (e) {
        return [];
    }
}
}

// ========================================
// HELPER FUNCTIES
// ========================================

function calculateDistance(lat1, lng1, lat2, lng2) {
const R = 6371;
const dLat = (lat2 - lat1) * Math.PI / 180;
const dLng = (lng2 - lng1) * Math.PI / 180;
const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
Math.sin(dLng/2) * Math.sin(dLng/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
return R * c;
}

function createCard(location) {
const card = document.createElement(‘div’);
card.className = ‘card’;
card.innerHTML = `<input type="checkbox" class="visited-checkbox" data-place="${location.title}" /> <label class="visited-label">Bezocht</label> <div class="category ${location.category}">${locationsData.categoryLabels[location.category]}</div> <h3><a href="${location.mapsUrl}" target="_blank">${location.title}</a></h3> <p>${location.description}</p> <div class="distance">(${location.distance} km)</div>`;
return card;
}

function createFilterButtons() {
const filterContainer = document.getElementById(‘filterButtons’);

```
Object.keys(locationsData.categoryLabels).forEach(category => {
    const button = document.createElement('button');
    button.className = `filter-btn ${category} show-colored`;
    button.setAttribute('data-category', category);
    button.textContent = locationsData.categoryLabels[category];
    filterContainer.appendChild(button);
});
```

}

// ========================================
// MAIN FUNCTIES
// ========================================

const sharedStorage = new SharedStorage(STORAGE_CONFIG);

async function saveVisitedPlaces() {
const visitedPlaces = [];
const checkboxes = document.querySelectorAll(’.visited-checkbox:checked’);
checkboxes.forEach(checkbox => {
visitedPlaces.push(checkbox.getAttribute(‘data-place’));
});
await sharedStorage.saveVisitedPlaces(visitedPlaces);
}

async function loadVisitedPlaces() {
const visitedPlaces = await sharedStorage.loadVisitedPlaces();
visitedPlaces.forEach(place => {
const checkbox = document.querySelector(`[data-place="${place}"]`);
if (checkbox) {
checkbox.checked = true;
checkbox.closest(’.card’).classList.add(‘visited’);
}
});
}

function updateDistances(userLat, userLng) {
const cards = document.querySelectorAll(’.card’);
cards.forEach(card => {
const titleElement = card.querySelector(‘h3 a’);
const distanceElement = card.querySelector(’.distance’);

```
    if (titleElement && distanceElement) {
        const titleText = titleElement.textContent;
        const location = locationsData.locations.find(loc => loc.title === titleText);
        
        if (location) {
            const distance = calculateDistance(userLat, userLng, location.coordinates.lat, location.coordinates.lng);
            distanceElement.textContent = `(${Math.round(distance)} km)`;
            distanceElement.classList.add('updated');
        }
    }
});
```

}

function initializeFilters() {
const filterButtons = document.querySelectorAll(’.filter-btn’);
const cards = document.querySelectorAll(’.card’);

```
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        if (category === 'all') {
            filterButtons.forEach(btn => {
                if (btn !== this) btn.classList.add('show-colored');
            });
        } else {
            filterButtons.forEach(btn => btn.classList.remove('show-colored'));
        }
        
        cards.forEach(card => {
            if (category === 'all') {
                card.classList.remove('hidden');
            } else {
                const cardCategory = card.querySelector('.category');
                if (cardCategory && cardCategory.classList.contains(category)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});
```

}

function initializeCheckboxes() {
const checkboxes = document.querySelectorAll(’.visited-checkbox’);
checkboxes.forEach(checkbox => {
checkbox.addEventListener(‘change’, function() {
const card = this.closest(’.card’);
if (this.checked) {
card.classList.add(‘visited’);
} else {
card.classList.remove(‘visited’);
}
saveVisitedPlaces();
});
});
}

function initializeLocation() {
const locationBtn = document.getElementById(‘locationBtn’);
const locationStatus = document.getElementById(‘locationStatus’);

```
locationBtn.addEventListener('click', function() {
    if (!navigator.geolocation) {
        locationStatus.textContent = 'Geolocatie wordt niet ondersteund door je browser';
        locationStatus.style.color = '#e74c3c';
        return;
    }
    
    locationBtn.disabled = true;
    locationBtn.textContent = '📍 Locatie ophalen...';
    locationStatus.textContent = 'Je locatie wordt opgehaald...';
    locationStatus.style.color = '#f39c12';
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            updateDistances(position.coords.latitude, position.coords.longitude);
            
            locationBtn.textContent = '✅ Afstanden bijgewerkt';
            locationStatus.textContent = 'Afstanden zijn bijgewerkt naar je huidige locatie!';
            locationStatus.style.color = '#27ae60';
            
            setTimeout(() => {
                locationBtn.disabled = false;
                locationBtn.textContent = '📍 Herbereken afstanden';
            }, 2000);
        },
        function(error) {
            let errorMessage = 'Er ging iets mis bij het ophalen van je locatie';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Locatietoegang geweigerd. Geef toestemming in je browser.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Locatie niet beschikbaar.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Timeout bij ophalen locatie.';
                    break;
            }
            
            locationStatus.textContent = errorMessage;
            locationStatus.style.color = '#e74c3c';
            locationBtn.disabled = false;
            locationBtn.textContent = '📍 Probeer opnieuw';
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
});
```

}

// ========================================
// INITIALISATIE
// ========================================

async function initializeApp() {
// Maak kaarten
const container = document.getElementById(‘cardsContainer’);
locationsData.locations.forEach(location => {
container.appendChild(createCard(location));
});

```
// Maak filterbuttons
createFilterButtons();

// Initialiseer alles
initializeFilters();
initializeCheckboxes();
initializeLocation();

// Laad bezochte plaatsen
await loadVisitedPlaces();
```

}

document.addEventListener(‘DOMContentLoaded’, initializeApp);