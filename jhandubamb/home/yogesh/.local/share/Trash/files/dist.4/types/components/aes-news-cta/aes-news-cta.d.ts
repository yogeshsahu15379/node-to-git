/**
 * The AES News CTA component
 * @element aes-news-cta
 * @slot contentTop - The contentTop slot expects content to render above the horizontal rul
 * @slot contentBottom - The contentBottom slot expects content to render above the horizontal rul
 */
export declare class AesNewsCta {
  /**
   * The type of news release. 'press' or 'external'
   */
  newsType: 'press' | 'external';
  render(): any;
}
