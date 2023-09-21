# Introdução - Principais Recursos do Vue.js

## Iniciando um Projeto Vue.js

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

## Ciclo de Vida de um Componente Vue.js

Todo componente Vue tem um ciclo de vida que segue uma sequência de eventos predefinidos. Esses eventos, chamados de "hooks", oferecem oportunidades para executar código em momentos específicos do ciclo de vida de um componente.

### beforeCreate()

- Este é o primeiro hook no ciclo de vida de um componente.
- É executado antes de qualquer configuração ou inicialização.
- Neste ponto, o componente ainda não tem acesso aos seus dados (data) ou ao DOM.
- É útil para configurações iniciais que não dependem do estado do componente.

### created()

- Este hook é executado após o componente ter sido criado.
- Neste ponto, o componente já tem acesso aos seus dados (data) e métodos (methods).
- Ainda não tem acesso ao DOM renderizado.
- É usado comumente para realizar solicitações de API, inicializar dados e configurar observadores.

### beforeMount()

- Este hook é executado antes do componente ser montado no DOM.
- O componente tem acesso a todos os dados, mas ainda não tem acesso aos elementos do DOM.
- É útil para tarefas que precisam ser concluídas antes da renderização do componente.

### mounted()

- Este hook é executado após o componente ser montado no DOM.
- É o momento em que o componente está totalmente visível e interativo.
- Aqui você pode acessar os elementos do DOM e executar ações após a montagem do componente.

### beforeUpdate()

- Este hook é executado antes de uma atualização do componente.
- É útil para realizar ações antes que os dados do componente sejam atualizados.
- Pode ser usado para fazer comparações entre o estado atual e o próximo estado.

### updated()

- Este hook é executado após uma atualização do componente.
- É útil para reagir a mudanças no estado do componente.
- Você pode acessar o DOM atualizado neste momento, mas use com cuidado para evitar loops infinitos.

### beforeUnmount()

- Este hook é executado antes do desmonte do componente.
- É útil para realizar tarefas de limpeza e cancelar assinaturas antes que o componente seja removido do DOM.

### unmounted()

- Este hook é executado após o desmonte do componente.
- O componente não está mais disponível no DOM.
- É útil para ações finais, como liberar recursos ou cancelar observadores.

Esses hooks fornecem controle sobre o ciclo de vida do seu componente Vue, permitindo que você execute ações específicas em momentos importantes. Eles são uma parte fundamental do Vue.js para criar componentes dinâmicos e interativos.

## Diretivas Vue

As diretivas Vue são como atributos adicionados a elementos HTML para fornecer funcionalidades adicionais. Elas começam com o prefixo v- e são usadas para controlar o comportamento e a apresentação dos elementos.

### v-bind

A diretiva `v-bind` é usada para associar dinamicamente valores de dados a atributos HTML.

Por exemplo, `v-bind:href` associa o valor de um atributo href a uma expressão ou variável no componente Vue.

É comum usar o atalho `:` para v-bind. Exemplo: `:href="product.url"`.

### v-text e v-html

- `v-text` substitui o conteúdo do elemento pelo valor da expressão.

- `v-html` permite que a expressão seja interpretada como HTML e insere o conteúdo HTML no elemento.

Use `v-text` ou `v-html` quando desejar inserir dinamicamente conteúdo em um elemento.

### v-on

A diretiva `v-on` é usada para ouvir eventos do DOM e executar métodos ou expressões quando esses eventos ocorrem.

Exemplos comuns incluem `@click`, `@input`, `@submit`, etc.

Você pode adicionar argumentos (por exemplo, `@click="handleClick"`) e modificadores (por exemplo, `@click.once`).

### v-if, v-else-if e v-else

Essas diretivas são usadas para adicionar ou remover elementos do DOM com base em condições.

`v-if` condicionalmente renderiza um elemento com base em uma expressão booleana.

`v-else-if` e `v-else` são usados em conjunto com v-if para definir várias condições.

### v-show

