<script>
    import bg from '$lib/img/bg.png'
    import arborus from '$lib/img/arborus-branco.png'
    import { Navbar, Button } from 'konsta/svelte'
</script>

<div class="mockup-phone">
    <div class="camera"></div> 
    <div class="display">
      <div class="artboard artboard-demo phone-7">
        <div class="bg flex flex-col" style="background-image: url('{bg}')">
            <Navbar>
                <img src={arborus} alt="Arborus" width="50%" class="mx-auto" />
            </Navbar>
            <div class="flex-1">
                <div class="flex flex-col mt-20 p-2 h-4/5">
                    <p class="text-5xl text-white font-normal titulo mb-4">PARTICIPE DA ECONOMIA VERDE</p>
                    <p class="text-lg text-white font-normal descricao">
                        Sem sair da sua casa, você pode lucrar contribuindo com o meio ambiente diversificando seus investimentos com operações <span class="font-semibold">reguladas pela CVM.</span>
                    </p>
                    <div class="mt-auto flex flex-col">
                        <Button rounded large class="w-4/5 mx-auto mb-2">Sou novo aqui</Button>
                        <Button 
                            rounded 
                            large 
                            outline 
                            touchRipple
                            class="w-4/5 mx-auto"
                            colors={{
                                text: 'text-white',
                                border: 'border-white'
                            }}>
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>


<style lang="postcss">
    .bg {
        @apply w-full h-full bg-green-500;
    }

    .titulo {
        line-height: 1em;
        margin-left: .5rem;
    }

    .descricao {
        line-height: 1.1em;
        margin-left: .5rem;
    }
</style>
