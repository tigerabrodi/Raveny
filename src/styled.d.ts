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
            Black: string
            White: string
            Gray: string
            Green: string
            Red: string
            DarkRed: string
        }
    }
}
