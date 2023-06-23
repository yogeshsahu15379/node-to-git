# aes-text-input



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                   | Type                                                                                                                                                                   | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subMenu` | --        | for sub menu titles and links | `({ url: string; title: string; external: boolean; colorvariation: string; } \| { url: string; external: boolean; title?: undefined; colorvariation?: undefined; })[]` | `[     {       url: '/hello',       title: 'Link1',       external: false,       colorvariation: 'blue',     },     {       url: '#',       title: 'Link1',       external: false,       colorvariation: 'blue',     },     {       url: '#',       title: 'Link3',       external: false,       colorvariation: 'blue',     },     {       url: '#',       title: 'link4',       external: false,       colorvariation: 'pt-12',     },     {       url: '#',       external: false,     },   ]` |


## Dependencies

### Depends on

- [aes-link](../aes-link)

### Graph
```mermaid
graph TD;
  aes-sub-menu --> aes-link
  style aes-sub-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
