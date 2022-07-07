import { main } from "./modules/main";

declare const global: {
  [x: string]: unknown;
};

global.main = main;
