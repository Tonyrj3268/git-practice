### 0.Linux

1. `/etc` 是什麼的縮寫？這裡通常都放哪些檔案？

   - `/etc` 是法語 et cetera 的縮寫，意思是「其他」。系統主要的設定檔幾乎都放置在這個目錄內，可以讓一般使用者查閱的， 但是只有 root 有權力修改，通常會包含以下類型的檔案

     - 系統配置檔案：如 `/etc/passwd`（儲存系統中所有使用者的基本資訊）、`/etc/shadow`（儲存使用者的密碼）
     - 網路配置：`/etc/network/interfaces` 或 `/etc/sysconfig/network-scripts/` 用來設定網路
     - 服務配置：如 `/etc/nginx/nginx.conf`（Nginx 的配置檔）、`/etc/mysql/my.cnf`（MySQL 的配置檔）
     - 系統啟動與管理檔案：如 `/etc/init.d/`（儲存系統服務的啟動腳本）、`/etc/crontab`（儲存定時任務）
     - 安全性配置：如 `/etc/ssh/sshd_config`（SSH 伺服器的配置檔）。

2. `/var` 這裡通常都放哪些檔案？

   - /var 目錄主要針對常態性變動的檔案，包括快取(`/var/cache/`)、登錄檔(`/var/log/`)以及某些軟體運作所產生的檔案，包括程序檔案(lock file, run file)，或者例如 MySQL 資料庫的檔案等等(`/var/lib/`, `/var/run/`)。

3. `/boot` 這裡通常都放哪些檔案？

   - 這個目錄主要在放置開機會使用到的檔案，包括 Linux 核心檔案以及開機選單與開機所需設定檔等等。

4. `$PATH` 環境變數的作用是什麼？
   - 當我們在命令行輸入一個指令時（例如 ls、grep、python 等），系統會根據 `$PATH` 的值，按順序在這些指定的目錄中查找對應的可執行檔案，並執行它。
   - 有了 `$PATH` 環境變數，我們可以在任何目錄下執行系統中的指令，而不需要知道這個指令的完整路徑。例如，我們可以直接輸入 ls 而不需要輸入 /bin/ls。
   - `echo $PATH` 可以查看當前的 `$PATH` 環境變數。
   - `export PATH=$PATH:/new/path/to/add` 可以將新的路徑加入到 `$PATH` 環境變數中。
5. `which` 指令的作用？
   - `which`指令會在環境變數`$PATH`設定的目錄裡尋找符合條件的檔案。
   - `which python` 會回傳 python 的路徑，例如 `/usr/bin/python`。
   - 在這次作業的 Ubuntu 中，`which` 只支援 `-a` 和 `-s`參數，分別可以列出所有符合條件的檔案和只顯示第一個符合條件的檔案。
   - -n<檔案名稱長度> 指定檔案名稱長度，指定的長度必須大於或等於所有檔案中最長的檔案名稱。
   - -p<檔名長度> 與 -n 參數相同，但此處的<檔名長度>包含了檔案的路徑。
   - -w 指定輸出時欄位的寬度。
   - -V 顯示版本資訊。

