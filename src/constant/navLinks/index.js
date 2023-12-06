const NAV_LINKS = [
  { title: "common.home", href: "/" },
  { title: "common.services", href: "/services" },
  { title: "common.about", href: "/about" },
  { title: "common.rates", href: "/rates" },
  { title: "common.inquires", href: "/enquiries" },
];
const FOOTER_NAV_LINKS = [...NAV_LINKS];
NAV_LINKS.splice(2, 0, {
  title: "common.cars",
  href: "/cars",
});
export { NAV_LINKS, FOOTER_NAV_LINKS };
