import { main, timerMain } from "./modules/main";

declare const global: {
  [x: string]: unknown;
};

global.main = main;
global.timerMain = timerMain;
