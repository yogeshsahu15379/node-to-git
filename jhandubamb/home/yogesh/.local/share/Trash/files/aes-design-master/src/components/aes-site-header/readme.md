# aes-site-header



<!-- Auto Generated Below -->


## Slots

| Slot             | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `"logo"`         | The logo element to display in the site header.                    |
| `"nav"`          | The list items to be included in the primary navigation.           |
| `"search-form"`  | The markup for the search form.                                    |
| `"user-buttons"` | The area in which user account and language buttons can be placed. |


## Dependencies

### Depends on

- [aes-container](../aes-container)
- [aes-button](../aes-button)
- [aes-icon](../aes-icon)

### Graph
```mermaid
graph TD;
  aes-site-header --> aes-container
  aes-site-header --> aes-button
  aes-site-header --> aes-icon
  aes-button --> aes-icon
  style aes-site-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
