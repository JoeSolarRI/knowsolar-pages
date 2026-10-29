/* KnowSolar analytics loader.
 *
 * GA4 is wired and waiting on one value. Paste the Measurement ID from
 * analytics.google.com > Admin > Data streams (it looks like G-ABC123XYZ)
 * into GA4_ID below and every page starts reporting. While GA4_ID is empty
 * this file loads gtag.js but sends nothing, so no cookies and no consent
 * banner are needed yet.
 *
 * Deliberately kept as its own file so the ID lives in exactly one place
 * instead of being pasted into 13 pages.
 */
(function () {
  var GA4_ID = "";

  if (!GA4_ID || GA4_ID.indexOf("G-") !== 0) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA4_ID, { anonymize_ip: true });
})();
