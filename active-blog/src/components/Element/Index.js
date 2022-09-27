import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      blue: '#4164e3',
      cadet: '#8998a8',
      dark: '#243156',
      gray: '#a0acb9',
      green: '#36c537',
      light: '#e9ebee',
      pure: '#fafafb',
      slate: '#77889a',
      white: '#f5f5f5',
      yellow: '#ed9b13',
      grey:  '#474747',
      red: '#bf0100',
      grey2: "#989898"
    },
  },
  components: {
    Button: {
      variants: {
         alex: {
          p: '6',
           color: 'white',
          bg: 'brand.grey2',
          _hover: { bg: 'brand.grey' },
          _active: { bg: 'brand.grey' },
          _focus: { boxShadow: 'none' },
        },
        solid: {
          p: '6',
          color: 'black',
          bg: 'brand.white',
          _hover: { bg: 'brand.grey2' },
          _active: { bg: 'brand.grey2' },
          _focus: { boxShadow: 'none' },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '1px',
          color: 'brand.cadet',
          borderColor: 'brand.light',
          _hover: { bg: 'brand.white' },
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
        ghost: {
          color: 'black',
          bg: 'brand.white',
          p: '6',
         
          _hover: { bg: 'rgba(0, 0, 0, 0.25)' },
          _active: { bg: 'rgba(0, 0, 0, 0.35)' },
          _focus: { boxShadow: 'none' },
        },
        link: {
          p: '0',
          height: 'full',
          bg: 'transparent',
          color: 'gray.500',
          rounded: 'none',
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
})
