WP Custom Gutenberg Blocks Boilerplate is a starter WordPress plugin to develop Custom WordPress Gutenberg Blocks.

# WP Custom Gutenberg Blocks Boilerplate

>`WP Custom Gutenberg Blocks Boilerplate` is a starter WordPress plugin to develop Custom WordPress Gutenberg Blocks. The started plugin is created from [WP React Plugin Boilerplate](https://github.com/codersantosh/wp-react-plugin-boilerplate), in addition it adds ability to add custom Gutenberg Blocks.

## GETTING STARTED

Upload the plugin files to the `/wp-content/plugins/wp-custom-gutenberg-blocks-boilerplate` directory, or install the plugin through the WordPress plugins screen directly

You need to rename the plugin folder name and files name. Also need to rename constants, variables, classes , text-domain, and functions inside of it to fit your needs. For example, if your plugin is named my-custom-blocks then:

* rename folder from `wp-custom-gutenberg-blocks-boilerplate` to `my-custom-blocks`
* rename all files from `wp-custom-gutenberg-blocks-boilerplate` to `my-custom-blocks` PHP,JS and CSS
* change `wp_custom_gutenberg_blocks_boilerplate` to `my_custom_blocks`
* change `wp-custom-gutenberg-blocks-boilerplate` to `my-custom-blocks`
* change `Wp_Custom_Gutenberg_Blocks_Boilerplate` to `My_Custom_Blocks`
* change `WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE` to `MY_CUSTOM_BLOCKS`

It's safe to activate the plugin at this point. Activate the plugin through the 'Plugins' screen in WordPress


## Folder Information

<strong>WP Custom Gutenberg Blocks Boilerplate</strong> Folder Information

```sh
INSIDE: /wp-installatioon-folder/wp-content/plugins/your-renamed-plugin-folder

├── .gitignore
├── index.php
├── LICENSE.txt
├── package.json
├── readme.md
├── README.txt
├── uninstall.php
├── your-renamed-plugin.php
|
├── admin
|  |  ├── class-your-renamed-plugin-admin.php
|  |  └── index.php
|  |
|  └── partials
|     └── your-renamed-plugin-admin-display.php
|
├── assets
|  └── library
|     └── at-grid (folder and css)
| 
├── build(auto created via NPM)
|  ├── admin
|  ├── blocks
|  └── public
| 
├── includes
|  ├── class-your-renamed-plugin.php
|  ├── class-your-renamed-plugin-activator.php
|  ├── class-your-renamed-plugin-deactivator.php
|  ├── class-your-renamed-plugin-i18n.php
|  ├── class-your-renamed-plugin-include.php
|  ├── class-your-renamed-plugin-loader.php
|  ├── functions.php
|  └── index.php
|
├── languages
|  └── your-renamed-plugin.pot
|
├── public
|  |  ├── class-your-renamed-plugin-public.php
|  |  └── index.php
|  |
|  ├── css
|  |  └── your-renamed-plugin-public.css
|  |
|  ├── js
|  |  └── your-renamed-plugin-public.js
|  |
|  └── partials
|     └── your-renamed-plugin-public-display.php
|
└── src
  ├── admin
  |  └── settings
  |     ├── atoms
  |     |   ├── nav.js
  |     |   └── save-btn.js
  |     ├── molecules
  |     |   ├── navlist.js
  |     |   └── notice.js
  |     ├── organisms
  |     |   ├── footer.js
  |     |   └── header.js
  |     ├── pages
  |     |   ├── advanced.js
  |     |   └── general.js
  |     ├── utils
  |     |    └── get-nav.js
  |     ├── routes.js
  |     └── style.scss
  |
  ├── api
  |  └── settings.js
  |
  ├── blocks
  |  ├── step-1-intro
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├── step-2-styles-scripts
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── editor.scss
  |  |   ├── index.js
  |  |   ├── save.js
  |  |   └── style.scss
  |  ├── step-3-block-controls
  |  |   ├── atoms
  |  |    |   └── block-conrols-customization.js
  |  |   ├── utils
  |  |    |   └── dynamic-css.js
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├── step-4-normal-block
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├── step-5-inner-block
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├──step-6-dynamic-block
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── index.php
  |  ├── step-7-provides-context
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├── step-8-uses-context
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   └── save.js
  |  ├── step-9-transforms
  |  |   ├── blocks.json
  |  |   ├── edit.js
  |  |   ├── index.js
  |  |   ├── save.js
  |  |   └── transforms.js
  |  ├── step-10-deprecated
  |  |   ├── blocks.json
  |  |   ├── block-deprecated.json
  |  |   ├── deprecated.js
  |  |   ├── edit.js
  |  |   ├── edit-deprecated.js
  |  |   ├── index.js
  |  |   ├── index-deprecated.js
  |  |   ├── save.js
  |  |   └── save-deprecated.js
  |  └── step-10-deprecated
  |      ├── blocks.json
  |      ├── edit.js
  |      ├── index.js
  |      └── save.js
  |
  ├── context
  |  └── SettingsContext.js
  ├── reducer
  |  └── settings-reducer.js
  |
  └── settings.js
```

## Development Process

<details>
 <summary> Don't have <code>Node.js</code> + <code>npm</code> installed? You have to install them first. (CLICK TO EXPAND)</summary>

Go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into 7.19.1 — or installed version.

npm -v
# Results into v14.15.1 — or installed version.
```
</details>

Follow the following steps to add your functionalities to the plugin:

1. Navigate to plugin files `/wp-content/plugins/your-renamed-plugin-folder`, open terminal app.
2. Run the `npm install` command to install npm dependencies, wait sometimes to complete it.
3. Run the `npm run packages-update` command to update the package.
4. Run `npm run start` command to initialize development of React JS, Development can be done any time. Use it in the development environment.
5. Run the `npm run build` command to finalize the development and be ready for production. The command creates production files. After building the production file move it to the production level.

Go to WordPress Dashboard => React Settings and View the Default Settings of the Plugin.


## Changelog
### 1.0.0
* Initial Release

## License & Attribution
- GPLv2 or later © [Santosh Kunwar](https://twitter.com/codersantosh).

I would like to thanks all the React.js team, Gutenberg Team, WordPress Core Contributors, WordPress Plugin Boilerplate teams and My friends to motivate me to create the starter plugin.


## About Me
<strong>I just love WordPress more…</strong>

- [![CoderSantosh on Twitter](https://img.shields.io/twitter/follow/codersantosh.svg)](https://twitter.com/codersantosh/)
- <a href="https://profiles.wordpress.org/codersantosh/" target="_blank"><img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" width="50" height="50" />WordPress Profile</a>

### Recent Projects
<a href="https://wordpress.org/plugins/gutentor/" target="_blank"><img src="https://ps.w.org/gutentor/assets/icon.svg" width="50" height="50" />Gutentor - WordPress Page Building Blocks - Page Builder for Gutenberg</a>
