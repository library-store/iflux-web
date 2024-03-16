// import { useTranslations } from 'next-intl';
import MainBanner from '@/components/MainBanner';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import imgSaving1 from '@/assets/images/banner-saving1.png';
import { Button } from '@/components/Elements/button';
import SavingsInterestCalculator from '@/components/SavingsInterestCalculator';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const BannerContent = () => {
  return (
    <div className="flex h-[589px] items-center justify-between">
      <div className="text-[35px] font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="text-[65px] leading-[121%]">
          <div>Make your</div>
          <div>Crypto</div>
          <div>Make Money</div>
        </div>

        <div>
          <Button className="poppins-bold text-[30px] mt-[50px] bg-gradient-to-r from-[#07EBAC] to-[#5DC8FF] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" style={{
            paddingLeft: '28px',
            paddingRight: '28px'
          }}>
            Start Saving
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse opacity="0.5" cx="15.0068" cy="14" rx="14.4651" ry="14" fill="white" />
              <path d="M12.7466 7.875L19.5639 14.085C20.0189 14.4994 19.995 15.2226 19.5137 15.6062L12.7466 21" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="mr-[-86px]">
        <img src={imgSaving1.src} alt="" style={{
          maxWidth: '649px',
          maxHeight: '472px'
        }} />
      </div>
    </div>
  )
}

