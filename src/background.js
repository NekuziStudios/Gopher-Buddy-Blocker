const defaultFilters = [
	"*://*.gopher-buddy-prod.appspot.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)