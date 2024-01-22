import L from "leaflet";

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
var MAP_INDICATOR_ICON = L.icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [38, 38],
  // iconAnchor: [22, 94],
  // popupAnchor: [-3, -76],
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94],
});
export { NAV_LINKS, FOOTER_NAV_LINKS, MAP_INDICATOR_ICON };
