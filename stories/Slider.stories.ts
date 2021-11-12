import { Story, Meta } from '@storybook/angular/types-6-0';
import SliderDocumentation from './docs/slider.mdx';
import { SliderComponent } from '../projects/systelab-components/src/lib/slider/slider.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';


export default {
	title: 'Components/Slider',
	component: SliderComponent,
	decorators: [
		moduleMetadata({
			declarations: [SliderComponent],
			imports: [CommonModule],
		}),
	],
	parameters: {
		docs: {
			page: SliderDocumentation,
		}
	},
} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
	props: args,
	template: `
    <div class="container">
    <systelab-slider [continuous]="true" [max]="100" [min]="0" [step]="1"></systelab-slider>
    </div>
    `,

});


export const Default = Template.bind({});
Default.args = {
};
