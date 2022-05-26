browser.runtime.onInstalled.addListener(() => {
  browser.storage.sync.set({});
  console.log('storage initialized');
});
