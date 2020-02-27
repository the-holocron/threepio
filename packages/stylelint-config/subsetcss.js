module.exports = {
    'subsets': {
        'animation-duration': [
            'map-deep-get($theme, animation, duration, xs)',
            'map-deep-get($theme, animation, duration, sm)',
            'map-deep-get($theme, animation, duration, md)',
            'map-deep-get($theme, animation, duration, lg)',
            'map-deep-get($theme, animation, duration, xl)'
        ],
        'border-width': [
            '0',
            'map-deep-get($theme, border, width, sm)',
            'map-deep-get($theme, border, width, md)'
        ],
        'border-style': [ 'solid' ],
        'border-radius': [
            '@include border-radius(0)',
            '@include border-radius(map-deep-get($theme, border, radius, sm))',
            '@include border-radius(map-deep-get($theme, border, radius, md))',
            '@include border-radius(map-deep-get($theme, border, radius, lg))',
            '@include border-radius(map-deep-get($theme, border, radius, xl))'
        ],
        'margin': [
            '0',
            'map-deep-get($theme, spacers, eighth)',
            'map-deep-get($theme, spacers, qtr)',
            'map-deep-get($theme, spacers, half)',
            'map-deep-get($theme, spacers, 3qtr)',
            'map-deep-get($theme, spacers, 1)',
            'map-deep-get($theme, spacers, 2)',
            'map-deep-get($theme, spacers, 3)'
        ],
        'padding': [
            '0',
            'map-deep-get($theme, spacers, eighth)',
            'map-deep-get($theme, spacers, qtr)',
            'map-deep-get($theme, spacers, half)',
            'map-deep-get($theme, spacers, 3qtr)',
            'map-deep-get($theme, spacers, 1)',
            'map-deep-get($theme, spacers, 2)',
            'map-deep-get($theme, spacers, 3)'
        ],
        'font-family': [
            'map-deep-get($theme, typography, family, \'sans-serif\')',
            'map-deep-get($theme, typography, family, serif)',
            'map-deep-get($theme, typography, family, monospace)'
        ],
        'font-size': [
            'map-deep-get($theme, typography, size, xs)',
            'map-deep-get($theme, typography, size, sm)',
            'map-deep-get($theme, typography, size, md)',
            'map-deep-get($theme, typography, size, lg)',
            'map-deep-get($theme, typography, size, xl)'
        ],
        'font-weight': [
            'map-deep-get($theme, typography, weight, thin)',
            'map-deep-get($theme, typography, weight, light)',
            'map-deep-get($theme, typography, weight, normal)',
            'map-deep-get($theme, typography, weight, semibold)',
            'map-deep-get($theme, typography, weight, bold)',
            'map-deep-get($theme, typography, weight, heavy)'
        ],
        'line-height': [
            'map-deep-get($theme, typography, \'line-height\', reset)',
            'map-deep-get($theme, typography, \'line-height\', md)',
            'map-deep-get($theme, typography, \'line-height\', lg)',
            'map-deep-get($theme, typography, \'line-height\', xl)'
        ],
        'z-index': [
            'map-deep-get($theme, typography, zindex, negative)',
            'map-deep-get($theme, typography, zindex, base)',
            'map-deep-get($theme, typography, zindex, \'dropdown-bg\')',
            'map-deep-get($theme, typography, zindex, dropdown)',
            'map-deep-get($theme, typography, zindex, fixed)',
            'map-deep-get($theme, typography, zindex, sticky)',
            'map-deep-get($theme, typography, zindex, \'modal-bg\')',
            'map-deep-get($theme, typography, zindex, modal)',
            'map-deep-get($theme, typography, zindex, popover)',
            'map-deep-get($theme, typography, zindex, tooltip)'
        ]
    }
};
