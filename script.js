console.log(“Veluwe script geladen!”);

// Jouw JSONBin configuratie
const STORAGE_CONFIG = {
type: ‘jsonbin’,
binId: ‘6856feef8561e97a5028f33b’,
apiKey: ‘$2a$10$VUgmGwUgwRlPKxGI00D6pe6mR6q1.wvmkx0a34vpNrxdHpnClZ0Zy’
};

// Locatie data (verkort voor test)
const locationsData = {
“locations”: [
{
“title”: “Bezoekerscentrum Schaarsbergen”,
“category”: “nature”,
“description”: “Prachtig startpunt voor wandelingen met informatiecentrum en mooie tuinen.”,
“distance”: 15,
“coordinates”: { “lat”: 52.0038, “lng”: 5.9461 },
“mapsUrl”: “https://maps.google.com/maps?q=Schaarsbergen+Bezoekerscentrum”
},
{
“title”: “Kasteel Cannenburch”,
“category”: “historic”,
“description”: “15e-eeuws kasteel met prachtige tuinen en een interessante geschiedenis.”,
“distance”: 12,
“coordinates”: { “lat”: 52.2931, “lng”: 6.0654 },
“mapsUrl”: “https://maps.google.com/maps?q=Kasteel+Cannenburch+Vaassen”
},
{
“title”: “Vischpoort Elburg”,
“category”: “village”,
“description”: “Historische stadspoort in het pittoreske vestingstadje Elburg.”,
“distance”: 35,
“coordinates”: { “lat”: 52.4489, “lng”: 5.8413 },
“mapsUrl”: “https://maps.google.com/maps?q=Elburg+Vischpoort”
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

// Eenvoudige storage klasse
class SharedStorage {
constructor(config) {
this.config = config;
this.syncStatus = document.getElementById(‘syncStatus’);
}

```
updateSyncStatus(message) {
    if (this.syncStatus) {
        this.syncStatus.textContent = message;
    }
}

async loadVisitedPlaces() {
    this.updateSyncStatus('🔄 Laden...');
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${this.config.binId}/latest`, {
            headers: { 'X-Master-Key': this.config.apiKey }
        });
        
        if (response.ok) {
            const data = await response.json();
            this.updateSyncStatus('✅ Geladen');
            return data.record.visitedPlaces || [];
        }
    } catch (error) {
        console.log('Fout:', error);
    }
    
    this.updateSyncStatus('⚠️ Lokaal gebruikt');
    return [];
}

async saveVisitedPlaces(places) {
    this.updateSyncStatus('🔄 Opslaan...');
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${this.config.binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': this.config.apiKey
            },
            body: JSON.stringify({
                visitedPlaces: places,
                lastUpdated: new Date().toISOString()
            })
        });
        
        if (response.ok) {
            this.updateSyncStatus('✅ Opgeslagen');
            return;
        }
    } catch (error) {
        console.log('Fout bij opslaan:', error);
    }
    
    this.updateSyncStatus('⚠️ Opslaan mislukt');
}
```

}

const storage = new SharedStorage(STORAGE_CONFIG);

// Maak een kaart
function createCard(location) {
const card = document.createElement(‘div’);
card.className = ‘card’;
card.innerHTML = `<input type="checkbox" class="visited-checkbox" data-place="${location.title}" /> <label class="visited-label">Bezocht</label> <div class="category ${location.category}">${locationsData.categoryLabels[location.category]}</div> <h3><a href="${location.mapsUrl}" target="_blank">${location.title}</a></h3> <p>${location.description}</p> <div class="distance">(${location.distance} km)</div>`;
return card;
}

// Initialiseer de app
document.addEventListener(‘DOMContentLoaded’, async function() {
console.log(“Initialiseren…”);

```
// Maak kaarten
const container = document.getElementById('cardsContainer');
locationsData.locations.forEach(location => {
    container.appendChild(createCard(location));
});

// Checkbox events
document.querySelectorAll('.visited-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', async function() {
        const card = this.closest('.card');
        if (this.checked) {
            card.classList.add('visited');
        } else {
            card.classList.remove('visited');
        }
        
        // Opslaan
        const visitedPlaces = [];
        document.querySelectorAll('.visited-checkbox:checked').forEach(cb => {
            visitedPlaces.push(cb.getAttribute('data-place'));
        });
        await storage.saveVisitedPlaces(visitedPlaces);
    });
});

// Laad opgeslagen plaatsen
const visitedPlaces = await storage.loadVisitedPlaces();
visitedPlaces.forEach(place => {
    const checkbox = document.querySelector(`[data-place="${place}"]`);
    if (checkbox) {
        checkbox.checked = true;
        checkbox.closest('.card').classList.add('visited');
    }
});

console.log("Klaar!");
```

});