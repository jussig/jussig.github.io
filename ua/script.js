let agent = navigator.userAgent.toLowerCase();
console.log("Agent ", agent)  
if (agent.indexOf('iphone') >= 0) {
    console.log("IPHONE")
    location.replace("https://apps.apple.com/us/app/sartorius-service-connect/id1554232112");
} 
else if (agent.indexOf('ipad') >= 0) {
    console.log("IPAD")
    location.replace("https://apps.apple.com/us/app/sartorius-service-connect/id1554232112");
} 
else if (agent.indexOf('android') >= 0) {
    console.log("ANDROID")
    location.href="https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.sartorius.lpsservice";
}
