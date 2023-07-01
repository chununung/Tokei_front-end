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

###### 1./client/src/pages/StorePage.jsx：

         UI:
         /client/src/pages/styles/store.css
         
         UX:
         兩種商品排列方式
         兩種商品篩選方式
         分頁閱讀 - 每頁12筆商品
         
         資料庫溝通:
         串接活動API，渲染在上半部頁面(輪播圖)、
         串接商城產品API，渲染在下半部頁面

###### 2./client/src/pages/GoodsPage.jsx：

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

###### 3./client/src/pages/ShoppingcartPage.jsx、/client/src/components/DoughnutChart.jsx：

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

