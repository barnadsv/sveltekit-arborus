<script lang="ts">
    import { goto } from '$app/navigation'
    import { Page, Block, List, ListInput, useTheme } from 'konsta/svelte'
    import NavBarArborus from '$lib/components/NavBarArborus.svelte'
    import ButtonContinuar from '$lib/components/ButtonContinuar.svelte'

    let progress = 0.05
    let title = "Informações Pessoais"
    let theme = ''

    let primeiroNome = ''

    $: theme = useTheme((newValue) => (theme = newValue))
    $: hairlines = theme !== 'material'
    $: disabled = primeiroNome === ''

    const onPrimeiroNomeChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        primeiroNome = target.value
    }

    const onContinue = () => {
        // TODO: Ir para CPF
        goto('/')
    }

</script>

<Page>
    <div class="mockup-phone">
        <div class="camera"></div> 
        <div class="display">
        <div class="artboard artboard-demo phone-7">
            <NavBarArborus {title} {progress} />
            <div class="flex flex-col justify-between p-2 h-full">
                <Block>
                    <p class="text-2xl mb-2">Qual é o seu primeiro nome?</p>
                    <form>
                        <List {hairlines} inset>
                            <ListInput type="text" placeholder="" value={primeiroNome} onInput={onPrimeiroNomeChange} />
                        </List>
                    </form>
                </Block>
                <div class="flex-1"></div>
                <div class="mt-auto">
                    <ButtonContinuar {disabled} {onContinue} />
                </div>
            </div>
        </div>
        </div>
    </div>
</Page>
