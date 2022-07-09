<script lang="ts">
    import { goto } from '$app/navigation'
    import { Block, List, ListInput, useTheme } from 'konsta/svelte'
    import ButtonContinuar from '$lib/components/ButtonContinuar.svelte'
    import { navbarStore } from '$lib/stores/navbarStore'
    
    navbarStore.set({
        semNavbarArborus: false,
        temProgress: true,
        progress: 0.05,
        title: 'Informações Pessoais',
        voltar: true
    })

    let theme = ''

    let cpf = ''

    $: theme = useTheme((newValue) => (theme = newValue))
    $: hairlines = theme !== 'material'
    $: disabled = !isValidCPF(cpf)
    $: error = isValidCPF(cpf) || cpf === '' ? '' : 'CPF inválido'

    export const cpfMask = (v: string) => {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        return v
    }

    function isValidCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
        const arrCpf = cpf.split('')
        const validator = arrCpf
            .filter((digit, index, array) => index >= array.length - 2 && digit)
            .map( el => +el )
        const toValidate = (pop: number) => arrCpf
            .filter((digit, index, array) => index < array.length - pop && digit)
            .map(el => +el)
        const rest = (count: number, pop: number) => (toValidate(pop)
            .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10
        return !(rest(10,2) !== validator[0] || rest(11,1) !== validator[1])
    }

    // Máscara para CPF e CNPJ
    // export const mask = (v: string) => {
    //     v = v.replace(/\D/g, "")
    //     if (v.length <= 11) {
    //         v = v.replace(/(\d{3})(\d)/, "$1.$2")
    //         v = v.replace(/(\d{3})(\d)/, "$1.$2")
    //         v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    //     } else {
    //         v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    //         v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    //         v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    //         v = v.replace(/(\d{4})(\d)/, "$1-$2")
    //     }
    //     return v
    // }

    const onCpfChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        cpf = cpfMask(target.value)
    }

    const onContinue = () => {
        // TODO: Ir para Data de Nascimento
        goto('/')
    }

</script>

<Block>
    <p class="text-2xl mb-2">Informe seu CPF:</p>
    <form>
        <div class="flex flex-col">
            <List {hairlines} inset>
                <ListInput type="text" placeholder="" value={cpf} onInput={onCpfChange} {error} />
            </List>
        </div>
    </form>
</Block>
<div class="flex-1"></div>
<div class="mt-auto">
    <ButtonContinuar {disabled} {onContinue} />
</div>

