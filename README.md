# 🛒 E-Commerce Side Project

一個以高併發與高可用為目標的電商系統，支援使用者註冊、登入、商品搜尋、購物車操作與快取加速。具備 JWT 驗證與 Redis 快取機制，並預計進行 JMeter 壓力測試驗證系統效能表現。

---

## 📐 架構圖（Architecture）& 技術選擇
<table>
<tr>
<td width="360">

<img src="https://upload.cc/i1/2025/05/23/059nPl.jpg" style="max-width: 100%; height: auto;">

</td>
<td>

  | 類別 | 描述 |
  |------|------|
  | AWS Amplify | 前端部署，內建 CDN 與 CI/CD |
  | ALB        | 請求分流至 ECS Task |
  | ECS Fargate | 容器化後端，支援自動擴展 |
  | RDS (MySQL) | 資料庫儲存，支援高可用性與備援 |

| 方案 | AWS Amplify| CloudFront |
| -------- | -------- | -------- |
| 部署方式    | 內建     | 需要自制 CI/CD     |
| CDN | 內建 |  CloudFront（最高效） |
| 免費流量 | 5GB 存儲 + 1000 mins Build | S3 5GB + CloudFront 1TB/月 |

| 方案 | ECS Fargate + ALB | Elastic Beanstalk |
| -------- | -------- | -------- |
| 部署方式    | GitHub Actions	     | CodePipeline, GitHub Actions     |
| 免費流量 | 每月 750 小時 |  每月 750 小時 |
| AWS Amplify 兼容 | 完美兼容 |  需 API Gateway |

| 方案 |Amazon RDS | Amazon Aurora |
| -------- | -------- | -------- |
| 特點    | 管理簡單、支援自動備份與更新     | 高效能、可擴展性、低延遲     |
| 免費層    |  750 小時    |   1 GB 儲存空間和 25 GB 的 I/O 請求    | 


</td>
</tr>
</table>
  
---

## 📊 ER 圖（Entity-Relationship Diagram）


![ER drawio (1)](https://github.com/user-attachments/assets/56443370-1f24-49f2-a882-500b90dc4d77)


---

## 🚀 技術棧（Tech Stack）

- **後端語言**：Java 17
- **框架**：Spring Boot 3.x
- **資料庫**：MySQL（使用 JPA 操作）
- **快取系統**：Redis（支援自動 fallback）
- **驗證機制**：JWT（自定義過期時間、Filter 驗證）
- **部署平台**：可支援本機 Docker 測試與 AWS 上線
- **API 工具**：Postman / JMeter（用於壓力測試）
- **其他**：
  - 使用 `@Cacheable` 快取搜尋結果
  - 支援條件式啟用 Redis
  - 資料庫 ID 使用 auto_increment，後續可支援 UUID

---

## ✅ 已完成功能

- [x] 使用者註冊 / 登入（含 JWT 驗證）
- [x] 搜尋商品（支援模糊比對）
- [x] 購物車（新增、刪除、數量調整）
- [x] Redis 快取搜尋結果
- [x] 快取 fallback：當 Redis 關閉時自動使用 `NoOpCacheManager`
- [x] Spring Security Filter

---

## 🧪 高併發壓力測試（JMeter）

| 指標項目       | 未使用快取（原始 DB） | 使用 Redis 快取        | 差異與說明                         |
|----------------|------------------------|-------------------------|------------------------------------|
| 測試次數 (#Samples) | 2500                   | 2500                    | 測試條件相同                       |
| 平均時間 (ms)   | 1092                   | **10**                 | ✅ **快了約 100 倍**                |
| 中位數 (ms)     | 1099                   | **6**                  | ✅ 快速穩定                          |
| 90% Line (ms)   | 1443                   | **8**                  | ✅ 快取後延遲大幅減少                |
| 95% Line (ms)   | 1526                   | **8**                  |                                    |
| 99% Line (ms)   | 1900                   | **275**                | 雖有 outlier，但整體依然極快       |
| 最小時間 (ms)   | 219                    | **0**                  | 表示快取瞬時回應                    |
| 最大時間 (ms)   | 2915                   | **275**                | ✅ 不再有 tail latency（尾端爆炸）  |
| 標準差 (ms)     | 323                    | **76**                 | ✅ 波動性顯著降低                   |
| 錯誤率 (%)      | 0%                     | 0%                     | 系統穩定                           |
| 吞吐量 (req/s)  | 38.7                   | **41.7**               | 快取後略有提升（受限於 thread 數） |