A diretiva `v-show` é semelhante a `v-if`, mas em vez de adicionar ou remover elementos do DOM, ela apenas controla a visibilidade usando CSS (display: none).

Use `v-show` quando quiser alternar a visibilidade de um elemento sem renderizar novamente.

### v-for

A diretiva `v-for` é usada para renderizar uma lista de elementos com base em um array ou objeto.

É necessário especificar um valor de `key` exclusivo para cada item renderizado dentro de um loop `v-for`.

### v-model

A diretiva `v-model` é uma maneira conveniente de criar associações bidirecionais entre elementos de formulário (como `<input>`, `<textarea>` e `<select>`) e dados no componente.

Ela simplifica a atualização dos valores dos elementos e dos dados do componente.

### Diretivas Personalizadas

Você também pode criar suas próprias diretivas personalizadas em Vue.js. Para criar uma diretiva personalizada, siga estas etapas:

Dentro do objeto directives em seu componente Vue, defina um novo objeto com o nome da diretiva e implemente os hooks necessários. Por exemplo:

```javascript

directives: {
    minhaDiretiva: {
        // Implemente os hooks da diretiva aqui
    }
}
```

Use a diretiva personalizada em seus elementos HTML usando o prefixo v-. Por exemplo:

```html
<div v-minhaDiretiva></div>
```

Dentro da implementação da diretiva personalizada, você pode acessar o elemento, argumentos, modificadores e valores associados à diretiva. Por exemplo:

```typescript
minhaDiretiva: {
    beforeMount(el: HtmlElement, binding) {
        // Acesse o elemento e informações associadas à diretiva aqui
    }
}
```

Você pode adicionar funcionalidades específicas à sua diretiva personalizada. No exemplo dado, a diretiva personalizada `minhaDiretiva` altera a cor de fundo ou o texto com base em argumentos e modificadores.

Para tornar a diretiva personalizada global, você pode importá-la em um arquivo separado e registrá-la no aplicativo Vue no `arquivo main.ts` (ou equivalente).

```javascript
import minhaDiretiva from './diretorio/minhaDiretiva'

const app = createApp(App)
app.directive('minhaDiretiva', minhaDiretiva)
app.mount('#app')
```

Dessa forma, sua diretiva personalizada estará disponível globalmente em todos os componentes Vue do aplicativo.

As diretivas personalizadas são poderosas e flexíveis, permitindo que você adicione funcionalidades personalizadas aos elementos Vue.js em seu aplicativo. Elas são especialmente úteis quando você precisa encapsular lógica de manipulação de DOM complexa e reutilizável.

## Classes Dinamicas

No Vue, você pode adicionar classes condicionalmente a elementos HTML com base em expressões JavaScript usando a diretiva `:class` ou v-bind`:class`. Isso é útil para aplicar estilos CSS a elementos com base em condições ou valores de dados.

Aqui estão dois exemplos de como você pode usar a diretiva `:class`:

### Exemplo com Sintaxe de Objeto

```html
<template>
  <div>
    <h1 :class="{ active: isActive, 'text-danger': isError }">Exemplo de Classes Dinâmicas</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isError: false
    };
  }
};
</script>

<style>
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
```

Neste exemplo, as classes active e text-danger serão adicionadas ao elemento `<h1>` com base nos valores das propriedades `isActive` e `isError` no objeto data. Se `isActive` for `true`, a classe active será adicionada. Se `isError` for `true`, a classe `text-danger` será adicionada.

### Exemplo com Sintaxe de Array

```html
<template>
  <div>
    <h1 :class="['static', { active: isActive, 'text-danger': isError }]">Exemplo de Classes Dinâmicas</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isError: false
    };
  }
};
</script>

<style>
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
```

Neste exemplo, a classe static sempre será aplicada ao elemento `<h1>`, independentemente dos valores de `isActive` e `isError`. Além disso, as classes active e `text-danger` serão adicionadas com base nas condições especificadas.

Lembre-se de que você pode criar expressões condicionais mais complexas dentro das diretivas `:class`, tornando a adição de classes dinâmicas muito flexível e poderosa no Vue.js.
