export interface Apartment {
  id: number;
  description: string;
  address: string;
  price: number;
  pricePerSqm: number;
  photos: string[];
  link: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    description: "1-к. квартира, 30,7 м², 2/5 эт.",
    address: "ул. Горького",
    price: 149000,
    pricePerSqm: 4853,
    photos: [
      "https://b20.img.avito.st/image/1/1.EmRZCra-vo1PqhyMcT4hL2yqvIvrvbqN69rfh-cJvy_sqbw.-lmP__0lfZ9qQruVsBv94-9EqnuJq_0YxZiX3IheySo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.iYjJ3ra-JWHffodg15C4w_x-J2d7aSFhew5Ea3fdJMN8fSc.SgezzAw77iQWPZJOLPCX2mA8YWe_AvMwJrjX5pP6a-E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://90.img.avito.st/image/1/1.TcbhXra-4S_3_kMu9yMHmNT-4ylT6eUvU46AJV9d4I1U_eM.GuCTEKOqE57xYm6adQbljcVu21kqmWuhHN_6BH6uH1Y",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_307_m_25_et._7962050073",
  },
  {
    id: 2,
    description: "3-к. квартира, 60 м², 2/5 эт.",
    address: "ул. Куратова",
    price: 500000,
    pricePerSqm: 8333,
    photos: [
      "https://80.img.avito.st/image/1/1.GcAR67a-tSkHSxcoL-N8jRJLty-jXLEpozvUI6_otIukSLc.tT4Ba_SFcQpqnXHIiMrkWNKSEiZ3hGB-M2N3wwXC4o4",
      "https://00.img.avito.st/image/1/1.k_9_cba-PxZp0Z0XVT_xsnzRPRDNxjsWzaFeHMFyPrTK0j0.E6IAYaCRo0QEbSeT1x3KyG81kRT3lldldHrp_fDS6yI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b30.img.avito.st/image/1/1.KfGSDra-hRiEricZzAofwJGuhx4guYEYIN7kEiwNhLonrYc.Ko6qJpvFz0eMAxxdWrEcRfEdc3Zh2O5Sf5hN9Ieb1i0?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_60_m_25_et._8390480387",
  },
  {
    id: 3,
    description: "2-к. квартира, 48,6 м², 8/9 эт.",
    address: "ул. Мира",
    price: 250000,
    pricePerSqm: 5144,
    photos: [
      "https://c80.img.avito.st/image/1/1.DKa-w7a-oE-oYwJOqtsro7xjokkMdKRPDBPBRQDAoe0LYKI.bQP_4n5hCPUXtaqoLSJsa7brfeyH55XSirleCISXY3c",
      "https://c90.img.avito.st/image/1/1.Oso4x7a-liMuZzQiQIsazzpnlCWKcJIjihf3KYbEl4GNZJQ.GLnEwq0bD0V4QiIsJX73jWcFUfgIVABvcL_qEWoImJs",
      "https://20.img.avito.st/image/1/1.l17ddra-O7fL1pm_3SlV8rWObFvwT-3b6ZavWN1OhVo1Tk.Uo6kDLo5X-wz_Chxlf-o_z69G0mu0eZ2mTH4lM_7r4Y?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_486_m_89_et._8543398225",
  },
  {
    id: 4,
    description: "3-к. квартира, 55 м², 2/5 эт.",
    address: "Полярная ул.",
    price: 169000,
    pricePerSqm: 3073,
    photos: [
      "https://30.img.avito.st/image/1/1.h5Kkjra-K3uyLol6pqjVp98sKX0WOS97Fl5KcRqNKtkRLSk.ZdFmR3csUZ2ZpwU1SadP2CZf3YyMMuC-9Lg2-htkQ7A?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://60.img.avito.st/image/1/1._a-a-ba-UUaMWfNH7Lrev-FbU0AoTlVGKCkwTCT6UOQvWlM.bVB1LPg0fMT_GILfGnKiDdGw9WJqoO7MJ94enSN4lRc",
      "https://60.img.avito.st/image/1/1.Bfwzmba-qRUlOQsUNdFn9zE5qxOBLq0VgUnIH42aqLeGOqs.YrehsAGtMz3pNsXkknLv9olWdnDHqkIhaHOOT26DhHI",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_55_m_25_et._3881557961",
  },
  {
    id: 5,
    description: "2-к. квартира, 45,7 м², 2/3 эт.",
    address: "ул. Мира",
    price: 1000000,
    pricePerSqm: 21882,
    photos: [
      "https://10.img.avito.st/image/1/1.y9JnqLa-ZztxCMU6fd_Y6kYIZT3VH2M71XgGMdmrZpnSC2U.kzEfWKX4iqBDgBAo5BL2_RdMkRPbRD4OGRM6ueP-Y_U?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://30.img.avito.st/image/1/1.Ir4rpLa-jlc9BCxWY6RGhwoEjFGZE4pXmXTvXZWnj_WeB4w.crXXl-5deK1taSLD4xqg4E7WrLLj_ayXaQEiGleOn4Y?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://90.img.avito.st/image/1/1.Q6CIM7a-70mek01Igm4Am6mT7U86hOtJOuOOQzYw7us9kO0.DK-LCDuSV0-Hvqoy1KFMvEmhegcGW6SkXh70B-fTD78",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_457_m_23_et._8116356619",
  },
  {
    id: 6,
    description: "2-к. квартира, 50,4 м², 5/5 эт.",
    address: "ул. Мира",
    price: 150000,
    pricePerSqm: 2976,
    photos: [
      "https://b20.img.avito.st/image/1/1.TZKHm7a_4XuRO0N6kdZTxmk4530lPuF9QlvrcZE7Q3oxOA.98Ap3tlFjAwmP2l8bZkeFVvbChk-c5YWE-Ms96cUGqc?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c80.img.avito.st/image/1/1.Ey9XR7a_v8ZB5x3HfQsNe7nkucD14r_Akoe1zEHnHcfh5A.kge0SyEFidhZB2BQi1Ms1rxXyZWkS9VHfTKkwR3gSh0",
      "https://b10.img.avito.st/image/1/1.OptEwba_lnJSYTRzPI0kz6pikHTmZJZ0gQGceFJhNHPyYg.qs-5IZ7PHn88Kw2uQm4qcLJP65fMwdK75oZUDO0IRsM?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_504_m_55_et._2222347211",
  },
  {
    id: 7,
    description: "1-к. квартира, 24,6 м², 5/5 эт.",
    address: "ул. Мира",
    price: 250000,
    pricePerSqm: 10163,
    photos: [
      "https://b40.img.avito.st/image/1/1.ldkt_ba-OTA7XZsxC-fAwQpdOzafSj0wny1YOpP-OJKYXjs.XqrBKnnMhFcEzN3zEgi_caOfyNyVtg9VEkBsjnuGGCo",
      "https://50.img.avito.st/image/1/1.f0rGfLa-06PQ3HGitGlmaPvc0aV0y9ejdKyyqXh_0gFz39E.EIEYaqaNBoME5IVUhfPjeCM36gMJA0GEUV-I7CrbaS8",
      "https://b40.img.avito.st/image/1/1.7d51O7a-QTdjm-M2I3SS_UibQzHHjEU3x-sgPcs4QJXAmEM.YClk7yWR9RGL_cPO_lryWRSMtZMhyy_be3uDDGTtM",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_246_m_55_et._8021768565",
  },
  {
    id: 8,
    description: "4-к. квартира, 84 м², 1/5 эт.",
    address: "ул. Мира",
    price: 1000000,
    pricePerSqm: 11905,
    photos: [
      "https://b40.img.avito.st/image/1/1.uzz4OLa-F9XumLXUghb6P8WYFdNKjxPVSuh230Y7FndNmxU.G1RiyQyF2VS_YIgauNeTEvM7MBFmCO9VoRUcBg-7u04",
      "https://b10.img.avito.st/image/1/1.AdzVfra-rTXD3g802zYQ3ujerzNnyak1Z67MP2t9rJdg3a8.nFZy1XvBmuYBvaQO4gxQWLko22vrufnP-5rrHPE6j_E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://50.img.avito.st/image/1/1.o14B6La-D7cXSK22S4qpXzxIDbGzXwu3szhuvb_rDhW0Sw0.xUiKFoAVpShf3z8WrDoqcVbZqA6wkvWrVyWEPYTR3m4",
    ],
    link: "https://www.avito.ru/inta/kvartiry/4-k._kvartira_84_m_15_et._8173714722",
  },
  {
    id: 9,
    description: "1-к. квартира, 30,6 м², 4/5 эт.",
    address: "ул. Горького",
    price: 270000,
    pricePerSqm: 8824,
    photos: [
      "https://b30.img.avito.st/image/1/1.Y-P3Ora-zwrhmm0LvWdGi9yazQxFjcsKRequAEk5zqhCmc0.QXnl_MFFN94eJzAh9NKHHyffIiJW-4HjSl8fsMqiyFU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://30.img.avito.st/image/1/1.wqZmk7a-bk9wM8xObrCDskwzbEnUJGpP1EMPRdiQb-3TMGw.vnV-RHshIKrSA4xr7cHfkaHQmhW5ue5wU60-_uQW3Wk?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://10.img.avito.st/image/1/1.D8WvFLa-oyy5tAEtvRw0rIS0oSodo6csHcTCJhEXoo4at6E.FbU15M2PJuYSyzXOyJVsOiEWLeO_47MVS_yFewXCgX4?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_306_m_45_et._8256130517",
  },
  {
    id: 10,
    description: "2-к. квартира, 51 м², 5/5 эт.",
    address: "ул. Куратова",
    price: 450000,
    pricePerSqm: 8824,
    photos: [
      "https://b50.img.avito.st/image/1/1.XiluHLa-8sB4vFDBXjV8IFy88Mbcq_bA3MyTytAf82Lbv_A.KWbyy6wMGSp3xRSWLm2f0xkHZjeM93RcUqqsbs0saCk",
      "https://40.img.avito.st/image/1/1.p8UBIba-CywXgaktQxv68DOBCSqzlg8ss_FqJr8iCo60ggk.xUdR_3z_3gkMoHub9U7Yeu46HkUXAVNcr88mOzrBT6U",
      "https://b50.img.avito.st/image/1/1.uYrDgra-FWPVIrdivdyMgPEiF2VxNRFjcVJ0aX2BFMF2IRc.xyjU0PrfrBC_VmCCgwKsmoKN45DpUnYcwIalFAEFPDU",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_51_m_55_et._7982195700",
  },
  {
    id: 11,
    description: "3-к. квартира, 68 м², 4/5 эт.",
    address: "Интинская ул.",
    price: 100000,
    pricePerSqm: 1471,
    photos: [
      "https://b50.img.avito.st/image/1/1.iylDrba-J8BVDYXBWafcClwNJcbxGiPA8X1Gyv2uJmL2DiU.DLlzoI1LCIudJuE0B2SxUbwPg08u_fIDQ9r2TzXUxCY",
      "https://b30.img.avito.st/image/1/1.mM9CCba-NCZUqZYnfhfh4l2pNiDwvjAm8NlVLPwKNYT3qjY.qZXTZ5oU9rxi0B_97kP_ITAzF0wEP5tllGvhtYFQudo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://70.img.avito.st/image/1/1.L84n8ra-gycxUiEmdYZe4zhSgSGVRYcnlSLiLZnxgoWSUYE.BTmKHQc5IMevH-Z8ZpdSYm-nnihNYqNc4Wip7OCh6vA",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_68_m_45_et._8168490049",
  },
  {
    id: 12,
    description: "1-к. квартира, 35,9 м², 2/5 эт.",
    address: "ул. Куратова",
    price: 250000,
    pricePerSqm: 6964,
    photos: [
      "https://00.img.avito.st/image/1/1.C-J1d7a-pwtj1wUKbyMZpxbWpQ3HwKMLx6fGAct0pqnA1KU.AEra3w-NjOyRsohr5u8jFqlb04FJI2r2szXxNXgYA5c?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://40.img.avito.st/image/1/1.CcxBOra-pSVXmgckXyYXliKbpyPzjaEl8-rEL_85pIf0mac.lyR1_B9O8Ubca9Nbrh9Zyp8z_jZN7J_ZBJwfB9WBw9s",
      "https://60.img.avito.st/image/1/1.MzXWWLa-n9zA-D3dvEAjbJz5ndpk75vcZIj-1mhbnn5j-50.jOuccd_HEn6pe-8uVM9MAmK05qZv_Vr7nIMGj2c0l2k",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_359_m_25_et._7535400969",
  },
  {
    id: 13,
    description: "2-к. квартира, 48 м², 3/5 эт.",
    address: "ул. Бабушкина",
    price: 270000,
    pricePerSqm: 5625,
    photos: [
      "https://00.img.avito.st/image/1/1.vKcBq7a_EE4XC7JPdbHL3-4IFkijDhBIxGsaRBcLsk-3CA.wG9Xc3MPSIPFghjn6GmtPdWAT-BbAM6cfz18G79hFy0?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://70.img.avito.st/image/1/1.PsZ0s7a_ki9iEzAuBKdJvpsQlCnWFpIpsXOYJWITMC7CEA.KgUIVIFBfjOXziafHYGv9TWirjciwbsTk2cS1EQVWzQ",
      "https://c90.img.avito.st/image/1/1.Limmjra_gsCwLiDB9ppZUUkthMYEK4LGY06IyrAuIMEQLQ.qb_5U7qRKHJmEVao3S6RCFtLwdOVpU9xbcFCeMFYRoE",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_48_m_35_et._2122841826",
  },
  {
    id: 14,
    description: "3-к. квартира, 51,1 м², 5/9 эт.",
    address: "ул. Горького",
    price: 290000,
    pricePerSqm: 5675,
    photos: [
      "https://c60.img.avito.st/image/1/1.jmxMbra-IoVazoCEXFDWEF_OIIP-2SaF_r5Dj_JtIyf5zSA.ILPjPP2_p5v9lZ8UYyvBoXqLHcXQvTYl00Lcd4JIRBc",
      "https://b20.img.avito.st/image/1/1.BpHPe7a-qnjZ2wh5z08vksrbqH59zK54favLcnF4q9p62Kg.BE4vLOvRhY-_n40BuVlKc9Ei7Y3WpD3loyP545rgcOw?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_511_m_59_et._8212211157",
  },
  {
    id: 15,
    description: "2-к. квартира, 39,9 м², 5/5 эт.",
    address: "ул. Мира",
    price: 350000,
    pricePerSqm: 8772,
    photos: [
      "https://60.img.avito.st/image/1/1.5cNTGba-SSpFuesrFRLntlG4Syzhrk0q4ckoIO0aSIjmuks.Bxkd0g57o0oGajtycdMAHwYRPMW6jXlSkSCUztsV_jY",
      "https://10.img.avito.st/image/1/1.LfJsi7a-gRt6KyMaOrNThm4qgx3ePIUb3lvgEdKIgLnZKIM.Tf3DupqJxMWxOVroxA9uQcwz52gju37pfbOzzj9CxGI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c60.img.avito.st/image/1/1.c0kZa7a-36APy32hc0Y_PBvK3aar3Nugq7u-qqdo3gKsyN0.LibwSMvl0B1p0U0jFKhvafQ5kJ28cckbL6aWPb7YwVQ",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_399_m_55_et._4600857510",
  },
  {
    id: 16,
    description: "1-к. квартира, 33 м², 2/5 эт.",
    address: "ул. Куратова",
    price: 850000,
    pricePerSqm: 25758,
    photos: [
      "https://b30.img.avito.st/image/1/1.s4EIf7a-H2ge371pYnH7kD7fHW66yBtouq9-YrZ8Hsq93B0.-QNeYhawIvxX3n0FTNf6tGuNYgVnObWjuTBUwe_fGVU?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://40.img.avito.st/image/1/1.7hYhY7a-Qv83w-D-cUCOThnDQPmT1Eb_k7Mj9Z9gQ12UwEA.hZlxt6KvczTjime-ChIX0BIA2SQ1vbEaYnWeHvcgyfU",
      "https://c80.img.avito.st/image/1/1.YyGqz7a-z8i8b23J4No2M5xvzc4YeMvIGB-uwhTMzmofbM0.X5eVvtS6Vd5uE-DQi7DsbWkqOk6d_O129pHLcygMWBc",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_33_m_25_et._4286648141",
  },
  {
    id: 17,
    description: "2-к. квартира, 45 м², 4/5 эт.",
    address: "ул. Мира",
    price: 200000,
    pricePerSqm: 4444,
    photos: [
      "https://b50.img.avito.st/image/1/1.AZB7v7a-rXltHw94dYNauzYer3_JCKl5yW_Mc8W8rNvOHK8.t23KlDHU2gC9n1s1vxJiRyIFForHyUEMcUBA3FIzcvs",
      "https://b50.img.avito.st/image/1/1.sZdsv7a-HX56H79_ArmbvCEeH3jeCBl-3m98dNK8HNzZHB8.OfwjDyPUAB27biWPDtJWhiUa-KieloVbTsMGtPUGowM",
      "https://c90.img.avito.st/image/1/1.gGWLiba-LIydKY6Nh_fCTsYoLoo5PiiMOVlNhjWKLS4-Ki4.cK8d9-6LTnEq0msUAs9slbZ8Ag_YiDReWTkYAaeIXpQ",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_45_m_45_et._7901809701",
  },
  {
    id: 18,
    description: "2-к. квартира, 51 м², 3/5 эт.",
    address: "ул. Мира",
    price: 880388,
    pricePerSqm: 17263,
    photos: [
      "https://c80.img.avito.st/image/1/1.qJZgRra-BH925qZ-PHz17XjmBnnS8QB_0pZldd5FBd3V5QY.SXLB047sehhqV88hkSGS7KPIqhSIQttzbQzaY_ek8R0",
      "https://60.img.avito.st/image/1/1.h1qemLa-K7OIOImynK6OP4Y4KbUsLy-zLEhKuSCbKhErOyk.rUHeoIr2ACwc3E_0gNaBgCPI58ArrYjw2LjcO9JhKIs",
      "https://b20.img.avito.st/image/1/1.iJET3La-JHgFfIZ5D6KA6gt8Jn6hayB4oQxFcq3fJdqmfyY.9vU0RIWsR3HRxwp8_chlxOgWG1AD7Csm5jw05HDbNwc?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_51_m_35_et._8418415451",
  },
  {
    id: 19,
    description: "3-к. квартира, 58 м², 4/5 эт.",
    address: "ул. Куратова",
    price: 340000,
    pricePerSqm: 5862,
    photos: [
      "https://c70.img.avito.st/image/1/1.YvR65ba_zh1sRWwcMsAKluhGyBvYQM4bvyXEF2xFbBzMRg.exHUrQ6_Xgzhyl9MSgi6-yjuDMSdDj_emygqdV95tzY",
      "https://90.img.avito.st/image/1/1.LoowZ7a_gmMmxyBiYCtF6KLEhGWSwoJl9aeIaSbHIGKGxA.kzyJ6pcjah0nD0pvM4oRlIkXKrWwG1_gamsS2MWpvas",
      "https://b10.img.avito.st/image/1/1.1iiA1ra_esGWdtjAoNWCPxJ1fMcic3rHRRZwy5Z22MA2dQ.8BYeqQ75CEyh4vhsrGiPSeJR676RnXsugXUf9_y5QF8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_58_m_45_et._1365552815",
  },
  {
    id: 20,
    description: "2-к. квартира, 48 м², 8/9 эт.",
    address: "ул. Горького",
    price: 550000,
    pricePerSqm: 11458,
    photos: [
      "https://b50.img.avito.st/image/1/1.NtRr07a-mj19czg8C_Mv809xmDvZZJ492QP7N9XQm5_ecJg.5npA-XzeyMWR8nzyj2e8A5BJgsEqRJC0L6ResrRstbI",
      "https://50.img.avito.st/image/1/1.qfPEm7a-BRrSO6cbmt3J1OA5Bxx2LAEadktkEHqYBLhxOAc.O6eFOhroPOcQUMWv9UTlUXAijMqyIUipTA5f1ul9fF4",
      "https://30.img.avito.st/image/1/1.BWoyKLa-qYMkiAuCNDhmTRaKq4WAn62DgPjIiYwrqCGHi6s.4Dd0a2ReX23x9bcQ0Es9iPadscOss9WAiC98UJ_5wuk?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_48_m_89_et._1614769304",
  },
  {
    id: 21,
    description: "2-к. квартира, 42,5 м², 3/5 эт.",
    address: "ул. Чайковского",
    price: 400000,
    pricePerSqm: 9412,
    photos: [
      "https://c80.img.avito.st/image/1/1.OvEOK7a-lhgYizQZdl8BzxSLlB68nJIYvPv3ErAol7q7iJQ.BbXBruVrqf807a_yPGULw6mn5CJcaHwXY_0lsd77alA",
      "https://b50.img.avito.st/image/1/1.ondeura-Dp5IGqyfFtSLSkQaDJjsDQqe7GpvlOC5DzzrGQw.uD1ITY_qu6kj2qxzOm6T_M2SsB6RoNrUBnB4k-0HEmM",
      "https://30.img.avito.st/image/1/1.ISt_s7a-jcJpEy_DMeNXFmUTj8TNBInCzWPsyMGwjGDKEI8.grsn6aT8polfUFShab2pEFD8fs4-d1sk1MLTjHyaic8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_425_m_35_et._8344258851",
  },
  {
    id: 22,
    description: "2-к. квартира, 49,7 м², 4/5 эт.",
    address: "ул. Мира",
    price: 349000,
    pricePerSqm: 7022,
    photos: [
      "https://00.img.avito.st/image/1/1.E32tTLa-v5S77B2Vh2gPVLHsvZIf-7uUH5zenhNPvjYY770.Uh-v4NIxtdcTGAhUSJnSf66U68BIClT314tbnTx2tD8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://00.img.avito.st/image/1/1.8H8ng7a-XJYxI_6XS9yzfwcjXpCVNFiWlVM9nJmAXTSSIF4.B9IJ3os96KPLHLkgdE30jNebe1iqQ4j5QvSRPX2a980?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://90.img.avito.st/image/1/1.ubAzOba-FVklmbdYTT-H5C-ZF1-BjhFZgel0U406FPuGmhc.dK73A5UZIYe4U8GGGuPxnHs4psTUStJTnJsv0c7_KeA",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_497_m_45_et._8149045386",
  },
  {
    id: 23,
    description: "3-к. квартира, 63,7 м², 3/9 эт.",
    address: "ул. Мира",
    price: 1250000,
    pricePerSqm: 19623,
    photos: [
      "https://50.img.avito.st/image/1/1.BXqcYba-qZOKwQuSmlVIfLzBq5Uu1q2TLrHImSJiqDEpwqs.vcRLgr-acU4mIVadbLkvRHe-brkBRTXH-fSZi5MH-uU",
      "https://70.img.avito.st/image/1/1.c6ndyba-30DLaX1Bt_AOrP1p3UZvfttAbxm-SmPK3uJoat0.IGCYYba8S-KPXAI4SU5K_6PpxtJn1Cj3Owid_3vqj2U",
      "https://c80.img.avito.st/image/1/1.yfBlira-ZRlzKscYe8WT90UqZx_XPWEZ11oEE9uJZLvQKWc.FsVGZEkBiydmI_jtcrCrCf6X18ckVADiF-yewBwbJz0",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_637_m_39_et._8157564107",
  },
  {
    id: 24,
    description: "2-к. квартира, 44,6 м², 5/5 эт.",
    address: "ул. Мира",
    price: 180000,
    pricePerSqm: 4036,
    photos: [
      "https://30.img.avito.st/image/1/1.hn_EYra-KpbSwoiXxGTtd6DDKJB21S6WdrJLnHphKzRxwSg.boWRPUysR-XOKugSg-MjrAXsdUAPmI1g_-C0KxfPeOs?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.g0XlW7a-L6zz-42t7xmaSIH6LapX7CusV4tOpltYLg5Q-C0.VfZRL2UIJadI5uyN3zJ_YOt0TLTBTRPT12InveRLtDo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c60.img.avito.st/image/1/1.p6EsRra-C0g65qlJbiTqr0jnCU6e8Q9InpZqQpJFCuqZ5Qk.6_EX4_vKpp_qTCO5k2yc9GAS2Z5QIcc0ySRZJs9Cuko",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_446_m_55_et._7507215000",
  },
  {
    id: 25,
    description: "3-к. квартира, 69,4 м², 3/5 эт.",
    address: "Северная ул.",
    price: 400000,
    pricePerSqm: 5764,
    photos: [
      "https://20.img.avito.st/image/1/1.gEVbYLa-LKxNwI6tVw7fWkbALqrp1yis6bBNpuVjLQ7uwy4.NpN1We8xOx_0aqWIR9y5PjMW9yus1hA77fsoHg1VdX8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b10.img.avito.st/image/1/1.tAX_cba-GOzp0brtm3fAGOLRGupNxhzsTaF55kFyGU5K0ho.O26QLjRW3sKxVIm_Zf3emsCXZ8eGPo6hBsmfHQJGedE?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c60.img.avito.st/image/1/1.mANCDba-NOpUrZbrfhPhHV-tNuzwujDq8N1V4PwONUj3rjY.K91BNaKWI_e7inF7kdllWOdOj4WnwqmssDZULITy0Q4",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_694_m_35_et._8286266665",
  },
  {
    id: 26,
    description: "2-к. квартира, 40 м², 3/5 эт.",
    address: "ул. Бабушкина",
    price: 500000,
    pricePerSqm: 12500,
    photos: [
      "https://b20.img.avito.st/image/1/1.tPSARra-GB2W5roc5HS-rILmGhsy8RwdMpZ5Fz5FGb815Ro.IpP4iVgTwpHgEmIf_QvzuJwr_EPyXciNhkGmxQE-ZnY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b20.img.avito.st/image/1/1.rqx7cba-AkVt0aBEK2-n9HnRAEPJxgZFyaFjT8VyA-fO0gA.1SiHxw-m17gec6wDbzWNwOawe7oOvugue1HQ1yQ9-08?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://00.img.avito.st/image/1/1.tdc5iba-GT4vKbs_X8vdijspGziLPh0-i1l4NIeKGJyMKhs.6pnMQBo_ORazy_ghxrA6P90bmaLWR-nMjt8voc__9KM?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_40_m_35_et._8339859324",
  },
  {
    id: 27,
    description: "2-к. квартира, 51,6 м², 1/5 эт.",
    address: "ул. Мира",
    price: 990000,
    pricePerSqm: 19186,
    photos: [
      "https://00.img.avito.st/image/1/1.6v_nT7a-Rhbx7-QXvxz7iuXvRBBV-EIWVZ8nHFlMR7RS7EQ.ie7_WQRGLPn23BtwgLRwK1KI3Fs1plYfDJOCJzEpjsw?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c80.img.avito.st/image/1/1.o8v-fba-DyLo3a0jtCPMgPzdDSRMygsiTK1uKEB-DoBL3g0.aeqaK6J6TZOURQdgF_gcjtYuA3ep1kl2NopxEEPvC60",
      "https://b00.img.avito.st/image/1/1.qWpJAba-BYNfoaeCFyvRHkuhB4X7tgGD-9FkifcCBCH8ogc.4bl4g9AIqKKTGZjHW9B23uZqLPVmkldnt7d4QW9kvkE?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_516_m_15_et._8390550162",
  },
  {
    id: 28,
    description: "3-к. квартира, 70 м², 3/3 эт.",
    address: "ул. Мира",
    price: 650000,
    pricePerSqm: 9286,
    photos: [
      "https://b30.img.avito.st/image/1/1.RTfVPLa-6d7DnEvf0wU9VK6d69hni-3eZ-yI1Gs_6Hxgn-s.kUAfz-vThJ6V0mH0AlagqP8CeviDQYw52nWvvViNn08?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b00.img.avito.st/image/1/1.OB-RuLa-lPaHGDb37ZxbRvYZlvAjD5D2I2j1_C-7lVQkG5Y.Kuc2v6bHylCL6XudoCrVg01YxiwV1p0gxkcyEVHvV74?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://00.img.avito.st/image/1/1.ZMXCYra-yCzUwmothkNf5a7Dyipw1cwscLKpJnxhyY53wco.Velm8ZLAD6MT4Y5KRQGpypdJr6LA8XNMmgi1q63Bp0?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_70_m_33_et._7418370653",
  },
  {
    id: 29,
    description: "3-к. квартира, 57 м², 5/5 эт.",
    address: "Воркутинская ул.",
    price: 1750000,
    pricePerSqm: 30702,
    photos: [
      "https://30.img.avito.st/image/1/1.gMnFc7a-LCDT044hySWd8f7TLiZ3xCggd6NNKntwLYJw0C4.GhuS9pE6o6A5-T_O-xKX9KrHoBqCNZTD_CyvIpqoXNY?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://b30.img.avito.st/image/1/1.8mMqWLa-Xoo8-PyLQm_oWxH4XIyY71qKmIg_gJRbXyif-1w.4WDDR_8FL-vlBAyEGJ0cszjzJBV99G9JXMxogRtJ78E?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://70.img.avito.st/image/1/1._V2K7ra-UbScTvO1_KWsYrFOU7I4WVW0OD4wvjTtUBY_TVM.zLYKTKnERu_IVj11Mru45mPQzQJOvXbPSNIA0Wjvilg",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_57_m_55_et._7988684732",
  },
  {
    id: 30,
    description: "1-к. квартира, 31,3 м², 4/5 эт.",
    address: "ул. Мира",
    price: 120000,
    pricePerSqm: 3834,
    photos: [
      "https://40.img.avito.st/image/1/1.Yfw-Cra-zRUoqm8UcGMXzRarzxOMvckVjNqsH4AJzLeLqc8.PG9NLTpQCavso5-zDh8ICEF2EpcWlUKh6xa0SV6h5tc",
      "https://40.img.avito.st/image/1/1.kADy97a-POnkV57o3pXqMdpWPu9AQDjpQCdd40z0PUtHVD4.esvwAXOMLsqMF9P_76Aim8LYFG_ktXhuKYNokGrGzVc",
      "https://c90.img.avito.st/image/1/1.WvcJiba-9h4fKVQfMZRizxco9Bi7PvIeu1mXFLeK97y8KvQ.guxIR_RJ6tg4AUID20uYcQ5JcW0S5x56AsrOH-4GXPk",
    ],
    link: "https://www.avito.ru/inta/kvartiry/1-k._kvartira_313_m_45_et._4452771876",
  },
  {
    id: 31,
    description: "2-к. квартира, 47,4 м², 4/5 эт.",
    address: "ул. Мира",
    price: 700000,
    pricePerSqm: 14768,
    photos: [
      "https://c70.img.avito.st/image/1/1.c4R6g7a_321sI31sENJnl7Ag2WvYJt9rv0PVZ2wjfWzMIA.bua6HAnKtGQsz3RjOIkci_EcomHSwtIXz6GOfO_3q8E",
      "https://b00.img.avito.st/image/1/1.9GO7Wra_WIqt-vqL3wXgcHH5XowZ_1iMfppSgK36-osN-Q.OWYMCr9hpxnjQ0lS46j3g69WuFR9M-hYALILu_W0Pdo?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c70.img.avito.st/image/1/1.0VSHora_fb2RAt-8qf3FR00Be7slB327QmJ3t5EC37wxAQ.P72IXtPzyqZnGr4-Cthokb24v2iBSXV7LYz-SCCMeRQ",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_474_m_45_et._2826072798",
  },
  {
    id: 32,
    description: "3-к. квартира, 61,6 м², 3/5 эт.",
    address: "ул. Мира",
    price: 1100000,
    pricePerSqm: 17857,
    photos: [
      "https://40.img.avito.st/image/1/1.Z5YEH7a-y38Sv2l-Ri520SW_yXm2qM9_ts-qdbocyt2xvMk.mFulqKWPhWMIMpwOJgHoU8B5FMPsDlm7KaNJ93M32Wo",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_616_m_35_et._8184419654",
  },
  {
    id: 33,
    description: "3-к. квартира, 53 м², 5/5 эт.",
    address: "ул. Мира",
    price: 350000,
    pricePerSqm: 6604,
    photos: [
      "https://b00.img.avito.st/image/1/1.DJmGxba-oHCQZQJxkuEn_J1lonY0cqRwNBXBejjGodIzZqI.6SJhPjp7ysR68A7Flyff268ZqozncHVXI_cfD08QkNQ?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://20.img.avito.st/image/1/1.WfQ9Zba-9R0rxVccA2xGkybF9xuP0vEdj7WUF4Nm9L-Ixvc.Zw_7-r9Ac37dK3I1k5fPHoeJdc_cXXi4So3OfiZbcgI?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c80.img.avito.st/image/1/1.kFiVpra-PLGDBp6wucDBPY4GPrcnETixJ3ZduyulPRMgBT4.4iX0-2lEaY3ggP5EZbCTYm9QiRz9ShMaBouCyacNDtM",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_53_m_55_et._8425753102",
  },
  {
    id: 34,
    description: "2-к. квартира, 57,7 м², 5/5 эт.",
    address: "ул. Морозова",
    price: 150000,
    pricePerSqm: 2600,
    photos: [
      "https://60.img.avito.st/image/1/1.w_F0Hba_bxhivc0ZfhKiipy-aR7WuG8esd1lEmK9zRnCvg.ocCuCrXREf379jceaMiOioNErr8Su2htT4LU1Eny5P4",
      "https://c60.img.avito.st/image/1/1._W0GDLa_UYQQrPOFcAOcFu6vV4KkqVGCw8xbjhCs84Wwrw.npxE3bO3lg9gs9MuumaU4a8aDhoI5GrnfsbPlN-K3uY",
      "https://50.img.avito.st/image/1/1.xCju9La_aMH4VMrA6vulUwZXbsdMUWjHKzRiy_hUysBYVw.FM11f4aLnklT88AUN7S8fUAJZkRgqInbDTzusWmelmY",
    ],
    link: "https://www.avito.ru/inta/kvartiry/2-k._kvartira_577_m_55_et._2331028189",
  },
  {
    id: 35,
    description: "3-к. квартира, 69,6 м², 2/5 эт.",
    address: "Ленинградская ул.",
    price: 480000,
    pricePerSqm: 6897,
    photos: [
      "https://40.img.avito.st/image/1/1.IM_VBra-jCbDpi4nmQIz8-2njiBnsYgmZ9btLGsFjYRgpY4.3iWafpiZ_mgtr0roCcMTDH1TR-mTdARn9uy0g6xb5HY",
      "https://b00.img.avito.st/image/1/1.s9t5Eba-HzJvsb0zEzPn50GwHTTLphsyy8F-OMcSHpDMsh0.7ho0xFcNkHK59oGpeLOaWPMWSm3Fm4l7ayJkb6OGA6I?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://c70.img.avito.st/image/1/1.OSuGa7a-lcKQyzfD-DtdF77Kl8Q03JHCNLv0yDholGAzyJc.VQujrMnFhr_6p8oYD_b98IURaepm4looestCOITFLf4",
    ],
    link: "https://www.avito.ru/inta/kvartiry/3-k._kvartira_696_m_25_et._4370732316",
  },
  {
    id: 36,
    description: "4-к. квартира, 84,1 м², 4/5 эт.",
    address: "ул. Куратова",
    price: 800000,
    pricePerSqm: 9512,
    photos: [
      "https://b40.img.avito.st/image/1/1.nZl4cba-MXBu0ZNxTk-02HvQM3bKxjVwyqFQesZyMNLN0jM._6inyr4RKP2lQpGybiNy49NwOFp191thDnFl7PSALRA",
      "https://10.img.avito.st/image/1/1.im8yRra-JoYk5oSHKjCvLjHnJICA8SKGgJZHjIxFJySH5SQ.-uUmWmK5ik46FR4Ob4JvVJjmfPOdRMtu6Qy7CEKWrBA?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
      "https://10.img.avito.st/image/1/1.xoUw7ba-amwmTchtMKLVxzNMaGqCWm5sgj0LZo7ua86FTmg.KcLxVDW7cv87kbU0qEkxffZQS6I7ZfoKTvHN0ItKLq8?cqp=2.6_1L9vhKD2uBLt-qyrAoZheVsuS8u7cVFre6r7a9jrN4_pCIDjlm5anolzs-MLkTK_L9899P2epdVNs=",
    ],
    link: "https://www.avito.ru/inta/kvartiry/4-k._kvartira_841_m_45_et._4644924884",
  },
];

export function getRandomApartments(count: number): Apartment[] {
  const shuffled = [...apartments].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculateScore(userGuess: number, correctPrice: number): number {
  const diff = Math.abs(userGuess - correctPrice);
  const percentage = (diff / correctPrice) * 100;

  if (percentage <= 5) return 100;
  if (percentage <= 10) return 80;
  if (percentage <= 20) return 60;
  if (percentage <= 30) return 40;
  if (percentage <= 50) return 20;
  return 0;
}

export function getOverpayInfo(userGuess: number, correctPrice: number): { overpay: boolean; amount: number } {
  const amount = userGuess - correctPrice;
  return {
    overpay: amount > 0,
    amount: Math.abs(amount),
  };
}
