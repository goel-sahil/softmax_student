export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					alignment: 'left',
					page: '/dashboard',
					translate: 'Dashboard',
				},
				{
					title: 'Notice',
					root: true,
					alignment: 'left',
					page: '/notice',
					translate: 'Notice',
				},
				{
					title: 'Homework',
					root: true,
					alignment: 'left',
					page: '/homework',
					translate: 'Homework',
				},
				{
					title: 'Profile',
					root: true,
					alignment: 'left',
					page: '/profile',
					translate: 'Profile',
				},
				// {
				// 	title: 'Components',
				// 	root: true,
				// 	alignment: 'left',
				// 	toggle: 'click',
				// 	submenu: [
				// 		{
				// 			title: 'Google Material',
				// 			bullet: 'dot',
				// 			icon: 'flaticon-interface-7',
				// 			submenu: [
				// 				{
				// 					title: 'Form Controls',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Auto Complete',
				// 							page: '/material/form-controls/autocomplete',
				// 							permission: 'accessToECommerceModule'
				// 						},
				// 						{
				// 							title: 'Checkbox',
				// 							page: '/material/form-controls/checkbox'
				// 						},
				// 						{
				// 							title: 'Radio Button',
				// 							page: '/material/form-controls/radiobutton'
				// 						},
				// 						{
				// 							title: 'Datepicker',
				// 							page: '/material/form-controls/datepicker'
				// 						},
				// 						{
				// 							title: 'Form Field',
				// 							page: '/material/form-controls/formfield'
				// 						},
				// 						{
				// 							title: 'Input',
				// 							page: '/material/form-controls/input'
				// 						},
				// 						{
				// 							title: 'Select',
				// 							page: '/material/form-controls/select'
				// 						},
				// 						{
				// 							title: 'Slider',
				// 							page: '/material/form-controls/slider'
				// 						},
				// 						{
				// 							title: 'Slider Toggle',
				// 							page: '/material/form-controls/slidertoggle'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					title: 'Navigation',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Menu',
				// 							page: '/material/navigation/menu'
				// 						},
				// 						{
				// 							title: 'Sidenav',
				// 							page: '/material/navigation/sidenav'
				// 						},
				// 						{
				// 							title: 'Toolbar',
				// 							page: '/material/navigation/toolbar'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					title: 'Layout',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Card',
				// 							page: '/material/layout/card'
				// 						},
				// 						{
				// 							title: 'Divider',
				// 							page: '/material/layout/divider'
				// 						},
				// 						{
				// 							title: 'Expansion panel',
				// 							page: '/material/layout/expansion-panel'
				// 						},
				// 						{
				// 							title: 'Grid list',
				// 							page: '/material/layout/grid-list'
				// 						},
				// 						{
				// 							title: 'List',
				// 							page: '/material/layout/list'
				// 						},
				// 						{
				// 							title: 'Tabs',
				// 							page: '/material/layout/tabs'
				// 						},
				// 						{
				// 							title: 'Stepper',
				// 							page: '/material/layout/stepper'
				// 						},
				// 						{
				// 							title: 'Default Forms',
				// 							page: '/material/layout/default-forms'
				// 						},
				// 						{
				// 							title: 'Tree',
				// 							page: '/material/layout/tree'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					title: 'Buttons & Indicators',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Button',
				// 							page: '/material/buttons-and-indicators/button'
				// 						},
				// 						{
				// 							title: 'Button toggle',
				// 							page: '/material/buttons-and-indicators/button-toggle'
				// 						},
				// 						{
				// 							title: 'Chips',
				// 							page: '/material/buttons-and-indicators/chips'
				// 						},
				// 						{
				// 							title: 'Icon',
				// 							page: '/material/buttons-and-indicators/icon'
				// 						},
				// 						{
				// 							title: 'Progress bar',
				// 							page: '/material/buttons-and-indicators/progress-bar'
				// 						},
				// 						{
				// 							title: 'Progress spinner',
				// 							page: '/material/buttons-and-indicators/progress-spinner'
				// 						},
				// 						{
				// 							title: 'Ripples',
				// 							page: '/material/buttons-and-indicators/ripples'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					title: 'Popups & Modals',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Bottom sheet',
				// 							page: '/material/popups-and-modals/bottom-sheet'
				// 						},
				// 						{
				// 							title: 'Dialog',
				// 							page: '/material/popups-and-modals/dialog'
				// 						},
				// 						{
				// 							title: 'Snackbar',
				// 							page: '/material/popups-and-modals/snackbar'
				// 						},
				// 						{
				// 							title: 'Tooltip',
				// 							page: '/material/popups-and-modals/tooltip'
				// 						}
				// 					]
				// 				},
				// 				{
				// 					title: 'Data table',
				// 					bullet: 'dot',
				// 					submenu: [
				// 						{
				// 							title: 'Paginator',
				// 							page: '/material/data-table/paginator'
				// 						},
				// 						{
				// 							title: 'Sort header',
				// 							page: '/material/data-table/sort-header'
				// 						},
				// 						{
				// 							title: 'Table',
				// 							page: '/material/data-table/table'
				// 						}
				// 					]
				// 				}
				// 			]
				// 		},
				// 		{
				// 			title: 'Ng-Bootstrap',
				// 			bullet: 'dot',
				// 			icon: 'flaticon-web',
				// 			submenu: [
				// 				{
				// 					title: 'Accordion',
				// 					page: '/ngbootstrap/accordion'
				// 				},
				// 				{
				// 					title: 'Alert',
				// 					page: '/ngbootstrap/alert'
				// 				},
				// 				{
				// 					title: 'Buttons',
				// 					page: '/ngbootstrap/buttons'
				// 				},
				// 				{
				// 					title: 'Carousel',
				// 					page: '/ngbootstrap/carousel'
				// 				},
				// 				{
				// 					title: 'Collapse',
				// 					page: '/ngbootstrap/collapse'
				// 				},
				// 				{
				// 					title: 'Datepicker',
				// 					page: '/ngbootstrap/datepicker'
				// 				},
				// 				{
				// 					title: 'Dropdown',
				// 					page: '/ngbootstrap/dropdown'
				// 				},
				// 				{
				// 					title: 'Modal',
				// 					page: '/ngbootstrap/modal'
				// 				},
				// 				{
				// 					title: 'Pagination',
				// 					page: '/ngbootstrap/pagination'
				// 				},
				// 				{
				// 					title: 'Popover',
				// 					page: '/ngbootstrap/popover'
				// 				},
				// 				{
				// 					title: 'Progressbar',
				// 					page: '/ngbootstrap/progressbar'
				// 				},
				// 				{
				// 					title: 'Rating',
				// 					page: '/ngbootstrap/rating'
				// 				},
				// 				{
				// 					title: 'Tabs',
				// 					page: '/ngbootstrap/tabs'
				// 				},
				// 				{
				// 					title: 'Timepicker',
				// 					page: '/ngbootstrap/timepicker'
				// 				},
				// 				{
				// 					title: 'Tooltips',
				// 					page: '/ngbootstrap/tooltip'
				// 				},
				// 				{
				// 					title: 'Typehead',
				// 					page: '/ngbootstrap/typehead'
				// 				}
				// 			]
				// 		},
				// 	]
				// },
			]
		},
		aside: {
			self: {},
			items: []
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
