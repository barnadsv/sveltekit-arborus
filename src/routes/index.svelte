<script>
    import { Block, Button } from 'konsta/svelte'
</script>

<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>
<button class="mt-2 btn">Button</button>

<Block>
    <p>This is block with text</p>
</Block>
<Block class="space-y-4">
    <p>Here comes the button</p>
    <Button>Action</Button>
</Block>
