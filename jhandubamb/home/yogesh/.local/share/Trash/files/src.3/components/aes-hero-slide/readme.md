# aes-hero-slide



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                          | Type                                       | Default     |
| ---------- | ---------- | ------------------------------------ | ------------------------------------------ | ----------- |
| `cta`      | `cta`      | Link and text for button             | `string \| { text: string; url: string; }` | `undefined` |
| `eyebrow`  | `eyebrow`  | Text that appears above the headline | `string`                                   | `undefined` |
| `headline` | `headline` | The main headline                    | `string`                                   | `undefined` |


## Dependencies

### Depends on

- [aes-heading](../aes-heading)
- [aes-button](../aes-button)

### Graph
```mermaid
graph TD;
  aes-hero-slide --> aes-heading
  aes-hero-slide --> aes-button
  aes-button --> aes-icon
  style aes-hero-slide fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
