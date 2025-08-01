// theme/theme.ts
import { Theme } from '@react-navigation/native';

export const LightTheme: Theme = {
    dark: false,
    colors: {
        primary: '#007bff',
        background: '#ffffff',
        card: '#f8f9fa',
        text: '#000000',
        border: '#dddddd',
        notification: '#ff453a',
    },
    fonts: {
        regular: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        medium: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        bold: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        heavy: {
            fontFamily: '',
            fontWeight: 'normal'
        }
    }
};

export const DarkTheme: Theme = {
    dark: true,
    colors: {
        primary: '#0a84ff',
        background: '#000000',
        card: '#1c1c1e',
        text: '#ffffff',
        border: '#272729',
        notification: '#ff453a',
    },
    fonts: {
        regular: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        medium: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        bold: {
            fontFamily: '',
            fontWeight: 'normal'
        },
        heavy: {
            fontFamily: '',
            fontWeight: 'normal'
        }
    }
};
