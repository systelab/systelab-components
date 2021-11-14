import { Story, Meta } from '@storybook/angular/types-6-0';
import SpinnerDocumentation from './docs/spinner.mdx';
import { TouchspinComponent } from '../projects/systelab-components/src/lib/spinner/spinner.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TouchSpinValues } from '../projects/systelab-components/src/lib/spinner/touch.spin-values';
import { FormsModule } from '@angular/forms';


export default {
	title: 'Components/Spinner',
	component: TouchspinComponent,
	decorators: [
		moduleMetadata({
			declarations: [TouchspinComponent],
			imports: [CommonModule, FormsModule],
		}),
	],
	parameters: {
		docs: {
			page: SpinnerDocumentation,
		}
	},
} as Meta;

const Template: Story<TouchspinComponent> = (args: TouchspinComponent) => ({
	props: args,
	template: `
    <div class="container">
    <systelab-spinner [spinValues]="spinValues"></systelab-spinner>
    </div>
    `,

});


export const Default = Template.bind({});
Default.args = {
	spinValues: new TouchSpinValues(1,1,100,1,false)
};
