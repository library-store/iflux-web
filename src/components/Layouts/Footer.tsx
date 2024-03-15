import * as React from 'react';

import WhiteLogo from '@/assets/svgs/white-logo';
import { AppConfig } from '@/utils/AppConfig';

import Divider from '../Elements/Divider';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#004BEF] to-[#16ABFF] text-white">
      <div className="content-container mx-auto">
        <div className="py-[44px]">
          <div className="mb-[62px]">
            <WhiteLogo />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex gap-[75px]">
              <ul className="">
                <li className="mb-[24px] text-[20px] font-extrabold">
                  About us
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    About us
                  </a>
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    Our team
                  </a>
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    News
                  </a>
                </li>
                <li>
                  <a href="#">Job Opportunities</a>
                </li>
              </ul>
              <ul>
                <li className="mb-[24px] text-[20px] font-extrabold">
                  Services
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    Saving
                  </a>
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    Loan
                  </a>
                </li>
                <li>
                  <a href="#">Spend Account</a>
                </li>
              </ul>
              <ul>
                <li className="mb-[24px] text-[20px] font-extrabold">
                  Support
                </li>
                <li className="mb-[20px]">
                  <a href="#" className="text-[17px]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <button className="flex items-center gap-[11px] rounded-[10px] bg-white text-blue">
                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1024 17.498C19.8796 17.5008 17.657 17.5001 15.434 17.4994C14.4459 17.4991 13.4577 17.4988 12.4693 17.4988H11.2688L11.2697 17.4997C10.752 17.4998 10.2343 17.5 9.71665 17.5001C7.42325 17.5008 5.13037 17.5014 2.83727 17.498C1.67079 17.496 0.834944 16.8518 0.581027 15.843L0.580999 15.8429C0.528368 15.634 0.503317 15.4046 0.502588 15.1746C0.499417 11.0738 0.497833 6.97291 0.509723 2.87306L0.509723 2.87297C0.511809 2.10424 0.756018 1.52254 1.14484 1.13403C1.53365 0.745521 2.11375 0.503499 2.87648 0.5028M22.1024 17.498L22.103 17.9895L22.1023 17.498C22.1023 17.498 22.1023 17.498 22.1024 17.498ZM22.1024 17.498C22.8763 17.4969 23.4639 17.2488 23.8576 16.8504C24.2519 16.4515 24.4983 15.8547 24.4986 15.069V15.069C24.501 11.0209 24.501 6.97275 24.4986 2.92465V2.92458C24.4983 2.13607 24.2521 1.54057 23.8588 1.14378C23.4661 0.747472 22.8789 0.501202 22.1038 0.501202H22.0929H22.0821H22.0712H22.0604H22.0496H22.0387H22.0279H22.0171H22.0062H21.9954H21.9845H21.9737H21.9629H21.952H21.9412H21.9303H21.9195H21.9087H21.8978H21.887H21.8761H21.8653H21.8545H21.8436H21.8328H21.822H21.8111H21.8003H21.7894H21.7786H21.7678H21.7569H21.7461H21.7352H21.7244H21.7136H21.7027H21.6919H21.681H21.6702H21.6594H21.6485H21.6377H21.6268H21.616H21.6052H21.5943H21.5835H21.5726H21.5618H21.551H21.5401H21.5293H21.5184H21.5076H21.4968H21.4859H21.4751H21.4642H21.4534H21.4426H21.4317H21.4209H21.41H21.3992H21.3884H21.3775H21.3667H21.3558H21.345H21.3342H21.3233H21.3125H21.3016H21.2908H21.28H21.2691H21.2583H21.2474H21.2366H21.2258H21.2149H21.2041H21.1932H21.1824H21.1716H21.1607H21.1499H21.139H21.1282H21.1174H21.1065H21.0957H21.0848H21.074H21.0632H21.0523H21.0415H21.0306H21.0198H21.009H20.9981H20.9873H20.9764H20.9656H20.9548H20.9439H20.9331H20.9222H20.9114H20.9006H20.8897H20.8789H20.868H20.8572H20.8464H20.8355H20.8247H20.8138H20.803H20.7922H20.7813H20.7705H20.7596H20.7488H20.738H20.7271H20.7163H20.7054H20.6946H20.6838H20.6729H20.6621H20.6512H20.6404H20.6295H20.6187H20.6079H20.597H20.5862H20.5753H20.5645H20.5537H20.5428H20.532H20.5211H20.5103H20.4995H20.4886H20.4778H20.4669H20.4561H20.4453H20.4344H20.4236H20.4127H20.4019H20.3911H20.3802H20.3694H20.3585H20.3477H20.3368H20.326H20.3152H20.3043H20.2935H20.2826H20.2718H20.261H20.2501H20.2393H20.2284H20.2176H20.2068H20.1959H20.1851H20.1742H20.1634H20.1526H20.1417H20.1309H20.12H20.1092H20.0983H20.0875H20.0767H20.0658H20.055H20.0441H20.0333H20.0225H20.0116H20.0008H19.9899H19.9791H19.9683H19.9574H19.9466H19.9357H19.9249H19.9141H19.9032H19.8924H19.8815H19.8707H19.8598H19.849H19.8382H19.8273H19.8165H19.8056H19.7948H19.784H19.7731H19.7623H19.7514H19.7406H19.7298H19.7189H19.7081H19.6972H19.6864H19.6755H19.6647H19.6539H19.643H19.6322H19.6213H19.6105H19.5997H19.5888H19.578H19.5671H19.5563H19.5455H19.5346H19.5238H19.5129H19.5021H19.4912H19.4804H19.4696H19.4587H19.4479H19.437H19.4262H19.4154H19.4045H19.3937H19.3828H19.372H19.3612H19.3503H19.3395H19.3286H19.3178H19.3069H19.2961H19.2853H19.2744H19.2636H19.2527H19.2419H19.2311H19.2202H19.2094H19.1985H19.1877H19.1769H19.166H19.1552H19.1443H19.1335H19.1226H19.1118H19.101H19.0901H19.0793H19.0684H19.0576H19.0468H19.0359H19.0251H19.0142H19.0034H18.9926H18.9817H18.9709H18.96H18.9492H18.9383H18.9275H18.9167H18.9058H18.895H18.8841H18.8733H18.8625H18.8516H18.8408H18.8299H18.8191H18.8083H18.7974H18.7866H18.7757H18.7649H18.7541H18.7432H18.7324H18.7215H18.7107H18.6998H18.689H18.6782H18.6673H18.6565H18.6456H18.6348H18.624H18.6131H18.6023H18.5914H18.5806H18.5698H18.5589H18.5481H18.5372H18.5264H18.5155H18.5047H18.4939H18.483H18.4722H18.4613H18.4505H18.4397H18.4288H18.418H18.4071H18.3963H18.3855H18.3746H18.3638H18.3529H18.3421H18.3313H18.3204H18.3096H18.2987H18.2879H18.2771H18.2662H18.2554H18.2445H18.2337H18.2228H18.212H18.2012H18.1903H18.1795H18.1686H18.1578H18.147H18.1361H18.1253H18.1144H18.1036H18.0928H18.0819H18.0711H18.0602H18.0494H18.0386H18.0277H18.0169H18.006H17.9952H17.9844H17.9735H17.9627H17.9518H17.941H17.9301H17.9193H17.9085H17.8976H17.8868H17.8759H17.8651H17.8543H17.8434H17.8326H17.8217H17.8109H17.8001H17.7892H17.7784H17.7675H17.7567H17.7459H17.735H17.7242H17.7133H17.7025H17.6917H17.6808H17.67H17.6591H17.6483H17.6375H17.6266H17.6158H17.6049H17.5941H17.5833H17.5724H17.5616H17.5507H17.5399H17.5291H17.5182H17.5074H17.4965H17.4857H17.4749H17.464H17.4532H17.4423H17.4315H17.4207H17.4098H17.399H17.3881H17.3773H17.3665H17.3556H17.3448H17.3339H17.3231H17.3123H17.3014H17.2906H17.2797H17.2689H17.2581H17.2472H17.2364H17.2255H17.2147H17.2039H17.193H17.1822H17.1713H17.1605H17.1497H17.1388H17.128H17.1171H17.1063H17.0955H17.0846H17.0738H17.0629H17.0521H17.0413H17.0304H17.0196H17.0087H16.9979H16.9871H16.9762H16.9654H16.9545H16.9437H16.9329H16.922H16.9112H16.9003H16.8895H16.8787H16.8678H16.857H16.8461H16.8353H16.8245H16.8136H16.8028H16.792H16.7811H16.7703H16.7594H16.7486H16.7378H16.7269H16.7161H16.7052H16.6944H16.6836H16.6727H16.6619H16.651H16.6402H16.6294H16.6185H16.6077H16.5969H16.586H16.5752H16.5643H16.5535C15.3099 0.501202 14.0664 0.501023 12.823 0.500845C9.50733 0.500369 6.19196 0.499894 2.87648 0.5028M2.87648 0.5028L2.87604 0.00279976L2.87648 0.5028ZM1.29136 2.58251L1.43646 2.4363L1.43726 2.4355L1.72012 2.15048L2.05947 2.36516C2.11332 2.39923 2.16535 2.43149 2.21539 2.46252C2.317 2.52552 2.41038 2.58342 2.49398 2.64093C5.69325 4.83605 8.89173 7.03117 12.0902 9.22709L12.0904 9.22721C12.2991 9.37064 12.4006 9.39121 12.4576 9.39121C12.5159 9.39121 12.6209 9.36966 12.8365 9.22409L12.8365 9.22408L17.6598 5.96848L22.4829 2.71291L22.4832 2.71273L22.4839 2.71225C22.6033 2.63173 22.7227 2.55129 22.8956 2.4343L23.6002 1.95765L23.6739 2.80513C23.6764 2.83403 23.68 2.86779 23.6838 2.90434C23.6942 3.00264 23.7067 3.12116 23.7067 3.21982L1.29136 2.58251ZM1.29136 2.58251V2.7885V2.78975V2.79099V2.79223V2.79347V2.79471V2.79595V2.79718V2.79842V2.79965V2.80088V2.80211V2.80333V2.80456V2.80578V2.807V2.80822V2.80944V2.81066V2.81188V2.81309V2.8143V2.81551V2.81672V2.81793V2.81914V2.82034V2.82154V2.82274V2.82394V2.82514V2.82634V2.82754V2.82873V2.82992V2.83111V2.8323V2.83349V2.83467V2.83586V2.83704V2.83822V2.8394V2.84058V2.84176V2.84293V2.84411V2.84528V2.84645V2.84762V2.84879V2.84996V2.85112V2.85228V2.85345V2.85461V2.85577V2.85692V2.85808V2.85923V2.86039V2.86154V2.86269V2.86384V2.86499V2.86613V2.86728V2.86842V2.86956V2.8707V2.87184V2.87298V2.87411V2.87525V2.87638V2.87751V2.87864V2.87977V2.8809V2.88203V2.88315V2.88427V2.8854V2.88652V2.88764V2.88875V2.88987V2.89099V2.8921V2.89321V2.89432V2.89543V2.89654V2.89765V2.89875V2.89986V2.90096V2.90206V2.90316V2.90426V2.90536V2.90646V2.90755V2.90864V2.90974V2.91083V2.91192V2.91301V2.91409V2.91518V2.91626V2.91735V2.91843V2.91951V2.92059V2.92167V2.92274V2.92382V2.92489V2.92597V2.92704V2.92811V2.92918V2.93025V2.93131V2.93238V2.93344V2.9345V2.93557V2.93663V2.93769V2.93874V2.9398V2.94086V2.94191V2.94296V2.94402V2.94507V2.94612V2.94716V2.94821V2.94926V2.9503V2.95135V2.95239V2.95343V2.95447V2.95551V2.95655V2.95758V2.95862V2.95965V2.96069V2.96172V2.96275V2.96378V2.96481V2.96583V2.96686V2.96788V2.96891V2.96993V2.97095V2.97197V2.97299V2.97401V2.97503V2.97604V2.97706V2.97807V2.97908V2.9801V2.98111V2.98212V2.98312V2.98413V2.98514V2.98614V2.98715V2.98815V2.98915V2.99015V2.99115V2.99215V2.99315V2.99414V2.99514V2.99613V2.99713V2.99812V2.99911V3.0001V3.00109V3.00208V3.00307V3.00405V3.00504V3.00602V3.007V3.00799V3.00897V3.00995V3.01093V3.0119V3.01288V3.01386V3.01483V3.01581V3.01678V3.01775V3.01872V3.01969V3.02066V3.02163V3.0226V3.02356V3.02453V3.02549V3.02646V3.02742V3.02838V3.02934V3.0303V3.03126V3.03222V3.03318V3.03413V3.03509V3.03604V3.03699V3.03795V3.0389V3.03985V3.0408V3.04175V3.0427V3.04364V3.04459V3.04553V3.04648V3.04742V3.04836V3.04931V3.05025V3.05119V3.05213V3.05306V3.054V3.05494V3.05587V3.05681V3.05774V3.05868V3.05961V3.06054V3.06147V3.0624V3.06333V3.06426V3.06519V3.06611V3.06704V3.06796V3.06889V3.06981V3.07073V3.07165V3.07258V3.0735V3.07441V3.07533V3.07625V3.07717V3.07808V3.079V3.07991V3.08083V3.08174V3.08265V3.08357V3.08448V3.08539V3.0863V3.08721V3.08811V3.08902V3.08993V3.09083V3.09174V3.09264V3.09355V3.09445V3.09535V3.09625V3.09715V3.09805V3.09895V3.09985V3.10075V3.10165V3.10254V3.10344V3.10434V3.10523V3.10612V3.10702V3.10791V3.1088V3.10969V3.11058V3.11147V3.11236V3.11325V3.11414V3.11503V3.11591V3.1168V3.11769V3.11857V3.11946V3.12034V3.12122V3.1221V3.12299V3.12387V3.12475V3.12563V3.12651V3.12739V3.12826V3.12914V3.13002V3.1309V3.13177V3.13265V3.13352V3.1344V3.13527V3.13614V3.13701V3.13789V3.13876V3.13963V3.1405V3.14137V3.14224V3.14311V3.14398V3.14484V3.14571V3.14658V3.14744V3.14831V3.14917V3.15004V3.1509V3.15176V3.15263V3.15349V3.15435V3.15521V3.15607V3.15693V3.15779V3.15865V3.15951V3.16037V3.16123V3.16209V3.16295V3.1638V3.16466V3.16551V3.16637V3.16722V3.16808V3.16893V3.16979V3.17064V3.17149V3.17234V3.1732V3.17405V3.1749V3.17575V3.1766V3.17745V3.1783V3.17915V3.18V3.18084V3.18169V3.18254V3.18339V3.18423V3.18508V3.18593V3.18677V3.18762V3.18846V3.18931V3.19015V3.19099V3.19184V3.19268V3.19352V3.19436V3.19521V3.19605V3.19689V3.19773V3.19857V3.19941V3.20025V3.20109V3.20193V3.20277V3.20361V3.20445V3.20529V3.20612V3.20696V3.2078V3.20863V3.20947V3.21031V3.21114V3.21198V3.21282V3.21365V3.21449V3.21532V3.21615V3.21699V3.21782V3.21866V3.21949V3.22032V3.22116V3.22199V3.22282V3.22365V3.22449V3.22532V3.22615V3.22698V3.22781V3.22864V3.22947V3.2303V3.23114V3.23197V3.2328V3.23362V3.23445V3.23528V3.23611V3.23694V3.23777V3.2386V3.23943V3.24026V3.24108V3.24191V3.24274V3.24357V3.2444V3.24522V3.24605V3.24688V3.2477V3.24853V3.24936V3.25019V3.25101V3.25184V3.25266V3.25349V3.25432V3.25514V3.25597V3.25679V3.25762V3.25844V3.25927V3.2601V3.26092V3.26175V3.26257V3.2634V3.26422V3.26505V3.26587V3.26669V3.26752V3.26834V3.26917V3.26999V3.27082V3.27164V3.27247V3.27329V3.27411V3.27494V3.27576V3.27659V3.27741V3.27824V3.27906V3.27988V3.28071V3.28153V3.28236V3.30538V3.3284V3.35142V3.37445V3.39747V3.42049V3.44352V3.46654V3.48956V3.51258V3.53561V3.55863V3.58165V3.60468V3.6277V3.65072V3.67374V3.69677V3.71979V3.74281V3.76584V3.78886V3.81188V3.8349V3.85793V3.88095V3.90397V3.927V3.95002V3.97304V3.99606V4.01909V4.04211V4.06513V4.08816V4.11118V4.1342V4.15722V4.18025V4.20327V4.22629V4.24932V4.27234V4.29536V4.31838V4.34141V4.36443V4.38745V4.41048V4.4335V4.45652V4.47954V4.50257V4.52559V4.54861V4.57164V4.59466V4.61768V4.6407V4.66373V4.68675V4.70977V4.73279V4.75582V4.77884V4.80186V4.82489V4.84791V4.87093V4.89395V4.91698V4.94V4.96302V4.98605V5.00907V5.03209V5.05511V5.07814V5.10116V5.12418V5.1472V5.17023V5.19325V5.21627V5.2393V5.26232V5.28534V5.30836V5.33139V5.35441V5.37743V5.40045V5.42348V5.4465V5.46952V5.49255V5.51557V5.53859V5.56161V5.58464V5.60766V5.63068V5.6537V5.67673V5.69975V5.72277V5.74579V5.76882V5.79184V5.81486V5.83789V5.86091V5.88393V5.90695V5.92998V5.953V5.97602V5.99904V6.02207V6.04509V6.06811V6.09113V6.11416V6.13718V6.1602V6.18322V6.20625V6.22927V6.25229V6.27531V6.29834V6.32136V6.34438V6.3674V6.39043V6.41345V6.43647V6.4595V6.48252V6.50554V6.52856V6.55159V6.57461V6.59763V6.62065V6.64367V6.6667V6.68972V6.71274V6.73576V6.75879V6.78181V6.80483V6.82785V6.85088V6.8739V6.89692V6.91994V6.94297V6.96599V6.98901V7.01203V7.03506V7.05808V7.0811V7.10412V7.12715V7.15017V7.17319V7.19621V7.21924V7.24226V7.26528V7.2883V7.31132V7.33435V7.35737V7.38039V7.40341V7.42644V7.44946V7.47248V7.4955V7.51853V7.54155V7.56457V7.58759V7.61061V7.63364V7.65666V7.67968V7.7027V7.72573V7.74875V7.77177V7.79479V7.81781V7.84084V7.86386V7.88688V7.9099V7.93292V7.95595V7.97897V8.00199V8.02501V8.04804V8.07106V8.09408V8.1171V8.14012V8.16315V8.18617V8.20919V8.23221V8.25523V8.27826V8.30128V8.3243V8.34732V8.37034V8.39337V8.41639V8.43941V8.46243V8.48545V8.50848V8.5315V8.55452V8.57754V8.60056V8.62359V8.64661V8.66963V8.69265V8.71567V8.7387V8.76172V8.78474V8.80776V8.83078V8.8538V8.87683V8.89985V8.92287V8.94589V8.96891V8.99193V9.01496V9.03798V9.061V9.08402V9.10704V9.13006V9.15309V9.17611V9.19913V9.22215V9.24517V9.2682V9.29122V9.31424V9.33726V9.36028V9.3833V9.40633V9.42935V9.45237V9.47539V9.49841V9.52143V9.54445V9.56748V9.5905V9.61352V9.63654V9.65956V9.68258V9.7056V9.72863V9.75165V9.77467V9.79769V9.82071V9.84373V9.86675V9.88978V9.9128V9.93582V9.95884V9.98186V10.0049V10.0279V10.0509V10.0739V10.097V10.12V10.143V10.166V10.1891V10.2121V10.2351V10.2581V10.2811V10.3042V10.3272V10.3502V10.3732V10.3962V10.4193V10.4423V10.4653V10.4883V10.5113V10.5344V10.5574V10.5804V10.6034V10.6265V10.6495V10.6725V10.6955V10.7185V10.7416V10.7646V10.7876V10.8106V10.8336V10.8567V10.8797V10.9027V10.9257V10.9487V10.9718V10.9948V11.0178V11.0408V11.0639V11.0869V11.1099V11.1329V11.1559V11.179V11.202V11.225V11.248V11.271V11.2941V11.3171V11.3401V11.3631V11.3861V11.4092V11.4322V11.4552V11.4782V11.5012V11.5243V11.5473V11.5703V11.5933V11.6163V11.6394V11.6624V11.6854V11.7084V11.7315V11.7545V11.7775V11.8005V11.8235V11.8466V11.8696V11.8926V11.9156V11.9386V11.9617V11.9847V12.0077V12.0307V12.0537V12.0768V12.0998V12.1228V12.1458V12.1688V12.1919V12.2149V12.2379V12.2609V12.2839V12.307V12.33V12.353V12.376V12.399V12.4221V12.4451V12.4681V12.4911V12.5141V12.5372V12.5602V12.5832V12.6062V12.6292V12.6523V12.6753V12.6983V12.7213V12.7443V12.7674V12.7904V12.8134V12.8364V12.8594V12.8825V12.9055V12.9285V12.9515V12.9745V12.9976V13.0206V13.0436V13.0666V13.0896V13.1127V13.1357V13.1587V13.1817V13.2047V13.2278V13.2508V13.2738V13.2968V13.3198V13.3428V13.3659V13.3889V13.4119V13.4349V13.4579V13.481V13.504V13.527V13.55V13.573V13.5961V13.6191V13.6421V13.6651V13.6881V13.7112V13.7342V13.7572V13.7802V13.8032V13.8263V13.8493V13.8723V13.8953V13.9183V13.9413V13.9644V13.9874V14.0104V14.0334V14.0564V14.0795V14.1025V14.1255V14.1485V14.1715V14.1946V14.2176V14.2406V14.2636V14.2866V14.3097V14.3327V14.3557V14.3787V14.4017V14.4247V14.4478V14.4708V14.4938V14.5168V14.5398V14.5629V14.5859V14.6089V14.6319V14.6549V14.6779V14.701V14.724V14.747V14.77V14.793V14.8161V14.8391V14.8621V14.8851V14.9081V14.9312V14.9542V14.9772V15.0002V15.0232V15.0462V15.0693C1.29136 15.5164 1.38126 15.9562 1.6931 16.2755C2.00761 16.5976 2.44505 16.6928 2.89178 16.6928C9.30242 16.6944 15.7129 16.6944 22.1228 16.6928C22.5631 16.6928 22.9909 16.5904 23.3008 16.2741C23.6085 15.96 23.7066 15.5298 23.7067 15.0871M1.29136 2.58251L23.7067 15.0871M23.7067 15.0871C23.7091 11.1314 23.7083 7.17562 23.7067 3.22003V15.0871ZM21.725 2.25494L23.0768 1.34076H21.4449H3.6729H2.34996L3.3422 2.21577C3.37064 2.24085 3.39049 2.25908 3.41056 2.27751C3.41923 2.28547 3.42794 2.29346 3.4374 2.30207C3.46496 2.32714 3.50536 2.3634 3.55609 2.39843L3.55717 2.39918C4.20056 2.84097 4.84401 3.28252 5.48742 3.72405C7.63891 5.20046 9.78986 6.6765 11.9358 8.15976C12.1031 8.27551 12.3079 8.36129 12.548 8.33464C12.7608 8.31101 12.9257 8.20365 13.0205 8.1391C14.1668 7.36092 15.3148 6.58639 16.4635 5.81143C16.994 5.45357 17.5245 5.09562 18.0552 4.73718C18.8011 4.23347 19.547 3.72865 20.3142 3.20943C20.7753 2.89743 21.244 2.58023 21.725 2.25494Z"
                    fill="white"
                    stroke="#0D82F9"
                  />
                </svg>
                Submit a request
              </button>
              <div className="mt-[22px] flex items-center justify-between">
                <svg
                  width="48"
                  height="36"
                  viewBox="0 0 48 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.9375 3.46875C45.0938 11.125 47.6719 19.7188 46.7344 29.6406C46.7344 29.6406 46.7344 29.7188 46.6562 29.7188C43.2188 32.2969 39.3125 34.25 35.1719 35.5C35.0938 35.5 35.0156 35.5 35.0156 35.5C34.1562 34.25 33.375 33 32.6719 31.6719V31.5938C32.6719 31.5156 32.6719 31.5156 32.75 31.4375C34 30.9688 35.1719 30.4219 36.3438 29.7188C36.4219 29.7188 36.4219 29.7188 36.4219 29.6406C36.4219 29.5625 36.4219 29.5625 36.3438 29.4844C36.1094 29.3281 35.875 29.1719 35.6406 28.9375H35.5625H35.4844C28.0625 32.375 19.9375 32.375 12.4375 28.9375C12.3594 28.9375 12.3594 28.9375 12.3594 28.9375C12.2812 28.9375 12.2812 28.9375 12.2812 28.9375C12.0469 29.1719 11.8125 29.3281 11.5781 29.4844C11.5 29.5625 11.5 29.5625 11.5 29.6406C11.5 29.7188 11.5 29.7188 11.5781 29.7188C12.6719 30.4219 13.9219 30.9688 15.1719 31.4375C15.1719 31.5156 15.25 31.5156 15.25 31.5938V31.6719C14.5469 33 13.7656 34.25 12.9062 35.5C12.8281 35.5 12.8281 35.5 12.75 35.5C8.53125 34.25 4.625 32.2969 1.26562 29.7188C1.1875 29.7188 1.1875 29.6406 1.1875 29.6406C0.40625 21.0469 2.04688 12.375 7.98438 3.46875C7.98438 3.46875 7.98438 3.46875 8.0625 3.46875C10.9531 2.14062 14.1562 1.125 17.3594 0.578125C17.3594 0.578125 17.3594 0.578125 17.4375 0.578125H17.5156C17.9844 1.35938 18.375 2.21875 18.6875 3C20.4062 2.76562 22.125 2.60938 23.9219 2.60938C25.7188 2.60938 27.5156 2.76562 29.2344 3C29.5469 2.21875 29.9375 1.35938 30.4062 0.578125L30.4844 0.5C30.4844 0.5 30.4844 0.578125 30.5625 0.578125C33.7656 1.125 36.9688 2.14062 39.8594 3.46875C39.9375 3.46875 39.9375 3.46875 39.9375 3.46875ZM16.3438 24.4062C18.6094 24.4062 20.4844 22.2969 20.4844 19.7969C20.4844 17.2188 18.6875 15.1875 16.3438 15.1875C14.0781 15.1875 12.2031 17.2188 12.2031 19.7969C12.2031 22.2969 14.0781 24.4062 16.3438 24.4062ZM31.5781 24.4062C33.9219 24.4062 35.7188 22.2969 35.7188 19.7969C35.7969 17.2188 33.9219 15.1875 31.5781 15.1875C29.3125 15.1875 27.5156 17.2188 27.5156 19.7969C27.5156 22.2969 29.3125 24.4062 31.5781 24.4062Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="41"
                  height="34"
                  viewBox="0 0 41 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.3594 8.875C36.3594 9.26562 36.3594 9.57812 36.3594 9.96875C36.3594 20.8281 28.1562 33.25 13.0781 33.25C8.39062 33.25 4.09375 31.9219 0.5 29.5781C1.125 29.6562 1.75 29.7344 2.45312 29.7344C6.28125 29.7344 9.79688 28.4062 12.6094 26.2188C9.01562 26.1406 5.96875 23.7969 4.95312 20.5156C5.5 20.5938 5.96875 20.6719 6.51562 20.6719C7.21875 20.6719 8 20.5156 8.625 20.3594C4.875 19.5781 2.0625 16.2969 2.0625 12.3125V12.2344C3.15625 12.8594 4.48438 13.1719 5.8125 13.25C3.54688 11.7656 2.14062 9.26562 2.14062 6.45312C2.14062 4.89062 2.53125 3.48438 3.23438 2.3125C7.29688 7.23438 13.3906 10.5156 20.1875 10.9062C20.0312 10.2812 19.9531 9.65625 19.9531 9.03125C19.9531 4.5 23.625 0.828125 28.1562 0.828125C30.5 0.828125 32.6094 1.76562 34.1719 3.40625C35.9688 3.01562 37.7656 2.3125 39.3281 1.375C38.7031 3.32812 37.4531 4.89062 35.7344 5.90625C37.375 5.75 39.0156 5.28125 40.4219 4.65625C39.3281 6.29688 37.9219 7.70312 36.3594 8.875Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 0.625C30.2031 0.625 38.875 9.29688 38.875 20C38.875 30.7031 30.2031 39.375 19.5 39.375C8.79688 39.375 0.125 30.7031 0.125 20C0.125 9.29688 8.79688 0.625 19.5 0.625ZM28.9531 13.9062C29.2656 12.6562 28.4844 12.1094 27.625 12.4219L8.95312 19.6094C7.70312 20.0781 7.70312 20.8594 8.71875 21.1719L13.4844 22.6562L24.5781 15.625C25.125 15.3125 25.5938 15.5469 25.2031 15.8594L16.2188 23.9844L15.9062 28.9062C16.375 28.9062 16.6094 28.6719 16.8438 28.4375L19.1875 26.1719L24.0312 29.7656C24.9688 30.2344 25.5938 30 25.8281 28.9062L28.9531 13.9062Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="border-white/[.4]" />
      <div className="copy-right pb-[26px] pt-[16px] text-[20px] text-white">
        <div className="content-container mx-auto ">
          Copyright {new Date().getFullYear()} © {AppConfig.name}.
        </div>
      </div>
    </footer>
  );
}
