import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            Lora: string
            Montserrat: string
        }
        colors: {
            Brown: string
            Orange: string
            Beige: string
            Yellow: string
            Black: string
        }
    }
}
