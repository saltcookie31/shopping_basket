const data = [
  {
    id: 1,
    name: "1권",
    img_url:
      "https://img.khan.co.kr/news/2023/01/07/news-p.v1.20230106.25f62b36c9dc49f7aa7045666610ef8d_P1.jpg",
  },
  {
    id: 2,
    name: "2권",
    img_url:
      "https://newsimg.hankookilbo.com/2020/04/21/202004211422083541_3.jpg",
  },
  {
    id: 3,
    name: "3권",
    img_url:
      "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7PBF/image/b0KVeRRLDeOtIap0-KnApW1uW8Q",
  },
  {
    id: 4,
    name: "4권",
    img_url:
      "https://image.kmib.co.kr/online_image/2021/0903/2021090220380531799_1630582685_0924207731.jpg",
  },
  {
    id: 5,
    name: "5권",
    img_url: "https://dimg.donga.com/wps/NEWS/IMAGE/2020/04/18/100708414.1.jpg",
  },
  {
    id: 6,
    name: "6권",
    img_url:
      "https://blog.kakaocdn.net/dn/IH7pg/btqGH1ZgBXx/t8KhtXCPoKDM1ZKljOv270/img.jpg",
  },
  {
    id: 7,
    name: "7권",
    img_url:
      "https://inmun360.culture.go.kr/upload/board/image/02/2365702_201908020226186180.jpg",
  },
  {
    id: 8,
    name: "8권",
    img_url:
      "https://file.mk.co.kr/mkde/N0/2019/09/20190911_4227439_1568163144.jpeg",
  },
  {
    id: 9,
    name: "9권",
    img_url:
      "https://blog.rightbrain.co.kr/CMS1/wp-content/uploads/2016/01/ebook-reader_1347015824-e1451967468839.jpg",
  },
  {
    id: 10,
    name: "10권",
    img_url:
      "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7KD/image/Twc6gpoHWkc7XDaoU_pZ3opJcWk.jpg",
  },
  {
    id: 11,
    name: "11권",
    img_url:
      "https://img.khan.co.kr/news/2021/12/24/20211224010031776002759711.jpg",
  },
  {
    id: 12,
    name: "12권",
    img_url:
      "https://watermark.lovepik.com/photo/20211209/large/lovepik-stacked-books-picture_501758523.jpg",
  },
  {
    id: 13,
    name: "13권",
    img_url: "https://ppss.kr/wp-content/uploads/2020/11/3-37.jpg",
  },
  {
    id: 14,
    name: "14권",
    img_url:
      "https://cdn.huffingtonpost.kr/news/photo/201807/71421_136218.jpeg",
  },
  {
    id: 15,
    name: "15권",
    img_url:
      "https://img.freepik.com/free-vector/a-set-of-vector-book-illustrations-for-various-documents-teaching-materials-publications-and-invitation-cards-book-opened-and-close-icon-in-different-style_1150-65724.jpg",
  },
  {
    id: 16,
    name: "16권",
    img_url: "https://cdn.wip-news.com/news/photo/202105/7010_8042_2121.jpg",
  },
  {
    id: 17,
    name: "17권",
    img_url: "https://t1.daumcdn.net/cfile/tistory/2520CF4753E942C332",
  },
  {
    id: 18,
    name: "18권",
    img_url: "https://www.sisain.co.kr/news/photo/201511/24847_48646_498.jpg",
  },
  {
    id: 19,
    name: "19권",
    img_url:
      "https://tgzzmmgvheix1905536.cdn.ntruss.com/2021/05/28a6d139e0f045e99b3c7a1388e10bb3",
  },
  {
    id: 20,
    name: "20권",
    img_url: "https://image.yes24.com/goods/102347474/XL",
  },
  {
    id: 21,
    name: "21권",
    img_url:
      "https://storage.heypop.kr/assets/2022/03/04180921/%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3_%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB_04.jpg",
  },
  {
    id: 22,
    name: "22권",
    img_url:
      "https://image.ajunews.com//content/image/2021/09/10/20210910151736237720.jpg",
  },
  {
    id: 23,
    name: "23권",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVK46hk8V1zKlzrk-FRbQxsG31ROKTKN2g0Q&usqp=CAU",
  },
  {
    id: 24,
    name: "24권",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jSOH3h2pFKXGtBIKqFT1RIUYGGf6KhQH_g&usqp=CAU",
  },
  {
    id: 25,
    name: "25권",
    img_url: "https://ppss.kr/wp-content/uploads/2014/04/007-549x377.jpg",
  },
  {
    id: 26,
    name: "26권",
    img_url:
      "https://cdn.news.unn.net/news/photo/202109/515446_317114_1951.jpg",
  },
  {
    id: 27,
    name: "27권",
    img_url:
      "https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=24659&fileTy=MEDIA&fileNo=1",
  },
  {
    id: 28,
    name: "28권",
    img_url:
      "https://www.chemicalnews.co.kr/news/photo/202106/3516_10118_3834.jpg",
  },
  {
    id: 29,
    name: "29권",
    img_url: "https://img.sbs.co.kr/newimg/news/20210724/201574339_500.jpg",
  },
  {
    id: 30,
    name: "30권",
    img_url: "https://pbs.twimg.com/media/FFBlpUoagAAQiKl.jpg",
  },
];
