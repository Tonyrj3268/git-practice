## 1. 你的網址點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）

- [我的網址](https://git-practice.chiacheng.me)

## 2. 你在哪裡購買網域的

- [Namecheap](https://www.namecheap.com/)

## 3. DNS 的 A record 是什麼？

- A 代表 Address，用來將 Domain Name 對應到 IPv4 Address，當使用者輸入網域名稱時，瀏覽器會先查詢 DNS 伺服器，找到對應的 A record 後，再將網域名稱轉換成 IP Address，來連線到正確的伺服器。

## 4. DNS 的 NS record 是什麼？

- NS 代表 Name Server，是一種 DNS 伺服器，上面儲存了網域的所有 DNS 記錄。當使用者輸入網域名稱時，DNS 會依照 NS 記錄，將查詢導向該網域指定的 Name Serve，由這些 Name Serve 再進行下一步的解析。

## 5. Domain Name vs FQDN vs URL 這三者分別為何？

### Domain name:

網域名稱是網路上一個伺服器或服務的識別名稱，用來替代難記的 IP 地址，整體由不同的階層組成，通常分為根域、頂級域、次級域、三級域（子域）等等，除了根域以外，其他部分通常代表某個國家、組織或是服務。

### FQDN(Fully Qualified Domain Name):

FQDN 是網域名稱的完整形式，指向網路上的一個具體位置。它從具體的主機名稱開始，經過各層域，直到頂級域，最後以一個點的根域（.）結束。

### URL:

URL 是用來定位網際網路上具體資源的位置的完整路徑。它不僅包含網域名稱，還包含協議（如 http、https、ftp 等）、特定的路徑、查詢參數，甚至可以指定檔案名和其他資源細節。例如: `https://www.google.com/search?q=example`，其中 `https` 是協議，`www.google.com` 是網域名稱，`/search` 是路徑，`q=example` 是查詢參數。

## 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

- 如果使用 http 協議的話，傳輸內容會以明文表示。如果使用未知的網路或是 Wi-Fi，任何人都可以在數據傳輸過程中攔截和讀取內容。
- 使用 https 協議的話，數據會被公鑰加密，即使被攔截，因爲沒有私鑰無法直接讀取內容。這樣可以保護用戶的隱私，防止敏感信息泄露。這週作業的 zeroSSL 就是扮演憑證頒發機構（CA, Certificate Authority）的角色，為網站提供安全的 SSL/TLS 憑證。

以下是 SSL 的運作流程：

1. Client Hello（客戶端問候）

   當客戶端（如瀏覽器）想要與伺服器建立安全連線時，會首先向伺服器發送一個請求，稱為 Client Hello，包含以下信息：

   支持的 SSL/TLS 協議版本。
   支持的加密演算法（Cipher Suites）。
   生成隨機數，用於後續密鑰的生成。

2. Server Hello（伺服器問候）

   伺服器收到 Client Hello 後，會回應一個 Server Hello，內容包括：

   協商出的 SSL/TLS 協議版本。
   選定的加密演算法。
   伺服器生成的隨機數。
   伺服器的數字憑證（Certificate）。
   伺服器憑證包含伺服器的公開密鑰及由可信的認證機構（CA, Certificate Authority）簽發的數字簽名，用於證明伺服器的身份。

3. 客戶端驗證伺服器憑證

   客戶端收到伺服器的數字憑證後，會使用嵌入在操作系統或瀏覽器中的 CA 根憑證來驗證該憑證的真實性。如果憑證是由可信的認證機構簽發的，且沒有過期，驗證通過。

4. 密鑰交換（Key Exchange）

   客戶端會生成一個隨機數，稱為會話密鑰，並使用伺服器的公開密鑰將該隨機數加密後發送給伺服器。由於只有伺服器擁有相應的私鑰，因此只有伺服器能夠解密這個數據。

伺服器解密後，獲得該會話密鑰，接著客戶端與伺服器都使用該密鑰來進行對稱加密的通信。
