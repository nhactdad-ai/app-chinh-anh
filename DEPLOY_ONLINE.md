# Hướng dẫn Đưa Ứng Dụng Lên Online (Deploy Online)

Để đưa ứng dụng **Photo Color Studio Pro** lên mạng chạy thử (hoàn toàn miễn phí), phương pháp tối ưu và nhanh chóng nhất là sử dụng **Vercel** (nền tảng đám mây chính thức hỗ trợ Next.js).

---

## ⚡ Ưu điểm nổi bật của mã nguồn hiện tại
> [!NOTE]
> Mã nguồn đã được thiết kế **phòng vệ lỗi kết nối cơ sở dữ liệu**. Điều này có nghĩa là khi bạn deploy lên online:
> - Bạn **không bắt buộc** phải thiết lập database PostgreSQL ngay lập tức.
> - Ứng dụng vẫn sẽ hoạt động mượt mà, lưu trữ dữ liệu ảnh và lịch sử chỉnh sửa trực tiếp trên trình duyệt của người dùng (thông qua IndexedDB).
> - Bạn có thể thử nghiệm đầy đủ các tính năng WebGL, Presets, AI và Xuất ảnh mà không cần tốn chi phí thuê database!

---

## Các bước đưa lên Vercel (Miễn phí)

### Bước 1: Đưa mã nguồn lên GitHub (hoặc GitLab / Bitbucket)
1. Truy cập [GitHub.com](https://github.com/) và tạo một tài khoản (nếu chưa có).
2. Tạo một **Repository** mới (đặt ở chế độ Private hoặc Public).
3. Đẩy thư mục mã nguồn này lên GitHub repository vừa tạo.
   *(Nếu chưa biết cách sử dụng Git, bạn có thể tải ứng dụng **GitHub Desktop** để kéo thả thư mục dự án và tải lên chỉ với vài click).*

### Bước 2: Liên kết và Deploy trên Vercel
1. Truy cập trang chủ [Vercel.com](https://vercel.com/) và đăng ký tài khoản miễn phí (Chọn đăng nhập bằng tài khoản **GitHub** để tự động đồng bộ).
2. Tại màn hình Dashboard của Vercel, nhấn **"Add New"** -> chọn **"Project"**.
3. Danh sách các Repository trên GitHub của bạn sẽ hiện ra. Nhấn nút **"Import"** cạnh tên dự án `stitch_luminary_pro_photo_editor`.
4. Trong màn hình cấu hình dự án:
   - Mục *Framework Preset*: Vercel sẽ tự động nhận diện là **Next.js**.
   - Các mục khác giữ nguyên.
5. Nhấn nút **"Deploy"**.

Vercel sẽ tự động tải thư viện, biên dịch mã nguồn và cấp cho bạn một đường dẫn (domain) dạng `https://ten-du-an.vercel.app` để chạy thử trực tuyến và chia sẻ cho người khác trong vòng 2-3 phút!

---

## Thiết lập PostgreSQL (Nếu muốn đồng bộ tài khoản đồng bộ Cloud)

Nếu bạn muốn chạy thử tính năng đồng bộ hóa cơ sở dữ liệu đám mây (PostgreSQL):
1. Tạo một cơ sở dữ liệu PostgreSQL miễn phí trên [Neon.tech](https://neon.tech/) hoặc [Supabase.com](https://supabase.com/).
2. Sao chép chuỗi kết nối (Connection String) dạng: `postgresql://...`
3. Tại trang quản lý dự án trên **Vercel**, vào mục **Settings** -> **Environment Variables**.
4. Thêm một biến môi trường mới:
   - **Key**: `DATABASE_URL`
   - **Value**: Dán chuỗi kết nối vừa sao chép ở trên.
5. Thực hiện Redeploy lại dự án để Vercel cập nhật kết nối cơ sở dữ liệu mới.
