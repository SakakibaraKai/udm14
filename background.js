chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url) {
      let url = new URL(tab.url);
  
      // Check if it's a Google search URL
      if (url.hostname.includes("google.com") && url.pathname === "/search") {
        // Check if &umd=14 is already present
        if (!url.searchParams.has("umd")) {
          // Append &umd=14 while keeping existing parameters intact
          url.searchParams.set("umd", "14");
          chrome.tabs.update(tabId, { url: url.toString() });
        }
      }
    }
  });
  