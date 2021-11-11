import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabsComponent} from '../projects/systelab-components/src/lib/tabs/tabs.component';
import { TabComponent} from '../projects/systelab-components/src/lib/tabs/tab.component';
import TabsDocumentation from './docs/tabs.mdx';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';



export default {
  title: 'Navigation/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabComponent, TabsComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    docs: {
      page: TabsDocumentation,
    }
  },
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
  template: `
  <div class="container">
  <div class="row">
      <systelab-tabs id="tabs">
          <systelab-tab [title]="'Tab 1'" [id]="'1'">
              <div id="tab-0">Tab 1 content</div>
          </systelab-tab>
          <systelab-tab [title]="'Tab 2'" [id]="'2'">
              <div id="tab-1">Tab 2 content</div>
          </systelab-tab>
          <systelab-tab [title]="'Tab 3'" [id]="'3'">
              <div id="tab-2">Tab 3 content</div>
          </systelab-tab>
          <systelab-tab [title]="'Tab 4'" [id]="'4'" [warning]="true">
              <div id="tab-3">Tab 4 content</div>
          </systelab-tab>
      </systelab-tabs>
  </div>
</div>
    `,

});


export const Default = Template.bind({});
Default.args = {
    // items: navBarItemsDefault,
};
