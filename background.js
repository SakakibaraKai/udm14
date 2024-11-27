chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url) {
      let newUrl = tab.url;
      if (newUrl.includes("google.com/search")) {
        if (!newUrl.includes("&umd=14")) {
          newUrl += newUrl.includes("?") ? "&umd=14" : "?umd=14";
          chrome.tabs.update(tabId, { url: newUrl });
        }
      }
    }
}); 