export default function Saving() {
  // const t = useTranslations('About');

  return <div className='page-saving'>
    <MainBanner>
      <BannerContent />
    </MainBanner>

    <div className='mt-[60px]'>
      <div className='title text-center text-[45px] mb-[83px]'>
        <div className='poppins-bold'><span className='text-blue'>The IFLUX </span>difference</div>

        <div className='font-medium text-[25px]'>
          <div>Loan more cryptos with ease and Loan</div>
          <div>more cryptos with ease and flexibility</div>
        </div>
      </div>

      <div className='content'>
        <div className='content-container mx-auto'>
          <div className='flex justify-between gap-[58px]'>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] p-[38px]'>
              <div className='text-center'>
                <div className='mx-auto mb-[43px]'>
                  <svg className='mx-auto' width="87" height="102" viewBox="0 0 87 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_8)">
                      <path d="M6.326 101.637C5.24364 101.064 4.87559 100.168 4.91912 98.9456C4.99432 96.7719 4.94089 94.5923 4.94089 92.2836C3.99506 92.2836 3.11848 92.2975 2.24388 92.2796C0.757849 92.2499 0.0138455 91.4935 0.00988805 89.9868C-0.00198434 87.0767 -5.61157e-06 84.1645 0.00988805 81.2544C0.0158242 79.6703 0.710359 78.9775 2.30918 78.9457C3.0888 78.9298 3.8704 78.9437 4.69157 78.9437V73.5343C3.86248 73.5343 3.04922 73.5541 2.23794 73.5303C0.712338 73.4827 0.0158242 72.77 0.00988805 71.2455C-5.61157e-06 68.3671 0.00197312 65.4887 0.00988805 62.6122C0.0138455 60.915 0.722232 60.1924 2.41603 60.1904C9.12789 60.1825 15.8397 60.1745 22.5496 60.2043C23.2917 60.2083 23.6874 59.9343 24.1603 59.3765C26.8257 56.2321 29.5563 53.1393 32.2771 50.0425C35.1937 46.7215 38.1262 43.4143 41.0963 40.0515C40.7935 39.5274 40.5047 39.0193 40.2078 38.515C37.5623 34.0208 34.9226 29.5265 32.2652 25.0401C31.7705 24.2064 31.4104 23.3846 31.9743 22.4496C32.5106 21.5602 33.3713 21.4689 34.2993 21.4729C37.6553 21.4888 41.0112 21.4729 44.3671 21.4828C45.78 21.4868 46.6249 22.2054 46.6704 23.3885C46.7159 24.5677 45.9066 25.4213 44.6343 25.4372C42.236 25.4649 39.8358 25.4451 37.2734 25.4451C37.4416 25.7965 37.5425 26.0545 37.679 26.2888C39.8675 30.0545 42.0698 33.8143 44.2405 37.59C44.5393 38.1101 44.8697 38.3086 45.4792 38.3066C50.612 38.2808 55.7429 38.3026 60.8757 38.2689C61.2576 38.2669 61.8018 38.0446 61.9897 37.7448C64.4453 33.8322 66.8515 29.8858 69.2655 25.9473C69.3308 25.8401 69.3625 25.7131 69.4674 25.4491C68.1159 25.4491 66.8535 25.4491 65.591 25.4491C64.4058 25.4491 63.2205 25.4729 62.0392 25.4292C60.941 25.3875 60.1693 24.5836 60.1337 23.5414C60.1 22.4972 60.8183 21.6635 61.9046 21.5047C62.1302 21.4729 62.3637 21.4789 62.5932 21.4789C65.9492 21.4789 69.3051 21.4868 72.661 21.4729C73.5772 21.4689 74.3647 21.6793 74.8297 22.5468C75.271 23.3726 75.0355 24.127 74.5725 24.8774C71.6637 29.596 68.7669 34.3245 65.8661 39.049C65.6781 39.3567 65.496 39.6684 65.2823 40.0297C65.502 40.2897 65.7038 40.5418 65.9195 40.786C70.8406 46.3443 75.7696 51.8966 80.6848 57.4609C84.7867 62.104 86.8367 67.5353 86.8921 73.7467C86.9277 77.6891 86.9752 81.6315 85.5307 85.3913C81.9868 94.6161 75.366 99.9977 65.6187 101.463C65.3971 101.496 65.1834 101.58 64.9657 101.641H41.4723C41.3219 101.588 41.1754 101.498 41.0211 101.483C38.3181 101.221 35.7517 100.468 33.2981 99.3089C32.7836 99.0667 32.2672 98.8245 31.7131 98.5645C31.5113 100.826 31.4935 100.859 30.2172 101.641H6.326V101.637ZM26.7604 88.3154C27.7656 88.3154 28.6817 88.2955 29.5979 88.3194C30.8801 88.3551 31.5905 89.0717 31.632 90.372C31.6597 91.2315 31.5647 92.101 31.6716 92.9466C31.729 93.3953 31.9902 93.963 32.3444 94.2072C35.5717 96.4305 39.167 97.6156 43.077 97.6454C49.7869 97.695 56.4968 97.7089 63.2066 97.6454C71.917 97.566 79.7152 91.4856 82.1491 83.0568C83.085 79.8152 82.9762 76.5139 82.9168 73.2147C82.8297 68.4882 81.3022 64.24 78.2074 60.6768C72.9954 54.6738 67.6924 48.7502 62.3993 42.8187C62.1203 42.5071 61.5742 42.2808 61.1488 42.2788C55.82 42.2431 50.4913 42.2411 45.1646 42.2788C44.7471 42.2828 44.2168 42.5408 43.9338 42.8565C40.934 46.1914 37.9719 49.5622 35.0018 52.9229C32.5996 55.6425 30.1875 58.3522 27.8051 61.0897C27.3797 61.578 26.7999 62.1636 26.7703 62.7294C26.6496 64.9626 26.7208 67.2058 26.7208 69.5621C27.6112 69.5621 28.3928 69.5462 29.1744 69.5661C30.6981 69.6018 31.4203 70.3144 31.4282 71.8271C31.4421 74.7373 31.4401 77.6474 31.4282 80.5576C31.4223 82.1735 30.6961 82.8822 29.0537 82.904C28.3077 82.9139 27.5618 82.904 26.7643 82.904V88.3094L26.7604 88.3154ZM8.72027 78.8762H27.4094V73.5978H8.72027V78.8762ZM22.7139 64.2261H4.02276V69.4886H22.7139V64.2261ZM3.99703 88.234H22.6703V82.9933H3.99703V88.234ZM8.94189 97.5858H27.637V92.3352H8.94189V97.5858Z" fill="#3C3C3C" />
                      <path d="M24.095 0C26.5981 2.51711 29.1171 5.01835 31.5944 7.55928C32.4413 8.42678 32.3978 9.63571 31.6103 10.398C30.8306 11.1543 29.6454 11.1424 28.7767 10.3027C27.6904 9.25258 26.6476 8.15879 25.3515 6.84663V8.12305C25.3515 16.4883 25.3515 24.8515 25.3515 33.2168C25.3515 33.5145 25.3555 33.8123 25.3515 34.1101C25.3218 35.5671 24.566 36.4664 23.3807 36.4604C22.1935 36.4545 21.4138 35.5552 21.4099 34.0962C21.398 28.4089 21.404 22.7235 21.404 17.0362C21.404 13.8957 21.404 10.7553 21.4 7.61288C21.4 7.42827 21.3624 7.24365 21.3189 6.82678C20.1593 8.00792 19.1502 9.06995 18.0955 10.0883C17.7512 10.4198 17.3258 10.7493 16.8806 10.8744C16.0535 11.1067 15.3134 10.8307 14.8148 10.0903C14.2944 9.31809 14.2489 8.44861 14.884 7.7975C17.4623 5.16723 20.1 2.59453 22.7139 0C23.1749 0 23.636 0 24.095 0Z" fill="url(#paint0_linear_1_8)" />
                      <path d="M30.2152 101.637C31.4915 100.855 31.5093 100.822 31.7112 98.5605C32.2652 98.8206 32.7817 99.0628 33.2961 99.305C35.7498 100.464 38.3142 101.217 41.0191 101.479C41.1735 101.495 41.3199 101.582 41.4703 101.637H30.2172H30.2152Z" fill="white" />
                      <path d="M7.26788 45.715C7.26788 38.8406 7.26788 32.26 7.26788 25.6793C7.26788 23.2654 7.25007 20.8496 7.28173 18.4357C7.29756 17.2506 8.08312 16.4724 9.17142 16.4466C10.2617 16.4228 11.0651 17.1612 11.1957 18.3265C11.2313 18.654 11.2155 18.9875 11.2155 19.3171C11.2155 27.6843 11.2155 36.0515 11.2155 44.4207C11.2155 44.8019 11.2155 45.181 11.2155 45.5622L11.441 45.6693C12.5095 44.5716 13.58 43.4738 14.6466 42.3721C15.2501 41.7488 15.9664 41.4986 16.7994 41.7627C18.1252 42.1815 18.6416 43.8569 17.6582 44.8971C15.349 47.3428 12.9765 49.7309 10.5763 52.0852C9.73338 52.911 8.59363 52.782 7.75069 51.9284C5.57211 49.7229 3.39748 47.5135 1.23077 45.2942C0.215679 44.254 0.134551 43.0907 0.987385 42.2371C1.82835 41.3954 3.01559 41.4927 4.03265 42.4971C5.05368 43.5056 6.06877 44.522 7.26788 45.715Z" fill="url(#paint1_linear_1_8)" />
                      <path d="M55.3095 23.4223C55.3293 24.5379 54.5378 25.3895 53.4515 25.4232C52.3434 25.457 51.3798 24.5538 51.3857 23.4878C51.3916 22.4754 52.4147 21.4947 53.4594 21.4967C54.4527 21.4987 55.2897 22.3721 55.3095 23.4223Z" fill="#3C3C3C" />
                      <path d="M44.3276 85.9035C43.6627 85.3576 43.0058 85.0161 42.6476 84.4742C42.145 83.7139 42.3924 82.8881 42.9741 82.1933C44.6461 80.1943 46.3182 78.1973 47.9902 76.1983C52.4562 70.8623 56.9242 65.5264 61.3862 60.1864C61.9779 59.4778 62.6526 59.0331 63.6123 59.2892C64.4256 59.5055 65.037 60.0574 65.0152 60.8693C64.9974 61.5304 64.7303 62.3065 64.3108 62.8167C60.478 67.4797 56.5878 72.0951 52.7154 76.7224C50.5131 79.3526 48.3305 81.9988 46.0926 84.5973C45.6751 85.0836 45.0419 85.3834 44.3276 85.9015V85.9035Z" fill="url(#paint2_linear_1_8)" />
                      <path d="M45.5662 70.509C42.1628 70.4931 39.4658 67.7437 39.4797 64.3055C39.4935 60.9011 42.2578 58.1497 45.6474 58.1656C49.0231 58.1835 51.7557 60.9745 51.7399 64.3869C51.7241 67.8033 48.9796 70.5229 45.5643 70.507L45.5662 70.509ZM45.5742 66.5328C46.797 66.5467 47.7725 65.5978 47.7884 64.379C47.8042 63.1661 46.8406 62.1616 45.6395 62.1418C44.4364 62.1219 43.447 63.0946 43.4312 64.3115C43.4154 65.5442 44.3533 66.5169 45.5742 66.5308V66.5328Z" fill="url(#paint3_linear_1_8)" />
                      <path d="M61.5307 74.7809C64.9202 74.7809 67.6865 77.5481 67.6905 80.9407C67.6944 84.3173 64.9024 87.1302 61.5425 87.1342C58.1668 87.1382 55.4065 84.357 55.4045 80.9526C55.4045 77.5223 58.1233 74.7829 61.5307 74.7829V74.7809ZM59.362 80.9367C59.358 82.1436 60.3454 83.1561 61.5287 83.16C62.706 83.164 63.7251 82.1456 63.735 80.9566C63.7449 79.7575 62.7575 78.767 61.5465 78.761C60.3157 78.7551 59.3659 79.702 59.362 80.9367Z" fill="url(#paint4_linear_1_8)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_8" x1="23.3157" y1="0" x2="23.3157" y2="36.4605" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_8" x1="9.28636" y1="16.446" x2="9.28636" y2="52.6411" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_1_8" x1="53.6962" y1="59.2161" x2="53.6962" y2="85.9035" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_1_8" x1="45.6098" y1="58.1655" x2="45.6098" y2="70.509" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <linearGradient id="paint4_linear_1_8" x1="61.5475" y1="74.7809" x2="61.5475" y2="87.1342" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <clipPath id="clip0_1_8">
                        <rect width="86.9" height="101.637" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Competitive</div>
                  <div>interest rates</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>High market-leading </div>
                  <div>interest rates of up to 15%</div>
                  <div>Annual Percentage Yield</div>
                </div>
              </div>
            </div>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]  p-[38px]'>
              <div className='text-center'>

                <div className='mx-auto mb-[43px]'>
                  <svg className='mx-auto' width="81" height="98" viewBox="0 0 81 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_22)">
                      <path d="M44.8917 97.4057C44.8996 97.2697 44.9179 97.1338 44.9179 96.9978C44.9179 93.724 44.9153 90.4476 44.9231 87.1738C44.9231 86.8182 44.8682 86.6534 44.4524 86.5724C39.0606 85.5264 35.3057 80.9583 35.3031 75.475C35.3031 72.5777 35.2952 69.6805 35.3109 66.7832C35.3109 66.4093 35.1906 66.2629 34.8429 66.1374C24.726 62.5001 18.4478 55.4322 16.471 44.8708C14.9622 36.8092 17.0175 29.4798 22.1086 23.0237C22.221 22.8799 22.3334 22.7361 22.5112 22.5086C22.2262 22.5086 22.0301 22.5086 21.834 22.5086C20.001 22.4825 18.1601 22.5583 16.3376 22.4066C11.44 21.9987 7.13594 17.8516 6.55022 12.9644C6.35672 11.3563 6.42209 9.71416 6.40901 8.08772C6.3881 5.99585 6.4064 3.90397 6.40901 1.81209C6.40379 0.638023 7.03919 0 8.21326 0C31.6161 0 55.0164 0 78.4193 0C79.5934 0 80.2471 0.643253 80.2497 1.80425C80.2523 4.99174 80.2654 8.18186 80.2497 11.3694C80.2157 17.4803 75.1952 22.4772 69.0843 22.5034C67.4736 22.5112 65.8628 22.5034 64.1344 22.5034C64.307 22.7256 64.4194 22.8773 64.5397 23.0264C68.041 27.4036 70.0596 32.3744 70.5146 37.9676C70.5408 38.2788 70.6715 38.3964 70.9408 38.5063C75.9221 40.5458 78.9606 44.2066 80.017 49.4834C80.1817 50.3018 80.2445 51.1517 80.2445 51.9884C80.2576 66.9218 80.2549 81.8526 80.2549 96.786C80.2549 96.9899 80.2732 97.1965 80.2811 97.4005H76.989C77.0047 97.2645 77.0334 97.1311 77.0334 96.9952C77.0334 93.2246 77.0334 89.4566 77.0334 85.686C77.0334 85.5552 77.0125 85.4245 76.9968 85.2545C76.9001 85.2963 76.8373 85.3146 76.785 85.3486C75.2135 86.426 73.4616 86.7894 71.5763 86.7842C64.0037 86.7633 56.4311 86.7763 48.8585 86.7763C48.6414 86.7763 48.4218 86.7763 48.1786 86.7763C48.1629 86.9829 48.1446 87.132 48.1446 87.281C48.1446 90.5182 48.1446 93.758 48.1446 96.9952C48.1446 97.1311 48.1734 97.2645 48.1864 97.4005H44.8943L44.8917 97.4057ZM38.5063 67.0839V67.6383C38.5063 70.2453 38.5063 72.8497 38.5063 75.4567C38.5115 79.9882 41.9971 83.5339 46.5365 83.547C55.074 83.5732 63.6114 83.5653 72.1489 83.5522C74.9573 83.5496 77.0073 81.4708 77.0178 78.6677C77.0256 76.8321 77.0178 74.9991 77.0204 73.1634C77.0204 69.5733 75.7313 66.5139 73.2262 63.9592C72.1803 62.8949 71.1187 61.8464 70.0649 60.7926C66.9009 57.6286 63.7396 54.4621 60.5756 51.2981C59.697 50.4169 58.6458 50.0639 57.4325 50.3594C56.2349 50.6522 55.4453 51.4288 55.1158 52.6081C54.7706 53.8345 55.1079 54.9118 56.0022 55.8087C59.5636 59.3754 63.0989 62.9655 66.7022 66.4904C67.8187 67.5834 67.3899 68.9483 66.1844 69.5027C63.5539 70.7107 61.883 72.8104 61.2476 75.6397C61.0175 76.6621 61.0436 77.7447 60.9652 78.8011C60.8998 79.6796 60.2618 80.3203 59.4094 80.3386C58.536 80.3569 57.83 79.7189 57.7672 78.8324C57.7411 78.4742 57.7542 78.1134 57.7594 77.7525C57.8378 73.6341 59.5035 70.3106 62.7642 67.7899C62.8793 67.701 62.9891 67.6069 63.044 67.5624C61.4934 65.9988 59.9663 64.4586 58.4262 62.908C52.3702 66.8617 45.7416 68.2449 38.501 67.0865L38.5063 67.0839ZM59.5244 47.1379C62.7511 39.8607 60.6593 30.2224 52.6735 25.1914C44.9937 20.354 34.9187 22.1739 29.3438 29.3726C23.8056 36.5216 24.577 46.7299 31.1455 52.9794C37.8003 59.31 46.9627 58.7269 52.0747 55.4557C50.6549 50.6993 54.6007 46.2645 59.527 47.1379H59.5244ZM76.9864 9.68801H9.61482C9.61482 10.4071 9.59913 11.0922 9.62005 11.7747C9.63051 12.1329 9.68542 12.4911 9.75864 12.8441C10.5588 16.6723 13.8012 19.2976 17.7575 19.3002C26.4126 19.3054 35.0677 19.295 43.7229 19.295C52.1558 19.295 60.5861 19.3028 69.0189 19.295C70.8206 19.295 72.4601 18.7432 73.8878 17.6293C76.4686 15.6106 77.2845 12.886 76.989 9.69063L76.9864 9.68801ZM9.62528 6.41684H77.0073C77.0151 6.22334 77.0308 6.05599 77.0308 5.88864C77.0308 5.01789 77.0308 4.14715 77.0308 3.25026H9.62528V6.41684ZM53.8005 58.2457C44.5753 63.5643 33.0177 61.1691 26.7055 52.8042C23.0578 47.972 21.7477 42.5096 22.7806 36.5503C23.8187 30.5728 27.0271 25.9654 32.1313 22.5086C30.3872 22.5086 28.779 22.5008 27.1735 22.5191C27.014 22.5191 26.8257 22.6498 26.7029 22.7727C20.8168 28.6169 18.3118 35.6744 19.5434 43.8719C21.0182 53.7064 28.2273 61.4045 37.8578 63.6428C44.1308 65.0993 50.0717 64.1213 55.6335 60.8632C55.8035 60.7638 55.9656 60.6488 56.1199 60.5468C55.3328 59.765 54.5824 59.0171 53.8031 58.2431L53.8005 58.2457ZM77.0073 63.2296C77.0125 63.1878 77.0282 63.0911 77.0282 62.9943C77.0282 59.276 77.0988 55.5577 77.0125 51.842C76.9105 47.517 74.8736 44.2877 71.137 42.1252C70.9696 42.0285 70.7892 41.9552 70.5643 41.8454C70.2924 45.9847 69.1601 49.7919 67.2042 53.3612C70.4806 56.6585 73.7387 59.9375 77.0099 63.2296H77.0073ZM64.775 51.0471C64.9162 50.7673 65.0051 50.6078 65.0836 50.4404C67.1702 46.0082 67.8606 41.3643 67.1153 36.5242C66.2838 31.1219 63.8389 26.5486 59.9114 22.7623C59.7598 22.6158 59.4957 22.5217 59.2839 22.5191C57.8614 22.4982 56.4389 22.5086 55.0164 22.5086C54.8909 22.5086 54.7654 22.5269 54.5458 22.5426C54.7654 22.6995 54.9014 22.7962 55.0373 22.893C61.3287 27.4167 64.3985 33.5407 64.1449 41.2989C64.0664 43.6837 63.5016 45.9716 62.5995 48.1786C62.5315 48.3433 62.4766 48.6283 62.5629 48.7225C63.261 49.4965 63.9958 50.2365 64.775 51.0444V51.0471Z" fill="#3C3C3C" />
                      <path d="M6.40376 75.5142C4.75379 75.5142 3.17966 75.522 1.60813 75.5116C0.711239 75.5063 0 74.9101 0 74.0525C0 73.6289 0.183039 73.1347 0.439294 72.7895C3.22149 69.0293 6.03507 65.2953 8.83819 61.5509C9.18858 61.0854 9.53112 60.6122 9.88935 60.1546C10.6163 59.2237 11.8087 59.2001 12.5147 60.1363C15.7205 64.3932 18.9106 68.658 22.1033 72.9229C22.5086 73.4641 22.5792 74.0577 22.2576 74.6617C21.949 75.2422 21.4496 75.5168 20.788 75.5142C19.2296 75.5089 17.6711 75.5142 16.0159 75.5142C16.0159 75.7495 16.0159 75.9639 16.0159 76.1757C16.0159 81.2485 16.0159 86.3213 16.0159 91.3915C16.0159 92.7146 15.4328 93.2951 14.1019 93.2951C12.1486 93.2951 10.1953 93.2951 8.242 93.2951C7.01564 93.2951 6.40638 92.6859 6.40638 91.4674C6.40638 86.3789 6.40638 81.2878 6.40638 76.1993C6.40638 75.9953 6.40638 75.794 6.40638 75.5116L6.40376 75.5142ZM4.7904 72.3084C5.80235 72.3084 6.68617 72.3084 7.5726 72.3084C9.05522 72.3084 9.60695 72.8653 9.60695 74.3663C9.60695 79.4051 9.60695 84.4439 9.60695 89.4827C9.60695 89.6788 9.60695 89.8749 9.60695 90.0606H12.8101C12.8101 89.7416 12.8101 89.4539 12.8101 89.1663C12.8101 84.1458 12.8101 79.1227 12.8101 74.1022C12.8101 72.9595 13.4534 72.3188 14.5935 72.311C15.2106 72.3058 15.8277 72.311 16.4448 72.311C16.8082 72.311 17.1691 72.311 17.6267 72.311C15.4433 69.398 13.3383 66.5923 11.2072 63.7474C9.07614 66.5923 6.97118 69.398 4.78779 72.311L4.7904 72.3084Z" fill="url(#paint0_linear_1_22)" />
                      <path d="M44.1282 48.2414H40.9015C40.9015 48.6859 40.9015 49.1069 40.9015 49.5305C40.9015 50.7124 40.2843 51.4315 39.2855 51.4236C38.3154 51.4132 37.6983 50.6863 37.6983 49.5488C37.6983 49.1252 37.6983 48.7016 37.6983 48.2204C37.1753 48.2204 36.6994 48.2257 36.2235 48.2204C35.1959 48.2074 34.4846 47.5301 34.4925 46.5862C34.5029 45.6605 35.1959 45.0225 36.2156 45.012C36.6915 45.0068 37.1674 45.012 37.6695 45.012V35.3659C37.1596 35.3659 36.6366 35.3789 36.1163 35.3632C35.2691 35.3371 34.6127 34.7671 34.5055 33.9852C34.3748 33.036 35.052 32.2071 36.0143 32.1653C36.5582 32.1418 37.1021 32.1601 37.6983 32.1601C37.6983 31.6057 37.693 31.1115 37.6983 30.6199C37.7113 29.6367 38.4069 28.9176 39.3221 28.9307C40.219 28.9438 40.8831 29.6472 40.8962 30.6121C40.9041 31.1037 40.8962 31.5979 40.8962 32.1234H44.1229C44.1229 31.6266 44.1177 31.1533 44.1229 30.6801C44.136 29.6446 44.8107 28.9176 45.7363 28.9307C46.6672 28.9438 47.3209 29.6707 47.3314 30.7088C47.3366 31.1716 47.3131 31.6345 47.3444 32.0947C47.3549 32.2437 47.47 32.4503 47.5955 32.5157C50.362 33.98 51.2066 36.383 49.9541 39.3143C51.8263 40.7446 52.6134 42.6064 51.876 44.8996C51.1935 47.0255 49.5801 48.0505 47.3314 48.2466C47.3314 48.7173 47.3366 49.1932 47.3314 49.6691C47.3209 50.7046 46.6593 51.4236 45.7206 51.4263C44.7793 51.4263 44.1334 50.7202 44.1229 49.6691C44.1177 49.2089 44.1229 48.7486 44.1229 48.244L44.1282 48.2414ZM40.9328 44.9545C41.0243 44.9754 41.0871 45.0042 41.1525 45.0042C43.2051 45.0042 45.2578 45.0225 47.3104 44.9885C47.6582 44.9833 48.0504 44.8185 48.3433 44.6146C48.895 44.2302 49.0676 43.4954 48.848 42.8652C48.6179 42.2037 48.0295 41.7853 47.2634 41.7827C45.297 41.7748 43.328 41.7827 41.3617 41.7879C41.2152 41.7879 41.0714 41.8141 40.9328 41.8298V44.9597V44.9545ZM40.9276 38.569C42.5331 38.569 44.0916 38.5743 45.6474 38.569C46.6254 38.5638 47.3523 37.8578 47.3392 36.9478C47.3261 36.0483 46.6201 35.3737 45.6631 35.3685C44.2589 35.3606 42.8521 35.3659 41.448 35.3685C41.2832 35.3685 41.1159 35.3842 40.9276 35.3946V38.5717V38.569Z" fill="url(#paint1_linear_1_22)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_22" x1="11.2298" y1="59.4452" x2="11.2298" y2="93.2951" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_22" x1="43.3197" y1="28.9305" x2="43.3197" y2="51.4263" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <clipPath id="clip0_1_22">
                        <rect width="80.2758" height="97.4057" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Various</div>
                  <div>deposit crypto</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>A variety of cryptocurrencies</div>
                  <div>are supported: BTC, ETH, </div>
                  <div>BNB, and 20 more.</div>
                </div>
              </div>
            </div>
            <div className='grow bg-gray rounded-[18px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]  p-[38px]'>
              <div>
                <div className="mx-auto mb-[43px]">
                  <svg className='mx-auto' width="95" height="82" viewBox="0 0 95 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_30)">
                      <path d="M79.3852 30.166C77.0587 23.1744 73.0221 17.8567 67.3962 13.7113C53.4311 3.41421 33.7918 5.51109 22.2861 18.4791C21.8873 18.9263 21.5187 19.4097 21.1138 19.8508C19.6031 21.5066 17.7902 21.8631 16.0197 20.4914C14.098 18.9988 14.086 17.0771 15.5906 15.2099C19.9657 9.78944 25.3559 5.67425 31.8399 3.0879C54.0052 -5.74678 78.0679 5.00348 86.1049 27.4105C86.8965 29.6101 87.8211 30.2929 90.1113 30.2204C95.8339 30.0512 95.9427 30.3473 93.4108 35.659C90.7761 41.1761 88.1776 46.7114 85.4523 52.1802C85.0293 53.0322 84.0806 53.9387 83.2225 54.1381C82.7511 54.2468 81.7238 53.0383 81.325 52.2346C78.364 46.2098 75.4755 40.1488 72.6112 34.0757C71.1428 30.9637 71.6745 30.1902 75.1371 30.16C76.4242 30.1479 77.7174 30.16 79.3852 30.16V30.166Z" fill="#3C3C3C" />
                      <path d="M15.4335 51.2979C20.1348 63.1722 28.0752 70.7439 40.0461 73.3786C53.0081 76.2308 64.0484 72.3513 73.0764 62.6223C74.1158 61.5043 75.7957 60.61 77.2883 60.4106C78.1343 60.2958 79.8324 61.6735 80.0197 62.5981C80.2675 63.849 79.8263 65.6377 78.9985 66.6408C72.8347 74.0977 64.9548 78.8534 55.4071 80.6965C35.4656 84.5518 16.1042 73.7412 9.1489 54.6578C8.11557 51.8176 6.8103 50.8205 4.0185 51.2858C3.43234 51.3825 2.80992 51.304 2.20564 51.2919C0.0362446 51.2435 -0.441142 50.0712 0.386731 48.3067C3.49277 41.6837 6.61089 35.0668 9.83174 28.4982C10.7865 26.5524 12.3637 26.6128 13.3547 28.619C16.5393 35.0909 19.6333 41.6112 22.7091 48.1375C23.7243 50.3009 22.9146 51.3765 20.5095 51.304C19.0048 51.2617 17.5001 51.2979 15.4456 51.2979H15.4335Z" fill="#3C3C3C" />
                      <path d="M33.55 56.4706C34.6378 53.8057 35.5321 51.6061 36.2633 49.8053C39.6413 50.7178 42.7533 51.7148 45.944 52.3554C47.1284 52.5911 48.5908 52.2466 49.7329 51.7451C52.4159 50.5667 52.7785 47.7568 50.4338 46.0164C49.0138 44.9589 47.2613 44.3425 45.6479 43.5509C43.4906 42.4934 41.1641 41.6958 39.182 40.3845C32.8128 36.1665 33.115 27.5615 39.7682 23.8149C42.1188 22.4915 44.3366 21.5065 44.3426 18.2011C44.3426 17.488 46.3609 16.2009 47.4426 16.2069C48.8143 16.2069 51.2617 17.1194 51.3644 17.8929C51.8418 21.3857 54.3254 22.0262 56.9601 22.8299C58.0902 23.1744 59.1235 23.827 60.3683 24.4192C59.3894 26.7517 58.4769 28.9393 57.6974 30.8126C54.4584 30.0814 51.5095 29.0662 48.5062 28.8909C47.08 28.8063 44.8442 29.9726 44.2459 31.1933C43.2428 33.2478 45.3457 34.2932 47.0136 35.0607C49.6543 36.2753 52.4099 37.2603 54.9781 38.6079C58.9966 40.7168 61.4439 43.9075 61.2506 48.7055C61.0572 53.3525 58.4648 56.3256 54.4765 58.1807C52.5307 59.0872 51.4007 60.1809 51.3947 62.4349C51.3947 64.5439 49.9685 65.3597 47.9865 65.414C45.95 65.4684 43.9498 65.263 43.6779 62.7491C43.4241 60.4347 42.1309 59.5827 40.0522 59.0146C37.8828 58.4224 35.8403 57.3891 33.55 56.4706Z" fill="url(#paint0_linear_1_30)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_30" x1="47.4057" y1="16.2069" x2="47.4057" y2="65.4211" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#07EBAC" />
                        <stop offset="1" stopColor="#004BEF" />
                      </linearGradient>
                      <clipPath id="clip0_1_30">
                        <rect width="95" height="81.47" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <div className='font-bold text-[25px] text-blue mb-[18px] text-center'>
                  <div>Diverse</div>
                  <div>saving terms</div>
                </div>
                <div className='text-[18px] text-center'>
                  <div>Flexible deposit and saving </div>
                  <div>terms ranging from 07 days </div>
                  <div>to 24 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <SavingsInterestCalculator />
    </div>
  </div>;
}