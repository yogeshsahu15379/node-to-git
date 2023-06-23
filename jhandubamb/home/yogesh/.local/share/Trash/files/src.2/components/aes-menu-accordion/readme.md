# aes-menu-accordion



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                             | Type                       | Default     |
| --------- | --------- | ------------------------------------------------------- | -------------------------- | ----------- |
| `isOpen`  | `is-open` | Whether to display the accordion in open or close state | `boolean`                  | `false`     |
| `variant` | `variant` | The variant of the accordion.                           | `"primary" \| "secondary"` | `'primary'` |


## Slots

| Slot        | Description                                        |
| ----------- | -------------------------------------------------- |
| `"content"` | The primary slot to render the accordion contents. |
| `"summary"` | The slot to render the accordion summary or title. |


## Dependencies

### Depends on

- [aes-icon](../aes-icon)

### Graph
```mermaid
graph TD;
  aes-menu-accordion --> aes-icon
  style aes-menu-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
