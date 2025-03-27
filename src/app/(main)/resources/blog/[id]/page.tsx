import Breadcrumb from "@/components/Breadcrumbs";
import { IBlog } from "@/types";
import { Avatar, Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TableOfContents from "@/components/page/blog/TableOfContents";
import Banner from "@/components/page/blog/Banner";
import Image from "next/image";
import ReactionFeedback from "@/components/page/blog/ReactionFeedback";
import { mockBlog } from "../page";
import BlogCard from "@/components/page/blog/BlogCard";
import ZaloIcon from "@/assets/icons/share-1.svg";
import FacebookIcon from "@/assets/icons/share-2.svg";
import TwitterIcon from "@/assets/icons/share-3.svg";
import LinkedInIcon from "@/assets/icons/share-4.svg";
import CopyLinkIcon from "@/assets/icons/share-5.svg";

const data: IBlog = {
    id: 1,
    title: "Quy Trình 5S Là Gì, Cách Ứng Dụng Hiệu Quả Nên Biết",
    author: "FOSO creator",
    createdAt: "2023-02-15T14:15:30Z",
    updatedAt: "2023-02-15T16:00:45Z",
    thumbnail: "/images/blog_banner1.png",
    category: "Quản Lý Sản Xuất",
    toc: [
        { title: "1. Quy trình 5S là gì?", id: "quy-trinh-5s-la-gi" },
        {
            title: "2. Lợi ích quy trình 5S đem lại",
            id: "loi-ich-quy-trinh-5s",
        },
        {
            title: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            id: "tai-sao-ap-dung-5s",
            subToC: [
                {
                    title: "3.1 Cải thiện rõ nét môi trường làm việc",
                    id: "3_1",
                },
                {
                    title: "3_2 Tiết kiệm thời gian đáng kể",
                    id: "tiet-kiem-thoi-gian",
                },
                { title: "3.3 Tăng năng suất làm việc", id: "3_3" },
                { title: "3.4 Tiết kiệm chi phí", id: "3_4" },
                {
                    title: "3.5 Tăng chất lượng sản phẩm",
                    id: "3_5",
                },
            ],
        },
        {
            title: "4. Quy trình 5S gồm các bước",
            id: "quy-trinh-5s-buoc",
            subToC: [
                { title: "4.1 Seiri (Ngăn nắp)", id: "seiri" },
                { title: "4.2 Seiton (Sắp xếp)", id: "seiton" },
                { title: "4.3 Seiso (Vệ sinh)", id: "seiso" },
                { title: "4.4 Seiketsu (Tiêu chuẩn hóa)", id: "seiketsu" },
                { title: "4.5 Shitsuke (Kỷ luật)", id: "shitsuke" },
            ],
        },
        {
            title: "5. Quy trình thực hiện như sau",
            id: "quy-trinh-thuc-hien",
            subToC: [
                { title: "5.1 Giai đoạn chuẩn bị", id: "5_1" },
                { title: "5.2 Triển khai rộng rãi", id: "5_2" },
                {
                    title: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
                    id: "5_3",
                },
                {
                    title: "5.4 Sàng lọc, sắp xếp và đánh giá",
                    id: "5_4",
                },
                { title: "5.5  giá", id: "5_5" },
            ],
        },
        { title: "6. Quy trình 5S có giống với Kaizen?", id: "5s-vs-kaizen" },
        { title: "7. Đối tượng nào nên áp dụng 5S?", id: "doi-tuong-ap-dung" },
        {
            title: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            id: "yeu-to-thanh-cong",
        },
    ],
    content: `
    <div style="margin: 20px 0 0">
        <img src="/images/blog-1.png" styles="width: 100%" alt="Quy trình 5S"/>
        <p style="font-size: 14px; text-align: center; margin: 10px 0 40px;">Quy trình 5s là gì?</p>
    <div/>
    <p><em>Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? 
    Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</em></p>

    <h2 id="quy-trinh-5s-la-gi"><span style="color: #008000;">1. Quy trình 5S là gì?</span></h2>
    <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.</p>
    <p>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. 
    Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>
    
    <ul>
        <li><span style="color: #008000;">Seiri</span> (Ngăn nắp)</li>
        <li><span style="color: #008000;">Seiso</span> (Sạch sẽ)</li>
        <li><span style="color: #008000;">Seiton</span> (Trật tự)</li>
        <li><span style="color: #008000;">Shitsuke</span> (Kỷ luật)</li>
        <li><span style="color: #008000;">Seiketsu</span> (Tiêu chuẩn hóa)</li>
    </ul>

    <h2 id="loi-ich-quy-trinh-5s"><span style="color: #008000;">2. Lợi ích quy trình 5S đem lại</span></h2>
    <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.</p>
    <p>Khi doanh nghiệp áp dụng quy trình vào tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo quy tắc logic. 
    Nó nhất định sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.</p>
    <p>Khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần tạo nên một văn hóa doanh nghiệp tích cực.</p>
    
    <div style="margin: 20px 0 0">
        <img src="/images/blog-2.png" styles="width: 100%" alt="Quy trình 5S"/>
        <p style="font-size: 14px; text-align: center; margin: 10px 0 40px;">Tại sao doanh nghiệp cần quy trình 5s?</p>
    <div/>
    <h2 style="color: #008000; font-weight: bold;" id="tai-sao-ap-dung-5s">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>

    <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>

    <h3 style="color: #008000; font-weight: bold;" id="3_1">3.1 Cải thiện rõ nét môi trường làm việc</h3>
    <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho các cá nhân trong doanh nghiệp.</p>

    <h3 style="color: #008000; font-weight: bold;" id="3_2">3.2 Tiết kiệm thời gian đăng ký</h3>
    <p>Doanh nghiệp áp dụng quy trình này tốt, doanh nghiệp giảm được thời gian đăng ký khi không còn mất nhiều thời gian tìm kiếm đồ đạc, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ điều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng hơn.</p>

    <h3 style="color: #008000; font-weight: bold;" id="3_3">3.3 Tăng năng suất làm việc</h3>
    <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các công cụ, thiết bị và tài liệu. Điều này giúp tiết kiệm thời gian và tăng năng suất làm việc.</p>

    <h3 style="color: #008000; font-weight: bold;" id="3_4">3.4 Tiết kiệm chi phí</h3>
    <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>

    <h3 style="color: #008000; font-weight: bold;" id="3_5">3.5 Tăng chất lượng sản phẩm</h3>
    <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.</p>
        
    <div style="margin: 20px 0 0">
        <img src="/images/blog-3.png" styles="width: 100%" alt="Quy trình 5S"/>
        <p style="font-size: 14px; text-align: center; margin: 10px 0 40px;">Quy trình 5s gồm các bước</p>
    <div/>
    <h2 style="color: #008000; font-weight: bold;" id="quy-trinh-5s-buoc">4. Quy trình 5S gồm các bước</h2>

    <p>5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:</p>

    <h3 style="color: #008000; font-weight: bold;" id="4_1">4.1 Seiri (Ngăn nắp)</h3>
    <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp. Nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.</p>

    <h3 style="color: #008000; font-weight: bold;" id="4_2">4.2 Seiton (Sắp xếp)</h3>
    <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>

    <h3 style="color: #008000; font-weight: bold;" id="4_3">4.3 Seiso (Vệ sinh)</h3>
    <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mọi nhân viên.</p>

    <h3 style="color: #008000; font-weight: bold;" id="4_4">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
    <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.</p>

    <h3 style="color: #008000; font-weight: bold;" id="4_5">4.5 Shitsuke (Kỷ luật)</h3>
    <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
    
    <div style="margin: 20px 0 0">
        <img src="/images/blog-4.png" styles="width: 100%" alt="Quy trình 5S"/>
        <p style="font-size: 14px; text-align: center; margin: 10px 0 40px;">Quy trình 5s gồm các bước</p>
    <div/>
    <h2 style="color: #008000; font-weight: bold;" id="5s-vs-kaizen">5. Quy trình được thực hiện như sau:</h2>

    <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>

    <h3 style="color: #008000; font-weight: bold;" id="5_1">5.1 Giai đoạn chuẩn bị</h3>
    <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực cũng như điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bố cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>

    <h3 style="color: #008000; font-weight: bold;" id="5_2">5.2 Triển khai rộng rãi</h3>
    <p>Đưa tiến doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>

    <h3 style="color: #008000; font-weight: bold;" id="5_3">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
    <p>Đây là bước để khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.</p>

    <h3 style="color: #008000; font-weight: bold;" id="5_4">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
    <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.</p>

    <h3 style="color: #008000; font-weight: bold;" id="5_5">5.5 Đánh giá</h3>
    <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.</p>

    <h2 style="color: #008000; font-weight: bold;" id="5s-vs-kaizen">6. Quy trình 5S có giống với Kaizen?</h2>

    <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>

    <blockquote style="font-style: italic; background: #f0f0f0; padding: 10px; border-left: 4px solid #008000;">
        Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. <br>
        Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.
    </blockquote>
    <blockquote style="font-style: italic; background: #f0f0f0; padding: 10px; border-left: 4px solid #008000;">
        Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
    </blockquote>

    <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. 5S sẽ thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho hoạt động cải tiến tiếp theo.</p>

    <h2 style="color: #008000; font-weight: bold;"id="doi-tuong-ap-dung">7. Đối tượng nào nên áp dụng 5S?</h2>

    <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, nó đặc biệt có thể dành cho doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức giáo dục và các doanh nghiệp nhỏ.</p>

    <p>Các đơn vị có xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.</p>
        
    <div style="margin: 20px 0 0">
        <img src="/images/blog-5.png" styles="width: 100%" alt="Quy trình 5S"/>
        <p style="font-size: 14px; text-align: center; margin: 10px 0 40px;">Các yếu tố tạo nên thành công cho quy trình 5s</p>
    <div/>
    <h2 style="color: #008000; font-weight: bold;" id="yeu-to-thanh-cong">8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>

    <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:</p>

    <ul>
        <li><strong>Lãnh đạo</strong> có cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.</li>
        <li><strong>Chương trình, kế hoạch thực hiện quy trình</strong>: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.</li>
        <li><strong>Sự tự nguyện tham gia của toàn thể nhân viên</strong>: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
    </ul>

    <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý mà mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>

    `,
};
const shares = [
    {
        id: 1,
        name: "Facebook",
        icon: ZaloIcon,
    },
    {
        id: 2,
        name: "Twitter",
        icon: FacebookIcon,
    },
    {
        id: 3,
        name: "Linkedin",
        icon: TwitterIcon,
    },
    {
        id: 4,
        name: "Twitter",
        icon: LinkedInIcon,
    },
    {
        id: 5,
        name: "Linkedin",
        icon: CopyLinkIcon,
    },
];
function Page() {
    return (
        <>
            <div className="max-1920:max-w-[1440px] max-w-[1800px] 1920:w-[80%] w-[90%] mx-auto lg:grid !lg:grid-cols-[2fr_1fr] flex flex-col gap-8">
                <div className="lg:col-span-2">
                    <Breadcrumb />
                </div>
                <div className="">
                    <div className="flex flex-col gap-3">
                        <p className="bg-[#E2F0FE] text-[#0F4F9E] w-fit px-1 py-2 rounded-lg font-medium text-[9px] md:text-[12px]">
                            {data.category}
                        </p>
                        <p className=" text-4xl font-extrabold">{data.title}</p>
                        <div className=" flex items-center justify-between gap-3">
                            <div className=" flex items-center">
                                <Avatar
                                    alt="Remy Sharp"
                                    sx={{ borderRadius: "40px" }}
                                    src="/images/author.png"
                                />
                                <div className=" flex flex-col justify-center">
                                    <p>Tác giả</p>
                                    <p>{data.author}</p>
                                </div>
                            </div>
                            <div>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    color="gray"
                                >
                                    <CalendarMonthIcon fontSize="small" />
                                    <p className=" text-[12px] md:text-base">
                                        {new Date(
                                            data.createdAt
                                        ).toLocaleDateString()}
                                    </p>
                                    <AccessTimeIcon fontSize="small" />
                                    <p className=" text-[12px] md:text-base">
                                        10 phút đọc
                                    </p>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                        <div className=" 2xl:fixed z-50 lg:top-[100px] lg:left-10 flex flex-col max-2xl:mt-10 gap-2 ">
                            <p className="font-extrabold">Chia sẻ</p>
                            <div className=" flex 2xl:flex-col items-center gap-2">
                                {shares.map((item) => (
                                    <div
                                        key={item.id}
                                        className=" p-3 rounded-xl border border-[#15AA7A] hover:cursor-pointer bg-white"
                                    >
                                        <div className=" relative w-8 h-8">
                                            <Image
                                                src={item.icon}
                                                alt="Zalo"
                                                fill
                                                sizes="100vh"
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ReactionFeedback />
                </div>
                <div className=" lg:flex flex-col justify-start gap-10 hidden">
                    <TableOfContents toc={data.toc || []} />
                    <Banner
                        className="rounded-[24px] overflow-hidden py-10 1350:w-[366px] w-[250px] "
                        thumbnail="/images/blog_banner2.png"
                        col
                        element={
                            <div className=" flex items-center justify-between gap-2 max-2xl:w-full max-2xl:justify-center">
                                <div className=" relative w-[136px] aspect-square">
                                    <Image
                                        src="/images/blog_banner-sub1.png"
                                        alt=""
                                        fill
                                    />
                                </div>
                                <div className=" flex flex-col gap-3 items-end">
                                    <p className=" text-xl font-bold">
                                        Miễn phí dùng thử
                                    </p>
                                    <div className=" relative w-[154px] aspect-[154/45]">
                                        <Image
                                            src="/images/blog_banner-sub2.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                        btText="Trải nghiệm ngay"
                        imageSize=" lg:h-[262px] ml-3 w-full"
                    />
                    <Banner
                        className="rounded-[24px] overflow-hidden  py-10  1350:w-[366px] w-[250px]"
                        des="Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!"
                        thumbnail="/images/Group.png"
                        imageSize="xl:h-[383px] lg:h-[286px]  w-full"
                        col
                    />
                </div>
                <div className="lg:col-span-2 ">
                    <p className=" text-3xl font-extrabold">
                        Bài viết liên quan
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                        {mockBlog.slice(0, 3).map((item) => {
                            return <BlogCard key={item.id} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
