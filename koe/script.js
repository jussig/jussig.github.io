function getUserLocation(callback) {
    // Token made by robert.brotherus@gmail.com 2024-07-12
    // Need to have CORS settings in Azure Blob store to support https://ipinfo.io
    fetch('https://ipinfo.io/json?token=44151879daf4d3')
        .then(response => response.json())
        .then(data => {callback(data)})
        .catch(error => {
            console.error('Error fetching location:', error)
            callback(null)
        })
}

function forwardToAppStore(agent, location) {
    if (location) console.log("Country: ", location.country)
    if (agent.indexOf('iphone') >= 0) {
        console.log("IPHONE")
        window.location.replace("https://apps.apple.com/us/app/sartorius-pipetting/id1609966869")
    }
    else if (agent.indexOf('ipad') >= 0) {
        console.log("IPAD")
        window.location.replace("https://apps.apple.com/us/app/sartorius-pipetting/id1609966869")
    }
    else if (agent.indexOf('android') >= 0) {
        console.log("ANDROID")
        if (location && location.country) {
            const blockedCountries = ['CN'] // Add other country codes if needed
            if (!blockedCountries.includes(location.country)) {
                // Redirect to Google Play Store if not in blocked country
                window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.sartorius.pipetting"
            }
        }
    }
}

const agent = navigator.userAgent.toLowerCase()
console.log("Agent ", agent)
getUserLocation(function(location) {
    forwardToAppStore(agent, location)
})

