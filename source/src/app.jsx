// Cath Tech Solutions - single-brand website (source). Built with esbuild into dist/app.js
import * as React from "react";
import * as React2 from "react";
import * as React3 from "react";
import { createRoot } from "react-dom/client";
import { useEffect as useEffect4, useState as useState5 } from "react";

const CFG = (typeof window !== "undefined" && window.CATH_CONFIG) || {};

// ---- tiny hash router: "#/pricing", "#/services/online-shops", "#/pricing#build" ----
function parseHash() {
  let h = (typeof window !== "undefined" ? window.location.hash : "").replace(/^#/, "");
  if (!h) h = "/";
  const i = h.indexOf("#");
  return i < 0 ? { path: h, anchor: "" } : { path: h.slice(0, i) || "/", anchor: h.slice(i + 1) };
}
function useHashLoc() {
  const [loc, setLoc] = React.useState(parseHash);
  React.useEffect(() => {
    const on = () => setLoc(parseHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return loc;
}
function useRouter() {
  return { navigate: ({ href }) => {
    const target = "#" + href.replace(/^#/, "");
    if (window.location.hash === target) window.dispatchEvent(new Event("hashchange"));
    else window.location.hash = target;
  } };
}
// ../../dev-server/src/assets/cath-logo.png
var cath_logo_default = "assets/cath-logo.png";

// ../../dev-server/src/assets/tech-hero.jpg
var tech_hero_default = "assets/tech-hero.jpg";

// ../../dev-server/src/assets/heroes/tech-website-services.jpg
var tech_website_services_default = "assets/tech-website-services.jpg";

// ../../dev-server/src/assets/heroes/tech-business-technology.jpg
var tech_business_technology_default = "assets/tech-business-technology.jpg";

// ../../dev-server/src/assets/heroes/tech-our-approach.jpg
var tech_our_approach_default = "assets/tech-our-approach.jpg";

// ../../dev-server/src/assets/heroes/tech-our-work.jpg
var tech_our_work_default = "assets/tech-our-work.jpg";

// ../../dev-server/src/assets/heroes/tech-about.jpg
var tech_about_default = "assets/tech-about.jpg";

// ../../dev-server/src/assets/heroes/tech-pricing.jpg
var tech_pricing_default = "assets/tech-pricing.jpg";

// ../../dev-server/src/assets/heroes/tech-reviews.jpg
var tech_reviews_default = "assets/tech-reviews.jpg";

// ../../dev-server/src/assets/heroes/tech-contact.jpg
var tech_contact_default = "assets/tech-contact.jpg";

// ../../dev-server/src/assets/heroes/tech-privacy.jpg
var tech_privacy_default = "assets/tech-privacy.jpg";

// ../../dev-server/src/assets/heroes/tech-cookies.jpg
var tech_cookies_default = "assets/tech-cookies.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-business-websites.jpg
var tech_svc_business_websites_default = "assets/tech-svc-business-websites.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-hospitality-property-websites.jpg
var tech_svc_hospitality_property_websites_default = "assets/tech-svc-hospitality-property-websites.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-online-shops.jpg
var tech_svc_online_shops_default = "assets/tech-svc-online-shops.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-website-redesign.jpg
var tech_svc_website_redesign_default = "assets/tech-svc-website-redesign.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-speed-accessibility-seo.jpg
var tech_svc_speed_accessibility_seo_default = "assets/tech-svc-speed-accessibility-seo.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-booking-systems.jpg
var tech_svc_booking_systems_default = "assets/tech-svc-booking-systems.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-forms-and-registrations.jpg
var tech_svc_forms_and_registrations_default = "assets/tech-svc-forms-and-registrations.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-portals-and-dashboards.jpg
var tech_svc_portals_and_dashboards_default = "assets/tech-svc-portals-and-dashboards.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-custom-software.jpg
var tech_svc_custom_software_default = "assets/tech-svc-custom-software.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-integrations-automation.jpg
var tech_svc_integrations_automation_default = "assets/tech-svc-integrations-automation.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-email-and-digital-setup.jpg
var tech_svc_email_and_digital_setup_default = "assets/tech-svc-email-and-digital-setup.jpg";

// ../../dev-server/src/assets/heroes/tech-svc-care-and-support.jpg
var tech_svc_care_and_support_default = "assets/tech-svc-care-and-support.jpg";

// ../../dev-server/src/cath/techsite/heroes.ts
var TECH_HEROES = {
  "/website-services": tech_website_services_default,
  "/business-technology": tech_business_technology_default,
  "/our-approach": tech_our_approach_default,
  "/our-work": tech_our_work_default,
  "/about": tech_about_default,
  "/pricing": tech_pricing_default,
  "/reviews": tech_reviews_default,
  "/contact": tech_contact_default,
  "/privacy": tech_privacy_default,
  "/cookies": tech_cookies_default,
  "/services/business-websites": tech_svc_business_websites_default,
  "/services/hospitality-property-websites": tech_svc_hospitality_property_websites_default,
  "/services/online-shops": tech_svc_online_shops_default,
  "/services/website-redesign": tech_svc_website_redesign_default,
  "/services/speed-accessibility-seo": tech_svc_speed_accessibility_seo_default,
  "/services/booking-systems": tech_svc_booking_systems_default,
  "/services/forms-and-registrations": tech_svc_forms_and_registrations_default,
  "/services/portals-and-dashboards": tech_svc_portals_and_dashboards_default,
  "/services/custom-software": tech_svc_custom_software_default,
  "/services/integrations-automation": tech_svc_integrations_automation_default,
  "/services/email-and-digital-setup": tech_svc_email_and_digital_setup_default,
  "/services/care-and-support": tech_svc_care_and_support_default
};

// ../../dev-server/src/assets/areas/area-websites.jpg
var area_websites_default = "assets/area-websites.jpg";

// ../../dev-server/src/assets/areas/area-tools.jpg
var area_tools_default = "assets/area-tools.jpg";

// ../../dev-server/src/assets/areas/area-connect.jpg
var area_connect_default = "assets/area-connect.jpg";

// ../../dev-server/src/assets/areas/area-setup.jpg
var area_setup_default = "assets/area-setup.jpg";

// ../../dev-server/src/assets/areas/area-care.jpg
var area_care_default = "assets/area-care.jpg";
// ../../dev-server/src/cath/ds/Extras.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
function ScrollProgress() {
  const [p, setP] = useState2(0);
  const [show, setShow] = useState2(false);
  useEffect2(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
      setShow(h.scrollTop > 600);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${p})` }} />
      <button
    type="button"
    className={`to-top${show ? " is-visible" : ""}`}
    aria-label="Back to top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </>;
}
function Marquee({ items }) {
  const row = [...items, ...items];
  return <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee__track" aria-hidden="true">
        {row.map((t, i) => <span key={i}>{t}<i className="marquee__dot" /></span>)}
      </div>
    </div>;
}
function Orbs() {
  return <div className="orbs" aria-hidden="true"><span /><span /><span /></div>;
}
function Spotlight() {
  useEffect2(() => {
    const on = (e) => {
      const el = e.target?.closest?.(".ruled > *, .concept, .price-card, .card");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", on, { passive: true });
    return () => window.removeEventListener("pointermove", on);
  }, []);
  return null;
}
// ../../dev-server/src/assets/workspace.jpg
var workspace_default = "assets/workspace.jpg";
// ../../dev-server/src/cath/techsite/CathTechSolutions.jsx
import { useEffect as useEffect22, useState as useState22 } from "react";
import { useEffect as useEffect42 } from "react";
import { useEffect as useEffect5, useState as useState42 } from "react";
var LocationContext = React3.createContext("/");
var EnquiryEndpointContext = React3.createContext(null);
var NavContext = React3.createContext(() => {
});
var DraftContext = React3.createContext({ draft: null, setDraft: () => {
} });
function useLocation2(options) {
  const pathname = React3.useContext(LocationContext);
  const value = { pathname };
  return options?.select ? options.select(value) : value;
}
function techHref(to) {
  return to;
}
function Link2({ to, children, onClick, ...props }) {
  const router = useRouter();
  const href = techHref(to);
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || !to.startsWith("/") || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || props.target) return;
    e.preventDefault();
    router.navigate({ href });
  };
  return <a href={to.startsWith("/") ? "#" + href : href} onClick={handle} {...props}>{children}</a>;
}
var SRC = void 0;
var DOMAIN = void 0;
var KEY = "cath-consent";
function loadAnalytics() {
  if (!SRC || document.querySelector("script[data-cath-analytics]")) return;
  const s = document.createElement("script");
  s.src = SRC;
  s.defer = true;
  if (DOMAIN) s.setAttribute("data-domain", DOMAIN);
  s.setAttribute("data-cath-analytics", "1");
  document.head.appendChild(s);
}
function ConsentBanner() {
  const [show, setShow] = useState5(false);
  useEffect4(() => {
    if (!SRC) return;
    let saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
    }
    if (saved === "granted") loadAnalytics();
    if (!saved) setShow(true);
    const open = () => setShow(true);
    window.addEventListener("cath:consent-open", open);
    return () => window.removeEventListener("cath:consent-open", open);
  }, []);
  if (!SRC || !show) return null;
  const choose = (v) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
    }
    if (v === "granted") loadAnalytics();
    setShow(false);
  };
  return <section className="consent" aria-label="Analytics preferences">
      <p>We would like to use privacy-conscious analytics to understand how this site is used. It stays off unless you accept. If you decline after accepting before, it stops on your next visit.</p>
      <div className="consent__actions">
        <button type="button" className="btn btn--primary" onClick={() => choose("granted")}>Accept analytics</button>
        <button type="button" className="btn btn--ghost" onClick={() => choose("denied")}>Decline</button>
      </div>
    </section>;
}
function ManageConsentButton() {
  if (!SRC) return null;
  return <button type="button" className="linklike" onClick={() => window.dispatchEvent(new Event("cath:consent-open"))}>
      Analytics preferences
    </button>;
}
var AREA_IMGS = { websites: area_websites_default, tools: area_tools_default, connect: area_connect_default, setup: area_setup_default, care: area_care_default };
var BRAND = "Cath Tech Solutions";
var TAGLINE = "Technology that moves your business forward.";
var CONTACT = {
  phoneDisplay: "+44 7446 315817",
  phoneHref: "tel:+447446315817",
  whatsappHref: "https://wa.me/message/UBN37Q2YHXSM1",
  email: "cathpromotionsandtechservice@gmail.com",
  emailHref: "mailto:cathpromotionsandtechservice@gmail.com",
  address: "66 High Street, Bromley, England, United Kingdom",
  // Shown on the enquiry confirmation screen. Edit this one line to change it everywhere.
  responseTime: "We aim to reply within 1–2 working days."
};
var PROMOTION = { enabled: true, endsOn: "2026-12-17", endsLabel: "17 December 2026" };
var STANDARD_PRICES = {};
var VAT_NOTE = "VAT: our VAT position will be confirmed in your written proposal before you commit.";
function promoLive(now = /* @__PURE__ */ new Date()) {
  return PROMOTION.enabled && now.getTime() <= Date.parse(PROMOTION.endsOn + "T23:59:59+00:00");
}
function priceOf(item, live) {
  if (item.quote) return null;
  if (live) return item.price;
  const s = STANDARD_PRICES[item.id];
  return typeof s === "number" ? s : null;
}
var gbp = (n) => "\xA3" + n.toLocaleString("en-GB");
var PACKAGES = [
  {
    id: "starter",
    name: "Website Starter",
    price: 295,
    pages: 3,
    blurb: "For a small business or sole trader needing a professional first website.",
    includes: ["Up to 3 standard pages", "Professional, brand-aligned design", "Mobile, tablet and desktop layouts", "Contact and enquiry form", "Your WhatsApp, phone and email links", "Basic on-page SEO foundations", "Social links", "Basic analytics-ready set-up", "Launch assistance", "One agreed revision round"]
  },
  {
    id: "business",
    name: "Business Website",
    price: 595,
    pages: 6,
    popular: true,
    blurb: "Our recommended option for most small and growing businesses.",
    includes: ["Up to 6 standard pages", "More tailored design and page layouts", "Service sections or service pages", "Contact and enquiry form", "Testimonials section, ready for genuine reviews", "Gallery or portfolio where relevant", "Basic on-page SEO foundations", "Google Maps embed where relevant", "Analytics set-up where access and consent allow", "Launch assistance", "Two agreed revision rounds"]
  },
  {
    id: "plus",
    name: "Business Plus",
    price: 895,
    pages: 10,
    blurb: "For a business that needs a fuller website and stronger content structure.",
    includes: ["Up to 10 standard pages", "More customised design and composition", "Expanded service presentation", "Blog or news section set-up", "Enhanced enquiry form", "Gallery or portfolio", "Basic content management set-up where suitable", "SEO foundations and structured page metadata", "Analytics and Search Console connection where credentials are supplied", "Launch assistance", "Two agreed revision rounds"]
  },
  {
    id: "shop",
    name: "Online Shop",
    price: 995,
    from: true,
    products: 10,
    blurb: "For businesses that want to sell products online.",
    includes: ["Storefront design and set-up on a suitable established platform", "Up to 10 initial products loaded", "Product categories", "Shopping basket and checkout", "One standard payment provider set-up", "Basic delivery settings", "Order notification set-up", "Basic store guidance and handover", "Two agreed revision rounds"]
  }
];
var COMPARE_ROWS = [
  ["Typical delivery", "3–7 working days", "3–7 working days", "7–14 working days", "7–14 working days"],
  ["Best for", "Sole traders and first websites", "Most small businesses", "Fuller sites with more content", "Selling products online"],
  ["Standard pages", "Up to 3", "Up to 6", "Up to 10", "Storefront with product categories"],
  ["Design", "Professional, brand-aligned", "More tailored layouts", "More customised composition", "Storefront on an established platform"],
  ["Enquiry form", "Contact and enquiry form", "Contact and enquiry form", "Enhanced enquiry form", "–"],
  ["Service pages or sections", "–", "Included", "Expanded presentation", "–"],
  ["Gallery or portfolio", "–", "Where relevant", "Included", "–"],
  ["Reviews section", "–", "Ready for genuine reviews", "–", "–"],
  ["Blog or news section", "–", "–", "Set-up included", "–"],
  ["Google Maps embed", "–", "Where relevant", "–", "–"],
  ["Analytics", "Analytics-ready set-up", "Set-up where access and consent allow", "Analytics and Search Console where credentials are supplied", "–"],
  ["Content management", "–", "–", "Basic set-up where suitable", "Basic store guidance"],
  ["Online selling", "–", "–", "–", "10 initial products, basket, checkout, one payment provider, basic delivery, order notifications"],
  ["Revision rounds", "One agreed round", "Two agreed rounds", "Two agreed rounds", "Two agreed rounds"],
  ["Launch", "Launch assistance", "Launch assistance", "Launch assistance", "Handover included"]
];
var ADDON_GROUPS = [
  { id: "content", title: "Pages and content" },
  { id: "brand", title: "Branding" },
  { id: "google", title: "Google and business visibility" },
  { id: "email", title: "Email and customer communication" },
  { id: "booking", title: "Booking and enquiry tools" },
  { id: "shop", title: "Online shop extras" },
  { id: "func", title: "Functionality and integrations" },
  { id: "care", title: "Security, backups and care" }
];
var ADDONS = [
  { id: "page-std", group: "content", name: "Additional standard page", price: 45, unit: "each", qty: true, desc: "A further content page, such as a service, team or FAQ page." },
  { id: "page-custom", group: "content", name: "Additional custom-designed page", price: 85, from: true, unit: "each", qty: true, desc: "A page with its own bespoke layout." },
  { id: "blog", group: "content", name: "Blog or news section set-up", price: 65, includedIn: ["plus"], desc: "A place to publish updates and articles." },
  { id: "copy-page", group: "content", name: "Basic copywriting for one standard page", price: 45, unit: "per page", qty: true, desc: "We write the text for a page from your notes." },
  { id: "content-upload", group: "content", name: "Website content upload and set-up", price: 35, unit: "per 5 items", qty: true, desc: "We add up to 5 supplied content items for you." },
  { id: "item-upload", group: "content", name: "Additional standard product or item upload", price: 3, unit: "each", qty: true, desc: "Each extra product or listing item we add for you." },
  { id: "image-prep", group: "content", name: "Image sourcing and preparation for one page", price: 25, unit: "per page", qty: true, desc: "We find and prepare suitable images. Stock photography fees are separate." },
  { id: "logo-basic", group: "brand", name: "Basic logo design", price: 95, desc: "One concept, a defined revision limit and web-ready files." },
  { id: "logo-refine", group: "brand", name: "Business logo refinement or redraw", price: 55, desc: "We tidy up and redraw your existing logo." },
  { id: "brand-colours", group: "brand", name: "Brand colour and font set-up", price: 35, desc: "A consistent palette and typefaces for your website." },
  { id: "brand-guide", group: "brand", name: "Basic mini brand guide", price: 65, desc: "A short guide to your logo, colours and fonts." },
  { id: "gbp", group: "google", name: "Google Business Profile set-up or optimisation assistance", price: 65, desc: "Help setting up or improving your listing. It uses your own account, and Google may need to verify your business." },
  { id: "maps", group: "google", name: "Google Maps embed", price: 20, includedIn: ["business"], desc: "Show your location on your contact page." },
  { id: "search-console", group: "google", name: "Google Search Console connection", price: 25, includedIn: ["plus"], desc: "Connect your site to your own Search Console account." },
  { id: "analytics", group: "google", name: "Google Analytics set-up", price: 35, includedIn: ["business", "plus"], desc: "Set up visitor statistics in your own account, subject to consent requirements." },
  { id: "local-seo", group: "google", name: "Basic local SEO set-up for up to 3 key pages", price: 75, desc: "Page titles, descriptions and local details. We cannot promise rankings." },
  { id: "seo-page", group: "google", name: "Additional SEO-focused page set-up", price: 35, unit: "per page", qty: true, desc: "Set-up of one more page for search." },
  { id: "domain-email", group: "email", name: "Professional domain email set-up", price: 35, desc: "Email at your own domain. Configuration only; the provider subscription is separate." },
  { id: "mailbox", group: "email", name: "Additional mailbox set-up", price: 10, unit: "each", qty: true, desc: "Another mailbox set up on your domain. Provider fees are separate." },
  { id: "newsletter-form", group: "email", name: "Newsletter sign-up form", price: 35, desc: "Let visitors join your mailing list." },
  { id: "newsletter-popup", group: "email", name: "Newsletter pop-up", price: 45, desc: "A considerate pop-up inviting visitors to subscribe." },
  { id: "welcome-email", group: "email", name: "Basic welcome email automation", price: 55, desc: "One automatic welcome workflow. Email platform fees are excluded." },
  { id: "whatsapp-btn", group: "email", name: "WhatsApp chat or enquiry button", price: 15, includedIn: ["starter"], desc: "A button that opens a WhatsApp chat with you." },
  { id: "live-chat", group: "email", name: "Live chat widget set-up", price: 35, desc: "Add a chat box to your site. The third-party plan is excluded." },
  { id: "booking-simple", group: "booking", name: "Simple online booking or appointment system", price: 150, desc: "Customers pick a service and time online." },
  { id: "booking-advanced", group: "booking", name: "Advanced booking rules, several staff or resources, deposits or complex scheduling", quote: true, desc: "Quoted individually after we understand how you work." },
  { id: "form-multistep", group: "booking", name: "Multi-step enquiry form", price: 45, desc: "A longer form broken into easy steps." },
  { id: "form-quote", group: "booking", name: "Quote request form with conditional fields", price: 55, desc: "Questions change depending on the answers given." },
  { id: "review-form", group: "booking", name: "Customer review collection form", price: 35, desc: "A simple way for customers to leave feedback." },
  { id: "faq-accordion", group: "booking", name: "FAQ accordion set-up", price: 20, desc: "Questions and answers that open and close neatly." },
  { id: "event-reg", group: "booking", name: "Event registration form", price: 55, desc: "Collect sign-ups for an event." },
  { id: "shop-addon", group: "shop", name: "Simple online shop add-on, up to 10 products", price: 250, includedIn: ["shop"], desc: "Only for adding a simple, limited shop to a suitable website on a supported standard platform. It is not a replacement for the Online Shop build." },
  { id: "shop-products10", group: "shop", name: "Additional 10 product uploads", price: 25, unit: "per 10", qty: true, requiresShop: true, desc: "We load ten more products for you." },
  { id: "payment-extra", group: "shop", name: "Additional payment provider set-up", price: 35, unit: "each", qty: true, requiresShop: true, desc: "Subject to compatibility. Provider charges are separate." },
  { id: "delivery", group: "shop", name: "Basic delivery or shipping rule set-up", price: 35, includedIn: ["shop"], requiresShop: true, desc: "Delivery options and costs for your shop." },
  { id: "shop-filter", group: "shop", name: "Product filter and search set-up", price: 55, requiresShop: true, desc: "Help customers find the right product." },
  { id: "discount", group: "shop", name: "Discount code set-up", price: 20, requiresShop: true, desc: "Offer codes at checkout." },
  { id: "abandoned", group: "shop", name: "Abandoned basket email integration", price: 55, from: true, requiresShop: true, desc: "Remind customers about unfinished baskets. Platform fees are excluded." },
  { id: "crm-form", group: "func", name: "Basic CRM or form integration", price: 55, desc: "Send enquiries into your customer management tool." },
  { id: "sheet", group: "func", name: "Spreadsheet connection for enquiry capture", price: 35, desc: "Enquiries also land in a spreadsheet." },
  { id: "integration", group: "func", name: "One standard third-party integration", price: 45, from: true, desc: "Connect one supported online service." },
  { id: "social-feed", group: "func", name: "Social media feed embed", price: 25, desc: "Show your latest posts on your site." },
  { id: "calendar", group: "func", name: "Calendar integration", price: 35, desc: "Connect bookings or events to your calendar." },
  { id: "login", group: "func", name: "Simple customer login or account feature", price: 125, from: true, desc: "Using a supported platform. More involved portals are quoted individually." },
  { id: "admin-edit", group: "func", name: "Basic admin or content editing set-up", price: 75, from: true, includedIn: ["plus"], desc: "So you can update agreed content yourself." },
  { id: "migration", group: "func", name: "Website migration", price: 95, from: true, desc: "Move an existing website. The price depends on content and complexity." },
  { id: "redesign", group: "func", name: "Website redesign", quote: true, desc: "Quoted after we review your current site. It is not priced automatically as a new build." },
  { id: "accessibility", group: "func", name: "Accessibility improvement pass", price: 75, from: true, desc: "We review and improve how usable your site is for everyone." },
  { id: "speed", group: "func", name: "Website speed optimisation pass", price: 65, from: true, desc: "We look for ways to make pages load faster." },
  { id: "ssl", group: "care", name: "Basic security and SSL configuration assistance", price: 35, desc: "Secure connection set-up. Paid certificates and hosting are excluded." },
  { id: "backup", group: "care", name: "Backup set-up", price: 35, desc: "Where supported by your hosting or platform." },
  { id: "care-39", group: "care", name: "Website maintenance", price: 39, kind: "month", exclusive: "care", desc: "Essential updates and basic checks, within a stated fair monthly allowance." },
  { id: "care-69", group: "care", name: "Website care plus", price: 69, kind: "month", exclusive: "care", desc: "Essential updates, backups and health checks where supported, and a modest allowance for small content changes." },
  { id: "care-119", group: "care", name: "Website management", price: 119, from: true, kind: "month", exclusive: "care", desc: "More regular support, with agreed content and technical tasks set out in a service agreement." }
];
var addon = (id) => ADDONS.find((a) => a.id === id);
var packageById = (id) => PACKAGES.find((p) => p.id === id);
function priceText(item) {
  if (item.quote) return "Custom quote";
  const p = priceOf(item, promoLive());
  if (p == null) return "Price confirmed by quote";
  return (item.from ? "from " : "") + gbp(p) + (item.kind === "month" ? "/month" : item.unit ? " " + item.unit : "");
}
var paths = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  whatsapp: <><path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.3-1.4-1.9-1-.9.7a3 3 0 0 1-1.8-1.8l.7-.9-1-1.9L9 9.5z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="m5 12 5 5 9-10" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>
};
function Icon({ name, size = 20 }) {
  return <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>;
}
var KEY2 = "cath-theme";
var OPTIONS = [
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
  { value: "system", label: "System", icon: "monitor" }
];
function apply(pref) {
  const dark = pref === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches : pref === "dark";
  const r = document.documentElement;
  r.setAttribute("data-theme", dark ? "dark" : "light");
  r.setAttribute("data-theme-pref", pref);
  r.style.colorScheme = dark ? "dark" : "light";
}
function ThemeControl() {
  const [pref, setPref] = useState22("system");
  useEffect22(() => {
    try {
      const s = localStorage.getItem(KEY2);
      setPref(s === "light" || s === "dark" ? s : "system");
    } catch {
    }
  }, []);
  useEffect22(() => {
    if (pref !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => apply("system");
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [pref]);
  function choose(p) {
    setPref(p);
    try {
      if (p === "system") localStorage.removeItem(KEY2);
      else localStorage.setItem(KEY2, p);
    } catch {
    }
    apply(p);
  }
  return <div className="theme" role="group" aria-label="Colour theme">
      {OPTIONS.map((o) => <button key={o.value} type="button" className="theme__btn" aria-pressed={pref === o.value} onClick={() => choose(o.value)}>
          <Icon name={o.icon} size={16} />
          <span>{o.label}</span>
        </button>)}
    </div>;
}
function WhatsAppFab() {
  return <a className="fab" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (opens in a new tab)">
      <Icon name="whatsapp" size={22} />
      <span className="fab__label">WhatsApp</span>
    </a>;
}
var SELECTOR = ".section__head, .ruled > *, .timeline li, .faq details, .split > *, .area, .guide, .pkg-strip > li, .concept-row, .usecases li, .qa > div, .photo, .quote, .page-hero .container, .cta-band .container";
function ScrollReveal() {
  const pathname = useLocation2({ select: (l) => l.pathname });
  useEffect42(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll(SELECTOR)).filter((el) => !el.closest(".hero"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => {
      el.setAttribute("data-scroll", "");
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", `${Math.min(i, 5) * 80}ms`);
      io.observe(el);
    });
    root.classList.add("js-reveal");
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
function ScrollProgress2() {
  const [p, setP] = useState42(0);
  const [show, setShow] = useState42(false);
  useEffect5(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
      setShow(h.scrollTop > 600);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${p})` }} />
      <button
    type="button"
    className={`to-top${show ? " is-visible" : ""}`}
    aria-label="Back to top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </>;
}
var AREAS = [
  {
    id: "websites",
    name: "Websites and online presence",
    page: "/website-services",
    intro: "Give your business a professional website that customers can find, trust and use.",
    items: ["Business and corporate websites", "Landing pages", "Website redesign and modernisation", "Online shops and e-commerce", "Restaurant, caf\xE9 and hospitality websites", "Property and real-estate websites", "Portfolio and personal websites", "Content management, so you can update agreed content", "Accessibility improvements", "Website speed and performance improvements", "Search engine foundations and technical SEO set-up"],
    slugs: ["business-websites", "hospitality-property-websites", "online-shops", "website-redesign", "speed-accessibility-seo"]
  },
  {
    id: "tools",
    name: "Business tools that save you time",
    page: "/business-technology",
    intro: "Let customers book, ask, register and sign in online, and give your team one place to manage it.",
    items: ["Online booking and appointment systems", "Enquiry, quote request and registration forms", "Customer portals and account areas", "Admin dashboards and business management tools", "Membership and subscription websites", "Online directories and searchable listings", "Customer feedback and review collection tools", "Event registration", "Secure document or file submission", "Custom calculators and interactive tools"],
    slugs: ["booking-systems", "forms-and-registrations", "portals-and-dashboards", "custom-software"]
  },
  {
    id: "connect",
    name: "Connectivity and automation",
    page: "/business-technology",
    intro: "Spend less time answering the same enquiries and re-typing the same details.",
    items: ["Payment provider connections", "Email marketing connections", "Customer management (CRM) connections", "Connecting business tools and online services", "Automating repetitive enquiries, notifications and admin tasks", "Sending forms to spreadsheets or agreed systems", "Confirmation emails and reminders", "Custom API and third-party integrations where appropriate"],
    slugs: ["integrations-automation"]
  },
  {
    id: "setup",
    name: "Business email and digital set-up",
    page: "/business-technology",
    intro: "Use your own professional business email and get the everyday digital basics in place.",
    items: ["Professional email using your own domain", "Email mailbox and device set-up", "Domain and DNS configuration assistance", "Hosting set-up and migration assistance", "SSL and secure website configuration", "Google Analytics and Search Console set-up", "Google Business Profile set-up and optimisation assistance", "Newsletter forms and pop-ups", "Website chat and WhatsApp enquiry links"],
    slugs: ["email-and-digital-setup"]
  },
  {
    id: "care",
    name: "Care and protection",
    page: "/business-technology",
    intro: "Keep your website updated and working properly once it is live.",
    items: ["Website maintenance and updates", "Website backups and recovery planning", "Security updates and basic hardening", "Uptime and website health checks where supported", "Website troubleshooting and repair", "Website migration", "Ongoing technical support"],
    slugs: ["care-and-support"]
  }
];
var costFaq = { q: "How much does this cost?", a: "Related add-on prices are shown on this page, and our packages are on the pricing page. Your final quotation is confirmed after we review the scope, and it is never a surprise." };
var SERVICES = [
  {
    slug: "business-websites",
    cat: "websites",
    name: "Business & Corporate Websites",
    summary: "A professional website that explains what you do and makes it easy to get in touch.",
    intro: "Give your business a professional website. We shape the pages around your services and your customers, so visitors quickly see what you offer and how to reach you.",
    whoFor: ["Sole traders and small businesses launching a first website", "Established firms whose current site looks dated", "People who need a clear portfolio or personal website"],
    includes: ["Business and corporate websites", "Landing pages for an offer or event", "Portfolio and personal websites", "Contact and enquiry forms", "Basic content management, so you can update agreed content", "Search engine foundations on every page"],
    expect: ["We agree your pages, content and priorities in a short conversation.", "You review the design and agreed revision rounds, depending on your package.", "We check the site on phones, tablets and desktops, then launch with you."],
    notes: "Domain and hosting are separate costs unless your proposal says otherwise.",
    addons: ["page-std", "blog", "copy-page", "logo-basic", "maps"],
    faqs: [
      { q: "Can I update the website myself?", a: "Where content management is part of your package or an add-on, yes. We agree which content you can edit and show you how at handover." },
      { q: "Do you write the text?", a: "We can write basic copy for a page as an add-on, or work with text you supply." },
      costFaq
    ]
  },
  {
    slug: "hospitality-property-websites",
    cat: "websites",
    name: "Restaurant, Caf\xE9 & Property Websites",
    summary: "Menus, galleries and bookings for hospitality. Clear listings and enquiry forms for property.",
    intro: "Show off the place and make the next step obvious. Hospitality sites get menus, opening times and bookings. Property sites get clear listings, photos and enquiry forms.",
    whoFor: ["Restaurants, caf\xE9s and takeaways", "Estate and letting agents, landlords and property managers", "Venues and local attractions"],
    includes: ["Menu, opening hours and location pages", "Photo galleries", "Table or enquiry request forms", "Property listings with photos, details and enquiry forms", "Maps and directions", "Links to your social profiles and booking partners"],
    expect: ["We learn what you offer and what customers ask most.", "We plan the pages, such as menus or listings, and agree how you will keep them up to date.", "We build, test on real devices and launch together."],
    notes: "Third-party booking, delivery or listing platforms may have their own fees and terms.",
    addons: ["maps", "booking-simple", "form-quote", "item-upload", "social-feed"],
    faqs: [
      { q: "Can customers reserve a table online?", a: "A simple booking or enquiry form can be added. Advanced rules, such as deposits or several rooms, need a custom quote." },
      { q: "Can you connect to property portals?", a: "Sometimes, where the portal supports it. We check this early and tell you honestly if it is not possible." },
      costFaq
    ]
  },
  {
    slug: "online-shops",
    cat: "websites",
    name: "Online Shops",
    summary: "Let customers pay securely on your website, with a simple basket and checkout.",
    intro: "We set up an online shop on an established platform, with clear product pages, a straightforward basket and checkout, and the delivery settings you need.",
    whoFor: ["Shops moving from in-person or social selling to their own online store", "Existing stores that need a clearer design or a smoother checkout", "Makers and independent brands selling a focused range"],
    includes: ["Storefront design and set-up on a suitable established platform", "Product categories and product pages", "Shopping basket and checkout", "One standard payment provider set-up", "Basic delivery settings", "Order notification set-up", "Basic store guidance and handover"],
    expect: ["We review your products and how you want to sell.", "We recommend a platform and explain why, including any platform fees.", "We build, test the whole buying journey and show you how to manage the store."],
    notes: "Platform subscriptions, payment-provider charges, premium themes and plugins are separate. The simple shop add-on is only for adding a small, limited shop to a suitable website. It is not a replacement for the Online Shop build.",
    addons: ["shop-addon", "shop-products10", "payment-extra", "delivery", "shop-filter", "discount", "abandoned"],
    faqs: [
      { q: "What is the difference between the Online Shop and the shop add-on?", a: "The Online Shop is a full storefront build. The add-on adds a simple shop of up to 10 products to an otherwise suitable website, using standard platform features only, with a tightly defined scope." },
      { q: "Do I need to pay a platform subscription?", a: "Usually. Established shop platforms charge their own monthly or annual fee. We explain the options before you decide." },
      costFaq
    ]
  },
  {
    slug: "website-redesign",
    cat: "websites",
    name: "Website Refresh & Redesign",
    summary: "Refresh a dated website so it looks right, works on phones and reflects your business today.",
    intro: "We review what you have first, then agree what to keep, improve and replace. You get a clearer, more modern website without starting from scratch where that is not needed.",
    whoFor: ["Businesses whose website looks dated or is hard to use on a phone", "Companies that have outgrown their first website", "Owners who want a fresh look and clearer structure"],
    includes: ["A review of your current website", "Fresh design and clearer page structure", "Mobile-friendly layouts", "Existing content moved across and tidied", "Migration to new hosting where needed", "Planning so existing page addresses are not lost"],
    expect: ["We review your current site and agree goals.", "We quote the work based on what we find.", "We redesign, check and launch with you."],
    notes: "Redesigns are quoted after a review. They are not priced automatically as a new build.",
    addons: ["redesign", "migration", "speed", "accessibility", "content-upload"],
    faqs: [
      { q: "Why is a redesign quoted rather than priced?", a: "Every existing site is different. Its size, content and platform change the work involved, so we quote after reviewing it." },
      { q: "Will I lose my Google visibility?", a: "We plan page addresses and redirects carefully to avoid unnecessary loss. Nobody can guarantee search results, but we take care to protect what you have." },
      costFaq
    ]
  },
  {
    slug: "speed-accessibility-seo",
    cat: "websites",
    name: "Speed, Ease of Use & Google Visibility",
    summary: "Make your website faster, easier to use and easier to find on Google.",
    intro: "We tidy the technical basics that make pages faster, easier to read and easier to find, then explain in plain language what we changed.",
    whoFor: ["Businesses whose pages load slowly", "Owners who want a website that more people can use comfortably", "Local businesses that want the search basics in place"],
    includes: ["Website speed improvements", "Accessibility improvement pass", "Clear page titles and descriptions", "Local search set-up for key pages", "Google Business Profile assistance", "Google Analytics and Search Console set-up"],
    expect: ["We check your site and tell you what we find.", "We agree the improvements worth making.", "We make them and explain what changed."],
    notes: "Search engines decide rankings, so we cannot promise positions, traffic or leads. Some steps need your own accounts or external verification, for example by Google.",
    addons: ["speed", "accessibility", "local-seo", "seo-page", "gbp", "analytics", "search-console"],
    faqs: [
      { q: "Can you get me to the top of Google?", a: "Nobody can promise that. We set up the foundations properly and explain what else affects results." },
      { q: "Do I need my own Google account?", a: "Yes. Analytics, Search Console and Business Profile belong to you, so we need you to grant access or complete some steps with us. Google may also need to verify your business." },
      costFaq
    ]
  },
  {
    slug: "booking-systems",
    cat: "tools",
    name: "Online Booking & Appointments",
    summary: "Let customers book appointments online and spend less time on the phone.",
    intro: "Customers pick a service and a time, you are notified, and confirmation emails can go out automatically. Simple booking is quick to add. Advanced booking is scoped with you.",
    whoFor: ["Salons, clinics, studios and instructors", "Tradespeople who book site visits", "Venues and teams running events"],
    includes: ["Simple online booking and appointment forms", "Service and time selection", "Confirmation emails and reminders", "Calendar connection", "Event registration", "Advanced rules, such as several staff, resources or deposits, by custom quote"],
    expect: ["We map how you take bookings today.", "We agree what the booking form asks and what is sent afterwards.", "We test with real bookings before launch."],
    notes: "Advanced booking is quoted individually. Third-party booking or payment services may charge their own fees.",
    addons: ["booking-simple", "booking-advanced", "calendar", "event-reg", "welcome-email"],
    faqs: [
      { q: "Can customers pay a deposit?", a: "Deposits are part of advanced booking, which we quote individually after understanding your needs." },
      { q: "Will bookings show in my calendar?", a: "A calendar connection can be added. We confirm it works with the calendar you use." },
      costFaq
    ]
  },
  {
    slug: "forms-and-registrations",
    cat: "tools",
    name: "Forms, Quotes & Registrations",
    summary: "Spend less time answering the same enquiries, with forms that collect what you need.",
    intro: "Well-designed forms ask the right questions in the right order, and send the answers to your inbox, a spreadsheet or your customer system.",
    whoFor: ["Businesses that quote for each job", "Organisers taking event sign-ups", "Teams collecting documents or feedback"],
    includes: ["Multi-step enquiry forms", "Quote request forms with conditional questions", "Registration and event sign-up forms", "Secure document or file submission", "Customer feedback and review collection forms", "Forms connected to spreadsheets or agreed systems"],
    expect: ["We list the questions you need answered.", "We design the form so it is quick to complete.", "We test where submissions go and confirm it with you."],
    notes: "Secure document submission depends on the platform and storage chosen. We explain the options and any third-party costs first.",
    addons: ["form-multistep", "form-quote", "review-form", "event-reg", "sheet", "crm-form", "faq-accordion"],
    faqs: [
      { q: "Where do form submissions go?", a: "To your email, and optionally to a spreadsheet or customer system, depending on what you choose." },
      { q: "Can customers upload documents?", a: "Yes. We discuss which files you need, how they are stored and any limits on size or type." },
      costFaq
    ]
  },
  {
    slug: "portals-and-dashboards",
    cat: "tools",
    name: "Customer Areas, Memberships & Dashboards",
    summary: "Secure areas for customers or members, and one place for your team to manage the business.",
    intro: "We build portals, membership and subscription sites, directories and admin dashboards around how you work. Each begins with a conversation about what people need to do.",
    whoFor: ["Firms that share documents or progress with clients", "Clubs, communities and training providers with members", "Teams replacing spreadsheets with one admin area"],
    includes: ["Customer portals and account areas", "Membership and subscription websites", "Online directories and searchable listings", "Admin dashboards and business management tools", "Simple customer login using a supported platform", "Different access levels for you and your team"],
    expect: ["We agree who uses it and what they need to do.", "We plan what is built first so you can start using it early.", "We test with realistic scenarios and hand over with guidance."],
    notes: "Complex portals, dashboards and subscription products are quoted individually after a discovery conversation. They are not part of the standard packages.",
    addons: ["login", "admin-edit"],
    faqs: [
      { q: "Is a customer login included in a package?", a: "No. A simple login on a supported platform is an add-on. Anything more involved is quoted individually." },
      { q: "Can members pay monthly?", a: "Subscriptions rely on a payment provider and platform that charge their own fees. We scope this with you." },
      costFaq
    ]
  },
  {
    slug: "custom-software",
    cat: "tools",
    name: "Custom Tools & Web Apps",
    summary: "Tools built around how your business works, planned with you after a friendly discovery chat.",
    intro: "Sometimes off-the-shelf tools do not fit. We build custom web applications and interactive tools around how your team works, beginning with a discovery conversation and a written proposal.",
    whoFor: ["Businesses with a process no standard product covers", "Teams outgrowing spreadsheets and email threads", "Owners who want an online calculator or planner for customers"],
    includes: ["Custom web applications", "Custom calculators and interactive tools", "Internal business tools", "Tools that replace manual spreadsheets", "Tailored integrations", "Documentation at handover"],
    expect: ["We hold a discovery conversation about what you need.", "You receive a proposal with clear scope, price and timeframe.", "We build in stages with review points, then hand over."],
    notes: "Custom projects are never forced into standard packages. Each is proposed individually.",
    addons: [],
    faqs: [
      { q: "How much does custom software cost?", a: "It depends on scope. After the discovery conversation we provide a proposal with clear scope, price and timeframe." },
      { q: "Can it grow later?", a: "Yes. We can plan it in stages so you start with the most useful part." }
    ]
  },
  {
    slug: "integrations-automation",
    cat: "connect",
    name: "Connect Your Business Tools",
    summary: "Make your business tools work together, so routine enquiries and admin look after themselves.",
    intro: "If you re-type details, chase confirmations by hand or use tools that do not talk to each other, we can connect them so routine work happens on its own.",
    whoFor: ["Teams doing repetitive admin by hand", "Businesses using several separate online tools", "Shops and service firms that want automatic confirmations"],
    includes: ["Payment provider connections", "Email marketing connections", "Customer management (CRM) connections", "Connecting business tools and online services", "Automating repetitive enquiries, notifications and admin tasks", "Sending forms to spreadsheets or agreed systems", "Confirmation emails and reminders", "Custom API and third-party integrations where appropriate"],
    expect: ["We trace the current process and agree what to connect first.", "We set up and test the connection with real examples.", "We document what we built so you know how it works."],
    notes: "Some connections need a paid plan or API access from the other service. We check compatibility early and say plainly if something is not possible.",
    addons: ["crm-form", "sheet", "integration", "welcome-email", "calendar", "payment-extra"],
    faqs: [
      { q: "Can you connect the tools we already use?", a: "Often, where those tools offer a supported connection. We check early and tell you honestly if it is not feasible." },
      { q: "Is automation worth it for a small business?", a: "It can be, when it removes work you repeat often. We start by working out what would genuinely save you time." },
      costFaq
    ]
  },
  {
    slug: "email-and-digital-setup",
    cat: "setup",
    name: "Business Email & Digital Set-up",
    summary: "Use your own professional business email and get the everyday digital basics in place.",
    intro: "We set up the everyday essentials so your business looks professional and works reliably: email at your own domain, secure connections, analytics and the places customers look for you.",
    whoFor: ["Businesses still using a free email address", "Owners who are unsure how domains, hosting and DNS fit together", "Local businesses that want a Google Business Profile"],
    includes: ["Professional email using your own domain", "Mailbox and device set-up", "Domain and DNS configuration assistance", "Hosting set-up and migration assistance", "SSL and secure website configuration", "Google Analytics and Search Console set-up", "Google Business Profile assistance", "Newsletter forms and pop-ups", "Website chat and WhatsApp enquiry links"],
    expect: ["We check what you already own and where it is registered.", "We agree the set-up steps and who needs to do what.", "We configure, test and show you how to use it."],
    notes: "Domains, hosting, email-provider subscriptions and chat plans are paid to the provider and are separate. You keep ownership of your own accounts. Google Business Profile needs verification by Google, which we cannot guarantee.",
    addons: ["domain-email", "mailbox", "ssl", "analytics", "search-console", "gbp", "newsletter-form", "newsletter-popup", "whatsapp-btn", "live-chat"],
    faqs: [
      { q: "Do you provide the domain and hosting?", a: "We help you choose and set them up in your own account. The domain, hosting and email subscriptions are paid to the providers and stay under your control." },
      { q: "Can you guarantee Google verification?", a: "No. Google decides whether a business profile is verified. We help with the steps and tell you what Google may ask for." },
      costFaq
    ]
  },
  {
    slug: "care-and-support",
    cat: "care",
    name: "Website Care & Support",
    summary: "We’ll help keep your website running smoothly: updated, backed up and working properly once it’s live.",
    intro: "A website needs looking after. We handle updates, checks and fixes so small problems do not become big ones, and you have someone to ask when something looks wrong.",
    whoFor: ["Owners of websites we have built", "Businesses without an in-house technical person", "Anyone who wants a dependable contact for fixes and changes"],
    includes: ["Website maintenance and updates", "Backups and recovery planning", "Security updates and basic hardening", "Uptime and website health checks where supported", "Troubleshooting and repair", "Website migration", "Ongoing technical support"],
    expect: ["We review how your website is built and hosted.", "We agree a plan and what is included each month.", "We carry out the agreed care and tell you when something needs a larger project."],
    notes: "Plans include a fair monthly allowance set out in your agreement. They do not include unlimited support, 24/7 cover or unlimited edits unless we have agreed that in writing. Hosting, domains and software subscriptions are separate.",
    addons: ["ssl", "backup", "migration", "care-39", "care-69", "care-119"],
    showPlans: true,
    faqs: [
      { q: "Is support unlimited?", a: "No. Each plan has a fair monthly allowance set out in your agreement. We do not offer 24/7 cover or unlimited edits unless we have agreed it in writing." },
      { q: "Can you look after a website you did not build?", a: "Often, after a quick review of how it is built and hosted." },
      costFaq
    ]
  }
];
var serviceBySlug = (s) => SERVICES.find((x) => x.slug === s);
var linksFor = (ids) => ids.map((s) => serviceBySlug(s)).filter(Boolean).map((s) => ({ label: s.name, href: "/services/" + s.slug }));
var NAV_DROPS = {
  websites: [{ label: "Overview", href: "/website-services" }, ...linksFor(AREAS[0].slugs), { label: "Packages and pricing", href: "/pricing" }, { label: "Build your website", href: "/pricing#build" }],
  business: [{ label: "Overview", href: "/business-technology" }, ...linksFor(["booking-systems", "forms-and-registrations", "portals-and-dashboards", "custom-software", "integrations-automation", "email-and-digital-setup", "care-and-support"])]
};
var SITE = {
  name: BRAND,
  nav: [
    { label: "Home", href: "/" },
    { label: "Website Services", href: "/website-services", drop: "websites" },
    { label: "Business Technology", href: "/business-technology", drop: "business" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" }
  ],
  cta: { label: "Get a Quote", href: "/contact" }
};
var PROCESS_STEPS = [
  { title: "Start a conversation", text: "Tell us what you need by form, phone, WhatsApp or email. A short, friendly conversation is enough to begin." },
  { title: "Let’s understand what your business needs", text: "We talk through your goals, pages and priorities, and tell you honestly what you do and don’t need." },
  { title: "Get your price and project plan", text: "You get exactly what’s included, the price and the timeframe in writing before any work begins." },
  { title: "Design and build", text: "We build what we agreed and keep you updated, with chances to review along the way." },
  { title: "Review and launch", text: "You check the work. We make the agreed changes within your revision rounds, then launch together." },
  { title: "Handover and support", text: "We hand everything over, show you how to use it, and you choose the support that suits you." }
];
var NEEDS = [
  { key: "site", label: "I need a website", text: "A professional website that explains what you do and makes it easy for customers to contact you.", links: ["/services/business-websites", "/pricing"] },
  { key: "sell", label: "I want to sell online", text: "Let customers pay securely on your website, with a simple basket and checkout.", links: ["/services/online-shops", "/pricing#build"] },
  { key: "book", label: "I want customers to book", text: "Let customers book appointments online and spend less time answering the phone.", links: ["/services/booking-systems", "/services/forms-and-registrations"] },
  { key: "admin", label: "I want to save admin time", text: "Spend less time answering the same enquiries and re-typing the same details.", links: ["/services/integrations-automation", "/services/forms-and-registrations"] },
  { key: "email", label: "I need business email or a domain", text: "Use your own professional business email and get your domain, security and Google basics in place.", links: ["/services/email-and-digital-setup"] },
  { key: "care", label: "My website needs looking after", text: "Keep your website updated and working properly, or refresh one that feels dated.", links: ["/services/care-and-support", "/services/website-redesign"] },
  { key: "custom", label: "I need something custom", text: "Portals, member areas, dashboards and bespoke tools, scoped after a conversation.", links: ["/services/portals-and-dashboards", "/services/custom-software"] }
];
var WHY = [
  { h: "A clear process", p: "Six simple steps from first chat to handover, so you always know what comes next." },
  { h: "Plain-English pricing", p: "Clear packages, priced extras and a calculator that shows an estimate before you get in touch." },
  { h: "Exactly what you’re getting", p: "You see what’s included, what isn’t and what other providers charge before you commit." },
  { h: "Looked after once live", p: "Care plans and friendly support are there when your website goes live." }
];
var USE_CASES = [
  { h: "Salons, clinics and studios", p: "Let customers book appointments online." },
  { h: "Restaurants and caf\xE9s", p: "Menus, opening times and table requests that are easy to find." },
  { h: "Shops and makers", p: "Let customers pay securely on your website." },
  { h: "Tradespeople and field services", p: "Quote request forms that collect the right details first time." },
  { h: "Property and lettings", p: "Clear listings with photos and enquiry forms." },
  { h: "Professional services", p: "A credible website and a secure area for client documents." },
  { h: "Clubs, training and community", p: "Event sign-ups, memberships and directories." }
];
var CONCEPTS = [
  { key: "booking", title: "Appointment booking for a wellness studio", need: "A small studio loses time to phone calls and messages when clients want to book.", solution: "A simple online booking flow with service and time selection, confirmation emails and a schedule view for staff.", features: ["Service and time selection", "Confirmation and reminder emails", "Staff schedule view"] },
  { key: "store", title: "Online shop for an independent homeware brand", need: "A maker selling at markets wants customers to buy from them online.", solution: "A clean storefront with categories, clear product pages and a short checkout using an established platform.", features: ["Product categories", "Clear product pages", "Basket and checkout"] },
  { key: "portal", title: "Client portal for a professional services firm", need: "A firm shares documents and updates by email, and clients lose track.", solution: "A secure area where clients see progress, shared documents and messages in one place.", features: ["Secure sign-in", "Progress overview", "Document sharing"] },
  { key: "cafe", title: "Website for a neighbourhood caf\xE9", need: "A caf\xE9 wants regulars and newcomers to find the menu, hours and location quickly.", solution: "A fast, photo-led website with menu, opening hours, map and an enquiry form for group bookings.", features: ["Menu and opening hours", "Map and directions", "Group booking enquiry form"] },
  { key: "property", title: "Listings website for a small lettings agency", need: "An agency needs listings that are easy to browse and enquire about.", solution: "A searchable set of property listings with photos, key details and an enquiry form on every listing.", features: ["Searchable listings", "Photo galleries", "Enquiry on each listing"] },
  { key: "directory", title: "Member directory for a local business network", need: "A network wants members to be found by each other and by the public.", solution: "A directory with member profiles, categories and search, with an admin area for the organisers.", features: ["Member profiles", "Categories and search", "Admin area for organisers"] }
];
var REVIEWS = [];
var SHOW_SAMPLE_REVIEW = false;
var SAMPLE_REVIEW = { id: "sample", name: "Sample name", company: "Sample company", service: "Sample service", quote: "This is placeholder text that shows how an approved review will look. It is not a real customer comment." };
function homeFaqs() {
  const live = promoLive();
  const s = packageById("starter"), b = packageById("business"), p = packageById("plus"), sh = packageById("shop");
  const priced = live ? `Website Starter is ${gbp(s.price)}, Business Website ${gbp(b.price)}, Business Plus ${gbp(p.price)} and Online Shop from ${gbp(sh.price)}. These are one-off project fees for the scopes listed, shown as a limited-time introductory offer.` : "Packages and extras are confirmed by quote once the introductory offer has ended.";
  return [
    { q: "What does a website cost?", a: `${priced} Domain, hosting, premium plugins, payment-provider charges and other third-party costs are separate unless a proposal says otherwise. ${VAT_NOTE}` },
    { q: "When does the introductory offer end?", a: live ? `Promotional pricing applies to eligible projects confirmed by ${PROMOTION.endsLabel}. Offer available until ${PROMOTION.endsLabel}.` : "The introductory offer has ended. Tell us what you need and we will confirm pricing in your proposal." },
    { q: "Can I update the website myself?", a: "Where content management is part of your package or an add-on, yes. We agree which content you can edit and show you how at handover." },
    { q: "How many changes can I ask for?", a: "Each package includes a stated number of agreed revision rounds. Additional changes can be quoted. Revisions are not unlimited." },
    { q: "Do you work with clients outside the UK?", a: "Yes. The UK is our main market, and we also work with clients in the United States, Canada and Australia. Pricing is shown in pounds sterling. Tell us where you are and we will confirm how your quote is presented." },
    { q: "What happens after I send an enquiry?", a: "We’ll read your details, may ask a few questions, and reply the way you prefer. If it looks like a good fit, you’ll get your price and project plan in writing, with exactly what’s included and the timeframe." },
    { q: "How long does a website take?", a: DELIVERY_FAQ },
    { q: "Do you guarantee rankings, traffic or sales?", a: "No. We build solid foundations and explain what else affects results, but nobody can honestly promise search rankings, traffic, leads or revenue." },
    { q: "Can I see examples of your work?", a: "Our Work page shows clearly labelled concept projects that illustrate our approach. They are not client projects and show no client results." }
  ];
}
function pricingFaqs() {
  return [
    { q: "Are these fixed prices?", a: "They are indicative prices for the defined scopes shown. Your final quotation is confirmed after we review your requirements, and the calculator is not a binding quote." },
    { q: "What is not included in the prices?", a: "Domain names, hosting, premium plugins, paid themes, payment-provider charges, platform subscriptions, email provider fees, stock photography and other third-party charges are separate unless expressly included." },
    { q: "What if my project does not fit a package?", a: "Complex portals, SaaS products, custom dashboards, complex integrations and bespoke software are quoted individually after a discovery conversation." },
    { q: "Do you offer unlimited revisions or support?", a: "No. Packages include a stated number of revision rounds, and care plans include a fair monthly allowance. Anything beyond that can be quoted." },
    { q: "How long does a website take?", a: DELIVERY_FAQ },
    { q: "Do I pay anything through this website?", a: "No. There is no checkout and no payment is collected here. The calculator only builds an estimate you can send with your enquiry." }
  ];
}
function SLink({ href, children, ...rest }) {
  if (!href.startsWith("/")) return <a href={href} {...rest}>{children}</a>;
  return <Link2 to={href} {...rest}>{children}</Link2>;
}
var pathOnly = (href) => href.split("#")[0];
function isActive(pathname, href) {
  const h = pathOnly(href);
  return h === "/" ? pathname === "/" : pathname === h || pathname.startsWith(h + "/");
}
function Header() {
  const pathname = useLocation2({ select: (l) => l.pathname });
  const [menu, setMenu] = React3.useState(false);
  const [open, setOpen] = React3.useState(null);
  const navRef = React3.useRef(null);
  React3.useEffect(() => {
    setMenu(false);
    setOpen(null);
  }, [pathname]);
  React3.useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMenu(false);
      }
    };
    const click = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", click);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("mousedown", click);
    };
  }, []);
  const live = promoLive();
  return <header className="site-header">
      {live && <div className="offerbar">
          <div className="container offerbar__in">
            <p><strong>December offer:</strong> websites from {gbp(packageById("starter").price)}. Offer available until {PROMOTION.endsLabel}.</p>
            <SLink href="/pricing">See packages and pricing</SLink>
          </div>
        </div>}
      <div className="container header__in">
        <SLink href="/" className="wordmark" aria-label={`${BRAND} home`}>
          <img className="mark-img" src={cath_logo_default} alt="" width={34} height={34} />
          <span>{BRAND}</span>
        </SLink>
        <button type="button" className="menu-btn" aria-expanded={menu} aria-controls="primary-nav" onClick={() => setMenu((m) => !m)}>
          <Icon name={menu ? "close" : "menu"} />
          <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
        </button>
        <div id="primary-nav" className="header__panel" data-open={menu}>
          <nav aria-label="Main" ref={navRef}>
            <ul className="nav">
              {SITE.nav.map((n) => {
    if (!n.drop) return <li key={n.href}><SLink className="nav__link" href={n.href} aria-current={isActive(pathname, n.href) ? "page" : void 0}>{n.label}</SLink></li>;
    const items = NAV_DROPS[n.drop];
    const groupActive = items.some((l) => isActive(pathname, l.href));
    return <li key={n.href} className="nav__svc">
                    <button type="button" className="nav__link" aria-expanded={open === n.drop} aria-controls={`drop-${n.drop}`} aria-current={groupActive ? "true" : void 0} onClick={() => setOpen(open === n.drop ? null : n.drop)}>
                      {n.label} <Icon name="chevron" size={16} />
                    </button>
                    <ul id={`drop-${n.drop}`} className="subnav" hidden={open !== n.drop}>
                      {items.map((l) => <li key={l.href}><SLink href={l.href} aria-current={pathname === pathOnly(l.href) && !l.href.includes("#") ? "page" : void 0}>{l.label}</SLink></li>)}
                    </ul>
                  </li>;
  })}
            </ul>
          </nav>
          <ThemeControl />
          <SLink href={SITE.cta.href} className="btn btn--primary">{SITE.cta.label}</SLink>
        </div>
      </div>
    </header>;
}
function Footer() {
  return <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img className="mark-img" src={cath_logo_default} alt="" width={42} height={42} />
          <p className="footer__name">{BRAND}</p>
          <p>{TAGLINE}</p>
          <address className="footer__address">{CONTACT.address}</address>
        </div>
        <nav aria-label="Website services">
          <h2 className="footer__h">Website Services</h2>
          <ul>
            <li><SLink href="/website-services">Overview</SLink></li>
            {linksFor(AREAS[0].slugs).map((s) => <li key={s.href}><SLink href={s.href}>{s.label}</SLink></li>)}
            <li><SLink href="/pricing">Packages and pricing</SLink></li>
          </ul>
        </nav>
        <nav aria-label="Business technology">
          <h2 className="footer__h">Business Technology</h2>
          <ul>
            <li><SLink href="/business-technology">Overview</SLink></li>
            {NAV_DROPS.business.slice(1).map((s) => <li key={s.href}><SLink href={s.href}>{s.label}</SLink></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="footer__h">Contact</h2>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a href={CONTACT.emailHref}>{CONTACT.email}</a></li>
          </ul>
          <h2 className="footer__h footer__h--gap">Company</h2>
          <ul>
            <li><SLink href="/our-approach">Our Approach</SLink></li>
            <li><SLink href="/our-work">Our Work</SLink></li>
            <li><SLink href="/about">About</SLink></li>
            <li><SLink href="/reviews">Customer feedback</SLink></li>
            <li><SLink href="/contact">Contact and quotes</SLink></li>
          </ul>
        </div>
      </div>
      <div className="container footer__base">
        <p>&copy; {(/* @__PURE__ */ new Date()).getFullYear()} {BRAND}. Prices are indicative and confirmed in your written proposal.</p>
        <ul className="footer__legal">
          <li><SLink href="/privacy">Privacy</SLink></li>
          <li><SLink href="/cookies">Cookies</SLink></li>
          <li><ManageConsentButton /></li>
        </ul>
      </div>
    </footer>;
}
function SiteShell({ children }) {
  return <div>
      <a className="skip-link" href="#main" onClick={(e) => {
    e.preventDefault();
    const m = document.getElementById("main");
    m?.focus();
    m?.scrollIntoView();
  }}>Skip to main content</a>
      <ScrollProgress2 />
      <Spotlight />
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
      <WhatsAppFab />
      <ScrollReveal />
      <ConsentBanner />
      <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: { "@type": "PostalAddress", streetAddress: "66 High Street", addressLocality: "Bromley", addressRegion: "England", addressCountry: "GB" },
    areaServed: ["GB", "US", "CA", "AU"]
  }} />
    </div>;
}
function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
function PageHero({ title, lead, children }) {
  const pathname = useLocation2({ select: (l) => l.pathname });
  const img = TECH_HEROES[pathname] || tech_hero_default;
  return <div className="page-hero hero--image">
      <div className="hero__bg" aria-hidden="true"><img key={img} src={img} alt="" width={1600} height={1e3} /></div>
      <Orbs />
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </div>;
}
function ContactActions() {
  return <ul className="contact-actions">
      <li><a className="btn btn--ghost" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} />Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
      <li><a className="btn btn--ghost" href={CONTACT.phoneHref}><Icon name="phone" size={18} />{CONTACT.phoneDisplay}</a></li>
      <li><a className="btn btn--ghost" href={CONTACT.emailHref}><Icon name="mail" size={18} />Email us</a></li>
    </ul>;
}
function CTASection({ heading, text, cta = SITE.cta }) {
  return <section className="section cta-band" aria-labelledby="cta-h">
      <div className="container">
        <h2 id="cta-h">{heading}</h2>
        <p className="lead">{text}</p>
        <div className="cta-band__actions">
          <SLink href={cta.href} className="btn btn--invert">{cta.label}</SLink>
          <ContactActions />
        </div>
      </div>
    </section>;
}
function Timeline({ steps, heading, lead, id = "process" }) {
  return <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <div className="container">
        <div className="section__head"><h2 id={`${id}-h`}>{heading}</h2>{lead && <p className="lead">{lead}</p>}</div>
        <ol className="timeline">
          {steps.map((s, i) => <li key={s.title}><span className="timeline__n" aria-hidden="true">{i + 1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}
        </ol>
      </div>
    </section>;
}
function Faq({ items, heading = "Frequently asked questions", id = "faq" }) {
  return <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <div className="container container--narrow">
        <h2 id={`${id}-h`}>{heading}</h2>
        <div className="faq">
          {items.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </div>
      </div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </section>;
}
function OfferBanner() {
  if (!promoLive()) return null;
  return <aside className="offer" aria-label="Introductory offer">
      <div>
        <h3>Limited-time introductory website offer</h3>
        <p>Promotional pricing applies to eligible projects confirmed by {PROMOTION.endsLabel}. <strong>Offer available until {PROMOTION.endsLabel}.</strong></p>
      </div>
      <SLink href="/contact" className="btn btn--primary">Book by {PROMOTION.endsLabel}</SLink>
    </aside>;
}
function labelFor(href) {
  if (href === "/pricing") return "See packages and pricing";
  if (href === "/pricing#build") return "Build your website and see an indicative price";
  const s = serviceBySlug(href.replace("/services/", ""));
  return s ? s.name : href;
}
function NeedsFinder() {
  const [k, setK] = React3.useState(NEEDS[0].key);
  const cur = NEEDS.find((n) => n.key === k);
  const onKey = (e) => {
    const i = NEEDS.findIndex((n) => n.key === k);
    let j = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % NEEDS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + NEEDS.length) % NEEDS.length;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = NEEDS.length - 1;
    else return;
    e.preventDefault();
    setK(NEEDS[j].key);
    document.getElementById("need-" + NEEDS[j].key)?.focus();
  };
  return <div className="needs">
      <div role="tablist" aria-label="What do you need help with?" className="needs__tabs" onKeyDown={onKey}>
        {NEEDS.map((n) => <button key={n.key} type="button" role="tab" id={"need-" + n.key} aria-selected={k === n.key} aria-controls="need-panel" tabIndex={k === n.key ? 0 : -1} onClick={() => setK(n.key)}>{n.label}</button>)}
      </div>
      <div role="tabpanel" id="need-panel" aria-labelledby={"need-" + k} className="needs__panel">
        <p className="lead">{cur.text}</p>
        <ul className="needs__links">{cur.links.map((l) => <li key={l}><SLink href={l} className="btn btn--ghost">{labelFor(l)}</SLink></li>)}</ul>
      </div>
    </div>;
}
function PackageStrip() {
  return <ul className="pkg-strip">
      {PACKAGES.map((p) => <li key={p.id} className={p.popular ? "is-popular" : ""}>
          <div>
            <h3>{p.name}{p.popular && <span className="badge badge--pop">Recommended</span>}</h3>
            <p>{p.blurb}</p>
            <p className="pkg-strip__time">Typically {p.id === "plus" || p.id === "shop" ? "7–14" : "3–7"} working days for a standard project.</p>
          </div>
          <p className="pkg-strip__price">{priceText({ ...p, kind: "once" })}</p>
        </li>)}
    </ul>;
}
function PackagesTable({ onChoose }) {
  const live = promoLive();
  return <><PackageCards onChoose={onChoose} /><div className="table-wrap" role="region" aria-label="Package comparison, scrolls sideways on small screens" tabIndex={0}>
      <table className="ptable">
        <caption className="sr-only">Comparison of website packages. One-off project fees.</caption>
        <thead>
          <tr>
            <td />
            {PACKAGES.map((p) => <th key={p.id} scope="col" className={p.popular ? "is-popular" : ""}>
                {p.popular && <span className="badge badge--pop">Recommended</span>}
                <span className="ptable__name">{p.name}</span>
                <span className="ptable__price">{priceText({ ...p, kind: "once" })}</span>
                <span className="ptable__note">{live ? "one-off, introductory offer" : "one-off"}</span>
              </th>)}
          </tr>
        </thead>
        <tbody>
          {COMPARE_ROWS.map((r) => <tr key={r[0]}>
              <th scope="row">{r[0]}</th>
              {r.slice(1).map((c, i) => <td key={i} className={PACKAGES[i].popular ? "is-popular" : ""}>{c === "–" ? <><span aria-hidden="true">{"–"}</span><span className="sr-only">Not included</span></> : c}</td>)}
            </tr>)}
        </tbody>
        {onChoose && <tfoot>
            <tr>
              <td />
              {PACKAGES.map((p) => <td key={p.id} className={p.popular ? "is-popular" : ""}><button type="button" className={`btn ${p.popular ? "btn--primary" : "btn--ghost"}`} onClick={() => onChoose(p.id)}>Customise this package</button></td>)}
            </tr>
          </tfoot>}
      </table>
    </div></>;
}
function PackageCards({ onChoose }) {
  const live = promoLive();
  return <div className="pcards">
      {PACKAGES.map((p, i) => <article key={p.id} className={`pcard${p.popular ? " is-popular" : ""}`}>
          {p.popular && <span className="badge badge--pop">Recommended</span>}
          <h3>{p.name}</h3>
          <p className="pcard__price">{priceText({ ...p, kind: "once" })}</p>
          <p className="pcard__note">{live ? "one-off, introductory offer" : "one-off"}</p>
          <dl>
            {COMPARE_ROWS.filter((r) => r[i + 1] !== "–").map((r) => <div key={r[0]}><dt>{r[0]}</dt><dd>{r[i + 1]}</dd></div>)}
          </dl>
          {COMPARE_ROWS.some((r) => r[i + 1] === "–") && <p className="pcard__missing"><strong>Not included:</strong> {COMPARE_ROWS.filter((r) => r[i + 1] === "–").map((r) => r[0].toLowerCase()).join(", ")}.</p>}
          {onChoose && <button type="button" className={`btn btn--block ${p.popular ? "btn--primary" : "btn--ghost"}`} onClick={() => onChoose(p.id)}>Customise this package</button>}
        </article>)}
    </div>;
}
var CARE_PLANS = {
  "care-39": {
    forWho: "Best if you mainly want the essentials kept in order.",
    points: ["Essential website updates", "Basic checks to catch problems early", "Kept within your agreed monthly allowance"],
    support: "Support level and response times: as set out in your service agreement."
  },
  "care-69": {
    forWho: "A good fit if you also want backups, health checks and the odd small change made for you.",
    points: ["Essential updates", "Backups and health checks, where supported by your hosting or platform", "A modest allowance for small content changes"],
    support: "Support level and response times: as set out in your service agreement."
  },
  "care-119": {
    forWho: "For businesses that want more regular, hands-on support.",
    points: ["More regular support", "Content and technical tasks agreed with you and listed in your service agreement", "Monthly price starts from £119 and is confirmed in your service agreement"],
    support: "Support level and response times: as set out in your service agreement."
  }
};
function CarePlans({ intro = true }) {
  const live = promoLive();
  return <div className="careplans">
      {intro && <div className="careplans__intro">
          <h3>Why ongoing website care matters</h3>
          <p>A website is a bit like a shop front: it works best when someone keeps an eye on it. Regular updates, backups and security checks stop small problems turning into big ones, so you can get on with running your business.</p>
          <p><strong>Not sure which plan to choose?</strong> Start with Website maintenance if you mainly want the essentials looked after. Choose Website care plus if you would also like backups, health checks and small content changes. Choose Website management if you want more regular support, with tasks agreed in writing.</p>
        </div>}
      <div className="plans plans--cols">
        {["care-39", "care-69", "care-119"].map((id) => {
    const a = addon(id);
    const d = CARE_PLANS[id];
    const p = priceOf(a, live);
    return <article key={id} className="plan">
              <h3 className="plan__name">{a.name}</h3>
              <p className="plan__price" aria-label={priceText(a)}>
                {p == null ? <span className="plan__amt plan__amt--text">Price confirmed by quote</span> : <>
                    {a.from && <span className="plan__from">from </span>}
                    <span className="plan__amt">{gbp(p)}</span>
                    <span className="plan__per"> per month</span>
                  </>}
              </p>
              <p className="plan__desc">{a.desc}</p>
              <ul className="ticks plan__points">{d.points.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}</ul>
              <AskButton service="Website care and support" note={`I’m interested in the ${a.name} care plan (${priceText(a)}).`} className="btn btn--ghost btn--block plan__cta">Ask about this plan</AskButton>
            </article>;
  })}
      </div>
      <p className="note plans__note">Each plan has a fair monthly allowance, set out in your agreement. Plans do not include unlimited support, 24/7 cover or unlimited edits unless we have agreed that in writing. Hosting, domains and software subscriptions are separate. Support level and response times for each plan are set out in your service agreement. Monthly care is charged per month and is never part of a one-off website build price.</p>
    </div>;
}
function Testimonials({ heading = "Customer feedback" }) {
  const items = SHOW_SAMPLE_REVIEW ? [...REVIEWS, SAMPLE_REVIEW] : REVIEWS;
  return <section className="section section--surface" id="feedback" aria-labelledby="fb-h">
      <div className="container">
        <div className="section__head"><h2 id="fb-h">{heading}</h2></div>
        {items.length === 0 ? <div className="fb-empty">
            <p className="lead">Customer feedback will be published here as projects are completed.</p>
            <p>If we have worked together, we would value an honest review. Nothing is published without approval.</p>
            <SLink href="/reviews#share" className="btn btn--ghost">Share your feedback</SLink>
          </div> : <ul className="quotes">
            {items.map((r) => <li key={r.id} className="quote">
                {r.id === "sample" && <span className="badge badge--warn">SAMPLE TESTIMONIAL — DEMONSTRATION ONLY</span>}
                <blockquote><p>{r.quote}</p></blockquote>
                <p className="quote__by"><strong>{r.name}</strong>{r.company ? `, ${r.company}` : ""}{r.service ? ` \u2014 ${r.service}` : ""}</p>
              </li>)}
          </ul>}
      </div>
    </section>;
}
function AskButton({ service, note, children, className = "btn btn--primary" }) {
  const navigate = React3.useContext(NavContext);
  const { setDraft } = React3.useContext(DraftContext);
  return <button type="button" className={className} onClick={() => {
    setDraft({ summary: "", service, note });
    navigate("/contact");
  }}>{children}</button>;
}
var SERVICE_FORM_OPTION = {
  "business-websites": "Business or corporate website",
  "hospitality-property-websites": "Business or corporate website",
  "online-shops": "Online shop",
  "website-redesign": "Website redesign",
  "speed-accessibility-seo": "Business email and domain set-up",
  "booking-systems": "Booking or appointment system",
  "forms-and-registrations": "Forms, quotes or registrations",
  "portals-and-dashboards": "Customer portal, membership or dashboard",
  "custom-software": "Custom web application or tool",
  "integrations-automation": "Integrations or automation",
  "email-and-digital-setup": "Business email and domain set-up",
  "care-and-support": "Website care and support"
};
function ServicePage({ service }) {
  const related = [...SERVICES.filter((s) => s.slug !== service.slug && s.cat === service.cat), ...SERVICES.filter((s) => s.slug !== service.slug && s.cat !== service.cat)].slice(0, 4);
  return <>
      <PageHero title={service.name} lead={service.intro}>
        <div className="actions">
          <AskButton service={SERVICE_FORM_OPTION[service.slug]}>Ask about this service</AskButton>
          <SLink href="/pricing" className="btn btn--ghost">Packages and pricing</SLink>
        </div>
      </PageHero>
      <section className="section" aria-labelledby="inc-h">
        <div className="container split">
          <div>
            <h2 id="inc-h">What is included</h2>
            <ul className="ticks ticks--lg">{service.includes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <h2>Who it helps</h2>
            <ul className="plain">{service.whoFor.map((w) => <li key={w}>{w}</li>)}</ul>
            <h2 className="mt">What to expect</h2>
            <ol className="plain plain--ol">{service.expect.map((e) => <li key={e}>{e}</li>)}</ol>
          </div>
        </div>
      </section>
      <section className="section section--surface" aria-labelledby="price-h">
        <div className="container split">
          <div>
            <h2 id="price-h">{service.addons.length ? "Typical prices" : "How pricing works"}</h2>
            {service.addons.length ? <>
                <ul className="pricelist">
                  {service.addons.filter((id) => !(service.showPlans && addon(id).kind === "month")).map((id) => {
    const a = addon(id);
    return <li key={id}><span>{a.name}</span><strong>{priceText(a)}</strong></li>;
  })}
                </ul>
                <p className="note">One-off fees unless marked monthly. Included features are never charged twice. {VAT_NOTE}</p>
              </> : <p className="lead">This kind of project is proposed individually. After a discovery conversation you receive a clear scope, price and timeframe in writing.</p>}
            
            <p className="mt"><SLink href="/pricing#build" className="btn btn--ghost">Build your website and see an indicative price</SLink></p>
          </div>
          <div>
            <h2>Good to know</h2>
            <p className="callout">{service.notes}</p>
            <p>Your final quotation is confirmed after we review the scope.</p>
          </div>
        </div>
      </section>
      {service.showPlans && <section className="section" aria-labelledby="plans-h">
          <div className="container">
            <div className="section__head"><h2 id="plans-h">Monthly care plans</h2><p className="lead">Pick the level of care that suits your website and budget.</p></div>
            <CarePlans />
          </div>
        </section>}
      <Faq items={service.faqs} heading={`${service.name}: common questions`} id="faq" />
      <section className="section section--surface" aria-labelledby="rel-h">
        <div className="container">
          <h2 id="rel-h">Related services</h2>
          <ul className="related">
            {related.map((r) => <li key={r.slug}><SLink href={`/services/${r.slug}`}><strong>{r.name}</strong><span>{r.summary}</span></SLink></li>)}
          </ul>
        </div>
      </section>
      <CTASection heading={`Talk to us about ${service.name.toLowerCase()}`} text="Tell us what you need. We reply using the contact method you choose and, if it is a fit, send a written proposal." />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.intro, provider: { "@type": "Organization", name: BRAND }, areaServed: ["GB", "US", "CA", "AU"] }} />
    </>;
}
var BASE_OPTIONS = [
  ...PACKAGES.map((p) => ({ id: p.id, name: p.name, blurb: p.blurb, popular: p.popular })),
  { id: "none", name: "I already have a website", blurb: "Add-ons and care only, with no new website build." },
  { id: "custom", name: "I need a custom quote", blurb: "For portals, web applications, dashboards, complex integrations or bespoke software." }
];
var BASE_SERVICE_HINT = { starter: "Business or corporate website", business: "Business or corporate website", plus: "Business or corporate website", shop: "Online shop", custom: "Custom web application or tool", none: "Not sure yet" };
function Calculator({ base, setBase }) {
  const navigate = React3.useContext(NavContext);
  const { setDraft } = React3.useContext(DraftContext);
  const live = promoLive();
  const [sel, setSel] = React3.useState({});
  const [showBar, setShowBar] = React3.useState(false);
  React3.useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const calc = document.getElementById("build");
    const main = document.querySelector(".calc__summary--main");
    if (!calc) return;
    let inCalc = false, inMain = false;
    const io = new IntersectionObserver((es) => {
      for (const e of es) { if (e.target === calc) inCalc = e.isIntersecting; else inMain = e.isIntersecting; }
      setShowBar(inCalc && !inMain);
    }, { threshold: 0.05 });
    io.observe(calc);
    if (main) io.observe(main);
    return () => io.disconnect();
  }, []);
  const chosen = packageById(base);
  const shopAddonOk = ["starter", "business", "plus"].includes(base);
  const hasShop = base === "shop" || !!sel["shop-addon"] && shopAddonOk;
  function stateOf(a) {
    if (base === "custom") return { blocked: "Custom proposals are scoped with you. Describe what you need in your enquiry." };
    if (a.includedIn?.includes(base)) return { included: true };
    if (a.id === "shop-addon" && !shopAddonOk) return { blocked: "Needs a new website package to add it to." };
    if (a.requiresShop && !hasShop) return { blocked: "Needs an online shop: choose the Online Shop package or the shop add-on." };
    return {};
  }
  const toggle = (a) => setSel((s) => {
    const n = { ...s };
    if (n[a.id]) delete n[a.id];
    else {
      if (a.exclusive) ADDONS.forEach((o) => {
        if (o.exclusive === a.exclusive) delete n[o.id];
      });
      n[a.id] = 1;
    }
    return n;
  });
  const setQty = (a, q) => setSel((s) => ({ ...s, [a.id]: Math.max(1, Math.min(99, q)) }));
  const picked = ADDONS.filter((a) => sel[a.id] && !stateOf(a).included && !stateOf(a).blocked);
  const includedPicked = ADDONS.filter((a) => sel[a.id] && stateOf(a).included);
  let one = 0, month = 0, fromOne = false, fromMonth = false, unpriced = false;
  const oneLines = [], monthLines = [], quoteLines = [];
  if (chosen) {
    const p = priceOf(chosen, live);
    if (p == null) unpriced = true;
    else {
      one += p;
      fromOne ||= !!chosen.from;
      oneLines.push({ key: chosen.id, text: chosen.name + (chosen.from ? " (from)" : ""), amount: p });
    }
  }
  for (const a of picked) {
    const q = a.qty ? sel[a.id] : 1;
    if (a.quote) {
      quoteLines.push(a.name);
      continue;
    }
    const p = priceOf(a, live);
    if (p == null) {
      unpriced = true;
      continue;
    }
    const line = { key: a.id, text: a.name + (q > 1 ? ` \xD7 ${q}` : "") + (a.from ? " (from)" : ""), amount: p * q };
    if (a.kind === "month") {
      month += p * q;
      fromMonth ||= !!a.from;
      monthLines.push(line);
    } else {
      one += p * q;
      fromOne ||= !!a.from;
      oneLines.push(line);
    }
  }
  const anything = !!chosen || picked.length > 0 || base === "custom" || base === "none" && picked.length > 0;
  const money = (n, from) => (from ? "from " : "") + gbp(n);
  function summaryText() {
    const out = [];
    const baseName = BASE_OPTIONS.find((b) => b.id === base)?.name;
    out.push("Starting point: " + (baseName || "none chosen") + (chosen && !unpriced ? ` (${money(priceOf(chosen, live), chosen.from)})` : ""));
    if (picked.length) out.push("Extras: " + picked.map((a) => {
      const q = a.qty ? sel[a.id] : 1;
      return a.name + (q > 1 ? ` \xD7 ${q}` : "") + " (" + (a.quote ? "custom quote" : priceOf(a, live) == null ? "price by quote" : money(priceOf(a, live) * q, a.from) + (a.kind === "month" ? "/month" : "")) + ")";
    }).join("; "));
    if (includedPicked.length) out.push("Already included, not charged: " + includedPicked.map((a) => a.name).join("; "));
    if (!unpriced && base !== "custom") {
      out.push("Indicative one-off total: " + money(one, fromOne));
      if (month) out.push("Indicative monthly total: " + money(month, fromMonth) + "/month");
    }
    if (quoteLines.length) out.push("To be quoted: " + quoteLines.join("; "));
    out.push("This is an indicative estimate, not a binding quote. Third-party costs are separate. " + (live ? `Introductory prices apply to eligible projects confirmed by ${PROMOTION.endsLabel}.` : ""));
    return out.join("\n");
  }
  const send = () => {
    setDraft({ summary: summaryText(), service: BASE_SERVICE_HINT[base] });
    navigate("/contact");
  };
  const renderEstimate = (kind) => <aside className={`calc__summary calc__summary--${kind}`} aria-labelledby={`sum-h-${kind}`}>
        <h3 id={`sum-h-${kind}`}>Your estimate</h3>
        <div aria-live={kind === "main" ? "polite" : undefined} aria-atomic="true">
          {base === "custom" ? <p className="lead">A custom proposal is prepared after a discovery conversation, with scope, price and timeframe in writing.</p> : !anything ? <p>Choose a starting point or an extra to see an indicative total.</p> : <>
              <p className="sum__label">One-off total</p>
              <p className="sum__total">{unpriced ? "Confirmed by quote" : money(one, fromOne)}</p>
              {month > 0 && !unpriced && <><p className="sum__label">Monthly total</p><p className="sum__total sum__total--m">{money(month, fromMonth)}<small>/month</small></p></>}
              {unpriced && <p className="note">{live ? "Some items have no listed price." : "The introductory offer has ended. Standard prices are confirmed in your quote."}</p>}
            </>}
        </div>
        {anything && base !== "custom" && <>
            <ul className="sum__lines">
              {oneLines.map((l) => <li key={l.key}><span>{l.text}</span><strong>{gbp(l.amount)}</strong></li>)}
            </ul>
            {monthLines.length > 0 && <><p className="sum__label">Recurring</p><ul className="sum__lines">{monthLines.map((l) => <li key={l.key}><span>{l.text}</span><strong>{gbp(l.amount)}/mo</strong></li>)}</ul></>}
            {quoteLines.length > 0 && <><p className="sum__label">To be quoted</p><ul className="sum__lines">{quoteLines.map((q) => <li key={q}><span>{q}</span><strong>Custom</strong></li>)}</ul></>}
            {includedPicked.length > 0 && <><p className="sum__label">Already included</p><ul className="sum__lines">{includedPicked.map((a) => <li key={a.id}><span>{a.name}</span><strong>{"\u2713"}</strong></li>)}</ul></>}
          </>}
        {kind === "main" ? <p className="note">{VAT_NOTE} Domain, hosting, plugins, themes, payment-provider charges, platform subscriptions and other third-party fees are separate. This is an indicative estimate, not a binding quote. Your final quotation is confirmed after we review the scope.{live && ` Offer available until ${PROMOTION.endsLabel}.`}</p> : <p className="note">Indicative estimate, not a binding quote. Full notes are below the options.</p>}
        <button type="button" className="btn btn--primary btn--block" onClick={send} disabled={!anything}>Add these choices to my enquiry</button>
        <button type="button" className="linklike" onClick={() => {
    setSel({});
    setBase("business");
  }}>Reset my choices</button>
      </aside>;
  return <div className="calc" id="build">
      {renderEstimate("top")}
      <div className="calc__main">
        <fieldset className="calc__base">
          <legend>1. Choose your starting point</legend>
          {BASE_OPTIONS.map((b) => {
    const p = packageById(b.id);
    return <label key={b.id} className={`base-opt${base === b.id ? " is-on" : ""}`}>
                <input type="radio" name="calc-base" value={b.id} checked={base === b.id} onChange={() => setBase(b.id)} />
                <span className="base-opt__t"><strong>{b.name}</strong>{b.popular && <span className="badge badge--pop">Recommended</span>}<span>{b.blurb}</span></span>
                <span className="base-opt__p">{p ? priceText({ ...p, kind: "once" }) : ""}</span>
              </label>;
  })}
        </fieldset>
        <h3 className="calc__h">2. Add optional extras</h3>
        <p className="note">Every extra is optional and only charged when you choose it. Anything your package already includes is marked and never charged twice.</p>
        {ADDON_GROUPS.map((g, gi) => {
    const items = ADDONS.filter((a) => a.group === g.id);
    const count = items.filter((a) => sel[a.id] && !stateOf(a).blocked).length;
    return <details key={g.id} className="calc__group" open={gi < 2}>
              <summary>{g.title}{count > 0 && <span className="calc__count">{count} selected</span>}</summary>
              <ul>
                {items.map((a) => {
      const st = stateOf(a);
      const on = st.included || !!sel[a.id] && !st.blocked;
      const id = "ad-" + a.id;
      return <li key={a.id} className={`addon${on ? " is-on" : ""}${st.blocked ? " is-blocked" : ""}`}>
                      <input type="checkbox" id={id} checked={on} disabled={!!st.included || !!st.blocked} aria-describedby={id + "-d"} onChange={() => toggle(a)} />
                      <label htmlFor={id}>
                        <span className="addon__name">{a.name}</span>
                        <span className="addon__tags">
                          <span className="tag">{a.kind === "month" ? "Monthly" : "One-off"}</span>
                          {st.included && <span className="tag tag--ok">Included in your package</span>}
                        </span>
                      </label>
                      <span className="addon__price">{priceText(a)}</span>
                      <p className="addon__d" id={id + "-d"}>{st.blocked ? st.blocked : a.desc}</p>
                      {a.qty && on && !st.included && <div className="qty" role="group" aria-label={`Quantity for ${a.name}`}>
                          <button type="button" aria-label="Decrease quantity" onClick={() => setQty(a, sel[a.id] - 1)} disabled={sel[a.id] <= 1}>{"\u2212"}</button>
                          <output aria-live="polite">{sel[a.id]}</output>
                          <button type="button" aria-label="Increase quantity" onClick={() => setQty(a, sel[a.id] + 1)}>+</button>
                        </div>}
                    </li>;
    })}
              </ul>
            </details>;
  })}
      </div>
      {renderEstimate("main")}
      {showBar && picked.length > 0 && base !== "custom" && <div className="calc__bar" role="region" aria-label="Estimate so far">
          <p><strong>{unpriced ? "Confirmed by quote" : money(one, fromOne)}</strong> one-off{month > 0 && !unpriced ? <> + <strong>{money(month, fromMonth)}</strong>/month</> : null}</p>
          <button type="button" className="btn btn--primary" onClick={() => document.querySelector(".calc__summary--main")?.scrollIntoView({ behavior: "smooth", block: "center" })}>View estimate</button>
        </div>}
    </div>;
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var PHONE_RE = /^\+?[\d\s()\-]{7,20}$/;
var LINK_RE = /^(https?:\/\/)?[^\s.\/]+(\.[^\s.\/]+)+(\/\S*)?$/i;
var COUNTRIES = ["United Kingdom", "United States", "Canada", "Australia", "Other"];
var SERVICE_OPTIONS = ["Business or corporate website", "Landing page", "Online shop", "Website redesign", "Booking or appointment system", "Customer portal, membership or dashboard", "Forms, quotes or registrations", "Integrations or automation", "Business email and domain set-up", "Website care and support", "Custom web application or tool", "Not sure yet", "Something else"];
var CONTACT_METHODS = ["Email", "Phone call", "WhatsApp"];
function aria(id, error, hint) {
  return { id, "aria-invalid": error ? true : void 0, "aria-describedby": [error ? id + "-err" : "", hint ? id + "-hint" : ""].filter(Boolean).join(" ") || void 0 };
}
function Field({ id, label, optional, hint, error, children, className = "" }) {
  return <div className={"field " + className}>
      <label htmlFor={id}>{label}{optional && <span className="opt"> (optional)</span>}</label>
      {children}
      {hint && <p className="hint" id={id + "-hint"}>{hint}</p>}
      {error && <p className="error" id={id + "-err"}>{error}</p>}
    </div>;
}
function Alternatives({ mailto }) {
  return <ul className="alt-contact">
      <li><a className="btn btn--primary" href={mailto}>Email this to us</a></li>
      <li><a className="btn btn--ghost" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a></li>
      <li><a className="btn btn--ghost" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
    </ul>;
}
async function postJson(endpoint, type, body) {
  const v = body.values || {};
  const fields = type === "enquiry" ? {
    _subject: "New quote enquiry from " + v.name + " (Cath Tech Solutions)",
    name: v.name, email: v.email, phone: v.phone || "Not provided", country: v.country, service: v.service,
    website_or_reference_link: v.link || "Not provided", approximate_budget: v.budget,
    selected_package_and_addons: v.selection || "None chosen", project_description: v.details,
    preferred_contact_method: v.contactMethod, consent_to_be_contacted: "Yes"
  } : {
    _subject: "New customer feedback from " + v.name + " (Cath Tech Solutions)",
    name: v.name, company: v.company || "Not provided", project_or_service: v.service || "Not provided",
    rating: v.rating + " out of 5", review: v.review, consent_to_publish_after_approval: "Yes"
  };
  fields._gotcha = body.website || "";
  const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(fields) });
  const data = await res.json().catch(() => ({}));
  return { res, data: { ok: res.ok && !data.error, errors: void 0 } };
}
function validateEnquiry(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
  const needsPhone = v.contactMethod === "Phone call" || v.contactMethod === "WhatsApp";
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = "Enter a phone number using digits, spaces and an optional + at the start.";
  else if (needsPhone && !v.phone.trim()) e.phone = `Enter a phone number so we can reach you by ${v.contactMethod === "WhatsApp" ? "WhatsApp" : "phone"}.`;
  if (!v.country) e.country = "Choose your country.";
  if (!v.service) e.service = "Choose the service or project type.";
  if (v.link.trim() && !LINK_RE.test(v.link.trim())) e.link = "Enter a web address like www.example.com, or leave this blank.";
  if (!v.unsure && v.amount.trim()) {
    const n = Number(v.amount.replace(/,/g, ""));
    if (!/^\d{1,7}(\.\d{1,2})?$/.test(v.amount.replace(/,/g, "").trim()) || !(n > 0)) e.amount = "Enter your budget as a number, like 500. Leave it blank if you are not sure.";
  }
  if (v.details.trim().length < 10) e.details = "Please tell us a little about your project. A sentence or two is plenty.";
  if (!v.contactMethod) e.contactMethod = "Choose how you would like us to contact you.";
  if (!v.consent) e.consent = "Please tick this box so we can reply to your enquiry.";
  return e;
}
var ENQUIRY_ORDER = ["name", "email", "phone", "country", "service", "link", "amount", "details", "contactMethod", "consent"];
function EnquiryForm({ onSent }) {
  const endpoint = React3.useContext(EnquiryEndpointContext);
  const { draft, setDraft } = React3.useContext(DraftContext);
  const [v, setV] = React3.useState(() => ({ name: "", email: "", phone: "", country: "United Kingdom", service: draft?.service || "", link: "", details: draft?.note || "", contactMethod: "", consent: false, currency: "GBP", amount: "", unsure: false }));
  const [errors, setErrors] = React3.useState({});
  const [status, setStatus] = React3.useState("idle");
  const [trap, setTrap] = React3.useState("");
  const panel = React3.useRef(null);
  const busy = React3.useRef(false);
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const focusFirst = (errs) => {
    const k = ENQUIRY_ORDER.find((x) => errs[x]);
    if (k) document.getElementById("f-" + k)?.focus();
  };
  const sym = v.currency === "GBP" ? "\xA3" : "$";
  const budgetText = v.unsure ? "Not sure yet" : v.amount.trim() ? `${v.currency} ${sym}${v.amount.trim()}` : "Not provided";
  const lines = () => [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "Not provided"}`,
    `Country: ${v.country}`,
    `Service: ${v.service}`,
    `Website or reference link: ${v.link || "Not provided"}`,
    `Approximate budget: ${budgetText}`,
    `Preferred contact method: ${v.contactMethod}`,
    `Selected package and add-ons:
${draft?.summary || "None chosen"}`,
    `Project description:
${v.details}`
  ];
  const mailto = () => `${CONTACT.emailHref}?subject=${encodeURIComponent("Enquiry via " + BRAND)}&body=${encodeURIComponent(lines().join("\n\n"))}`;
  const finishOk = (demo) => {
    const summary = {
      name: v.name.trim(), email: v.email.trim(), phone: v.phone.trim(), service: v.service,
      contactMethod: v.contactMethod, budget: budgetText, selection: draft?.summary || "", details: v.details.trim(), demo: !!demo
    };
    setStatus("success");
    setDraft(null);
    if (onSent) onSent(summary);
  };
  async function onSubmit(e) {
    e.preventDefault();
    if (busy.current || status === "sending") return;
    busy.current = true;
    try {
      await doSubmit();
    } finally {
      busy.current = false;
    }
  }
  async function doSubmit() {
    const errs = validateEnquiry(v);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirst(errs);
    if (DEMO) {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 900));
      finishOk(true);
      return;
    }
    if (!endpoint) {
      setStatus("unconfigured");
      setTimeout(() => panel.current?.focus(), 0);
      return;
    }
    setStatus("sending");
    try {
      const { res, data } = await postJson(endpoint, "enquiry", {
        values: { name: v.name.trim(), email: v.email.trim(), phone: v.phone.trim(), country: v.country, service: v.service, link: v.link.trim(), budgetCurrency: v.currency, budgetAmount: v.unsure ? "" : v.amount.trim(), budgetNotSure: v.unsure, budget: budgetText, selection: draft?.summary || "", details: v.details.trim(), contactMethod: v.contactMethod, consent: true },
        website: trap
      });
      if (res.ok && data.ok) {
        finishOk(false);
        return;
      } else if (res.status === 501) setStatus("unconfigured");
      else if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirst(data.errors);
        return;
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
    setTimeout(() => panel.current?.focus(), 0);
  }
  if (status === "success") return null;
  const E = errors;
  return <form className="form" onSubmit={onSubmit} noValidate>
      <Field label="Name" {...{ error: E.name }} id="f-name"><input {...aria("f-name", E.name)} name="name" type="text" autoComplete="name" aria-required="true" maxLength={100} value={v.name} onChange={(e) => set("name", e.target.value)} /></Field>
      <Field label="Email" error={E.email} id="f-email"><input {...aria("f-email", E.email)} name="email" type="email" autoComplete="email" aria-required="true" maxLength={200} value={v.email} onChange={(e) => set("email", e.target.value)} /></Field>
      <Field label="Phone" optional={v.contactMethod !== "Phone call" && v.contactMethod !== "WhatsApp"} error={E.phone} hint="Needed only if you would like a call or a WhatsApp message." id="f-phone"><input {...aria("f-phone", E.phone, true)} name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={25} value={v.phone} onChange={(e) => set("phone", e.target.value)} /></Field>
      <Field label="Country" error={E.country} id="f-country"><select {...aria("f-country", E.country)} name="country" aria-required="true" value={v.country} onChange={(e) => set("country", e.target.value)}><option value="">Select your country</option>{COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}</select></Field>
      <Field label="Service or project type" error={E.service} id="f-service"><select {...aria("f-service", E.service)} name="service" aria-required="true" value={v.service} onChange={(e) => set("service", e.target.value)}><option value="">Select an option</option>{SERVICE_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}</select></Field>
      <Field label="Website or reference link" optional error={E.link} hint="An existing website, or one you like." id="f-link"><input {...aria("f-link", E.link, true)} name="link" type="text" inputMode="url" autoComplete="url" maxLength={200} value={v.link} onChange={(e) => set("link", e.target.value)} /></Field>
      <div className="field field--wide">
        <p className="field__legend" id="sel-h">Selected package and add-ons</p>
        {draft?.summary ? <div className="selection" aria-labelledby="sel-h">
            <pre>{draft.summary}</pre>
            <button type="button" className="linklike" onClick={() => setDraft(null)}>Remove these choices</button>
          </div> : <p className="hint">None chosen yet. You can <SLink href="/pricing#build">build your website and add the choices here</SLink>, or just describe what you need below.</p>}
      </div>
      <fieldset className="field field--wide budget">
        <legend>Approximate budget <span className="opt">(optional)</span></legend>
        <div className="budget__row">
          <div>
            <label htmlFor="f-currency" className="sr-only">Currency</label>
            <select id="f-currency" name="currency" value={v.currency} onChange={(e) => set("currency", e.target.value)} disabled={v.unsure}>
              <option value="GBP">GBP ({"\xA3"})</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>
          <div className="budget__amt">
            <label htmlFor="f-amount" className="sr-only">Budget amount</label>
            <span className="budget__sym" aria-hidden="true">{sym}</span>
            <input {...aria("f-amount", E.amount, true)} name="amount" type="text" inputMode="decimal" autoComplete="off" placeholder="Type your own figure" maxLength={12} disabled={v.unsure} value={v.amount} onChange={(e) => set("amount", e.target.value)} />
          </div>
          <label className="budget__unsure"><input type="checkbox" checked={v.unsure} onChange={(e) => set("unsure", e.target.checked)} /> Not sure yet</label>
        </div>
        <p className="hint" id="f-amount-hint">Pounds are our default. Choose US dollars if you prefer. We do not convert currencies.</p>
        {E.amount && <p className="error" id="f-amount-err">{E.amount}</p>}
      </fieldset>
      <Field label="Project description" error={E.details} id="f-details" className="field--wide" hint="What would you like, who is it for, and is there a date you are working towards?"><textarea {...aria("f-details", E.details, true)} name="details" rows={6} aria-required="true" maxLength={3e3} value={v.details} onChange={(e) => set("details", e.target.value)} /></Field>
      <Field label="Preferred contact method" error={E.contactMethod} id="f-contactMethod"><select {...aria("f-contactMethod", E.contactMethod)} name="contactMethod" aria-required="true" value={v.contactMethod} onChange={(e) => set("contactMethod", e.target.value)}><option value="">Select an option</option>{CONTACT_METHODS.map((c) => <option key={c} value={c}>{c}</option>)}</select></Field>
      <div className="field field--check field--wide">
        <input {...aria("f-consent", E.consent)} name="consent" type="checkbox" aria-required="true" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} />
        <label htmlFor="f-consent">I agree to be contacted about this enquiry. See the <SLink href="/privacy">privacy page</SLink> for how we handle your details.</label>
        {E.consent && <p className="error" id="f-consent-err">{E.consent}</p>}
      </div>
      <div className="hp" aria-hidden="true"><label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label></div>
      <div className="form__actions"><button type="submit" className="btn btn--primary" disabled={status === "sending"}>{status === "sending" ? "Sending\u2026" : "Send enquiry"}</button></div>
      <div aria-live="polite" ref={panel} tabIndex={-1} className="form__status">
        {status === "unconfigured" && <div className="notice">
            <h3>Your enquiry has not been sent yet</h3>
            <p>We couldn’t send this online just now, so nothing has left your device. No problem: send it by email (it opens your email app with your details filled in), or reach us on WhatsApp or the phone.</p>
            <Alternatives mailto={mailto()} />
          </div>}
        {status === "error" && <div className="notice notice--err">
            <h3>Your enquiry has not been sent yet</h3>
            <p>Something went wrong, so we haven’t received it. Please try again, or use one of these instead.</p>
            <Alternatives mailto={mailto()} />
          </div>}
      </div>
    </form>;
}
function ReviewForm() {
  const endpoint = FEEDBACK_ENDPOINT;
  const [v, setV] = React3.useState({ name: "", company: "", service: "", rating: "", review: "", consent: false });
  const [errors, setErrors] = React3.useState({});
  const [status, setStatus] = React3.useState("idle");
  const [trap, setTrap] = React3.useState("");
  const panel = React3.useRef(null);
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const mailto = () => `${CONTACT.emailHref}?subject=${encodeURIComponent("Customer feedback for " + BRAND)}&body=${encodeURIComponent([`Name: ${v.name}`, `Company: ${v.company || "Not provided"}`, `Project or service: ${v.service || "Not provided"}`, `Rating: ${v.rating}/5`, `Review:
${v.review}`, "I agree this may be published after approval."].join("\n\n"))}`;
  async function onSubmit(e) {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Enter your name.";
    if (!v.rating) er.rating = "Choose a rating from 1 to 5.";
    if (v.review.trim().length < 20) er.review = "Write at least a sentence or two about your experience.";
    if (!v.consent) er.consent = "Please tick this box to confirm we may consider your review for publishing.";
    setErrors(er);
    const first = ["name", "rating", "review", "consent"].find((k) => er[k]);
    if (first) return document.getElementById("r-" + first)?.focus();
    if (!endpoint) {
      setStatus("unconfigured");
      setTimeout(() => panel.current?.focus(), 0);
      return;
    }
    setStatus("sending");
    try {
      const { res, data } = await postJson(endpoint, "review", { values: { name: v.name.trim(), company: v.company.trim(), service: v.service, rating: Number(v.rating), review: v.review.trim(), consentToPublish: true }, website: trap });
      if (res.ok && data.ok) setStatus("success");
      else if (res.status === 501) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
    setTimeout(() => panel.current?.focus(), 0);
  }
  if (status === "success") return <div className="notice notice--ok" role="status" tabIndex={-1} ref={panel}><h3>Thank you for your feedback</h3><p>We have received it. We read every review, and nothing is published until it has been approved.</p></div>;
  const E = errors;
  return <form className="form" onSubmit={onSubmit} noValidate>
      <Field label="Your name" error={E.name} id="r-name"><input {...aria("r-name", E.name)} type="text" autoComplete="name" aria-required="true" maxLength={100} value={v.name} onChange={(e) => set("name", e.target.value)} /></Field>
      <Field label="Company" optional id="r-company"><input id="r-company" type="text" autoComplete="organization" maxLength={100} value={v.company} onChange={(e) => set("company", e.target.value)} /></Field>
      <Field label="Project or service" optional id="r-service"><select id="r-service" value={v.service} onChange={(e) => set("service", e.target.value)}><option value="">Select an option</option>{SERVICE_OPTIONS.filter((s) => s !== "Not sure yet" && s !== "Something else").map((c) => <option key={c} value={c}>{c}</option>)}</select></Field>
      <Field label="Rating" error={E.rating} id="r-rating"><select {...aria("r-rating", E.rating)} aria-required="true" value={v.rating} onChange={(e) => set("rating", e.target.value)}><option value="">Select a rating</option>{[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} out of 5</option>)}</select></Field>
      <Field label="Your review" error={E.review} id="r-review" className="field--wide" hint="Tell us what you needed and how the work went."><textarea {...aria("r-review", E.review, true)} rows={6} aria-required="true" maxLength={2e3} value={v.review} onChange={(e) => set("review", e.target.value)} /></Field>
      <div className="field field--check field--wide">
        <input {...aria("r-consent", E.consent)} type="checkbox" aria-required="true" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} />
        <label htmlFor="r-consent">I agree that {BRAND} may publish this review with my name (and company, if given) once it has been approved.</label>
        {E.consent && <p className="error" id="r-consent-err">{E.consent}</p>}
      </div>
      <div className="hp" aria-hidden="true"><label>Leave this field empty<input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label></div>
      <div className="form__actions"><button type="submit" className="btn btn--primary" disabled={status === "sending"}>{status === "sending" ? "Sending\u2026" : "Submit feedback for approval"}</button></div>
      <div aria-live="polite" ref={panel} tabIndex={-1} className="form__status">
        {status === "unconfigured" && <div className="notice"><h3>Your feedback has not been sent</h3><p>Online sending is not switched on yet, so nothing has left your device. You can email it to us instead.</p><Alternatives mailto={mailto()} /></div>}
        {status === "error" && <div className="notice notice--err"><h3>Your feedback has not been sent</h3><p>Something went wrong. Please try again, or email it to us.</p><Alternatives mailto={mailto()} /></div>}
      </div>
    </form>;
}
function ContactPage() {
  const [sent, setSent] = React3.useState(null);
  React3.useEffect(() => {
    if (sent) window.scrollTo({ top: 0 });
  }, [sent]);
  if (sent) return <EnquirySuccess data={sent} onAnother={() => setSent(null)} />;
  return <>
      <PageHero title="Contact and get a quote" lead="Tell us about your project. We’ll reply the way you prefer, ask any questions we need to and, if it’s a good fit, send you a written proposal." />
      <section className="section" aria-labelledby="form-h">
        <div className="container contact">
          <div>
            <h2 id="form-h">Start a conversation</h2>
            <OfferBanner />
            <EnquiryForm onSent={setSent} />
          </div>
          <aside aria-labelledby="direct-h" className="contact__side">
            <h2 id="direct-h">Prefer to talk now?</h2>
            <ul className="direct">
              <li><Icon name="phone" /><div><strong>Phone</strong><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></div></li>
              <li><Icon name="whatsapp" /><div><strong>WhatsApp</strong><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Start a chat<span className="sr-only"> (opens in a new tab)</span></a></div></li>
              <li><Icon name="mail" /><div><strong>Email</strong><a href={CONTACT.emailHref}>{CONTACT.email}</a></div></li>
              <li><Icon name="pin" /><div><strong>Office</strong><address>{CONTACT.address}</address></div></li>
            </ul>
            <h2 className="mt">What happens next</h2>
            <ol className="plain plain--ol">
              <li>We read your enquiry and may ask a few questions.</li>
              <li>We reply using the contact method you chose.</li>
              <li>If it’s a good fit, you get your price and project plan in writing, with exactly what’s included and the timeframe.</li>
            </ol>
            <DeliveryNote compact />
            <p className="note">Prefer to explore first? <SLink href="/pricing#build">Build your website</SLink> and see an indicative price.</p>
          </aside>
        </div>
      </section>
    </>;
}
function Thumb({ kind }) {
  return <svg role="img" aria-label={`Concept ${kind} interface illustration`} viewBox="0 0 320 200" width="100%" className="thumb">
      <rect x="1" y="1" width="318" height="198" rx="8" className="v-fill v-line" strokeWidth="1.5" />
      <rect x="1" y="1" width="318" height="28" rx="8" className="v-soft" />
      <circle cx="16" cy="15" r="4" className="v-prim" /><circle cx="30" cy="15" r="4" className="v-line" strokeWidth="1.2" />
      {kind === "booking" && <>
        {Array.from({ length: 21 }).map((_, i) => <rect key={i} x={24 + i % 7 * 40} y={50 + Math.floor(i / 7) * 36} width="32" height="26" rx="4" className={i === 9 ? "v-prim" : "v-soft"} />)}
        <rect x="24" y="162" width="110" height="20" rx="5" className="v-line" strokeWidth="1.5" />
      </>}
      {kind === "store" && [0, 1, 2].map((i) => <g key={i}><rect x={20 + i * 98} y="44" width="88" height="86" rx="6" className={i === 1 ? "v-prim" : "v-soft"} /><rect x={20 + i * 98} y="140" width="60" height="8" rx="3" className="v-soft" /><rect x={20 + i * 98} y="156" width="36" height="8" rx="3" className="v-line" strokeWidth="1.5" /></g>)}
      {kind === "portal" && <>
        <rect x="16" y="42" width="70" height="144" rx="5" className="v-soft" />
        {[0, 1, 2, 3].map((i) => <g key={i}><rect x="102" y={46 + i * 34} width="200" height="26" rx="5" className="v-line" strokeWidth="1.5" /><rect x="112" y={55 + i * 34} width="90" height="8" rx="3" className={i === 0 ? "v-prim" : "v-soft"} /></g>)}
      </>}
      {kind === "cafe" && <>
        <rect x="20" y="44" width="150" height="90" rx="6" className="v-prim" />
        <rect x="186" y="44" width="114" height="10" rx="3" className="v-soft" />
        {[0, 1, 2, 3, 4].map((i) => <g key={i}><rect x="186" y={66 + i * 18} width="70" height="7" rx="3" className="v-soft" /><rect x="268" y={66 + i * 18} width="32" height="7" rx="3" className="v-line" strokeWidth="1.2" /></g>)}
        <rect x="20" y="148" width="280" height="34" rx="6" className="v-line" strokeWidth="1.5" />
      </>}
      {kind === "property" && <>
        {[0, 1].map((i) => <g key={i}><rect x={20 + i * 150} y="44" width="136" height="76" rx="6" className={i === 0 ? "v-prim" : "v-soft"} /><path d={`M${20 + i * 150} 120 L${70 + i * 150} 84 L${100 + i * 150} 104 L${120 + i * 150} 92 L${156 + i * 150} 120 Z`} className="v-fill" opacity=".7" /><rect x={20 + i * 150} y="130" width="90" height="8" rx="3" className="v-soft" /><rect x={20 + i * 150} y="146" width="56" height="8" rx="3" className="v-line" strokeWidth="1.2" /><rect x={20 + i * 150} y="164" width="64" height="18" rx="5" className="v-line" strokeWidth="1.5" /></g>)}
      </>}
      {kind === "directory" && <>
        <rect x="20" y="42" width="280" height="22" rx="11" className="v-line" strokeWidth="1.5" />
        {[0, 1, 2, 3].map((i) => <g key={i}><circle cx={36 + i % 2 * 150} cy={92 + Math.floor(i / 2) * 50} r="14" className={i === 1 ? "v-prim" : "v-soft"} /><rect x={58 + i % 2 * 150} y={84 + Math.floor(i / 2) * 50} width="80" height="8" rx="3" className="v-soft" /><rect x={58 + i % 2 * 150} y={98 + Math.floor(i / 2) * 50} width="56" height="7" rx="3" className="v-line" strokeWidth="1.2" /></g>)}
      </>}
    </svg>;
}
function LegalPage({ title, lead, sections }) {
  return <>
      <PageHero title={title} lead={lead} />
      <section className="section">
        <div className="container container--narrow prose">
          <p className="notice"><strong>Starter draft for legal review.</strong> This page is a plain-language starting point, not legal advice, and does not claim compliance with any law. Have it reviewed by a qualified professional before relying on it.</p>
          {sections.map((s) => <section key={s.h}><h2>{s.h}</h2>{s.p.map((t) => <p key={t}>{t}</p>)}</section>)}
        </div>
      </section>
    </>;
}
var privacySections = [
  { h: "Who we are", p: [`${BRAND}, ${CONTACT.address}. You can contact us at ${CONTACT.email} or on ${CONTACT.phoneDisplay}.`, "Registered business details are to be added here once confirmed."] },
  { h: "What we collect", p: ["When you send an enquiry we collect what you enter: your name, email, phone number if given, country, the service you are interested in, an optional website link, your selected package and add-ons if any, an optional budget you type, your message and your preferred contact method.", "If you share a review we collect your name, optional company, optional project, your rating and your comments. Nothing is published without approval.", "If you contact us by phone, WhatsApp or email, we receive whatever details you share in those messages."] },
  { h: "How we use it", p: ["We use your details to reply to your enquiry, prepare a proposal and discuss your project, and to consider reviews for publication. We do not sell your personal information."] },
  { h: "Who processes it", p: ["Enquiries and reviews are delivered through the sending service configured for this website and received in our email account. Messages sent through WhatsApp are handled by WhatsApp under its own terms. Provider names and data locations are to be confirmed and listed here."] },
  { h: "Analytics", p: ["Optional analytics only run if you accept them in the analytics preferences prompt. If analytics are not configured, none are used."] },
  { h: "Your choices", p: ["Depending on where you live, you may have rights to access, correct or delete your personal data and to object to certain uses. Contact us using the details above and we will respond.", "How long enquiries are kept is to be confirmed and stated here."] }
];
var cookieSections = [
  { h: "What this page covers", p: [`This explains how ${BRAND} stores information on your device.`] },
  { h: "Essential storage", p: ["We save your colour theme choice (Light, Dark or System) in your browser storage so the site looks the way you chose on your next visit. This is not used for tracking.", "We also remember your analytics decision, if analytics are enabled."] },
  { h: "Optional analytics", p: ["If analytics are enabled on this site, a script loads only after you choose Accept. You can change your mind with the Analytics preferences link in the footer. Declining stops the script from loading on later visits."] },
  { h: "Third parties", p: ["Links to WhatsApp take you to another service with its own policies. Fonts load from Google Fonts."] },
  { h: "Details to confirm", p: ["The specific analytics provider, if any, and the cookies or identifiers it uses are to be listed here once chosen."] }
];
function buildMetadata(o) {
  const title = o.home ? o.title : `${o.title} | ${BRAND}`;
  const meta = [
    { title },
    { name: "description", content: o.description },
    { property: "og:title", content: title },
    { property: "og:description", content: o.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: BRAND },
    { property: "og:locale", content: "en_GB" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: o.description }
  ];
  if (o.noindex) meta.push({ name: "robots", content: "noindex, follow" });
  return { meta };
}
var MD = {
  home: () => buildMetadata({ home: true, title: `${BRAND} | Websites, online shops and business systems`, description: `${BRAND} builds professional websites, online shops, booking systems and business tools for UK businesses, with a clear process and care plans. Websites from ${gbp(packageById("starter").price)}.` }),
  websites: () => buildMetadata({ title: "Website Services", description: "Business websites, landing pages, online shops, redesigns and search foundations for small and growing businesses." }),
  business: () => buildMetadata({ title: "Business Technology", description: "Online booking, forms, customer portals, integrations, business email set-up and website care for growing businesses." }),
  approach: () => buildMetadata({ title: "Our Approach", description: "How we work with clients: a clear six-stage process, written proposals, defined review rounds, handover and support." }),
  work: () => buildMetadata({ title: "Our Work", description: "Concept projects showing how we approach booking systems, online shops, portals, caf\xE9 and property websites and directories." }),
  about: () => buildMetadata({ title: "About", description: `About ${BRAND}, a focused technology and digital solutions company based in Bromley, serving businesses in the UK and internationally.` }),
  pricing: () => buildMetadata({ title: "Packages and Pricing", description: `Clear UK website packages from ${gbp(packageById("starter").price)}, an itemised add-on menu and a calculator that shows an indicative total before you enquire.` }),
  reviews: () => buildMetadata({ title: "Customer Feedback", description: `Read customer feedback as it is published, or share your own experience of working with ${BRAND}.` }),
  contact: () => buildMetadata({ title: "Contact and Get a Quote", description: `Start a conversation with ${BRAND} by form, phone, WhatsApp or email. Based in Bromley, working with clients across the UK and internationally.` }),
  privacy: () => buildMetadata({ title: "Privacy", noindex: true, description: `How ${BRAND} handles personal information. Starter draft pending legal review.` }),
  cookies: () => buildMetadata({ title: "Cookies", noindex: true, description: `How ${BRAND} uses browser storage and optional analytics. Starter draft pending legal review.` })
};

var DELIVERY_FAQ = "Website Starter and Business Website projects are typically completed within 3–7 working days, and Business Plus and Online Shop projects within 7–14 working days (working days, not calendar days). We’ll confirm the expected timeline once we understand what you need. These timeframes apply to standard projects and start once we have your project details, the content and materials we need, and any agreed initial payment. Larger projects, online shops with lots of product uploads, complex integrations, delayed feedback or extra requirements can take longer, and we’ll agree a realistic timeline with you before work begins.";
function DeliveryNote({ compact = false }) {
  if (compact) {
    return <aside className="delivery delivery--compact" aria-label="Delivery timeframe">
        <h3>How long will it take?</h3>
        <p><strong>Website Starter and Business Website: typically 3–7 working days. Business Plus and Online Shop: typically 7–14 working days.</strong> We’ll confirm the expected timeline once we understand what you need.</p>
        <p className="delivery__fine">The clock starts once we have your details, content and any agreed initial payment. Larger or more complex projects can take longer, and we’ll agree a realistic timeline with you first.</p>
      </aside>;
  }
  return <aside className="delivery" aria-label="Delivery timeframe">
      <h3>How long will it take?</h3>
      <p><strong>Website Starter and Business Website: typically 3–7 working days. Business Plus and Online Shop: typically 7–14 working days.</strong> We’ll confirm the expected timeline once we understand what you need.</p>
      <ul>
        <li>These timeframes apply to standard projects, not necessarily every complex or highly customised one. We count working days, not calendar days.</li>
        <li>The timeframe starts once we have your project details, the content and materials we need, and any agreed initial payment.</li>
        <li>Larger projects, online shops with lots of product uploads, complex integrations, delayed feedback or extra requirements can take longer. We’ll agree a realistic timeline with you before work begins.</li>
      </ul>
    </aside>;
}
var GUIDE = {
  connect: {
    heading: "Connectivity and automation",
    tagline: "Make your business tools work together",
    intro: "Spend less time repeating the same tasks. We’ll help connect your website and everyday business tools, so enquiries, bookings and updates are easier to manage.",
    slug: "integrations-automation",
    groups: [
      { title: "Website and email connections", text: "Enquiries from your website forms land in your inbox, you get a notification so nothing is missed, and customers get an automatic reply so they know you’ve got their message.", items: ["Website and email forms", "Enquiry notifications", "Automatic replies and confirmations"] },
      { title: "Bookings and calendars", text: "Get told about new bookings straight away and keep them in the calendar you already use, with reminders where they help.", items: ["Booking notifications", "Calendar connection", "Confirmation emails and reminders"] },
      { title: "Customer and payment tools", text: "Send enquiries into your customer list or a spreadsheet, and connect your payment provider, so you’re not typing the same details twice.", items: ["CRM and spreadsheet connections", "Payment provider connections", "Payment notifications"] },
      { title: "Messaging and newsletters", text: "Make it easy for customers to reach you on WhatsApp and join your mailing list, and follow up with a friendly automatic email.", items: ["WhatsApp enquiry links", "Newsletter connections", "Customer follow-up emails, such as a welcome email"] },
      { title: "Agreed workflow automation", text: "We work out which repetitive jobs are worth automating, set them up and show you how they work. Some tools need a paid plan or API access from the other service. We check early and tell you plainly if something isn’t possible.", items: ["Repetitive admin tasks", "Custom connections where appropriate"] }
    ]
  },
  setup: {
    heading: "Business email and digital set-up",
    tagline: "Get the online basics in place",
    intro: "Give your business a more professional online presence. We’ll help set up your business email, domain and essential online tools, so everything works together.",
    slug: "email-and-digital-setup",
    groups: [
      { title: "Your domain and website home", text: "We help you register your domain, point it at the right place and get your website hosted securely. Domains and hosting are bought in your own name, so you stay in control.", items: ["Domain registration and DNS", "Website hosting set-up", "SSL (the padlock in the browser)"] },
      { title: "Professional email", text: "Look the part with email on your own domain, set up and working on your phone and computer, with extra mailboxes for your team if you need them.", items: ["Professional email addresses", "Email set-up on phones and computers", "Additional mailboxes"] },
      { title: "Be easier to find on Google", text: "We help you set up your Google Business Profile and the basics of Analytics and Search Console, so you can see how people find you. Google decides whether a business profile is verified, so we can’t guarantee it.", items: ["Google Business Profile set-up", "Analytics and Search Console basics"] },
      { title: "Safe, backed up and moved across", text: "Where your hosting or platform supports it, we set up backups and basic security, and we can help move an existing website to its new home.", items: ["Backups, where supported", "Basic security set-up", "Website migrations"] }
    ],
    note: "Domain, hosting and email subscriptions are paid to the providers and are separate from our fees."
  },
  care: {
    heading: "Care and protection",
    tagline: "We’ll help keep your website running smoothly",
    intro: "Launching your website is only the beginning. We’ll help keep it updated, protected and working properly, so you can concentrate on running your business.",
    slug: "care-and-support",
    groups: [
      { title: "Updates and small changes", text: "We keep your website up to date and make small, agreed content changes for you, within the monthly allowance set out in your plan.", items: ["Website updates", "Small agreed content updates"] },
      { title: "Backups and recovery", text: "Regular backups mean there’s something to go back to if something goes wrong. Where possible, we help you recover.", items: ["Regular backups", "Recovery assistance, where possible"] },
      { title: "Security and health checks", text: "We keep an eye on the things that quietly cause trouble, such as expired security certificates, broken links and slow pages.", items: ["Security and SSL checks", "Broken-link checks", "Performance checks"] },
      { title: "Help when something looks wrong", text: "If your website misbehaves, you have someone to ask. We track down the problem and fix it, and we’ll tell you if it needs a larger project.", items: ["Troubleshooting and repair", "Hosting and domain support, where included"] }
    ],
    note: "Care is available as a monthly plan, with a fair allowance set out in your agreement. See the plans below."
  }
};
function GuideArea({ a, level = 3, image }) {
  const g = GUIDE[a.id];
  const H = level === 2 ? "h2" : "h3";
  const sv = serviceBySlug(g.slug);
  return <section className="guide" aria-labelledby={`g-${a.id}`}>
      <div className="guide__lead">
        {image && <figure className="area__img"><img src={image} alt="" width={1280} height={800} loading="lazy" /></figure>}
        <p className="guide__eyebrow">{g.tagline}</p>
        <H id={`g-${a.id}`}>{g.heading}</H>
        <p>{g.intro}</p>
        <p><SLink href={`/services/${g.slug}`} className="guide__more">Learn more about {sv.name}<span aria-hidden="true"> →</span></SLink></p>
      </div>
      <div className="guide__right">
        <ul className="guide__rows">
          {g.groups.map((gr) => <li key={gr.title} className="guide__row">
              <h4>{gr.title}</h4>
              <p>{gr.text}</p>
              <ul className="guide__items">{gr.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </li>)}
        </ul>
        {g.note && <p className="guide__note">{g.note}</p>}
      </div>
    </section>;
}
function EnquirySuccess({ data, onAnother }) {
  const heading = React3.useRef(null);
  React3.useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);
  const rows = [["Name", data.name], ["Email", data.email], data.phone ? ["Phone", data.phone] : null, ["Project type", data.service], ["How we’ll reply", data.contactMethod], ["Budget", data.budget]].filter(Boolean);
  return <section className="success" aria-labelledby="success-h">
      <div className="container success__in">
        {data.demo && <p className="success__demo" role="note">Preview mode: nothing was actually sent. This screen shows what customers see after a successful enquiry.</p>}
        <div className="success__icon" aria-hidden="true">
          <svg viewBox="0 0 52 52" width="84" height="84"><circle className="success__ring" cx="26" cy="26" r="24" /><path className="success__tick" d="M15 27l8 8 14-16" /></svg>
        </div>
        <h1 id="success-h" tabIndex={-1} ref={heading}>Thank you for getting in touch!</h1>
        <p className="lead success__lead">Your enquiry has been received. We appreciate you considering {BRAND} for your project.</p>
        <div className="success__grid">
          <div className="success__card">
            <h2>What happens next</h2>
            <p>We’ll review the details you’ve shared and get in touch to discuss your project, answer your questions and help you understand the next steps.</p>
            <ol className="plain plain--ol">
              <li>We read your enquiry and may ask a few questions.</li>
              <li>We reply the way you asked us to.</li>
              <li>If it’s a good fit, you get your price and project plan in writing.</li>
            </ol>
            <p className="success__time"><strong>{CONTACT.responseTime}</strong></p>
          </div>
          <div className="success__card">
            <h2>Your enquiry at a glance</h2>
            <dl className="success__summary">
              {rows.map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}
              {data.selection ? <div><dt>Package and add-ons</dt><dd><pre>{data.selection}</pre></dd></div> : null}
              <div><dt>Your message</dt><dd className="success__msg">{data.details}</dd></div>
            </dl>
          </div>
        </div>
        <DeliveryNote compact />
        <div className="success__wa">
          <div>
            <h2>Want a quicker chat?</h2>
            <p>Message us on WhatsApp and we’ll pick it up there.</p>
          </div>
          <a className="btn btn--primary success__wa-btn" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={20} />Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <div className="actions success__actions">
          <SLink href="/" className="btn btn--ghost">Back to home</SLink>
          <SLink href="/website-services" className="btn btn--ghost">Explore our services</SLink>
        </div>
        <p className="success__again"><button type="button" className="linklike" onClick={onAnother}>Send another enquiry</button></p>
      </div>
    </section>;
}

function Home() {
  const starter = packageById("starter");
  return <>
      <section className="hero hero--image" aria-labelledby="hero-h">
        <div className="hero__bg" aria-hidden="true"><img src={tech_hero_default} alt="" width={1600} height={1008} /></div>
        <Orbs />
        <div className="container hero__body">
          <h1 id="hero-h" data-reveal style={{ "--i": 0 }}>Technology that <span className="grad">moves your business</span> forward.</h1>
          <p className="lead" data-reveal style={{ "--i": 1 }}>Friendly, professional websites, online shops and business tools for UK businesses, built step by step and looked after once they’re live.</p>
          <div className="actions" data-reveal style={{ "--i": 2 }}>
            <SLink className="btn btn--primary" href="/pricing#build">Build your website</SLink>
            <SLink className="btn btn--ghost" href="/contact">Get a Quote</SLink>
          </div>
          <p className="hero__delivery" data-reveal style={{ "--i": 3 }}>Websites are typically ready in <strong>3–7 working days</strong>, or <strong>7–14 working days</strong> for Business Plus and Online Shop.</p>
          {promoLive() && <p className="hero__offer" data-reveal style={{ "--i": 3 }}><strong>December offer:</strong> websites from {gbp(starter.price)}. Offer available until {PROMOTION.endsLabel}.</p>}
          <div data-reveal style={{ "--i": 3, marginTop: "1.25rem" }}><ContactActions /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="need-h">
        <div className="container">
          <div className="section__head"><h2 id="need-h">What do you need help with?</h2><p className="lead">Choose the closest match and we will point you to the right service.</p></div>
          <NeedsFinder />
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="why-h">
        <div className="container split split--photo">
          <figure className="photo" data-scroll><img src={workspace_default} alt="A laptop showing a clean business website on a bright desk" loading="lazy" width={1408} height={1008} /></figure>
          <div>
            <h2 id="why-h">Why work with {BRAND}</h2>
            <p className="lead">A proper process, honest scoping and support that carries on after launch.</p>
            <dl className="why">{WHY.map((w) => <div key={w.h}><dt>{w.h}</dt><dd>{w.p}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="svc-h">
        <div className="container">
          <div className="section__head"><h2 id="svc-h">What we do</h2><p className="lead">Technology services for growing businesses, explained in plain English.</p></div>
          <ul className="areas">
            {AREAS.map((a) => GUIDE[a.id] ? <li key={a.id} className="area area--guide"><GuideArea a={a} level={3} image={AREA_IMGS[a.id]} /></li> : <li key={a.id} className="area">
                <div className="area__intro"><figure className="area__img"><img src={AREA_IMGS[a.id]} alt="" width={1280} height={800} loading="lazy" /></figure><h3>{a.name}</h3><p>{a.intro}</p></div>
                <ul className="area__links">{a.slugs.map((s) => {
    const sv = serviceBySlug(s);
    return <li key={s}><SLink href={`/services/${s}`}><strong>{sv.name}</strong><span>{sv.summary}</span></SLink></li>;
  })}</ul>
              </li>)}
          </ul>
        </div>
      </section>

      <section className="section section--surface" id="pricing" aria-labelledby="pr-h">
        <div className="container">
          <div className="section__head"><h2 id="pr-h">Clear UK pricing</h2><p className="lead">Clear packages, priced extras and an estimate before you get in touch. One-off project fees unless marked monthly.</p></div>
          <OfferBanner />
          <PackageStrip />
          <DeliveryNote />
          <p className="note">{VAT_NOTE} Domain, hosting, plugins, themes, payment-provider charges and other third-party costs are separate. Complex portals, web applications and bespoke software are quoted individually.</p>
          <div className="actions">
            <SLink href="/pricing" className="btn btn--primary">Compare packages</SLink>
            <SLink href="/pricing#build" className="btn btn--ghost">Build your website</SLink>
          </div>
        </div>
      </section>

      <Timeline steps={PROCESS_STEPS} heading="How we work with you" lead="Six simple steps from first chat to handover. Most standard websites take 3–7 working days (7–14 for Business Plus and Online Shop), and we’ll confirm your timeline before work begins." />

      <section className="section section--surface" aria-labelledby="work-h">
        <div className="container">
          <div className="section__head"><h2 id="work-h">Featured work: concept projects</h2><p className="lead">Demo concepts showing how we approach typical briefs. They are not client projects and show no client results.</p></div>
          <div className="concept-row-list">
            {CONCEPTS.slice(0, 2).map((c) => <article key={c.key} className="concept-row">
                <Thumb kind={c.key} />
                <div><span className="badge">Concept Project</span><h3>{c.title}</h3><p>{c.solution}</p></div>
              </article>)}
          </div>
          <p className="note"><SLink href="/our-work">See all concept projects</SLink></p>
        </div>
      </section>

      <Testimonials />

      <section className="section" aria-labelledby="ind-h">
        <div className="container">
          <div className="section__head"><h2 id="ind-h">Who we help</h2><p className="lead">Examples of businesses we build for. If yours is not listed, ask us.</p></div>
          <ul className="usecases">{USE_CASES.map((o) => <li key={o.h}><strong>{o.h}</strong><span>{o.p}</span></li>)}</ul>
        </div>
      </section>

      <Faq items={homeFaqs()} />
      <CTASection heading="Ready to talk about your project?" text="Tell us what you need. We reply using your preferred method and, if it is a fit, send a written proposal with scope, price and timeframe." />
    </>;
}
function AreaBlock({ a }) {
  return <section className="area-block" aria-labelledby={`a-${a.id}`}>
      <div className="area-block__head"><figure className="area__img"><img src={AREA_IMGS[a.id]} alt="" width={1280} height={800} loading="lazy" /></figure><h2 id={`a-${a.id}`}>{a.name}</h2><p className="lead">{a.intro}</p></div>
      <div>
        <ul className="ticks ticks--cols">{a.items.map((i) => <li key={i}><Icon name="check" size={18} />{i}</li>)}</ul>
        <ul className="chips">{a.slugs.map((s) => <li key={s}><SLink className="btn btn--ghost" href={`/services/${s}`}>{serviceBySlug(s).name}</SLink></li>)}</ul>
      </div>
    </section>;
}
function WebsiteServices() {
  return <>
      <PageHero title="Website Services" lead="Give your business a professional website that customers can find, trust and use, from a first site to a full online shop.">
        <div className="actions"><SLink href="/pricing#build" className="btn btn--primary">Build your website</SLink><SLink href="/pricing" className="btn btn--ghost">Compare packages</SLink></div>
      </PageHero>
      <section className="section"><div className="container"><AreaBlock a={AREAS[0]} /></div></section>
      <section className="section section--surface" aria-labelledby="wp-h">
        <div className="container">
          <div className="section__head"><h2 id="wp-h">Packages at a glance</h2><p className="lead">One-off project fees for defined scopes.</p></div>
          <OfferBanner />
          <PackageStrip />
          <DeliveryNote />
          <p className="note">Redesigns, complex portals, web applications and bespoke software are quoted after a conversation. {VAT_NOTE}</p>
          <div className="actions"><SLink href="/pricing" className="btn btn--primary">Compare in detail</SLink></div>
        </div>
      </section>
      <Timeline steps={PROCESS_STEPS} heading="How a website project runs" />
      <CTASection heading="Let us hear about your website" text="Tell us what you do and what you would like. We will suggest the right starting point." />
    </>;
}
function BusinessTechnology() {
  return <>
      <PageHero title="Business Technology" lead="Tools that let customers book, ask and sign in online, connect the software you use, and keep everything working.">
        <div className="actions"><SLink href="/contact" className="btn btn--primary">Get a Quote</SLink><SLink href="/pricing#build" className="btn btn--ghost">See extras and prices</SLink></div>
      </PageHero>
      <section className="section"><div className="container area-stack">{AREAS.slice(1).map((a) => GUIDE[a.id] ? <GuideArea key={a.id} a={a} level={2} /> : <AreaBlock key={a.id} a={a} />)}</div></section>
      <section className="section section--surface" aria-labelledby="care-h">
        <div className="container">
          <div className="section__head"><h2 id="care-h">Website care plans</h2><p className="lead">Monthly care, so your website keeps running smoothly while you run your business.</p></div>
          <CarePlans />
        </div>
      </section>
      <CTASection heading="Not sure which tool you need?" text="Describe the job you want it to do. We will suggest the simplest way to do it." />
    </>;
}
var APPROACH = [
  { h: "How enquiries are handled", p: "Every enquiry is read by a person. We may ask a few questions, then reply using the contact method you chose. If it looks like a fit, we move to a proposal. If it is not, we say so honestly." },
  { h: "How scope and price are agreed", p: "Your proposal sets out what is included, what is not, the price and the timeframe, before any work begins. Packages and add-ons give you a clear starting point. Complex projects are scoped after a discovery conversation." },
  { h: "How reviews and changes work", p: "You see the work at agreed review points. Each package includes a stated number of revision rounds, and extra changes can be quoted. We do not offer unlimited revisions." },
  { h: "What we check before launch", p: "We check pages on phones, tablets and desktops, test forms and links, check that contact details are correct, and ask you to confirm the agreed work before it goes live." },
  { h: "What you receive at handover", p: "The agreed website or system, access to the accounts that belong to you, and guidance on how to update what you are meant to update." },
  { h: "What ongoing support looks like", p: "Choose the support that suits you: one-off help, or a monthly care plan with a fair monthly allowance set out in your agreement. We do not promise unlimited support or 24/7 cover unless we have agreed it in writing." }
];
function Approach() {
  return <>
      <PageHero title="Our Approach" lead="A clear process, plain communication and honest scoping, so you always know what is happening and what comes next." />
      <Timeline steps={PROCESS_STEPS} heading="Six stages from hello to handover" lead="We adapt the stages to the service. A simple website needs fewer review points than a booking system." />
      <section className="section section--surface" aria-labelledby="ap-h">
        <div className="container">
          <div className="section__head"><h2 id="ap-h">What to expect from working with us</h2></div>
          <dl className="qa">{APPROACH.map((a) => <div key={a.h}><dt>{a.h}</dt><dd>{a.p}</dd></div>)}</dl>
        </div>
      </section>
      <section className="section" aria-labelledby="own-h">
        <div className="container container--narrow">
          <h2 id="own-h">Things you own and things others charge for</h2>
          <p>Your domain, hosting, email and analytics accounts are yours, and we help you set them up in your own name. Domains, hosting, email provider fees, plugins, themes, payment-provider charges and platform subscriptions are paid to the providers and are separate from our fees unless a proposal says otherwise.</p>
          <p>Some tasks need a specialist, an account that you own, or verification by a third party such as Google. We tell you when that applies, and we never promise search rankings, traffic, leads, revenue or security outcomes.</p>
        </div>
      </section>
      <CTASection heading="Ready to start a conversation?" text="There is no obligation. Tell us what you need and we will tell you honestly what we can do." />
    </>;
}
function Work() {
  return <>
      <PageHero title="Our Work" lead="Clearly labelled concept projects that show how we approach typical briefs." />
      <section className="section">
        <div className="container">
          <p className="notice work-note"><strong>About these examples.</strong> Every project on this page is a Concept Project we created to illustrate an approach. None is paid client work and none shows results.</p>
          <div className="concept-row-list">
            {CONCEPTS.map((c) => <article key={c.key} className="concept-row">
                <Thumb kind={c.key} />
                <div>
                  <span className="badge">Concept Project</span>
                  <h2>{c.title}</h2>
                  <dl className="concept-dl">
                    <div><dt>The business need</dt><dd>{c.need}</dd></div>
                    <div><dt>The proposed solution</dt><dd>{c.solution}</dd></div>
                    <div><dt>Features shown</dt><dd>{c.features.join(", ")}</dd></div>
                  </dl>
                </div>
              </article>)}
          </div>
        </div>
      </section>
      <section className="section section--surface" aria-labelledby="perm-h">
        <div className="container container--narrow">
          <h2 id="perm-h">Featuring real projects</h2>
          <p>Real client work will be added here only with the client&rsquo;s written permission. If we have built something for you and you are happy for us to feature it, tell us.</p>
          <AskButton service="Something else" note="I would like to give permission for my project to be featured on your website.">Give permission to feature my project</AskButton>
        </div>
      </section>
      <CTASection heading="Have a project in mind?" text="Share your goals and we will suggest what to build and what it could involve." />
    </>;
}
var PRINCIPLES = [
  { h: "Plain language", p: "We explain what we are doing and why, without jargon." },
  { h: "Honest scoping", p: "We define the work before quoting, and say when something is not needed." },
  { h: "Built to be used", p: "We favour clear, simple solutions that your customers and team can pick up easily." }
];
function About() {
  return <>
      <PageHero title={`About ${BRAND}`} lead="A friendly, focused technology company helping small and growing businesses get online and run more smoothly." />
      <section className="section">
        <div className="container split">
          <div>
            <h2>What we do</h2>
            <p>We design and build websites, online shops and business systems, connect the tools you already use, set up the digital basics, and keep it all running through care and support.</p>
            <p>The UK is our main market. We also work with businesses in the United States, Canada and Australia, mainly by phone, WhatsApp, email and online calls.</p>
            <p className="lead">{TAGLINE}</p>
          </div>
          <div>
            <h2>How we work</h2>
            <ul className="ticks ticks--lg">{PRINCIPLES.map((p) => <li key={p.h}><span><strong>{p.h}.</strong> {p.p}</span></li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section section--surface" aria-labelledby="where-h">
        <div className="container split">
          <div>
            <h2 id="where-h">Where to find us</h2>
            <address className="big-address">{CONTACT.address}</address>
            <p>Prefer to start remotely? Call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>, message us on <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp<span className="sr-only"> (opens in a new tab)</span></a> or email <a href={CONTACT.emailHref}>{CONTACT.email}</a>.</p>
          </div>
          <div>
            <h2>What we stand behind</h2>
            <ul className="ticks"><li><Icon name="check" size={18} />Written proposals before work begins</li><li><Icon name="check" size={18} />Stated revision rounds, never open-ended</li><li><Icon name="check" size={18} />Honest advice, including when you do not need something</li><li><Icon name="check" size={18} />Support you can choose after launch</li></ul>
            <p className="mt"><SLink href="/our-approach" className="btn btn--ghost">Read our approach</SLink></p>
          </div>
        </div>
      </section>
      <Testimonials />
      <CTASection heading="Let us hear about your project" text="Tell us what you need and we will reply with next steps." />
    </>;
}
function PricingPage() {
  const [base, setBase] = React3.useState("business");
  const choose = (id) => {
    setBase(id);
    document.getElementById("build")?.scrollIntoView({ behavior: "smooth" });
  };
  return <>
      <PageHero title="Packages and pricing" lead="Clear website packages, priced extras and a calculator that gives you an estimate before you get in touch. Prices are in pounds sterling." />
      <section className="section" aria-labelledby="pk-h">
        <div className="container">
          <div className="section__head"><h2 id="pk-h">Compare website packages</h2><p className="lead">One-off project fees for the scopes below. There is no checkout, and nothing is charged on this website.</p></div>
          <OfferBanner />
          <PackagesTable onChoose={choose} />
          <DeliveryNote />
          <div className="split mt">
            <div>
              <h3>Not included in the prices</h3>
              <p>Domain names, hosting, premium plugins, paid themes, payment-provider charges, platform subscriptions, email provider fees, stock photography and other third-party charges are separate unless a proposal says they are included.</p>
              <p className="note">{VAT_NOTE}</p>
            </div>
            <div>
              <h3>Online Shop or shop add-on?</h3>
              <p>The <strong>Online Shop</strong> is a full storefront build. The <strong>simple shop add-on</strong> adds a limited shop of up to 10 products to an otherwise suitable website, using standard platform features and a tightly defined scope. It is not a replacement for the Online Shop build.</p>
              <p className="callout"><strong>Need something bigger?</strong> Complex portals, web applications, custom dashboards, complex integrations and bespoke software are not forced into packages. We offer a tailored proposal after a discovery conversation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--surface" aria-labelledby="bw-h">
        <div className="container">
          <div className="section__head"><h2 id="bw-h">Build your website</h2><p className="lead">Pick a starting point, add the extras you want and watch your estimate update. Then send your choices with your enquiry.</p></div>
          <Calculator base={base} setBase={setBase} />
        </div>
      </section>
      <section className="section" aria-labelledby="cp-h">
        <div className="container">
          <div className="section__head"><h2 id="cp-h">Monthly care plans</h2><p className="lead">Optional monthly care to keep your website updated and running smoothly.</p></div>
          <CarePlans />
        </div>
      </section>
      <Faq items={pricingFaqs()} heading="Pricing questions" />
      <CTASection heading={promoLive() ? `Book by ${PROMOTION.endsLabel}` : "Ready for a quote?"} text="Tell us what you need and we will confirm the scope and price in writing." />
    </>;
}
function Reviews() {
  return <>
      <PageHero title="Customer feedback" lead="Honest reviews from the people we have worked with, published once approved." />
      <Testimonials heading="What customers say" />
      <section className="section" id="share" aria-labelledby="share-h">
        <div className="container contact">
          <div>
            <h2 id="share-h">Share your feedback</h2>
            <p>Worked with us? We would value your honest review. Submissions are read first, and nothing is published automatically.</p>
            <ReviewForm />
          </div>
          <aside className="contact__side">
            <h2>How reviews work</h2>
            <ol className="plain plain--ol"><li>You send your feedback using this form.</li><li>We read it and, with your agreement, consider it for publication.</li><li>Only approved reviews appear on this website.</li></ol>
            <p className="note">We do not display star ratings, review counts or review-site badges unless they come from genuine, verifiable reviews.</p>
          </aside>
        </div>
      </section>
    </>;
}
function Privacy() {
  return <LegalPage title="Privacy" lead="How we handle the information you share with us." sections={privacySections} />;
}
function Cookies() {
  return <LegalPage title="Cookies and storage" lead="What we store on your device, and your choices." sections={cookieSections} />;
}
function NotFound() {
  return <PageHero title="Page not found" lead="That page does not exist or has moved. Head back to the homepage or get in touch.">
      <div className="actions"><SLink className="btn btn--primary" href="/">Go to homepage</SLink><SLink className="btn btn--ghost" href="/contact">Contact us</SLink></div>
    </PageHero>;
}
var PAGES = {
  "": [Home, MD.home],
  "website-services": [WebsiteServices, MD.websites],
  "business-technology": [BusinessTechnology, MD.business],
  "our-approach": [Approach, MD.approach],
  "our-work": [Work, MD.work],
  "about": [About, MD.about],
  "pricing": [PricingPage, MD.pricing],
  "reviews": [Reviews, MD.reviews],
  "contact": [ContactPage, MD.contact],
  "privacy": [Privacy, MD.privacy],
  "cookies": [Cookies, MD.cookies]
};
function resolvePage(pathname) {
  let clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/tech" || clean.startsWith("/tech/")) clean = clean.slice(5) || "/";
  if (clean === "/work") clean = "/our-work";
  const [, seg = "", slug = ""] = clean.split("/");
  if (seg === "services") {
    const service = serviceBySlug(slug);
    if (service) return { clean, Page: () => <ServicePage service={service} />, metadata: buildMetadata({ title: service.name, description: service.summary }) };
  } else if (PAGES[seg] && !slug) {
    return { clean, Page: PAGES[seg][0], metadata: PAGES[seg][1]() };
  }
  return { clean, Page: NotFound, metadata: buildMetadata({ title: "Page not found", description: "This page could not be found.", noindex: true }), notFound: true };
}
var ENDPOINT = CFG.quoteEndpoint || "https://formspree.io/f/xoedvnoe";
var FEEDBACK_ENDPOINT = CFG.feedbackEndpoint || "https://formspree.io/f/mkjrgvlz";
var DEMO = !!CFG.demoMode;
function CathTechSolutions({ pathname = "/" }) {
  const router = useRouter();
  const [draft, setDraft] = React2.useState(null);
  const navigate = React2.useCallback((p) => {
    router.navigate({ href: techHref(p) });
  }, [router]);
  const { clean, Page, metadata } = resolvePage(pathname);
  React2.useEffect(() => {
    for (const x of (metadata && metadata.meta) || []) {
      if (x.title) document.title = x.title;
      else if (x.name === "description") {
        let el = document.querySelector('meta[name="description"]');
        if (!el) { el = document.createElement("meta"); el.setAttribute("name", "description"); document.head.appendChild(el); }
        el.setAttribute("content", x.content);
      }
    }
  }, [clean]);
  const draftValue = React2.useMemo(() => ({ draft, setDraft }), [draft]);
  return <LocationContext.Provider value={clean}><NavContext.Provider value={navigate}><DraftContext.Provider value={draftValue}><EnquiryEndpointContext.Provider value={ENDPOINT}><SiteShell><React2.Fragment key={clean}><Page /></React2.Fragment></SiteShell></EnquiryEndpointContext.Provider></DraftContext.Provider></NavContext.Provider></LocationContext.Provider>;
}


function App() {
  const loc = useHashLoc();
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (loc.anchor) {
        const el = document.getElementById(loc.anchor);
        if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
      }
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, [loc]);
  return <CathTechSolutions pathname={loc.path} />;
}
createRoot(document.getElementById("root")).render(<App />);
