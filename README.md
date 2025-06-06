# 🛒 E-Commerce Side Project

An e-commerce system designed with high concurrency and high availability in mind. It supports user registration, login, product search, shopping cart operations, and cache acceleration. Features include JWT authentication and Redis caching. The system is scheduled for performance validation through JMeter stress testing.


## 📐 Infrastructure Components
<table>
<tr>
<td width="360">

<img src="https://upload.cc/i1/2025/05/23/059nPl.jpg" style="max-width: 100%; height: auto;">

</td>
<td>

| Component    | Description                                                        |
| ----------- | ------------------------------------------------------------ |
| AWS Amplify | Frontend deployment with built-in CDN and CI/CD              |
| ALB         | Routes requests to ECS Tasks                                 |
| ECS Fargate | Containerized backend with auto-scaling support              |
| RDS (MySQL) | Database storage with high availability and failover support |


| Option      | AWS Amplify                   | CloudFront + S3                       |
| ----------- | ----------------------------- | ------------------------------------- |
| Deployment  | Built-in CI/CD                | Requires custom CI/CD setup           |
| CDN Support | Built-in                      | CloudFront (highest performance)      |
| Free Tier   | 5GB storage + 1000 build mins | 5GB S3 + 1TB/month CloudFront traffic |


| Option                    | ECS Fargate + ALB | Elastic Beanstalk                |
| ------------------------- | ----------------- | -------------------------------- |
| Deployment Method         | GitHub Actions    | CodePipeline / GitHub Actions    |
| Free Tier                 | 750 hours/month   | 750 hours/month                  |
| AWS Amplify Compatibility | Fully compatible  | Requires API Gateway integration |

| Option    | Amazon RDS                                     | Amazon Aurora                           |
| --------- | ---------------------------------------------- | --------------------------------------- |
| Features  | Easy to manage,<br> supports auto backup & updates | High performance, scalable, low latency |
| Free Tier | 750 hours                                      | 1GB storage + 25GB I/O requests         |



</td>
</tr>
</table>
  
---

## 📊 Entity-Relationship Diagram


![ER drawio (1)](https://github.com/user-attachments/assets/56443370-1f24-49f2-a882-500b90dc4d77)


---

## 🚀 Tech Stack

- **Backend Language**：Java 17
- **Framework**：Spring Boot 3.x
- **Database**：MySQL(via JPA)
- **Caching**：Redis
- **Authentication**：JWT(custom expiration, Filter-based verification)
- **Deployment**：Supports local Docker testing and AWS deployment
- **API Tools**：Postman / JMeter (for stress testing)
- **Additional Features**：
  - Search results cached via @Cacheable
  - Conditional Redis activation

---

## ✅  Completed Features

- [x] User registration / login (JWT authentication)
- [x] Product search (supports fuzzy matching)
- [x] Shopping cart (add, remove, quantity adjustment)
- [x] Redis caching for search results
- [x] Cache fallback: NoOpCacheManager used if Redis is offline
- [x] Spring Security Filter integration

---

## 🧪 High Concurrency Load Testing (JMeter)

| Metric                  | Without Cache (Raw DB) | With Redis Cache | Difference & Notes                           |
| ----------------------- | ---------------------- | ---------------- | -------------------------------------------- |
| Samples (#Samples)      | 2500                   | 2500             | Same test conditions                         |
| Average (ms)            | 1092                   | **10**           | ✅ **\~100x faster**                          |
| Median (ms)             | 1099                   | **6**            | ✅ Fast and stable                            |
| 90% Line (ms)           | 1443                   | **8**            | ✅ Latency greatly reduced with cache         |
| 95% Line (ms)           | 1526                   | **8**            |                                              |
| 99% Line (ms)           | 1900                   | **275**          | Still fast overall despite outliers          |
| Min Time (ms)           | 219                    | **0**            | Indicates instant cache response             |
| Max Time (ms)           | 2915                   | **275**          | ✅ No more tail latency ("long tail" removed) |
| Standard Deviation (ms) | 323                    | **76**           | ✅ Significantly less fluctuation             |
| Error Rate (%)          | 0%                     | 0%               | System remains stable                        |
| Throughput (req/s)      | 38.7                   | **41.7**         | Slight improvement (limited by thread count) |


