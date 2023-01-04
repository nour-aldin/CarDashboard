import { card1, card2, card3, card4 } from "./Cards/cards.js";
import { statistics1, statistics2 } from "./Statistics/statistics.js";
import { car1, car2, car3 } from "./Cars/cars";
import {
  assets,
  calender,
  car,
  dasboard,
  logout,
  messages,
  sellCars,
  services,
  settings,
  shoppingCart
} from "./icons/icons";

import { fram11, fram12, fram13, fram21, fram22, fram23, fram31, fram32, fram33 } from "./Cars/cars";

export const cards = [card1, card2, card3, card4];

export const statistics = [statistics1, statistics2];

export const cars = [car1, car2, car3];

export const navItems = [
  {
    id: "1",
    icon: dasboard,
    link: "Dashboard"
  },
  { 
    id: "2",
    icon: assets,
    link: "Assests"
  },
  {
    id: "3",
    icon: car,
    link: "Booking"
  },
  {
    id: "4",
    icon: sellCars,
    link: "Sell Cars"
  },
  {
    id: "5",
    icon: shoppingCart,
    link: "Buy Cars"
  },
  {
    id: "6",
    icon: services,
    link: "Services"
  },
  {
    id: "7",
    icon: calender,
    link: "Calender"
  },
  {
    id: "8",
    icon: messages,
    link: "Messages"
  }
]
export const botItem = [
  {
    id: "9",
    icon: settings,
    link: "Settings"
  },
  {
    id: "10",
    icon: logout,
    link: "Log out"
  },
]

export const frames = [fram11, fram12, fram13, fram21, fram22, fram23, fram31, fram32, fram33]
