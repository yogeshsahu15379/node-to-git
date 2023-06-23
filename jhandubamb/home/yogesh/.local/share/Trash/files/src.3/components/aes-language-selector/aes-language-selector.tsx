import { Component, Host, h, Prop, Listen, State, Watch } from '@stencil/core'

@Component({
  tag: 'aes-language-selector',
  styleUrl: 'aes-language-selector.css',
  shadow: true,
})
export class AesLanguageSelector {
  /**
   * for language selector titles and links
   */
  @Prop() languageselector: any;

  @State() value: string = '0';

  @State() isActive: boolean = false;

  // @Listen('appload', { target: 'window' })
  // private selectValue() {
  // }


  handleChange(event) {
    this.value = event.target.value;
    // console.log(`id: ${this.value}`);
  }

  //  set language id
  clickHandler(event) {
    this.value = event.target.id;
    this.customOption();

  }

    // set show class on selected language
  customOption() {
    this.isActive = this.isActive ? false : true;
    // console.log('fire');
  }

  // all languages stored into array

  render() {
    const list = JSON.parse(this.languageselector);


    return (
      <Host>
        <div>
          <select class={`default_selector`} onChange={(e) => this.handleChange(e)}>
            {this.languageselector &&
              list.map(
                languageSelectorItem =>
                  languageSelectorItem.title && (
                    <option value={languageSelectorItem.value}>
                      {languageSelectorItem.title}
                    </option>
                  ),
              )}
          </select>

        </div>
        <div class='custom_select mt-6'>
          <div class="display"  onClick={this.customOption.bind(this)}>
            <div>  {list[this.value].title} </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></div>
          </div>
          <div class={`option_section ${this.isActive ? 'show ' : 'hide '}`}>
            {list.map((item) => 
              <div class={`item ${item.value == this.value ? 'language_selected' : ''}`} onClick={this.clickHandler.bind(this)} id={item.value}>{item.title}</div>
              )}
          </div>
        </div>
      </Host>
    )
  }
}
