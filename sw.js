/* Patjac – service worker: shows notifications even when the app is closed */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: "Patjac", body: e.data ? e.data.text() : "" }; }
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    // if the app is open in front, hand the alert to the app so it shows it inside (no lost alerts)
    const front = wins.filter((w) => w.visibilityState === "visible" && w.focused);
    if (front.length) { front.forEach((w) => w.postMessage({ type: "push", title: d.title, body: d.body, tag: d.tag })); return; }
    await self.registration.showNotification(d.title || "Patjac", {
      body: d.body || "",
      tag: d.tag || undefined,
      renotify: !!d.tag,
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      vibrate: [200, 100, 200],
      data: { url: d.url || "/" },
    });
  })());
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "/";
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const w of wins) { if ("focus" in w) { await w.focus(); return; } }
    if (self.clients.openWindow) await self.clients.openWindow(url);
  })());
});
