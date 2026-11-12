/*
  Cath Tech Solutions: site settings. Edit this file, no rebuild needed.

  quoteEndpoint / feedbackEndpoint
    Your Formspree form addresses. The quote form and the feedback form post straight to them.
    A message only shows as "sent" when Formspree confirms it. If it can't be reached, the customer sees a clear
    "not sent yet" message with email, WhatsApp and phone options.

  demoMode
    Keep this false on your real website. Set it to true only to preview the thank-you screen without sending
    anything. In demo mode the screen says clearly that nothing was sent.
*/
window.CATH_CONFIG = {
  quoteEndpoint: "https://formspree.io/f/xoedvnoe",     // Get a Quote / enquiry form
  feedbackEndpoint: "https://formspree.io/f/mkjrgvlz",  // Customer feedback form
  demoMode: false
};
