import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core'

/**
 * Full window-height video background slideshow. Takes any collection within
 * its slot and turns those into animated slides.
 * @element aes-hero-interactive
 */
@Component({
  tag: 'aes-hero-interactive',
  styleUrl: 'aes-hero-interactive.css',
  shadow: true,
})
export class AesHeroInteractive {
  /**
   * A url to an mp4 video to play full size in the background
   */
  @Prop() bgVideo: string
  /**
   * The background image for low-motion users
   */
  @Prop() bgImage: string
  /**
   * what should be initial levels for video on first load
   */

  @Prop() initialVolume: number
  /**
   * How often should the slide should change (in milliseconds)
   */
  @Prop() duration = 5000
  /**
   * How to show progress: a progress bar or "pips"
   */
  @Prop() progress: 'bar' | 'pips' = 'bar'
  /**
   * The actual element of this Hero slideshow
   */
  @Element() el: HTMLAesHeroInteractiveElement
  /**
   * Slide position
   */
  @State() current = 0

  /**
   * Count the children within the slot
   */
  @State() count = 0
  /**
   * Cache the slot content to iterate over
   */
  @State() slides: HTMLAesHeroSlideElement[]
  /**
   * Interval for slide changes
   */
  @State() interval: ReturnType<typeof setInterval>

  /**
   * Increase current slide up to max count then start over
   * @TODO: Move inc/dec to utils/testable function
   */
  private inc = () =>
    (this.current = (this.current + 1) / this.count >= 1 ? 0 : this.current + 1)
  /**
   * Decrease current slide down to 0 then jump to max count
   * @TODO: Move inc/dec to utils/testable function
   */
  private dec = () =>
    (this.current =
      (this.current - 1) / this.count < 0 ? this.count - 1 : this.current - 1)
  /**
   * Go to a slide directly by number, note the returned function
   */
  private goToSlide = (num: number) => () => {
    clearInterval(this.interval)
    this.current = num
  }
  /**
   * What to do when the video loads, triggered by onLoadedData from <video>
   */
  private videoLoaded = event => {
    // Show first slide, small delay to allow hydration
    // @TODO: handle this with the componentShouldUpdate() lifecycle hook instead
    setTimeout(this.showSlide.bind(this), 100)
    // Start automated slideshow
    this.interval = setInterval(this.inc, this.duration)
    event.path[0].volume = this.initialVolume ? this.initialVolume : 0.5
  }

  /**
   * When current slide changes, remove 'show' from all children, add to active
   */
  @Watch('current')
  private showSlide() {
    // Remove 'show' from all slides
    this.slides.forEach(slide => slide.classList.remove('show'))
    // Set show on active slide
    this.slides[this.current].classList.add('show')
  }

  componentDidLoad() {
    // Cache children slides
    this.slides = Array.from(this.el.querySelectorAll('aes-hero-slide'))
    // Count slides
    this.count = this.slides.length
  }

  render() {
    // let newVideo = ''
    // if (this.bgVideo && this.bgVideo.includes('vimeo')) {
    //   const videoURL = this.bgVideo.split('/')
    //   const videoID = videoURL[videoURL.length - 1]
    //   newVideo = `https://player.vimeo.com/video/${videoID}`
    // }
    // {console.log(this.bgVideo, '##############################')}
    return (
      <Host>
        <div class="bg-container">
          <slot name="bg-image" />
          {/* <iframe
            //  src={`${this.bgVideo}?loop=1&autopause=0&background=1&width=100%&frameborder=0&allow=autoplay`}
            src={`${
              newVideo !== '' ? newVideo : this.bgVideo
            }?loop=1&autopause=0&background=1&width=100%&frameborder=0&allow=autoplay`}
            onLoad={this.videoLoaded}
          ></iframe> */}
          <video
            autoplay
            controls
            loop
            muted
            // src={this.bgVideo}
            playsinline
            onLoadedData={this.videoLoaded}
          >
            <source id="mp4" src={this.bgVideo}></source>
          </video>
        </div>

        <aes-grid>
          {/* Gives us the smaller container size */}
          <aes-column col-span-default="12" col-span-md="2"></aes-column>
          {/* Actual content */}
          <aes-column class="content" col-span-default="12" col-span-md="8">
            <div class="slides">
              <slot name="slides" />
            </div>
            <div class="progress">
              {this.progress === 'bar' && (
                <aes-progress
                  max={this.count}
                  value={this.current + 1}
                ></aes-progress>
              )}
              {this.progress === 'pips' && (
                <div class="pips">
                  {[...Array(this.count).keys()].map(pip => (
                    <div class="pip" onClick={this.goToSlide(pip)}>
                      <div
                        class={{
                          'pip-inner': true,
                          'pip--active': pip === this.current,
                        }}
                      >
                        Go to slide {pip}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aes-column>
        </aes-grid>

        {/* Remove hidden style in aes-hero-interactive.css to show this */}
        <div class="controls">
          <div class="controls__back" onClick={this.dec}>
            Back
          </div>
          <div class="controls__forward" onClick={this.inc}>
            Forward
          </div>
        </div>
      </Host>
    )
  }
}
