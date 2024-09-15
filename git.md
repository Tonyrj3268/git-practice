## 說明 blob, tree, commit, branch, head 分別是什麼

- blob: A Git blob (binary large object) is the object type used to store the contents of each file in a repository. The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write blob objects to your Git database on GitHub.
- tree: A Git tree object creates the hierarchy between files in a Git repository. You can use the Git tree object to create the relationship between directories and the files they contain. These endpoints allow you to read and write tree objects to your Git database on GitHub.
- commit: A Git commit is a snapshot of the hierarchy (Git tree) and the contents of the files (Git blob) in a Git repository. These endpoints allow you to read and write commit objects to your Git database on GitHub.
- branch: Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your future's history before merging it into the main branch.
- head: In Git, HEAD is a reference to the current commit on the currently checked-out branch. It represents the tip of the branch, pointing to the latest commit you're working on. HEAD can be thought of as the "current branch marker" or the "pointer to the active branch."

## 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

- 在使用 Git 操作過程中，`.git` 目錄裡的內容會隨著你的各種操作而變化。這個目錄是 Git 儲存版本控制資料的地方，以下是一些常見操作及其對 `.git` 目錄的影響：

1.  **初始化一個新的 Git 倉庫 (`git init`)**

- `.git` 目錄會被創建，並包含初始的資料結構，包括：
  - `HEAD`：指向當前分支。
  - `config`：存儲倉庫配置。
  - `description`：對倉庫的描述（通常用於 GitWeb）。
  - `hooks/`：包含預設的 Git 鉤子（如 `pre-commit`, `post-commit`）。
  - `info/`：包含一些非版本控制的元數據，如 `exclude` 文件（用於排除不被追蹤的文件）。
  - `objects/`：存儲所有的 Blob、Tree 和 Commit 物件。
  - `refs/`：存儲分支和標籤的引用。

2.  **添加文件並提交 (`git add` 和 `git commit`)**

- `objects/` 目錄會更新，新增或修改對應的 Blob、Tree 和 Commit 物件。
- `refs/heads/` 目錄下的分支引用（如 `refs/heads/master`）會更新，指向最新的 Commit。
- `.git/HEAD` 會更新，指向當前分支的最新 Commit。

3.  **切換分支 (`git checkout <branch>`)**

- `HEAD` 會更新，指向新的分支。
- `refs/heads/` 下的指針會移動，指向新的分支的最新 Commit。

4.  **拉取最新變更 (`git pull`)**

- `objects/` 會更新，可能會新增來自遠端的新物件。
- `refs/heads/` 目錄下的分支引用會更新，指向最新的 Commit。

5.  **推送變更 (`git push`)**

- 雖然 `.git` 目錄本身不會變化，但遠端倉庫的 `.git` 目錄會更新，接收來自本地倉庫的新物件和引用。

6.  **刪除分支 (`git branch -d <branch>`)**

- `refs/heads/` 目錄下的分支引用會被刪除，對應的 Commit 不再被追蹤（除非被其他分支或標籤引用）。

7.  **使用 git stash (`git stash`)**

- `objects/` 目錄會新增一組新的物件來保存被暫存的變更。
- `refs/stash` 會更新，指向暫存的變更。

## commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

- 撰寫有效的 commit message 是確保版本控制記錄清晰和易於維護的關鍵。良好的 commit message 使得其他開發人員能夠快速了解每次提交的目的和變更內容。這裡有一些常見的風格和最佳實踐：

### 常見風格

1. **標題（Subject）**

   - **簡短**：標題應該簡明扼要，一般不超過 50 個字符。
   - **動詞時態**：使用現在時態（如 "Fix bug" 而不是 "Fixed bug"）。
   - **格式**：可以使用標題/小標題格式，如 `[Category] Subject`。例如 `[Fix] Correct typo in README`.

2. **描述（Body）**

   - **詳細說明**：在標題下方用空行分隔，提供更多上下文，說明為什麼做了這些變更，這樣可以幫助其他人理解你的決策過程。
   - **分段**：每段不要超過 72 個字符，這樣便於在各種工具中顯示。
   - **清楚明確**：詳細描述變更內容和原因，提供背景資訊和可能的影響。

3. **結尾（Footer）**（可選）
   - **關聯**：如有相關的問題追蹤 ID、請求合併或其他引用，可以在結尾部分說明。
