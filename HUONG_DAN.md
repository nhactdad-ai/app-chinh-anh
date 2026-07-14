# Hướng dẫn Chạy Ứng Dụng Photo Color Studio Pro

Chào bạn! Ứng dụng **Photo Color Studio Pro** đã được khởi tạo hoàn chỉnh trong thư mục này. Để chạy ứng dụng trực tiếp trên máy tính của bạn, vui lòng làm theo các bước đơn giản sau:

## Điều kiện cần chuẩn bị

Để chạy được ứng dụng Next.js/React trên máy tính cá nhân, bạn cần cài đặt **Node.js** (chương trình hỗ trợ chạy JavaScript ngoài trình duyệt):
1. Tải bộ cài đặt Node.js tại trang chủ: [https://nodejs.org/](https://nodejs.org/) (Chọn bản **LTS** khuyên dùng).
2. Chạy file tải về và nhấn Next liên tục để cài đặt.

---

## Hướng dẫn Khởi động ứng dụng (1 click)

Bạn chỉ cần nhấp đúp chuột vào file:
👉 **`start_app.bat`** (được lưu sẵn trong thư mục này).

File này sẽ tự động:
1. Kiểm tra xem máy tính của bạn đã cài đặt Node.js hay chưa.
2. Tự động chạy lệnh cài đặt thư viện (`npm install`).
3. Khởi tạo cơ sở dữ liệu nội bộ (`prisma generate`).
4. Khởi động server ảo tại máy tính và tự động mở trình duyệt web địa chỉ **[http://localhost:3000](http://localhost:3000)** để bạn sử dụng ứng dụng ngay lập tức.

---

## Hướng dẫn Chạy Thủ Công (Dành cho Lập trình viên)

Nếu bạn muốn chạy thủ công bằng Terminal hoặc Command Prompt, hãy mở thư mục dự án và thực hiện các lệnh sau:

1. **Cài đặt thư viện**:
   ```bash
   npm install
   ```
2. **Khởi tạo cơ sở dữ liệu mô phỏng**:
   ```bash
   npx prisma generate
   ```
3. **Khởi động Server phát triển**:
   ```bash
   npm run dev
   ```
4. Truy cập địa chỉ **[http://localhost:3000](http://localhost:3000)** trên trình duyệt Chrome, Edge hoặc Firefox.
