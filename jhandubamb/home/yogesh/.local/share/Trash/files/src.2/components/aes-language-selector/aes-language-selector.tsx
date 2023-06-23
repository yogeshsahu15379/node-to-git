import { Component, Host, h, Prop, Listen } from '@stencil/core'

@Component({
  tag: 'aes-language-selector',
  styleUrl: 'aes-language-selector.css',
  shadow: true,
})
export class AesLanguageSelector {
  /**
   * for language selector titles and links
   */
  @Prop() LanguageSelector = [
    {
      title: 'English',
      value: '0',
    },
    {
      title: 'Español',
      value: '1',
    },
    {
      title: 'български',
      value: '2',
    },
    {
      title: 'Português',
      value: '3',
    },
    {
      title: 'Tiếng Việt',
      value: '4',
    },
  ]

  // @Listen('appload', { target: 'window' })
  // private selectValue() {
  // }

  render() {
    return (
      <Host>
        <div class="custom-select">
          <select>
            {this.LanguageSelector &&
              this.LanguageSelector.map(
                languageSelectorItem =>
                  languageSelectorItem.title && (
                    <option value={languageSelectorItem.value}>
                      {languageSelectorItem.title}
                    </option>
                  ),
              )}
          </select>
        </div>
      </Host>
    )
  }
}
