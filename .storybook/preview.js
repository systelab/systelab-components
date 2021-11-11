import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '!style-loader!css-loader!sass-loader!../projects/systelab-components/sass/modern/systelab-bootstrap-settings.scss';
import '!style-loader!css-loader!sass-loader!../projects/systelab-components/sass/modern/systelab-components.scss';

import '!style-loader!css-loader!sass-loader!../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '!style-loader!css-loader!sass-loader!../node_modules/primeicons/primeicons.css';
import '!style-loader!css-loader!sass-loader!../projects/systelab-components/icons/icomoon.css';

import '!style-loader!css-loader!sass-loader!../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '!style-loader!css-loader!sass-loader!../node_modules/ag-grid-community/dist/styles/ag-theme-fresh.css';
import '!style-loader!css-loader!sass-loader!../node_modules/primeng/resources/themes/nova/theme.css';
import '!style-loader!css-loader!sass-loader!../node_modules/primeng/resources/primeng.min.css';

              
setCompodocJson(docJson);


export const parameters = {
  // viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout:'centered',
  docs: { inlineStories: true },
}