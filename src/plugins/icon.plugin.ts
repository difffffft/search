import { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default {
  install(app: App<Element>) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
