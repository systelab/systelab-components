import { Component } from '@angular/core';

@Component({
	selector:    'showcase-icon',
	templateUrl: 'showcase-icon.component.html',
	styleUrls:   ['showcase-icon.component.scss']
})
export class ShowcaseIconComponent {

	public icons: string[] = [];
	public iconsFontAwesome : string[] = [];

	public constructor() {

		this.iconsFontAwesome.push('fab fa-accessible-icon');
		this.iconsFontAwesome.push('fab fa-android');
		this.iconsFontAwesome.push('fab fa-bluetooth');
		this.iconsFontAwesome.push('fab fa-bong');
		this.iconsFontAwesome.push('fas fa-diagnoses');
		this.iconsFontAwesome.push('fas fa-biohazard');
		this.iconsFontAwesome.push('fas fa-microscope');
		this.iconsFontAwesome.push('fas fa-procedures');
		this.iconsFontAwesome.push('fas fa-stethoscope');
		this.iconsFontAwesome.push('fas fa-broadcast-tower');
		this.iconsFontAwesome.push('far fa-eye-slash');
		this.iconsFontAwesome.push('far fa-eye');
		this.iconsFontAwesome.push('far fa-hospital');
		this.iconsFontAwesome.push('fab fa-jenkins');
		this.iconsFontAwesome.push('fab fa-java');
		this.iconsFontAwesome.push('fab fa-pied-piper-alt');
		this.iconsFontAwesome.push('fas fa-business-time');
		this.iconsFontAwesome.push('fas fa-capsules');
		this.iconsFontAwesome.push('fas fa-code');
		this.iconsFontAwesome.push('fas fa-cloud-upload-alt');
		this.iconsFontAwesome.push('fas fa-deaf');
		this.iconsFontAwesome.push('fas fa-dna');
		this.iconsFontAwesome.push('fas fa-filter');
		this.iconsFontAwesome.push('fas fa-hospital-symbol');
		this.iconsFontAwesome.push('fas fa-ambulance');
		this.iconsFontAwesome.push('fas fa-pills');
		this.iconsFontAwesome.push('far fa-comments');
		this.iconsFontAwesome.push('fas fa-notes-medical');
		this.iconsFontAwesome.push('fas fa-id-card-alt');
		this.iconsFontAwesome.push('fas fa-brain');
		this.iconsFontAwesome.push('fas fa-x-ray');
		this.iconsFontAwesome.push('fas fa-user-md');
		this.iconsFontAwesome.push('fas fa-weight');

		this.icons.push('icon-context-menu');
		this.icons.push('icon-numpad');
		this.icons.push('icon-clock');
		this.icons.push('icon-comment');
		this.icons.push('icon-plus');
		this.icons.push('icon-question');
		this.icons.push('icon-minus');
		this.icons.push('icon-search');
		this.icons.push('icon-user');
		this.icons.push('icon-check');
		this.icons.push('icon-close');
		this.icons.push('icon-gear');
		this.icons.push('icon-cog');
		this.icons.push('icon-home');
		this.icons.push('icon-download');
		this.icons.push('icon-refresh');
		this.icons.push('icon-lock');
		this.icons.push('icon-book');
		this.icons.push('icon-print');
		this.icons.push('icon-list');
		this.icons.push('icon-list2');
		this.icons.push('icon-chevron-left');
		this.icons.push('icon-chevron-right');
		this.icons.push('icon-plus-circle');
		this.icons.push('icon-minus-circle');
		this.icons.push('icon-times-circle');
		this.icons.push('icon-check-circle');
		this.icons.push('icon-question-circle');
		this.icons.push('icon-info-circle');
		this.icons.push('icon-exclamation-circle');
		this.icons.push('icon-exclamation-triangle');
		this.icons.push('icon-warning');
		this.icons.push('icon-calendar');
		this.icons.push('icon-chevron-up');
		this.icons.push('icon-chevron-down');
		this.icons.push('icon-square-o');
		this.icons.push('icon-unlock');
		this.icons.push('icon-certificate');
		this.icons.push('icon-tool');
		this.icons.push('icon-copy');
		this.icons.push('icon-square');
		this.icons.push('icon-caret-down');
		this.icons.push('icon-caret-up');
		this.icons.push('icon-caret-left');
		this.icons.push('icon-caret-right');
		this.icons.push('icon-cloud-download');
		this.icons.push('icon-cloud-upload');
		this.icons.push('icon-file-text-o');
		this.icons.push('icon-angle-double-left');
		this.icons.push('icon-angle-double-right');
		this.icons.push('icon-angle-double-up');
		this.icons.push('icon-angle-double-down');
		this.icons.push('icon-angle-left');
		this.icons.push('icon-angle-right');
		this.icons.push('icon-angle-up');
		this.icons.push('icon-angle-down');
		this.icons.push('icon-spinner');
		this.icons.push('icon-exclamation');
		this.icons.push('icon-chevron-circle-left');
		this.icons.push('icon-chevron-circle-right');
		this.icons.push('icon-chevron-circle-up');
		this.icons.push('icon-chevron-circle-down');
		this.icons.push('icon-child');
		this.icons.push('icon-trash');
		this.icons.push('icon-line-chart');
		this.icons.push('icon-female');
		this.icons.push('icon-male');
		this.icons.push('icon-calendar-check');
		this.icons.push('icon-percent');
		this.icons.push('icon-maximize');
		this.icons.push('icon-minimize');
		this.icons.push('icon-th-large');
		this.icons.push('icon-tag');
		this.icons.push('icon-bug');
		this.icons.push('icon-cube');
		this.icons.push('icon-price-tag');
		this.icons.push('icon-empty-cube');
		this.icons.push('icon-empty-cube-linked');
		this.icons.push('icon-profile');
		this.icons.push('icon-custom-tag');
		this.icons.push('icon-custom-linked-tag');
		this.icons.push('icon-custom-linked-tag');
		this.icons.push('icon-custom-ifa-tag');
		this.icons.push('icon-custom-ifa-linked-tag');
		this.icons.push('icon-culture');
		this.icons.push('icon-culture-linked');
		this.icons.push('icon-paperclip');
		this.icons.push('icon-instrument-icon');
		this.icons.push('icon-tree');
		this.icons.push('icon-sitemap');
		this.icons.push('icon-refresh');
		this.icons.push('icon-file-certified');
		this.icons.push('icon-wifi');
		this.icons.push('icon-wifi-alert');
		this.icons.push('icon-star');
		this.icons.push('icon-star-o');
		this.icons.push('icon-spinner11');
		this.icons.push('icon-redo2');
		this.icons.push('icon-ban');
		this.icons.push('icon-checkbox');
		this.icons.push('icon-microsoft-excel');
		this.icons.push('icon-microsoft-word');
		this.icons.push('icon-microsoft-powerpoint');
		this.icons.push('icon-adobe-acrobat-reader');
		this.icons.push('icon-filter');

	}
}
