chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url) {
      let newUrl = tab.url;
      if (newUrl.includes("google.com/search")) {
        if (!newUrl.includes("&udm=14")) {
          newUrl += newUrl.includes("?") ? "&udm=14" : "?udm=14";
          chrome.tabs.update(tabId, { url: newUrl });
        }
      }
    }
}); 