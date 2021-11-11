import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent, NavbarItem } from '../projects/systelab-components/src/lib/navbar/navbar.component';
import NavbarDocumentation from './docs/navbar.mdx';


    const navBarItemsDefault: NavbarItem[] = [
        {
            id: 1,text:'Item 1',image: '',floatImage: false,isSelected: true,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        },
        {
            id: 1,text:'Item 2',image: '',floatImage: false,isSelected: false,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        },
        {
            id: 1,text:'Item 3',image: '',floatImage: false,isSelected: false,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        }
    ];
    const navBarItemsWithIcons: NavbarItem[] = [
        {
            id: 1,text:'Item 1',image: 'slab-icon-medium icon-home',floatImage: false,isSelected: true,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        },
        {
            id: 1,text:'Item 2',image: 'slab-icon-medium icon-bug',floatImage: false,isSelected: false,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        },
        {
            id: 1,text:'Item 3',image: 'slab-icon-medium icon-calendar',floatImage: false,isSelected: false,isEnabled: true,action: '',
            target: '',url: '',backgroundColor: ''
        }
    ];

export default {
  title: 'Navigation/Navbar',
  component: NavbarComponent,
  parameters: {
    docs: {
      page: NavbarDocumentation,
    }
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
  template: `
    <div class="container">
    <div class="row">
        <systelab-navbar
            [id]="'navBar'"
            [backgroundColor]="'rgb(21, 143, 239)'"
            [backgroundHoverColor]="'rgb(66, 161,205)'"
            [items]="items">
        </systelab-navbar>
        </div>
    </div>
    `,

});


export const Default = Template.bind({});
Default.args = {
    items: navBarItemsDefault,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    items: navBarItemsWithIcons
};
