import Home from "../../containers/Home/Home";
import About from "../../containers/About/About";
import Transportation from "../../containers/Transportation/Transportation"
import Lodging from "../../containers/Lodging/Lodging";
import Food from "../../containers/Food/Food";
import ToDo from "../../containers/ToDo/ToDo";

// beforeEnter MUST return true to go to the route.
// Any other return value will redirect to a different page.
// Returning false cancels the route.

// Returning false (or 0, etc) on beforeLeave will cancel the route
// but any other value will be ignored and treated as true

export default {
  Home: {
    component: Home
  },
  ToDo: {
    component: ToDo
  },
  Transportation: {
    component: Transportation
  },
  Lodging: {
    component: Lodging
  },
  Food: {
    component: Food
  },
  About: {
    component: About
  }
};
