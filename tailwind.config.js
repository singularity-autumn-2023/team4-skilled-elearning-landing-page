/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm':{'min': '271px', 'max': '376px'},
            'md': {'min': '377px', 'max': '769px'},
        },
        borderRadius: {
            'button-radius': '2rem'
        },
        fontSize: {
            'headingXL': [
                '56px',
                {
                    lineHeight: 'normal',
                    fontWeight: '800',
                }
            ],
            'headingL': [
                '40px',
                {
                    fontWeight: '800',
                    lineHeight: 'normal',
                }
            ],
            'headingM': [
                '32px',
                {
                    fontWeight: '800',
                    lineHeight: '40px',
                }
            ],
            'headingS': [
                '24px',
                {
                    fontWeight: '800',
                    lineHeight: 'normal',
                }
            ],
            'bodyM': [
                '18px',
                {
                    fontWeight: '500',
                    lineHeight: '28px',
                }
            ],
            'bodyMS': [
                '16px',
                {
                    fontWeight: '500',
                    lineHeight: '26px',
                }
            ],
            'bodyS': [
                '16px',
                {
                    fontWeight: '700',
                    lineHeight: '28px',
                }
            ],
            'button': [
                '18px',
                {
                    fontWeight: '700',
                    lineHeight: '28px',
                }
            ],
            'buttonS': [
                '16px',
                {
                    fontWeight: '700',
                    lineHeight: '26px',
                }
            ]
        },
        extend: {
            colors: {
                'darkviolet': '#666CA3',
                'darkblue': '#13183F',
                'darkgray': '#83869A',
                'darkpink': '#F74780',
                'lightpink': '#FFA7C3',
                'white': '#FFFFFF',
            },
            backgroundImage: {
                'radial_red_pink': 'linear-gradient(#FF6F48, #F02AA6)',
                'radial_red_pink_hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
                'radial_blue_pink': 'linear-gradient(#4851FF, #F02AA6)'
            },
            fontFamily: {}
        },
    },
    plugins: [],
}

