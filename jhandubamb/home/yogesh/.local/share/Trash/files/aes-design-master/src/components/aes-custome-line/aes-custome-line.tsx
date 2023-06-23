import { Component, h, Host } from '@stencil/core'

/**
 * The text input form component.
 * @element aes-custome-line
 */
@Component({
  tag: 'aes-custome-line',
  styleUrl: 'aes-custome-line.css',
  shadow: true,
})
export class AesCustomeLine {
  render() {
    return (
      <Host>
        {/* <div style={{height: '100vh'}}> this is 100vh div Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi in placeat fugiat facere quod magnam molestiae quam ipsam nulla laudantium quas obcaecati unde veniam minima cum non aut, nostrum suscipit?</div> */}
        <div class="tm-scroll">
          <span></span>
        </div>
      </Host>
    )
  }
}
