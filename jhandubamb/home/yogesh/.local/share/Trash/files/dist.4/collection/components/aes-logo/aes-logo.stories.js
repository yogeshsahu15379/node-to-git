import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { LogoType } from '../../utils/enums';
import { argTypeLogo, argTypeLogoVariant, argTypeMarket, } from '../../utils/utils';
// AES Global logos.
import logoBlackGlobal from './assets/black/logo-black-global.svg';
import logoMonoGlobal from './assets/mono/logo-mono-global.svg';
import logoRGBGlobal from './assets/rgb/logo-rgb-global.svg';
import logoWhiteGlobal from './assets/white/logo-white-global.svg';
// AES Andes logos.
import logoBlackAndes from './assets/black/logo-black-andes.svg';
import logoMonoAndes from './assets/mono/logo-mono-andes.svg';
import logoRGBAndes from './assets/rgb/logo-rgb-andes.svg';
import logoWhiteAndes from './assets/white/logo-white-andes.svg';
// AES Argentina logos.
import logoBlackArgentina from './assets/black/logo-black-argentina.svg';
import logoMonoArgentina from './assets/mono/logo-mono-argentina.svg';
import logoRGBArgentina from './assets/rgb/logo-rgb-argentina.svg';
import logoWhiteArgentina from './assets/white/logo-white-argentina.svg';
// AES Brasil logos.
import logoBlackBrasil from './assets/black/logo-black-brasil.svg';
import logoMonoBrasil from './assets/mono/logo-mono-brasil.svg';
import logoRGBBrasil from './assets/rgb/logo-rgb-brasil.svg';
import logoWhiteBrasil from './assets/white/logo-white-brasil.svg';
// AES Bulgaria logos.
import logoBlackBulgaria from './assets/black/logo-black-bulgaria.svg';
import logoMonoBulgaria from './assets/mono/logo-mono-bulgaria.svg';
import logoRGBBulgaria from './assets/rgb/logo-rgb-bulgaria.svg';
import logoWhiteBulgaria from './assets/white/logo-white-bulgaria.svg';
// AES Chile logos.
import logoBlackChile from './assets/black/logo-black-chile.svg';
import logoMonoChile from './assets/mono/logo-mono-chile.svg';
import logoRGBChile from './assets/rgb/logo-rgb-chile.svg';
import logoWhiteChile from './assets/white/logo-white-chile.svg';
// AES Colombia logos.
import logoBlackColombia from './assets/black/logo-black-colombia.svg';
import logoMonoColombia from './assets/mono/logo-mono-colombia.svg';
import logoRGBColombia from './assets/rgb/logo-rgb-colombia.svg';
import logoWhiteColombia from './assets/white/logo-white-colombia.svg';
// AES Dominicana logos.
import logoBlackDominicana from './assets/black/logo-black-dominicana.svg';
import logoMonoDominicana from './assets/mono/logo-mono-dominicana.svg';
import logoRGBDominicana from './assets/rgb/logo-rgb-dominicana.svg';
import logoWhiteDominicana from './assets/white/logo-white-dominicana.svg';
// AES ElSalvador logos.
import logoBlackElSalvador from './assets/black/logo-black-elsalvador.svg';
import logoMonoElSalvador from './assets/mono/logo-mono-elsalvador.svg';
import logoRGBElSalvador from './assets/rgb/logo-rgb-elsalvador.svg';
import logoWhiteElSalvador from './assets/white/logo-white-elsalvador.svg';
// AES India logos.
import logoBlackIndia from './assets/black/logo-black-india.svg';
import logoMonoIndia from './assets/mono/logo-mono-india.svg';
import logoRGBIndia from './assets/rgb/logo-rgb-india.svg';
import logoWhiteIndia from './assets/white/logo-white-india.svg';
// AES Indiana logos.
import logoBlackIndiana from './assets/black/logo-black-indiana.svg';
import logoMonoIndiana from './assets/mono/logo-mono-indiana.svg';
import logoRGBIndiana from './assets/rgb/logo-rgb-indiana.svg';
import logoWhiteIndiana from './assets/white/logo-white-indiana.svg';
// AES Mexico logos.
import logoBlackMexico from './assets/black/logo-black-mexico.svg';
import logoMonoMexico from './assets/mono/logo-mono-mexico.svg';
import logoRGBMexico from './assets/rgb/logo-rgb-mexico.svg';
import logoWhiteMexico from './assets/white/logo-white-mexico.svg';
// AES Ohio logos.
import logoBlackOhio from './assets/black/logo-black-ohio.svg';
import logoMonoOhio from './assets/mono/logo-mono-ohio.svg';
import logoRGBOhio from './assets/rgb/logo-rgb-ohio.svg';
import logoWhiteOhio from './assets/white/logo-white-ohio.svg';
// AES Panama logos.
import logoBlackPanama from './assets/black/logo-black-panama.svg';
import logoMonoPanama from './assets/mono/logo-mono-panama.svg';
import logoRGBPanama from './assets/rgb/logo-rgb-panama.svg';
import logoWhitePanama from './assets/white/logo-white-panama.svg';
// AES Puerto Rico logos.
import logoBlackPuertoRico from './assets/black/logo-black-puertorico.svg';
import logoMonoPuertoRico from './assets/mono/logo-mono-puertorico.svg';
import logoRGBPuertoRico from './assets/rgb/logo-rgb-puertorico.svg';
import logoWhitePuertoRico from './assets/white/logo-white-puertorico.svg';
// AES Vietnam logos.
import logoBlackVietnam from './assets/black/logo-black-vietnam.svg';
import logoMonoVietnam from './assets/mono/logo-mono-vietnam.svg';
import logoRGBVietnam from './assets/rgb/logo-rgb-vietnam.svg';
import logoWhiteVietnam from './assets/white/logo-white-vietnam.svg';
// MVL Logo.
import logoRGBMvl from './assets/rgb/logo-rgb-mvl.svg';
const logos = {
  logoBlackGlobal,
  logoMonoGlobal,
  logoRGBGlobal,
  logoWhiteGlobal,
  logoBlackAndes,
  logoMonoAndes,
  logoRGBAndes,
  logoWhiteAndes,
  logoBlackArgentina,
  logoMonoArgentina,
  logoRGBArgentina,
  logoWhiteArgentina,
  logoBlackBrasil,
  logoMonoBrasil,
  logoRGBBrasil,
  logoWhiteBrasil,
  logoBlackBulgaria,
  logoMonoBulgaria,
  logoRGBBulgaria,
  logoWhiteBulgaria,
  logoBlackChile,
  logoMonoChile,
  logoRGBChile,
  logoWhiteChile,
  logoBlackColombia,
  logoMonoColombia,
  logoRGBColombia,
  logoWhiteColombia,
  logoBlackDominicana,
  logoMonoDominicana,
  logoRGBDominicana,
  logoWhiteDominicana,
  logoBlackElSalvador,
  logoMonoElSalvador,
  logoRGBElSalvador,
  logoWhiteElSalvador,
  logoBlackIndia,
  logoMonoIndia,
  logoRGBIndia,
  logoWhiteIndia,
  logoBlackIndiana,
  logoMonoIndiana,
  logoRGBIndiana,
  logoWhiteIndiana,
  logoBlackMexico,
  logoMonoMexico,
  logoRGBMexico,
  logoWhiteMexico,
  logoBlackOhio,
  logoMonoOhio,
  logoRGBOhio,
  logoWhiteOhio,
  logoBlackPanama,
  logoMonoPanama,
  logoRGBPanama,
  logoWhitePanama,
  logoBlackPuertoRico,
  logoMonoPuertoRico,
  logoRGBPuertoRico,
  logoWhitePuertoRico,
  logoBlackVietnam,
  logoMonoVietnam,
  logoRGBVietnam,
  logoWhiteVietnam,
  logoRGBMvl,
};
export default {
  title: 'Atoms/Logo',
  component: 'aes-logo',
  argTypes: {
    logo: Object.assign({}, argTypeLogo),
    market: Object.assign({}, argTypeMarket),
    variant: Object.assign({}, argTypeLogoVariant),
  },
};
const Template = ({ logo }) => html ` <aes-logo logo="${ifDefined(logo)}"></aes-logo> `;
export const GlobalRGB = Template.bind({});
GlobalRGB.args = {
  logo: LogoType.LOGO_RGB_GLOBAL,
};
export const MarketRGBIndiana = Template.bind({});
MarketRGBIndiana.args = {
  logo: LogoType.LOGO_RGB_INDIANA,
};
export const MarketMiamiValleyLighting = Template.bind({});
MarketMiamiValleyLighting.args = {
  logo: LogoType.LOGO_RGB_MVL,
};
export const AllLogos = () => html `
  <p class="mb-8">
    Hover on boxes to apply a darker background and see white logos.
  </p>
  <div class="grid grid-cols-4 gap-4">
    ${Object.values(LogoType).map(logo => html `
          <div
            class="flex flex-col items-left justify-between p-4 text-left border border-solid border-neutrals-gray2 rounded-lg hover:bg-neutrals-gray2"
          >
            <aes-logo logo="${ifDefined(logos[logo])}"></aes-logo>
            <div class="mt-4 text-sm">${logo}</div>
          </div>
        `)}
  </div>
`;