Ref: [Linux 的檔案權限與目錄配置](https://linux.vbird.org/linux_basic/centos7/0210filepermission.php#dir), [菜鳥教程](https://www.runoob.com/linux/linux-comm-which.html)

### 1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中

IP: `13.115.215.7`

### 2. 什麼是 instance type?

- instance type (執行個體)是 AWS EC2 提供的不同規格的虛擬機，執行個體類型由不同的 CPU、記憶體、儲存體和聯網容量組合而成，aws 將其分為運算優化、記憶體優化、儲存優化、HPC 優化、加速運算、一般用途等類型。
- 這次作業使用的 `t2-micro` 可以在「需要」時存取相對快速的 CPU，特別適合用在不需要長時間高負荷使用 CPU 和需要定量記憶體和儲存空間的應用，例如網頁伺服器、開發環境、小型資料庫等。

Ref: [Amazon EC2 執行個體類型](https://aws.amazon.com/tw/ec2/instance-types/)

### 3. 什麼是 Nginx？有哪些用途與特性？

- Nginx 他可以作為 HTTP 伺服器、反向代理伺服器、郵件代理伺服器等

  - 他能夠做到：

  1. 負載均衡： Nginx 可以將客戶端的請求分發到多個後端伺服器，以減少單一伺服器的壓力。
  2. 儲存靜態資源：靜態資源（如圖片、CSS、JS）由 Nginx 直接處理，而非像後端伺服器請求，減少後端伺服器的負擔，和提升響應速度。
  3. 緩存：Nginx 可以將經常請求的資源緩存起來，減少後端伺服器的負擔，提升效能。
  4. 安全性與隱私保護：客戶端只能看到 Nginx 的 IP，隱藏了後端伺服器的具體資訊，增加了安全性。
  5. 高性能：Nginx 採用了非同步事件驅動的架構，可以處理大量的並發連接，並且佔用的資源非常少。

Ref: [[基礎觀念系列] Web Server & Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)

### 4. pm2 套件是什麼？有什麼用處？

- PM2 是 Node.js 在生產環境中應用程式的管理工具，他可以啟動多個應用的副本，並在多核處理器上實現負載均衡，也可以自動重啟應用程式和提供監控和日誌管理，就好比 Python 的 Uvicorn 或 Gunicorn
- 常見命令：
  1. `pm2 start app.js`: 啟動應用程式
  2. `pm2 list`: 列出所有應用程式
  3. `pm2 restart app.js`: 重啟應用程式
  4. `pm2 stop app.js`: 停止應用程式
  5. `pm2 delete app.js`: 刪除應用程式
  6. `pm2 logs`: 查看日誌

Ref: [npm package PM2](https://www.npmjs.com/package/pm2)

### 5. 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?

- 代理（英語：Proxy）也稱網路代理，是一種特殊的網路服務，允許一個終端（一般為客戶端）通過這個服務與另一個終端（一般為伺服器）進行非直接的連接。一般認為代理服務有利於保障網路終端的隱私或安全，在一定程度上能夠阻止網路攻擊。
- 代理的種類：

  1. 正向代理：代理伺服器代表客戶端向伺服器發送請求，例如 vpn 便是由使用者向該地區（例如美國）的代理伺服器和當地的伺服器（例如 Netflix）做互動。
  2. 反向代理：代理伺服器代表伺服器向客戶端發送請求，通常用於多個伺服器共享一個網路地址，例如 Nginx 便是將所有的 request 導向到後端的 express server。這種情況下，客戶端只知道代理伺服器的地址，而不知道實際的後端伺服器地址。

將 Nginx 作為反向代理伺服器，可以將所有的 request 導向到後端的 express server，也可以將靜態資源存在 Nginx 上，這樣可以減少 server 的負擔，提升效能。

Ref: [維基百科：代理伺服器](https://zh.wikipedia.org/zh-tw/代理服务器),[鳥哥：設定代理伺服器（Proxy Server）](https://linux.vbird.org/linux_server/redhat6.1/linux_24proxysquid.php#whatisproxy)

### 6. 在 readme 中提供步驟 9 的 Nginx 設定檔

```nginx
server {
    listen 80;

    location / {
                    proxy_pass http://localhost:3000;
                    proxy_http_version 1.1;
                    proxy_set_header Host $host;
            }
}
```

- server 定義了 proxy server 的相關設定，這裡設定他監聽 80 port，也可以規定哪些 domain 或 ip 的 request 會被 nginx server 處理。
- location 是用來匹配 url 的路徑，他可以接受 regex 來匹配，這邊的 / 代表所有的路徑也就是所有的 request 都會導向到這個 location。
- proxy_pass 是用來指定要將 request 導向到哪個 server，這邊的 `http://localhost:3000` 代表將 request 導向到 localhost 的 3000 port。
- proxy_http_version 確保 Nginx 使用 HTTP/1.1 與後端通信，默認情況下，Nginx 與後端伺服器使用的是 HTTP/1.0，使用 HTTP/1.1 有助於提升持久連接的性能和支持 WebSocket 等應用。
- proxy_set_header Host 確保 Nginx 將原始請求中的域名 `$host` 正確傳遞給後端伺服器，讓後端能根據用戶的實際請求進行正確處理。

Ref: [[基礎觀念系列] Web Server & Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)

### 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

- 安全群組是一組規則，用於控制哪些流量可以進入和離開雲端資源。
- 安全群組負責控制允許到達和離開其關聯資源的流量。例如，將安全群組與 EC2 執行個體建立關聯之後，就會控制執行個體的入站和輸出流量。
- 每個群組都有自己的輸入和輸出規則。您可以為每個傳入傳出規則指定來源目的地、連接埠範圍和通訊協定。
- 只能將安全性群組指派給在與安全群組相同 VPC 的資源中建立的資源。可以指派一個資源有多個安全群組。

## 安全群組設定原則：

1. 出於安全性考量，默認拒絕所有輸入流量，使用者應明確設定允許的流量，且避免開放大範圍的 port。
2. 為了確保 Instance 可以跟其他 Instance 通訊，默認允許所有輸出流量。
3. 基於角色的訪問控制，我們應該為不同角色或服務設定不同的安全群組。此外最好僅授權特定 IAM 主參與者建立及修改安全性群組。
4. 建立需要的最小數量的安全群組，以降低發生錯誤的風險。使用每個安全群組來管理對具有類似功能和安全要求之資源的存取權。例如，將所有 Web 伺服器放在一個安全群組中，將所有資料庫伺服器放在另一個安全群組中。

Ref: [使用安全性群組控制 AWS 資源的流量](https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html)

### 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

## sudo 出現之前

- 在初始 Linux 系統被開發時，sudo 指令並不存在，人們通常通過登入 root 使用者、指令 su (switch user) 切換成為 root 使用者。這兩個方式都需要知道 root 的密碼。而這兩個方式也都不安全。

## sudo 出現之後

- sudo 設計者：「給用戶盡可能少的權限但仍允許完成他們的工作」。
- sudo 是「Super User DO」的縮寫。通常會被加在某一個指令的前面，代表這個指令是透過 Super User 所執行的。
- sudo 提供了更安全的權限管理方式：
  - 可以強制過一段時間後自動登出 root 用戶。
  - 只有特定用戶可以使用 sudo，這提高了系統的安全性。
- Linux 系統中有一個名為 /etc/sudoers 的文件，用來定義哪些用戶或用戶組可以使用 sudo。根據系統配置，有些用戶可能不具備使用 sudo 的權限，因此無法執行某些需要管理員權限的命令。

> ChatGPT: \
> 當你在命令前加上 sudo 時，你是在告訴系統你希望以超級使用者的身份執行後面的命令。 \
> 系統會提示你輸入當前用戶的密碼，以確認你有權限使用 sudo。 \
> 一旦你成功輸入密碼，系統將臨時提升你的權限，使你能夠執行該命令。

- 實際用法：

```bash
# 創建一個名為dummy的新使用者，該使用者初始並無sudo權限。
sudo adduser dummy
```

```bash
# 用dummy使用者登入，並嘗試執行一個需要root權限的指令
su - dummy
sudo ls /root

# 結果: dummy is not in the sudoers file. This incident will be reported.
```

賦予 sudo 權限

```bash
# 藉由將 dummy 加入特定群組，我們可以讓 dummy 有使用 sudo 的權限
# 打開 /etc/group 檔案後，我們可以找到下面這一行，並在後面加上 dummy：
wheel:*:0:root, dummy
```

或是

```bash
# 過修改 /etc/sudoers 這個檔案，直接針對 dummy 這個使用者賦予權限
# dummy 只能執行 sudo ls 和 sudo mv
dummy ALL=(ALL) /bin/ls, /bin/mv
```

### 為什麼有的時候需要加上 sudo，有時候不用？

特定命令的權限要求：一些命令本身設計為只能由管理員執行，因此必須使用 sudo。例如，安裝、更新和移除軟體的命令（如 `apt-get` 或 `yum`）通常需要 sudo。 \
常用命令：有些命令如 `pwd`、`echo`、`ls` 等，這些命令本身不需要特權，因此可以直接使用。

Ref: [三分鐘快速了解 Linux sudo 指令是什麼！](https://yhtechnote.com/linux-sudo/)

### 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

- Nginx 預設的 Log 檔案位於以下目錄：

  1. 訪問記錄 (Access Logs)：`/var/log/nginx/access.log`
  2. 錯誤記錄 (Error Logs)：`/var/log/nginx/error.log`

- 可以透過查看 Nginx 的設定檔 `nginx.conf` 來確認 Log 檔案的位置

```bash
sudo nano /etc/nginx/nginx.conf
```

```nginx
## /etc/nginx/nginx.conf

error_log /var/log/nginx/error.log;

http {
    ...

    access_log  /var/log/nginx/access.log;
    ...
}
```

- 透過 `tail` 指令可以查看 Nginx 的 Log

```bash
sudo tail -f /var/log/nginx/access.log
```

```log
101.32.192.203 - - [04/Oct/2024:06:00:59 +0000] "HEAD /Core/Skin/Login.aspx HTTP/1.1" 404 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
185.16.39.118 - - [04/Oct/2024:07:22:24 +0000] "GET / HTTP/1.1" 200 12 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 Edg/90.0.818.46"
135.125.246.189 - - [04/Oct/2024:08:12:05 +0000] "GET /.env HTTP/1.1" 404 143 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
135.125.246.189 - - [04/Oct/2024:08:12:05 +0000] "POST / HTTP/1.1" 404 140 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
```

看起來有多個未知的 IP 來訪問我的伺服器，尤其是有一個 IP 來訪問 `.env` 檔案。

### 10.其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」

- [x] 在找 ubuntu 支援 which 的哪些參數時，使用了`info which`並且找到可用的參數和其回傳值。
- [ ] Nginx 有 default.conf 和 nginx.conf，實務上通常會把它們放在哪裡?跟著專案或是只設定在伺服器上?
- [ ] 多增加了一層 Nginx 代理增加了延遲，如果有高併發的情況，有什麼方法可以提升效能？
- [ ] Nginx access.log 有許多未知的 IP 來訪問，尤其是有一個 IP 來訪問 `.env` 檔案，有什麼方法可以防止這樣的行為？
- [ ] Linux 的 UID 和 GID 是什麼？為什麼有時候會需要改變檔案的 UID 和 GID？建立容器的時候 UID 和 GID 是怎麼運作的？
- [ ] 架設伺服器的時候，該怎麼導入環境變數？

### 11. 列出完成本作業時參考的資料

1. [Linux 的檔案權限與目錄配置](https://linux.vbird.org/linux_basic/centos7/0210filepermission.php#dir)
2. [菜鳥教程](https://www.runoob.com/linux/linux-comm-which.html)
3. [Amazon EC2 執行個體類型](https://aws.amazon.com/tw/ec2/instance-types/)
4. [npm package PM2](https://www.npmjs.com/package/pm2)
5. [維基百科：代理伺服器](https://zh.wikipedia.org/zh-tw/代理服务器)
6. [鳥哥：設定代理伺服器（Proxy Server）](https://linux.vbird.org/linux_server/redhat6.1/linux_24proxysquid.php#whatisproxy)
7. [[基礎觀念系列] Web Server & Nginx](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)
8. [使用安全性群組控制 AWS 資源的流量](https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html)
9. [三分鐘快速了解 Linux sudo 指令是什麼！](https://yhtechnote.com/linux-sudo/)
