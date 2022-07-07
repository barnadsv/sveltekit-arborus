<script lang="ts">
    import { goto } from '$app/navigation'
    import { Block, List, ListInput, useTheme } from 'konsta/svelte'
    import ButtonContinuar from '$lib/components/ButtonContinuar.svelte'
    import { navbarStore } from '$lib/stores/navbarStore'

    navbarStore.set({
        temProgress: true,
        progress: 0,
        title: 'Informações Pessoais',
        voltar: false
    })

    let theme = ''
    let primeiroNome = ''

    $: theme = useTheme((newValue) => (theme = newValue))
    $: hairlines = theme !== 'material'
    $: disabled = primeiroNome === ''
    $: error = primeiroNome.length > 2 || primeiroNome === '' ? '' : 'Primeiro nome muito curto'

    const onPrimeiroNomeChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        primeiroNome = target.value
    }

    const onContinue = () => {
        goto('/mockups/onboard/cpf')
    }

</script>

<Block>
    <p class="text-2xl mb-2">Qual é o seu primeiro nome?</p>
    <form>
        <List {hairlines} inset>
            <ListInput type="text" placeholder="" value={primeiroNome} onInput={onPrimeiroNomeChange} {error}/>
        </List>
    </form>
</Block>
<div class="flex-1"></div>
<div class="mt-auto">
    <ButtonContinuar {disabled} {onContinue} />
</div>

