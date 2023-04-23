module.exports = {
	plugins: [
		require.resolve('@trivago/prettier-plugin-sort-imports'),
		require('prettier-plugin-svelte'),
		require('prettier-plugin-tailwindcss')
	],
	pluginSearchDirs: ['.'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	],
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	svelteSortOrder: 'scripts-options-markup-styles',
	svelteIndentScriptAndStyle: true,
	importOrder: [
		'^ui(.*)$',
		'^(src/)?abi(.*)$',
		'^(src/)?component(s)?(.*)$',
		'^(src/)?constant(s)?(.*)$',
		'^(src/)?container(s)?(.*)$',
		'^(src/)?context(s)?(.*)$',
		'^(src/)?hook(s)?(.*)$',
		'^next(.*)$',
		'^(src/)?page(s)?(.*)$',
		'^(src/)?public(.*)$',
		'^(src/)?recoil(.*)$',
		'^(src/)?route(s)?(.*)$',
		'^(src/)?subscriber(s)?(.*)$',
		'^(src/)?type(s)?(.*)$',
		'^(src/)?util(s)?(.*)$',
		'^(~)?[./]',
		'(.css|.scss)$'
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true
};
