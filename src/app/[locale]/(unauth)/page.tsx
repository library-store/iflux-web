import { getTranslations } from 'next-intl/server';

import MainCasousel from '@/components/MainCasousel';
import OurService from '@/components/OurService';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'BaseTemplate',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <div className="mt-[32px]">
        <MainCasousel />
      </div>
      <div className="home-buttons">
        <button className="btn">
          <svg
            width="85"
            height="68"
            viewBox="0 0 85 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.8536 22.0327V57.0399C74.7228 57.2487 76.8962 56.9088 78.21 57.8169C79.345 58.5987 79.5092 60.7985 80.1661 62.5467C85.0105 63.2751 85.3341 63.615 84.8221 68H0.303311C-0.551585 63.8384 0.230863 62.9643 4.8531 62.6292C5.51963 60.9053 5.71283 58.7152 6.89133 57.812C8.06983 56.9088 10.2336 57.2973 12.1076 57.103V22.0813C10.1612 22.0813 8.25819 22.0473 6.35521 22.091C4.37494 22.1347 2.7714 21.4985 2.32222 19.4347C1.8827 17.4146 3.22541 16.3706 4.91106 15.6422C16.6961 10.5433 28.4521 5.37649 40.2854 0.399045C41.5847 -0.149688 43.5166 -0.125407 44.8255 0.428181C56.654 5.41534 68.4052 10.5919 80.1951 15.6713C81.8421 16.3803 83.0447 17.4195 82.7308 19.2696C82.383 21.3286 80.8664 22.1056 78.8282 22.0473C76.9107 21.989 74.9932 22.0327 72.8536 22.0327ZM36.7451 28.4427V57.103H48.3272V28.4427H36.7451ZM30.1184 57.1759V28.4912H18.657V57.1759H30.1184ZM66.3429 57.2099V28.4718H54.9297V57.2099H66.3429ZM63.725 15.6859C63.2082 15.2877 63.0102 15.0594 62.7542 14.9477C56.3546 12.1749 49.9646 9.38272 43.5311 6.69247C42.8501 6.40597 41.8165 6.5128 41.1065 6.80902C35.0498 9.36815 29.0317 12.0098 23.0088 14.6467C22.5065 14.8652 22.0621 15.21 21.2797 15.6859H63.7299H63.725Z"
              fill="#3C3C3C"
            />
          </svg>

          <span>Account</span>
        </button>
        <button className="btn">
          <svg
            width="84"
            height="88"
            viewBox="0 0 84 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1288)">
              <path
                d="M66.2505 87.2857H56.4375C54.4122 86.6214 53.6114 85.2002 53.7385 83.1399C53.802 82.1139 53.7512 81.0838 53.7512 80.0999C51.3361 80.3143 49.0481 80.6255 46.7558 80.6885C44.4551 80.7516 42.1459 80.5498 39.841 80.5119C39.6037 80.5119 39.252 80.7852 39.1376 81.0207C38.6207 82.0929 38.1165 83.1777 37.7013 84.292C37.1843 85.6711 36.3835 86.7475 34.9641 87.2899H24.9647C22.9775 86.5583 22.2614 85.1203 22.3462 83.0684C22.4436 80.6843 22.3335 78.2919 22.3886 75.9078C22.4055 75.0837 22.1555 74.6127 21.4352 74.1586C15.2661 70.2524 10.5545 65.1017 7.81735 58.2858C7.67753 57.9326 7.31314 57.5962 6.96994 57.4112C5.26665 56.4904 3.54217 55.6032 1.80922 54.737C0.572001 54.1105 0 53.135 0 51.7769C0.0084741 48.5014 -0.0084741 45.226 0.0084741 41.9505C0.0169482 39.9827 1.19485 38.8474 3.20321 38.8348C4.40653 38.8264 5.60985 38.818 6.81317 38.86C7.35551 38.8768 7.62245 38.7086 7.82583 38.1831C9.64352 33.499 12.5289 29.5382 16.2576 26.1702C16.4567 25.9894 16.7109 25.8632 16.9058 25.7329C15.5839 23.0461 14.3382 20.5527 13.1306 18.0467C12.0968 15.9023 13.2069 13.9345 15.5839 13.7873C17.4905 13.6696 19.4099 13.5686 21.3123 13.6527C25.4816 13.8335 29.4856 14.7207 33.21 16.6843C33.5744 16.8778 34.0913 16.8946 34.515 16.8357C35.3878 16.718 36.2479 16.4993 36.803 16.3858C38.2394 18.4293 39.5401 20.2836 40.8409 22.1252C40.3113 22.1967 39.6715 22.2682 39.0359 22.3775C37.6462 22.6214 36.8538 23.5717 37.0148 24.7574C37.1801 25.9978 38.2521 26.7294 39.6672 26.5402C43.7306 26.002 47.8066 25.8632 51.8233 26.7C54.2173 27.2003 56.5265 28.1001 58.8907 28.7729C59.4882 28.9411 60.1745 29.0714 60.7593 28.9453C61.6024 28.7645 62.0855 28.0749 62.166 27.2003C62.2549 26.2459 61.8397 25.5058 60.9796 25.1022C59.9034 24.5976 58.789 24.1729 57.8526 23.7819C59.4373 22.2934 61.0347 20.7966 62.7168 19.2156C66.081 20.6115 69.3647 22.5247 72.3179 24.9718C79.4574 30.8837 83.258 38.4564 83.6732 47.6815C83.8978 52.7061 82.6648 57.428 80.6268 61.9986C77.1524 69.7815 72.9577 77.1944 68.9452 84.704C68.3139 85.8898 67.5428 86.8358 66.2505 87.2942V87.2857ZM22.9436 35.2986C20.5963 35.2776 18.6854 37.1235 18.6515 39.4403C18.6176 41.8243 20.4819 43.7333 22.8589 43.7543C25.2401 43.7711 27.1722 41.879 27.168 39.5286C27.168 37.2202 25.2698 35.3238 22.9436 35.3028V35.2986Z"
                fill="#3C3C3C"
              />
              <path
                d="M50.5394 22.6718C44.239 22.6887 39.0909 17.622 39.0613 11.3864C39.0316 5.11714 44.1923 -0.00420213 50.531 2.58726e-06C56.7933 0.0042073 61.9371 5.06248 61.9583 11.2392C61.9795 17.5547 56.8865 22.6592 50.5394 22.6718Z"
                fill="#3C3C3C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1288">
                <rect width="83.6986" height="87.2857" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Saving</span>
        </button>
        <button className="btn">
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1213)">
              <path
                d="M1.02444 76.0001C0.68521 75.224 0.0678207 74.4546 0.0576439 73.6718C-0.0305546 68.4458 0.00336787 63.2165 0.0169369 57.9871C0.0203291 56.1231 0.427399 55.7368 2.3101 55.7266C4.55916 55.7164 6.81162 55.7944 9.05729 55.6792C9.72895 55.6453 10.5261 55.2318 11.0044 54.737C12.1307 53.5678 13.0228 52.1749 14.1491 51.0022C17.7957 47.2065 22.3074 45.3289 27.5586 45.2849C32.9014 45.2408 38.2442 45.2679 43.587 45.2781C46.5315 45.2849 48.6279 47.1726 48.6245 49.7822C48.6245 52.3918 46.5484 54.2727 43.5802 54.3168C41.7823 54.3439 39.981 54.2829 38.1832 54.3405C35.3676 54.4286 33.2305 56.5739 33.2033 59.2682C33.1762 61.9218 35.3065 64.2264 38.1153 64.2637C44.469 64.3484 50.8261 64.3688 57.1798 64.223C58.3297 64.1959 59.6493 63.4605 60.5551 62.6641C62.665 60.8136 64.5681 58.7327 66.5526 56.7399C70.2772 53.0018 73.5745 53.4763 76.0034 58.1024V60.4645C75.023 61.7219 74.1376 63.0741 73.0385 64.2162C70.1314 67.2393 67.1801 70.2251 64.1373 73.1092C62.9534 74.231 61.4744 75.041 60.1276 75.9899H1.02444V76.0001Z"
                fill="#3C3C3C"
              />
              <path
                d="M76 24.015C75.4267 26.5196 75.1961 29.1698 74.2157 31.5049C70.4673 40.4487 63.659 45.3459 53.9267 46.1118C52.8343 46.1965 52.2407 45.8475 51.6369 44.9121C49.9034 42.2279 47.3762 40.8249 44.1332 40.8181C43.0647 40.8181 41.9724 40.6757 40.9309 40.8418C38.6378 41.2112 37.1248 40.1538 35.7204 38.5135C29.7229 31.5185 28.2371 23.6253 31.4055 15.0679C34.5569 6.5613 40.7681 1.46414 49.8695 0.308462C63.0315 -1.36574 74.3819 7.79493 75.7422 21.036C75.7863 21.4698 75.9118 21.8969 76 22.3239V24.0117V24.015ZM55.1479 35.4701C57.0136 34.6262 58.7606 34.1755 60.0768 33.1655C62.4446 31.349 63.0111 28.7191 62.2207 25.8824C61.4405 23.0763 59.1168 21.1581 56.2537 20.9581C54.2387 20.8191 52.2068 20.931 50.185 20.8259C48.6653 20.7446 47.5764 19.5381 47.6374 18.2129C47.6985 16.9082 48.767 15.8982 50.2189 15.8575C51.7929 15.8169 53.3805 15.722 54.9375 15.888C55.9383 15.9965 56.9899 16.3795 57.8447 16.9149C59.2559 17.8029 60.4126 17.9011 61.2946 16.8912C62.1936 15.8575 62.085 14.3325 60.6637 13.4072C59.0184 12.3363 57.1425 11.6246 55.1343 10.6451C54.8052 7.99488 54.3134 7.15439 52.8717 7.14084C51.4062 7.12728 50.8567 8.02878 50.4767 11.1196C50.0086 11.2247 49.5235 11.3365 49.035 11.4382C45.0797 12.2583 42.8204 15.2983 43.2377 19.2432C43.604 22.7001 46.6401 25.3029 50.3614 25.3402C52.105 25.3571 53.8486 25.3029 55.5889 25.3741C56.939 25.4283 57.804 26.2213 57.994 27.5465C58.1873 28.8885 57.5224 30.1662 56.2537 30.2137C53.5501 30.3153 50.782 30.2509 48.1327 29.7697C46.3891 29.4511 45.2832 29.2952 44.6081 30.5255C43.9127 31.7964 44.4012 33.1181 46.1245 33.8874C47.4814 34.4941 48.9706 34.7957 50.4632 35.2532C50.9483 38.2288 51.4537 39.0591 52.8377 39.0727C54.2828 39.0863 54.8222 38.1814 55.1411 35.4667L55.1479 35.4701Z"
                fill="#3C3C3C"
              />
              <path
                d="M31.8431 40.9739C28.9597 40.9739 26.558 41.0078 24.1596 40.9434C23.722 40.9332 23.2132 40.6215 22.8774 40.3063C15.8825 33.7382 13.413 25.7027 16.1471 16.5556C18.9152 7.26957 25.4623 1.85721 35.0996 0.318573C35.8018 0.206734 36.5142 0.14573 37.7219 0C30.9136 5.00566 26.8022 11.1704 25.6522 19.1652C24.5056 27.116 26.6292 34.1619 31.8431 40.9739Z"
                fill="#3C3C3C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1213">
                <rect width="76" height="76" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Loan</span>
        </button>
      </div>
      <OurService />
    </>
  );
}
