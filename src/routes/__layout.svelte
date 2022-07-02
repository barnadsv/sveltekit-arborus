<script>
    import '../app.css'
    import { App } from 'konsta/svelte'
    
    /**
    * @type {"material" | "ios" | "parent" | undefined}
    */
    let theme = 'ios' // TODO: Detectar o dispositivo e definir o tema aqui, muito provavelmente utilizando store...
    
</script>
  
<App {theme}>
    <slot />
</App>
