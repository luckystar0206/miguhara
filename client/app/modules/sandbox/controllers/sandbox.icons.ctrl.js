'use strict';
var app = angular.module('com.module.sandbox');
app.controller('SandboxIconsCtrl', function ($scope) {

  $scope.filter = "";

  $scope.iconSets = {
    fontAwesome: {
      baseClass: 'fa fa-fw fa-3x',
      icons: [
        'fa-adjust',
        'fa-adn',
        'fa-align-center',
        'fa-align-justify',
        'fa-align-left',
        'fa-align-right',
        'fa-ambulance',
        'fa-anchor',
        'fa-android',
        'fa-angellist',
        'fa-angle-double-down',
        'fa-angle-double-left',
        'fa-angle-double-right',
        'fa-angle-double-up',
        'fa-angle-down',
        'fa-angle-left',
        'fa-angle-right',
        'fa-angle-up',
        'fa-apple',
        'fa-archive',
        'fa-area-chart',
        'fa-arrow-circle-down',
        'fa-arrow-circle-left',
        'fa-arrow-circle-o-down',
        'fa-arrow-circle-o-left',
        'fa-arrow-circle-o-right',
        'fa-arrow-circle-o-up',
        'fa-arrow-circle-right',
        'fa-arrow-circle-up',
        'fa-arrow-down',
        'fa-arrow-left',
        'fa-arrow-right',
        'fa-arrow-up',
        'fa-arrows',
        'fa-arrows-alt',
        'fa-arrows-h',
        'fa-arrows-v',
        'fa-asterisk',
        'fa-at',
        'fa-automobile',
        'fa-backward',
        'fa-ban',
        'fa-bank',
        'fa-bar-chart',
        'fa-bar-chart-o',
        'fa-barcode',
        'fa-bars',
        'fa-bed',
        'fa-beer',
        'fa-behance',
        'fa-behance-square',
        'fa-bell',
        'fa-bell-o',
        'fa-bell-slash',
        'fa-bell-slash-o',
        'fa-bicycle',
        'fa-binoculars',
        'fa-birthday-cake',
        'fa-bitbucket',
        'fa-bitbucket-square',
        'fa-bitcoin',
        'fa-bold',
        'fa-bolt',
        'fa-bomb',
        'fa-book',
        'fa-bookmark',
        'fa-bookmark-o',
        'fa-briefcase',
        'fa-btc',
        'fa-bug',
        'fa-building',
        'fa-building-o',
        'fa-bullhorn',
        'fa-bullseye',
        'fa-bus',
        'fa-buysellads',
        'fa-cab',
        'fa-calculator',
        'fa-calendar',
        'fa-calendar-o',
        'fa-camera',
        'fa-camera-retro',
        'fa-car',
        'fa-caret-down',
        'fa-caret-left',
        'fa-caret-right',
        'fa-caret-square-o-down',
        'fa-caret-square-o-left',
        'fa-caret-square-o-right',
        'fa-caret-square-o-up',
        'fa-caret-up',
        'fa-cart-arrow-down',
        'fa-cart-plus',
        'fa-cc',
        'fa-cc-amex',
        'fa-cc-discover',
        'fa-cc-mastercard',
        'fa-cc-paypal',
        'fa-cc-stripe',
        'fa-cc-visa',
        'fa-certificate',
        'fa-chain',
        'fa-chain-broken',
        'fa-check',
        'fa-check-circle',
        'fa-check-circle-o',
        'fa-check-square',
        'fa-check-square-o',
        'fa-chevron-circle-down',
        'fa-chevron-circle-left',
        'fa-chevron-circle-right',
        'fa-chevron-circle-up',
        'fa-chevron-down',
        'fa-chevron-left',
        'fa-chevron-right',
        'fa-chevron-up',
        'fa-child',
        'fa-circle',
        'fa-circle-o',
        'fa-circle-o-notch',
        'fa-circle-thin',
        'fa-clipboard',
        'fa-clock-o',
        'fa-close',
        'fa-cloud',
        'fa-cloud-download',
        'fa-cloud-upload',
        'fa-cny',
        'fa-code',
        'fa-code-fork',
        'fa-codepen',
        'fa-coffee',
        'fa-cog',
        'fa-cogs',
        'fa-columns',
        'fa-comment',
        'fa-comment-o',
        'fa-comments',
        'fa-comments-o',
        'fa-compass',
        'fa-compress',
        'fa-connectdevelop',
        'fa-copy',
        'fa-copyright',
        'fa-credit-card',
        'fa-crop',
        'fa-crosshairs',
        'fa-css3',
        'fa-cube',
        'fa-cubes',
        'fa-cut',
        'fa-cutlery',
        'fa-dashboard',
        'fa-dashcube',
        'fa-database',
        'fa-dedent',
        'fa-delicious',
        'fa-desktop',
        'fa-deviantart',
        'fa-diamond',
        'fa-digg',
        'fa-dollar',
        'fa-dot-circle-o',
        'fa-download',
        'fa-dribbble',
        'fa-dropbox',
        'fa-drupal',
        'fa-edit',
        'fa-eject',
        'fa-ellipsis-h',
        'fa-ellipsis-v',
        'fa-empire',
        'fa-envelope',
        'fa-envelope-o',
        'fa-envelope-square',
        'fa-eraser',
        'fa-eur',
        'fa-euro',
        'fa-exchange',
        'fa-exclamation',
        'fa-exclamation-circle',
        'fa-exclamation-triangle',
        'fa-expand',
        'fa-external-link',
        'fa-external-link-square',
        'fa-eye',
        'fa-eye-slash',
        'fa-eyedropper',
        'fa-facebook',
        'fa-facebook-f',
        'fa-facebook-official',
        'fa-facebook-square',
        'fa-fast-backward',
        'fa-fast-forward',
        'fa-fax',
        'fa-female',
        'fa-fighter-jet',
        'fa-file',
        'fa-file-archive-o',
        'fa-file-audio-o',
        'fa-file-code-o',
        'fa-file-excel-o',
        'fa-file-image-o',
        'fa-file-movie-o',
        'fa-file-o',
        'fa-file-pdf-o',
        'fa-file-photo-o',
        'fa-file-picture-o',
        'fa-file-powerpoint-o',
        'fa-file-sound-o',
        'fa-file-text',
        'fa-file-text-o',
        'fa-file-video-o',
        'fa-file-word-o',
        'fa-file-zip-o',
        'fa-files-o',
        'fa-film',
        'fa-filter',
        'fa-fire',
        'fa-fire-extinguisher',
        'fa-flag',
        'fa-flag-checkered',
        'fa-flag-o',
        'fa-flash',
        'fa-flask',
        'fa-flickr',
        'fa-floppy-o',
        'fa-folder',
        'fa-folder-o',
        'fa-folder-open',
        'fa-folder-open-o',
        'fa-font',
        'fa-forumbee',
        'fa-forward',
        'fa-foursquare',
        'fa-frown-o',
        'fa-futbol-o',
        'fa-gamepad',
        'fa-gavel',
        'fa-gbp',
        'fa-ge',
        'fa-gear',
        'fa-gears',
        'fa-genderless',
        'fa-gift',
        'fa-git',
        'fa-git-square',
        'fa-github',
        'fa-github-alt',
        'fa-github-square',
        'fa-gittip',
        'fa-glass',
        'fa-globe',
        'fa-google',
        'fa-google-plus',
        'fa-google-plus-square',
        'fa-google-wallet',
        'fa-graduation-cap',
        'fa-gratipay',
        'fa-group',
        'fa-h-square',
        'fa-hacker-news',
        'fa-hand-o-down',
        'fa-hand-o-left',
        'fa-hand-o-right',
        'fa-hand-o-up',
        'fa-hdd-o',
        'fa-header',
        'fa-headphones',
        'fa-heart',
        'fa-heart-o',
        'fa-heartbeat',
        'fa-history',
        'fa-home',
        'fa-hospital-o',
        'fa-hotel',
        'fa-html5',
        'fa-ils',
        'fa-image',
        'fa-inbox',
        'fa-indent',
        'fa-info',
        'fa-info-circle',
        'fa-inr',
        'fa-instagram',
        'fa-institution',
        'fa-ioxhost',
        'fa-italic',
        'fa-joomla',
        'fa-jpy',
        'fa-jsfiddle',
        'fa-key',
        'fa-keyboard-o',
        'fa-krw',
        'fa-language',
        'fa-laptop',
        'fa-lastfm',
        'fa-lastfm-square',
        'fa-leaf',
        'fa-leanpub',
        'fa-legal',
        'fa-lemon-o',
        'fa-level-down',
        'fa-level-up',
        'fa-life-bouy',
        'fa-life-buoy',
        'fa-life-ring',
        'fa-life-saver',
        'fa-lightbulb-o',
        'fa-line-chart',
        'fa-link',
        'fa-linkedin',
        'fa-linkedin-square',
        'fa-linux',
        'fa-list',
        'fa-list-alt',
        'fa-list-ol',
        'fa-list-ul',
        'fa-location-arrow',
        'fa-lock',
        'fa-long-arrow-down',
        'fa-long-arrow-left',
        'fa-long-arrow-right',
        'fa-long-arrow-up',
        'fa-magic',
        'fa-magnet',
        'fa-mail-forward',
        'fa-mail-reply',
        'fa-mail-reply-all',
        'fa-male',
        'fa-map-marker',
        'fa-mars',
        'fa-mars-double',
        'fa-mars-stroke',
        'fa-mars-stroke-h',
        'fa-mars-stroke-v',
        'fa-maxcdn',
        'fa-meanpath',
        'fa-medium',
        'fa-medkit',
        'fa-meh-o',
        'fa-mercury',
        'fa-microphone',
        'fa-microphone-slash',
        'fa-minus',
        'fa-minus-circle',
        'fa-minus-square',
        'fa-minus-square-o',
        'fa-mobile',
        'fa-mobile-phone',
        'fa-money',
        'fa-moon-o',
        'fa-mortar-board',
        'fa-motorcycle',
        'fa-music',
        'fa-navicon',
        'fa-neuter',
        'fa-newspaper-o',
        'fa-openid',
        'fa-outdent',
        'fa-pagelines',
        'fa-paint-brush',
        'fa-paper-plane',
        'fa-paper-plane-o',
        'fa-paperclip',
        'fa-paragraph',
        'fa-paste',
        'fa-pause',
        'fa-paw',
        'fa-paypal',
        'fa-pencil',
        'fa-pencil-square',
        'fa-pencil-square-o',
        'fa-phone',
        'fa-phone-square',
        'fa-photo',
        'fa-picture-o',
        'fa-pie-chart',
        'fa-pied-piper',
        'fa-pied-piper-alt',
        'fa-pinterest',
        'fa-pinterest-p',
        'fa-pinterest-square',
        'fa-plane',
        'fa-play',
        'fa-play-circle',
        'fa-play-circle-o',
        'fa-plug',
        'fa-plus',
        'fa-plus-circle',
        'fa-plus-square',
        'fa-plus-square-o',
        'fa-power-off',
        'fa-print',
        'fa-pulse',
        'fa-puzzle-piece',
        'fa-qq',
        'fa-qrcode',
        'fa-question',
        'fa-question-circle',
        'fa-quote-left',
        'fa-quote-right',
        'fa-ra',
        'fa-random',
        'fa-rebel',
        'fa-recycle',
        'fa-reddit',
        'fa-reddit-square',
        'fa-refresh',
        'fa-remove',
        'fa-renren',
        'fa-reorder',
        'fa-repeat',
        'fa-reply',
        'fa-reply-all',
        'fa-retweet',
        'fa-rmb',
        'fa-road',
        'fa-rocket',
        'fa-rouble',
        'fa-rss',
        'fa-rss-square',
        'fa-rub',
        'fa-ruble',
        'fa-rupee',
        'fa-save',
        'fa-scissors',
        'fa-search',
        'fa-search-minus',
        'fa-search-plus',
        'fa-sellsy',
        'fa-send',
        'fa-send-o',
        'fa-server',
        'fa-share',
        'fa-share-alt',
        'fa-share-alt-square',
        'fa-share-square',
        'fa-share-square-o',
        'fa-shekel',
        'fa-sheqel',
        'fa-shield',
        'fa-ship',
        'fa-shirtsinbulk',
        'fa-shopping-cart',
        'fa-sign-in',
        'fa-sign-out',
        'fa-signal',
        'fa-simplybuilt',
        'fa-sitemap',
        'fa-skyatlas',
        'fa-skype',
        'fa-slack',
        'fa-sliders',
        'fa-slideshare',
        'fa-smile-o',
        'fa-soccer-ball-o',
        'fa-sort',
        'fa-sort-alpha-asc',
        'fa-sort-alpha-desc',
        'fa-sort-amount-asc',
        'fa-sort-amount-desc',
        'fa-sort-asc',
        'fa-sort-desc',
        'fa-sort-down',
        'fa-sort-numeric-asc',
        'fa-sort-numeric-desc',
        'fa-sort-up',
        'fa-soundcloud',
        'fa-space-shuttle',
        'fa-spin',
        'fa-spinner',
        'fa-spoon',
        'fa-spotify',
        'fa-square',
        'fa-square-o',
        'fa-stack-exchange',
        'fa-stack-overflow',
        'fa-star',
        'fa-star-half',
        'fa-star-half-empty',
        'fa-star-half-full',
        'fa-star-half-o',
        'fa-star-o',
        'fa-steam',
        'fa-steam-square',
        'fa-step-backward',
        'fa-step-forward',
        'fa-stethoscope',
        'fa-stop',
        'fa-street-view',
        'fa-strikethrough',
        'fa-stumbleupon',
        'fa-stumbleupon-circle',
        'fa-subscript',
        'fa-subway',
        'fa-suitcase',
        'fa-sun-o',
        'fa-superscript',
        'fa-support',
        'fa-table',
        'fa-tablet',
        'fa-tachometer',
        'fa-tag',
        'fa-tags',
        'fa-tasks',
        'fa-taxi',
        'fa-tencent-weibo',
        'fa-terminal',
        'fa-text-height',
        'fa-text-width',
        'fa-th',
        'fa-th-large',
        'fa-th-list',
        'fa-thumb-tack',
        'fa-thumbs-down',
        'fa-thumbs-o-down',
        'fa-thumbs-o-up',
        'fa-thumbs-up',
        'fa-ticket',
        'fa-times',
        'fa-times-circle',
        'fa-times-circle-o',
        'fa-tint',
        'fa-toggle-down',
        'fa-toggle-left',
        'fa-toggle-off',
        'fa-toggle-on',
        'fa-toggle-right',
        'fa-toggle-up',
        'fa-train',
        'fa-transgender',
        'fa-transgender-alt',
        'fa-trash',
        'fa-trash-o',
        'fa-tree',
        'fa-trello',
        'fa-trophy',
        'fa-truck',
        'fa-try',
        'fa-tty',
        'fa-tumblr',
        'fa-tumblr-square',
        'fa-turkish-lira',
        'fa-twitch',
        'fa-twitter',
        'fa-twitter-square',
        'fa-umbrella',
        'fa-underline',
        'fa-undo',
        'fa-university',
        'fa-unlink',
        'fa-unlock',
        'fa-unlock-alt',
        'fa-unsorted',
        'fa-upload',
        'fa-usd',
        'fa-user',
        'fa-user-md',
        'fa-user-plus',
        'fa-user-secret',
        'fa-user-times',
        'fa-users',
        'fa-venus',
        'fa-venus-double',
        'fa-venus-mars',
        'fa-viacoin',
        'fa-video-camera',
        'fa-vimeo-square',
        'fa-vine',
        'fa-vk',
        'fa-volume-down',
        'fa-volume-off',
        'fa-volume-up',
        'fa-warning',
        'fa-wechat',
        'fa-weibo',
        'fa-weixin',
        'fa-whatsapp',
        'fa-wheelchair',
        'fa-wifi',
        'fa-windows',
        'fa-won',
        'fa-wordpress',
        'fa-wrench',
        'fa-xing',
        'fa-xing-square',
        'fa-yahoo',
        'fa-yelp',
        'fa-yen',
        'fa-youtube',
        'fa-youtube-play',
        'fa-youtube-square'
      ]
    },
    ionicons: {
      baseClass: 'icon fa-fw fa-3x',
      icons: [
        'ion-alert',
        'ion-alert-circled',
        'ion-android-add',
        'ion-android-add-circle',
        'ion-android-alarm-clock',
        'ion-android-alert',
        'ion-android-apps',
        'ion-android-archive',
        'ion-android-arrow-back',
        'ion-android-arrow-down',
        'ion-android-arrow-dropdown',
        'ion-android-arrow-dropdown-circle',
        'ion-android-arrow-dropleft',
        'ion-android-arrow-dropleft-circle',
        'ion-android-arrow-dropright',
        'ion-android-arrow-dropright-circle',
        'ion-android-arrow-dropup',
        'ion-android-arrow-dropup-circle',
        'ion-android-arrow-forward',
        'ion-android-arrow-up',
        'ion-android-attach',
        'ion-android-bar',
        'ion-android-bicycle',
        'ion-android-boat',
        'ion-android-bookmark',
        'ion-android-bulb',
        'ion-android-bus',
        'ion-android-calendar',
        'ion-android-call',
        'ion-android-camera',
        'ion-android-cancel',
        'ion-android-car',
        'ion-android-cart',
        'ion-android-chat',
        'ion-android-checkbox',
        'ion-android-checkbox-blank',
        'ion-android-checkbox-outline',
        'ion-android-checkbox-outline-blank',
        'ion-android-checkmark-circle',
        'ion-android-clipboard',
        'ion-android-close',
        'ion-android-cloud',
        'ion-android-cloud-circle',
        'ion-android-cloud-done',
        'ion-android-cloud-outline',
        'ion-android-color-palette',
        'ion-android-compass',
        'ion-android-contact',
        'ion-android-contacts',
        'ion-android-contract',
        'ion-android-create',
        'ion-android-delete',
        'ion-android-desktop',
        'ion-android-document',
        'ion-android-done',
        'ion-android-done-all',
        'ion-android-download',
        'ion-android-drafts',
        'ion-android-exit',
        'ion-android-expand',
        'ion-android-favorite',
        'ion-android-favorite-outline',
        'ion-android-film',
        'ion-android-folder',
        'ion-android-folder-open',
        'ion-android-funnel',
        'ion-android-globe',
        'ion-android-hand',
        'ion-android-hangout',
        'ion-android-happy',
        'ion-android-home',
        'ion-android-image',
        'ion-android-laptop',
        'ion-android-list',
        'ion-android-locate',
        'ion-android-lock',
        'ion-android-mail',
        'ion-android-map',
        'ion-android-menu',
        'ion-android-microphone',
        'ion-android-microphone-off',
        'ion-android-more-horizontal',
        'ion-android-more-vertical',
        'ion-android-navigate',
        'ion-android-notifications',
        'ion-android-notifications-none',
        'ion-android-notifications-off',
        'ion-android-open',
        'ion-android-options',
        'ion-android-people',
        'ion-android-person',
        'ion-android-person-add',
        'ion-android-phone-landscape',
        'ion-android-phone-portrait',
        'ion-android-pin',
        'ion-android-plane',
        'ion-android-playstore',
        'ion-android-print',
        'ion-android-radio-button-off',
        'ion-android-radio-button-on',
        'ion-android-refresh',
        'ion-android-remove',
        'ion-android-remove-circle',
        'ion-android-restaurant',
        'ion-android-sad',
        'ion-android-search',
        'ion-android-send',
        'ion-android-settings',
        'ion-android-share',
        'ion-android-share-alt',
        'ion-android-star',
        'ion-android-star-half',
        'ion-android-star-outline',
        'ion-android-stopwatch',
        'ion-android-subway',
        'ion-android-sunny',
        'ion-android-sync',
        'ion-android-textsms',
        'ion-android-time',
        'ion-android-train',
        'ion-android-unlock',
        'ion-android-upload',
        'ion-android-volume-down',
        'ion-android-volume-mute',
        'ion-android-volume-off',
        'ion-android-volume-up',
        'ion-android-walk',
        'ion-android-warning',
        'ion-android-watch',
        'ion-android-wifi',
        'ion-aperture',
        'ion-archive',
        'ion-arrow-down-a',
        'ion-arrow-down-b',
        'ion-arrow-down-c',
        'ion-arrow-expand',
        'ion-arrow-graph-down-left',
        'ion-arrow-graph-down-right',
        'ion-arrow-graph-up-left',
        'ion-arrow-graph-up-right',
        'ion-arrow-left-a',
        'ion-arrow-left-b',
        'ion-arrow-left-c',
        'ion-arrow-move',
        'ion-arrow-resize',
        'ion-arrow-return-left',
        'ion-arrow-return-right',
        'ion-arrow-right-a',
        'ion-arrow-right-b',
        'ion-arrow-right-c',
        'ion-arrow-shrink',
        'ion-arrow-swap',
        'ion-arrow-up-a',
        'ion-arrow-up-b',
        'ion-arrow-up-c',
        'ion-asterisk',
        'ion-at',
        'ion-backspace',
        'ion-backspace-outline',
        'ion-bag',
        'ion-battery-charging',
        'ion-battery-empty',
        'ion-battery-full',
        'ion-battery-half',
        'ion-battery-low',
        'ion-beaker',
        'ion-beer',
        'ion-bluetooth',
        'ion-bonfire',
        'ion-bookmark',
        'ion-bowtie',
        'ion-briefcase',
        'ion-bug',
        'ion-calculator',
        'ion-calendar',
        'ion-camera',
        'ion-card',
        'ion-cash',
        'ion-chatbox',
        'ion-chatbox-working',
        'ion-chatboxes',
        'ion-chatbubble',
        'ion-chatbubble-working',
        'ion-chatbubbles',
        'ion-checkmark',
        'ion-checkmark-circled',
        'ion-checkmark-round',
        'ion-chevron-down',
        'ion-chevron-left',
        'ion-chevron-right',
        'ion-chevron-up',
        'ion-clipboard',
        'ion-clock',
        'ion-close',
        'ion-close-circled',
        'ion-close-round',
        'ion-closed-captioning',
        'ion-cloud',
        'ion-code',
        'ion-code-download',
        'ion-code-working',
        'ion-coffee',
        'ion-compass',
        'ion-compose',
        'ion-connection-bars',
        'ion-contrast',
        'ion-crop',
        'ion-cube',
        'ion-disc',
        'ion-document',
        'ion-document-text',
        'ion-drag',
        'ion-earth',
        'ion-easel',
        'ion-edit',
        'ion-egg',
        'ion-eject',
        'ion-email',
        'ion-email-unread',
        'ion-erlenmeyer-flask',
        'ion-erlenmeyer-flask-bubbles',
        'ion-eye',
        'ion-eye-disabled',
        'ion-female',
        'ion-filing',
        'ion-film-marker',
        'ion-fireball',
        'ion-flag',
        'ion-flame',
        'ion-flash',
        'ion-flash-off',
        'ion-folder',
        'ion-fork',
        'ion-fork-repo',
        'ion-forward',
        'ion-funnel',
        'ion-gear-a',
        'ion-gear-b',
        'ion-grid',
        'ion-hammer',
        'ion-happy',
        'ion-happy-outline',
        'ion-headphone',
        'ion-heart',
        'ion-heart-broken',
        'ion-help',
        'ion-help-buoy',
        'ion-help-circled',
        'ion-home',
        'ion-icecream',
        'ion-image',
        'ion-images',
        'ion-information',
        'ion-information-circled',
        'ion-ionic',
        'ion-ios-alarm',
        'ion-ios-alarm-outline',
        'ion-ios-albums',
        'ion-ios-albums-outline',
        'ion-ios-americanfootball',
        'ion-ios-americanfootball-outline',
        'ion-ios-analytics',
        'ion-ios-analytics-outline',
        'ion-ios-arrow-back',
        'ion-ios-arrow-down',
        'ion-ios-arrow-forward',
        'ion-ios-arrow-left',
        'ion-ios-arrow-right',
        'ion-ios-arrow-thin-down',
        'ion-ios-arrow-thin-left',
        'ion-ios-arrow-thin-right',
        'ion-ios-arrow-thin-up',
        'ion-ios-arrow-up',
        'ion-ios-at',
        'ion-ios-at-outline',
        'ion-ios-barcode',
        'ion-ios-barcode-outline',
        'ion-ios-baseball',
        'ion-ios-baseball-outline',
        'ion-ios-basketball',
        'ion-ios-basketball-outline',
        'ion-ios-bell',
        'ion-ios-bell-outline',
        'ion-ios-body',
        'ion-ios-body-outline',
        'ion-ios-bolt',
        'ion-ios-bolt-outline',
        'ion-ios-book',
        'ion-ios-book-outline',
        'ion-ios-bookmarks',
        'ion-ios-bookmarks-outline',
        'ion-ios-box',
        'ion-ios-box-outline',
        'ion-ios-briefcase',
        'ion-ios-briefcase-outline',
        'ion-ios-browsers',
        'ion-ios-browsers-outline',
        'ion-ios-calculator',
        'ion-ios-calculator-outline',
        'ion-ios-calendar',
        'ion-ios-calendar-outline',
        'ion-ios-camera',
        'ion-ios-camera-outline',
        'ion-ios-cart',
        'ion-ios-cart-outline',
        'ion-ios-chatboxes',
        'ion-ios-chatboxes-outline',
        'ion-ios-chatbubble',
        'ion-ios-chatbubble-outline',
        'ion-ios-checkmark',
        'ion-ios-checkmark-empty',
        'ion-ios-checkmark-outline',
        'ion-ios-circle-filled',
        'ion-ios-circle-outline',
        'ion-ios-clock',
        'ion-ios-clock-outline',
        'ion-ios-close',
        'ion-ios-close-empty',
        'ion-ios-close-outline',
        'ion-ios-cloud',
        'ion-ios-cloud-download',
        'ion-ios-cloud-download-outline',
        'ion-ios-cloud-outline',
        'ion-ios-cloud-upload',
        'ion-ios-cloud-upload-outline',
        'ion-ios-cloudy',
        'ion-ios-cloudy-night',
        'ion-ios-cloudy-night-outline',
        'ion-ios-cloudy-outline',
        'ion-ios-cog',
        'ion-ios-cog-outline',
        'ion-ios-color-filter',
        'ion-ios-color-filter-outline',
        'ion-ios-color-wand',
        'ion-ios-color-wand-outline',
        'ion-ios-compose',
        'ion-ios-compose-outline',
        'ion-ios-contact',
        'ion-ios-contact-outline',
        'ion-ios-copy',
        'ion-ios-copy-outline',
        'ion-ios-crop',
        'ion-ios-crop-strong',
        'ion-ios-download',
        'ion-ios-download-outline',
        'ion-ios-drag',
        'ion-ios-email',
        'ion-ios-email-outline',
        'ion-ios-eye',
        'ion-ios-eye-outline',
        'ion-ios-fastforward',
        'ion-ios-fastforward-outline',
        'ion-ios-filing',
        'ion-ios-filing-outline',
        'ion-ios-film',
        'ion-ios-film-outline',
        'ion-ios-flag',
        'ion-ios-flag-outline',
        'ion-ios-flame',
        'ion-ios-flame-outline',
        'ion-ios-flask',
        'ion-ios-flask-outline',
        'ion-ios-flower',
        'ion-ios-flower-outline',
        'ion-ios-folder',
        'ion-ios-folder-outline',
        'ion-ios-football',
        'ion-ios-football-outline',
        'ion-ios-game-controller-a',
        'ion-ios-game-controller-a-outline',
        'ion-ios-game-controller-b',
        'ion-ios-game-controller-b-outline',
        'ion-ios-gear',
        'ion-ios-gear-outline',
        'ion-ios-glasses',
        'ion-ios-glasses-outline',
        'ion-ios-grid-view',
        'ion-ios-grid-view-outline',
        'ion-ios-heart',
        'ion-ios-heart-outline',
        'ion-ios-help',
        'ion-ios-help-empty',
        'ion-ios-help-outline',
        'ion-ios-home',
        'ion-ios-home-outline',
        'ion-ios-infinite',
        'ion-ios-infinite-outline',
        'ion-ios-information',
        'ion-ios-information-empty',
        'ion-ios-information-outline',
        'ion-ios-ionic-outline',
        'ion-ios-keypad',
        'ion-ios-keypad-outline',
        'ion-ios-lightbulb',
        'ion-ios-lightbulb-outline',
        'ion-ios-list',
        'ion-ios-list-outline',
        'ion-ios-location',
        'ion-ios-location-outline',
        'ion-ios-locked',
        'ion-ios-locked-outline',
        'ion-ios-loop',
        'ion-ios-loop-strong',
        'ion-ios-medical',
        'ion-ios-medical-outline',
        'ion-ios-medkit',
        'ion-ios-medkit-outline',
        'ion-ios-mic',
        'ion-ios-mic-off',
        'ion-ios-mic-outline',
        'ion-ios-minus',
        'ion-ios-minus-empty',
        'ion-ios-minus-outline',
        'ion-ios-monitor',
        'ion-ios-monitor-outline',
        'ion-ios-moon',
        'ion-ios-moon-outline',
        'ion-ios-more',
        'ion-ios-more-outline',
        'ion-ios-musical-note',
        'ion-ios-musical-notes',
        'ion-ios-navigate',
        'ion-ios-navigate-outline',
        'ion-ios-nutrition',
        'ion-ios-nutrition-outline',
        'ion-ios-paper',
        'ion-ios-paper-outline',
        'ion-ios-paperplane',
        'ion-ios-paperplane-outline',
        'ion-ios-partlysunny',
        'ion-ios-partlysunny-outline',
        'ion-ios-pause',
        'ion-ios-pause-outline',
        'ion-ios-paw',
        'ion-ios-paw-outline',
        'ion-ios-people',
        'ion-ios-people-outline',
        'ion-ios-person',
        'ion-ios-person-outline',
        'ion-ios-personadd',
        'ion-ios-personadd-outline',
        'ion-ios-photos',
        'ion-ios-photos-outline',
        'ion-ios-pie',
        'ion-ios-pie-outline',
        'ion-ios-pint',
        'ion-ios-pint-outline',
        'ion-ios-play',
        'ion-ios-play-outline',
        'ion-ios-plus',
        'ion-ios-plus-empty',
        'ion-ios-plus-outline',
        'ion-ios-pricetag',
        'ion-ios-pricetag-outline',
        'ion-ios-pricetags',
        'ion-ios-pricetags-outline',
        'ion-ios-printer',
        'ion-ios-printer-outline',
        'ion-ios-pulse',
        'ion-ios-pulse-strong',
        'ion-ios-rainy',
        'ion-ios-rainy-outline',
        'ion-ios-recording',
        'ion-ios-recording-outline',
        'ion-ios-redo',
        'ion-ios-redo-outline',
        'ion-ios-refresh',
        'ion-ios-refresh-empty',
        'ion-ios-refresh-outline',
        'ion-ios-reload',
        'ion-ios-reverse-camera',
        'ion-ios-reverse-camera-outline',
        'ion-ios-rewind',
        'ion-ios-rewind-outline',
        'ion-ios-rose',
        'ion-ios-rose-outline',
        'ion-ios-search',
        'ion-ios-search-strong',
        'ion-ios-settings',
        'ion-ios-settings-strong',
        'ion-ios-shuffle',
        'ion-ios-shuffle-strong',
        'ion-ios-skipbackward',
        'ion-ios-skipbackward-outline',
        'ion-ios-skipforward',
        'ion-ios-skipforward-outline',
        'ion-ios-snowy',
        'ion-ios-speedometer',
        'ion-ios-speedometer-outline',
        'ion-ios-star',
        'ion-ios-star-half',
        'ion-ios-star-outline',
        'ion-ios-stopwatch',
        'ion-ios-stopwatch-outline',
        'ion-ios-sunny',
        'ion-ios-sunny-outline',
        'ion-ios-telephone',
        'ion-ios-telephone-outline',
        'ion-ios-tennisball',
        'ion-ios-tennisball-outline',
        'ion-ios-thunderstorm',
        'ion-ios-thunderstorm-outline',
        'ion-ios-time',
        'ion-ios-time-outline',
        'ion-ios-timer',
        'ion-ios-timer-outline',
        'ion-ios-toggle',
        'ion-ios-toggle-outline',
        'ion-ios-trash',
        'ion-ios-trash-outline',
        'ion-ios-undo',
        'ion-ios-undo-outline',
        'ion-ios-unlocked',
        'ion-ios-unlocked-outline',
        'ion-ios-upload',
        'ion-ios-upload-outline',
        'ion-ios-videocam',
        'ion-ios-videocam-outline',
        'ion-ios-volume-high',
        'ion-ios-volume-low',
        'ion-ios-wineglass',
        'ion-ios-wineglass-outline',
        'ion-ios-world',
        'ion-ios-world-outline',
        'ion-ipad',
        'ion-iphone',
        'ion-ipod',
        'ion-jet',
        'ion-key',
        'ion-knife',
        'ion-laptop',
        'ion-leaf',
        'ion-levels',
        'ion-lightbulb',
        'ion-link',
        'ion-load-a',
        'ion-load-b',
        'ion-load-c',
        'ion-load-d',
        'ion-location',
        'ion-lock-combination',
        'ion-locked',
        'ion-log-in',
        'ion-log-out',
        'ion-loop',
        'ion-magnet',
        'ion-male',
        'ion-man',
        'ion-map',
        'ion-medkit',
        'ion-merge',
        'ion-mic-a',
        'ion-mic-b',
        'ion-mic-c',
        'ion-minus',
        'ion-minus-circled',
        'ion-minus-round',
        'ion-model-s',
        'ion-monitor',
        'ion-more',
        'ion-mouse',
        'ion-music-note',
        'ion-navicon',
        'ion-navicon-round',
        'ion-navigate',
        'ion-network',
        'ion-no-smoking',
        'ion-nuclear',
        'ion-outlet',
        'ion-paintbrush',
        'ion-paintbucket',
        'ion-paper-airplane',
        'ion-paperclip',
        'ion-pause',
        'ion-person',
        'ion-person-add',
        'ion-person-stalker',
        'ion-pie-graph',
        'ion-pin',
        'ion-pinpoint',
        'ion-pizza',
        'ion-plane',
        'ion-planet',
        'ion-play',
        'ion-playstation',
        'ion-plus',
        'ion-plus-circled',
        'ion-plus-round',
        'ion-podium',
        'ion-pound',
        'ion-power',
        'ion-pricetag',
        'ion-pricetags',
        'ion-printer',
        'ion-pull-request',
        'ion-qr-scanner',
        'ion-quote',
        'ion-radio-waves',
        'ion-record',
        'ion-refresh',
        'ion-reply',
        'ion-reply-all',
        'ion-ribbon-a',
        'ion-ribbon-b',
        'ion-sad',
        'ion-sad-outline',
        'ion-scissors',
        'ion-search',
        'ion-settings',
        'ion-share',
        'ion-shuffle',
        'ion-skip-backward',
        'ion-skip-forward',
        'ion-social-android',
        'ion-social-android-outline',
        'ion-social-angular',
        'ion-social-angular-outline',
        'ion-social-apple',
        'ion-social-apple-outline',
        'ion-social-bitcoin',
        'ion-social-bitcoin-outline',
        'ion-social-buffer',
        'ion-social-buffer-outline',
        'ion-social-chrome',
        'ion-social-chrome-outline',
        'ion-social-codepen',
        'ion-social-codepen-outline',
        'ion-social-css3',
        'ion-social-css3-outline',
        'ion-social-designernews',
        'ion-social-designernews-outline',
        'ion-social-dribbble',
        'ion-social-dribbble-outline',
        'ion-social-dropbox',
        'ion-social-dropbox-outline',
        'ion-social-euro',
        'ion-social-euro-outline',
        'ion-social-facebook',
        'ion-social-facebook-outline',
        'ion-social-foursquare',
        'ion-social-foursquare-outline',
        'ion-social-freebsd-devil',
        'ion-social-github',
        'ion-social-github-outline',
        'ion-social-google',
        'ion-social-google-outline',
        'ion-social-googleplus',
        'ion-social-googleplus-outline',
        'ion-social-hackernews',
        'ion-social-hackernews-outline',
        'ion-social-html5',
        'ion-social-html5-outline',
        'ion-social-instagram',
        'ion-social-instagram-outline',
        'ion-social-javascript',
        'ion-social-javascript-outline',
        'ion-social-linkedin',
        'ion-social-linkedin-outline',
        'ion-social-markdown',
        'ion-social-nodejs',
        'ion-social-octocat',
        'ion-social-pinterest',
        'ion-social-pinterest-outline',
        'ion-social-python',
        'ion-social-reddit',
        'ion-social-reddit-outline',
        'ion-social-rss',
        'ion-social-rss-outline',
        'ion-social-sass',
        'ion-social-skype',
        'ion-social-skype-outline',
        'ion-social-snapchat',
        'ion-social-snapchat-outline',
        'ion-social-tumblr',
        'ion-social-tumblr-outline',
        'ion-social-tux',
        'ion-social-twitch',
        'ion-social-twitch-outline',
        'ion-social-twitter',
        'ion-social-twitter-outline',
        'ion-social-usd',
        'ion-social-usd-outline',
        'ion-social-vimeo',
        'ion-social-vimeo-outline',
        'ion-social-whatsapp',
        'ion-social-whatsapp-outline',
        'ion-social-windows',
        'ion-social-windows-outline',
        'ion-social-wordpress',
        'ion-social-wordpress-outline',
        'ion-social-yahoo',
        'ion-social-yahoo-outline',
        'ion-social-yen',
        'ion-social-yen-outline',
        'ion-social-youtube',
        'ion-social-youtube-outline',
        'ion-soup-can',
        'ion-soup-can-outline',
        'ion-speakerphone',
        'ion-speedometer',
        'ion-spoon',
        'ion-star',
        'ion-stats-bars',
        'ion-steam',
        'ion-stop',
        'ion-thermometer',
        'ion-thumbsdown',
        'ion-thumbsup',
        'ion-toggle',
        'ion-toggle-filled',
        'ion-transgender',
        'ion-trash-a',
        'ion-trash-b',
        'ion-trophy',
        'ion-tshirt',
        'ion-tshirt-outline',
        'ion-umbrella',
        'ion-university',
        'ion-unlocked',
        'ion-upload',
        'ion-usb',
        'ion-videocamera',
        'ion-volume-high',
        'ion-volume-low',
        'ion-volume-medium',
        'ion-volume-mute',
        'ion-wand',
        'ion-waterdrop',
        'ion-wifi',
        'ion-wineglass',
        'ion-woman',
        'ion-wrench',
        'ion-xbox'
      ]
    }
  };

});
