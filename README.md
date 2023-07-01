### MFEE35_Final_Project_Frontend
網站目的為 提供紀錄使用者身體攝取熱量、以及販售健康食品

使用方法:

clone branch => 77update

cd MFEE35_Final_Project/client

npm install

npm start

<hr>

草稿 :
###### Figma: 確認UI畫面

開發工具 :  
###### VSCode: 程式碼編輯器
###### React: 前端框架
###### CSS3: 版面美化
###### HTML: 基本網頁架構
###### Javascript: 基本網頁架構
<hr>

以下為我完成的3個頁面

###### 1./client/src/pages/StorePage.jsx 商城頁面：

         UI:
         /client/src/pages/styles/store.css
         
         UX:
         兩種商品排列方式
         兩種商品篩選方式
         分頁閱讀 - 每頁12筆商品
         
         資料庫溝通:
         串接活動API，渲染在上半部頁面(輪播圖)、
         串接商城產品API，渲染在下半部頁面

<img width="1512" alt="截圖 2023-07-02 上午1 00 30" src="https://github.com/chununung/Tokei_front-end/assets/131240960/666a0331-ebde-4041-8bd5-cb96fc4e8240">
<img width="1512" alt="截圖 2023-07-02 上午1 00 39" src="https://github.com/chununung/Tokei_front-end/assets/131240960/d6bf7bf1-9142-46d0-b63d-662d83da6544">



###### 2./client/src/pages/GoodsPage.jsx、/client/src/components/DoughnutChart.jsx  商品頁面：

         UI:
         /client/src/pages/styles/goods.css
         
         UX:
         大小圖切換瀏覽商品
         設置直覺性的按鈕以供操作
         下方隨機推薦4筆商品
         設置按鈕回饋的提示框
         
         資料庫溝通:
         串接活動API，存取在變數中使用、
         串接商城產品API渲染頁面、
         串接飲食API渲染頁面、
         將按鈕串接會員部分的新增購物車API && 新增最愛產品API
<img width="1512" alt="截圖 2023-07-02 上午1 07 05" src="https://github.com/chununung/Tokei_front-end/assets/131240960/b8a07732-d453-4495-9598-9e5752e0102b">

<img width="1512" alt="截圖 2023-07-02 上午1 06 43" src="https://github.com/chununung/Tokei_front-end/assets/131240960/8c8a6194-d725-4ab8-b3c7-2694823a76f7">

<img width="1512" alt="截圖 2023-07-02 上午1 07 18" src="https://github.com/chununung/Tokei_front-end/assets/131240960/0b7daff1-89a2-4ae1-9bab-f4b1ddfcb9c5">

###### 3./client/src/pages/ShoppingcartPage.jsx 購物車頁面：

         UI:
         /client/src/pages/styles/shoppingcart.css
         
         UX:
         設置直覺性的按鈕以供操作
         設置輸入框文字格式的提示文字
         設置彈跳式輸入框
         設置可隱藏式文字
         設置按鈕回饋的提示框
         
         資料庫溝通:
         串接活動API，存取在變數中使用、
         串接會員部分的抓取會員資料API，存取在變數中使用、
         
         串接會員部分的抓取購物車API渲染頁面、
         
         將按鈕串接折價券API、
         將按鈕串接會員部分的修改/刪除購物車API、
         將按鈕串接會員部分的送出訂單API、

<img width="1512" alt="截圖 2023-07-02 上午1 07 46" src="https://github.com/chununung/Tokei_front-end/assets/131240960/8eae9dd6-1cc0-4d88-b91e-a767b1cb4ffb">

<img width="1512" alt="截圖 2023-07-02 上午1 08 19" src="https://github.com/chununung/Tokei_front-end/assets/131240960/70106b00-b45c-4c89-a8ed-c2a56ce56836">

<img width="1512" alt="截圖 2023-07-02 上午1 14 02" src="https://github.com/chununung/Tokei_front-end/assets/131240960/0dd599d5-7369-43a9-af6e-55191b691fac">

<img width="1512" alt="截圖 2023-07-02 上午1 09 06" src="https://github.com/chununung/Tokei_front-end/assets/131240960/06929433-b787-4269-93cb-0e9b37fed13d">

<img width="1512" alt="截圖 2023-07-02 上午1 09 26" src="https://github.com/chununung/Tokei_front-end/assets/131240960/95f18e6d-bdfb-4543-953e-7e240d11d032">
