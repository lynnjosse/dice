import Vue from "vue";
import Router from "vue-router";
import Dice from "./views/Dice.vue";
import EventList from "./views/EventList.vue";
import EventCreate from "./views/EventCreate.vue";
import EventShow from "./views/EventShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/dice",
      name: "dice",
      component: Dice
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow
    },
    {
      path: "/events/create",
      name: "event-create",
      component: EventCreate
    },
  ]
});
