# Introdução - Principais Recursos do Vue.js

### Iniciando um Projeto Vue.js

Para iniciar um projeto Vue.js, você pode usar o Vue CLI. Aqui estão os passos para criar um novo projeto:

Execute o seguinte comando para criar um novo projeto Vue.js usando o Vue CLI:

```bash
vue create frontend
```

Selecione as opções desejadas durante o processo de criação do projeto. Por exemplo, você pode escolher usar TypeScript e configurar o ESLint e o Prettier.

Configure o Prettier em seu projeto, adicionando um arquivo .prettierrc com as configurações desejadas:

```json
{
    "trailingComma": "none",
    "semi": false,
    "arrowParens": "always",
    "singleQuote": true
}
```

Certifique-se de recarregar o Visual Studio Code para que as configurações do Prettier sejam aplicadas corretamente.

### Usando `TypeScript` no Vue.js

TypeScript, ele importa a função defineComponent para adicionar tipagem aos componentes Vue. Isso melhora a produtividade no desenvolvimento, pois permite usar o Intelephense ou outras extensões para TypeScript em seu editor.

## Propriedades em um Componente Vue

As propriedades em um componente Vue são definidas no objeto data(). Tudo o que é definido dentro deste objeto é uma propriedade acessível no componente. Por exemplo:

```typescript
export default defineComponent({
    data() {
        return {
            nome: 'Edson',
            idade: 30,
            isAdmin: true
        };
    },
});
```

- Essas propriedades podem ser usadas na tag template usando interpolação, como {{ nome }}, {{ idade }}, etc.

### Propriedades Computadas (Computed)

As propriedades computadas, definidas no objeto computed, retornam um dado com alguma alteração ou manipulação aplicada. Isso é útil para calcular valores com base em propriedades existentes. Por exemplo:

```typescript
computed: {
    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    },
},
```

Agora, você pode usar `{{ nomeCompleto }}` no template, e ele exibirá o nome completo calculado automaticamente.

### Métodos em um Componente Vue

Métodos em um componente Vue são definidos no objeto methods. Eles são usados para adicionar comportamento aos componentes. Por exemplo:

```typescript
methods: {
    incrementar() {
        this.contador++;
    },
    diminuir() {
        this.contador--;
    },
    resetar() {
        this.contador = 0;
    },
},
```

Você pode chamar esses métodos a partir do template usando diretivas, como`@click="incrementar"`, para realizar ações específicas.

### Watchers (Observadores)

Os observadores são definidos no objeto watch. Eles observam o estado dos dados e executam ações com base em alterações. Por exemplo:

```typescript
watch: {
    contador(novoValor, valorAntigo) {
        console.log(`Valor antigo: ${valorAntigo}`);
        console.log(`Novo valor: ${novoValor}`);
    },
},
```

Neste exemplo, sempre que a propriedade contador for alterada, o observador será acionado, permitindo que você reaja a essas alterações.

Esses são alguns dos principais recursos e conceitos ao trabalhar com Vue.js. Eles são fundamentais para a criação de componentes interativos e dinâmicos em seu aplicativo Vue.
