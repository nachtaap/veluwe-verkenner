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
        
        // Fallback naar lokale opslag
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
        
        // Fallback naar lokale opslag
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
```

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
