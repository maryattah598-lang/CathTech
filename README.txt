CATH TECH SOLUTIONS - WEBSITE (HTML / CSS / JavaScript)

OPEN IT
  Double-click index.html, or upload this whole folder to any web host.
  Pages use "#" links (e.g. index.html#/pricing), so no server set-up is needed.

FILES
  index.html   page shell
  styles.css   all styling
  app.js       the site (compiled, React bundled in - no internet needed except Google Fonts)
  config.js    settings you can edit without rebuilding (Formspree addresses, demo mode)
  assets/      images and logo
  source/      editable source (app.jsx, CSS) + package.json to rebuild:
               cd source && npm install && npm run build

FORMS (Formspree)
  Get a Quote / enquiry form  ->  https://formspree.io/f/xoedvnoe
  Customer feedback form      ->  https://formspree.io/f/mkjrgvlz
  Change either address in config.js. A form only shows "sent" when Formspree confirms it; otherwise
  the customer sees a clear message with email, WhatsApp and phone options.
  Tip: in your Formspree dashboard, confirm both forms are active and, if you use the domain allow-list,
  add the domain you host this site on.
  To preview the thank-you screen without sending anything, set demoMode: true in config.js
  (quote form only; the screen then says clearly that nothing was sent). Set it back to false before going live.

EASY EDITS (source/src/app.jsx - search for these names)
  CONTACT       phone, WhatsApp link, email, address, response-time message
  PROMOTION     December offer dates (endsOn / endsLabel)
  PACKAGES, ADDONS   prices and package contents
  COMPARE_ROWS  the comparison table (including "Typical delivery")
  GUIDE         the Connectivity / Business email / Care service rows
  CARE_PLANS    wording under the three care plans
