import Footer from "../component/Footer"
import Header from "../component/Header"

const HomePage = {
    render(){
        return /* html */`
            <div class="container">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <main class="main">
        <!--==================== HOME ====================-->
        <section class="home" id="home">
            <div class="home__container container grid">
                <img src="assets/img/home.png" alt="" class="home__img">

                <div class="home__data">
                    <h1 class="home__title">
                        Thực vật sẽ làm cuộc sống của bạn tốt hơn
                    </h1>
                    <p class="home__description">
                        Thiết kế thực vật đáng kinh ngạc cho văn phòng hoặc dự án của bạn. Thêm sự tươi mới cho
                        những ý tưởng mới của bạn.
                    </p>
                    <a href="#about" class="button button--flex">
                        Khám Phá <i class="ri-arrow-right-down-line button__icon"></i>
                    </a>
                </div>

                <div class="home__social">
                    <span class="home__social-follow">Follow Us</span>

                    <div class="home__social-links">
                        <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" class="home__social-link">
                            <i class="ri-twitter-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!--==================== ABOUT ====================-->
        <section class="about section container" id="about">
            <div class="about__container grid">
                <img src="assets/img/about.png" alt="" class="about__img">

                <div class="about__data">
                    <h2 class="section__title about__title">
                        Chúng tôi là ai & <br>
                        tại sao chọn chúng tôi
                    </h2>

                    <p class="about__description">
                        Chúng tôi có hơn 4000 đánh giá không thiên vị và khách hàng của chúng tôi luôn tin tưởng vào quy
                        trình nhà máy và dịch vụ giao hàng của chúng tôi
                    </p>

                    <div class="about__details">
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i>
                            Chúng tôi luôn giao hàng đúng hẹn.
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i>
                            Chúng tôi cung cấp cho bạn những hướng dẫn để bảo vệ và chăm sóc cây trồng.
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i>
                            Chúng tôi luôn đến và kiểm tra sau khi bán hàng.
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i>
                            100% hoàn lại tiền nếu chất lượng không đảm bảo.
                        </p>
                    </div>

                    <a href="#" class="button--link button--flex">
                        Mua Ngay <i class="ri-arrow-right-down-line button__icon"></i>
                    </a>
                </div>
            </div>
        </section>

        <!--==================== STEPS ====================-->
        <section class="steps section container">
            <div class="steps__bg">
                <h2 class="section__title-center steps__title">
                    Các bước để bắt đầu <br>
                    trồng cây
                </h2>

                <div class="steps__container grid">
                    <div class="steps__card">
                        <div class="steps__card-number">01</div>
                        <h3 class="steps__card-title">Chọn giống cây</h3>
                        <p class="steps__card-description">
                            Chúng tôi có một số giống cây mà bạn có thể lựa chọn.
                        </p>
                    </div>

                    <div class="steps__card">
                        <div class="steps__card-number">02</div>
                        <h3 class="steps__card-title">Đặt hàng</h3>
                        <p class="steps__card-description">
                            Sau khi đơn hàng của bạn được đặt xong, chúng ta chuyển sang bước tiếp theo là vận chuyển.
                        </p>
                    </div>

                    <div class="steps__card">
                        <div class="steps__card-number">03</div>
                        <h3 class="steps__card-title">Nhận cây giao</h3>
                        <p class="steps__card-description">
                            Quá trình giao hàng của chúng tôi rất dễ dàng, nhận cây trực tiếp tại nhà.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!--==================== PRODUCTS ====================-->
        <section class="product section container" id="products">
            <h2 class="section__title-center">
                Sản phẩm <br> của chúng tôi
            </h2>

            <p class="product__description">
                Dưới đây là một số cây được chọn từ phòng trưng bày của chúng tôi, tất cả đều có hình dáng đẹp và có
                tuổi thọ cao. Mua và tận hưởng chất lượng tốt nhất.
            </p>

            <div class="product__container grid">
                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product1.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Xương Rồng</h3>
                    <span class="product__price">100.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product2.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Xương Rồng </h3>
                    <span class="product__price">140.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product3.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Lô Hội</h3>
                    <span class="product__price">50.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product4.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Sen Đá</h3>
                    <span class="product__price">40.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product5.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Lưỡi Hổ</h3>
                    <span class="product__price">130.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>

                <article class="product__card">
                    <div class="product__circle"></div>

                    <img src="assets/img/product6.png" alt="" class="product__img">

                    <h3 class="product__title">Cây Lá Rứa Nhật</h3>
                    <span class="product__price">70.000 đ</span>

                    <button class="button--flex product__button">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </article>
            </div>
        </section>

        <!--==================== QUESTIONS ====================-->
        <section class="questions section" id="faqs">
            <h2 class="section__title-center questions__title container">
                Một số câu hỏi phổ biến<br> thường được hỏi
            </h2>

            <div class="questions__container container grid">
                <div class="questions__group">
                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Hoa của tôi đang rụng hay đang chết?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>

                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Nguyên nhân nào làm cho lá cây trở nên nhợt nhạt?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>

                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Nguyên nhân làm cho lá giòn có màu nâu?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="questions__group">
                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Làm thế nào để tôi chọn loại hạt giống?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>

                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Làm cách nào để thay chậu?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>

                    <div class="questions__item">
                        <header class="questions__header">
                            <i class="ri-add-line questions__icon"></i>
                            <h3 class="questions__item-title">
                                Tại sao những con côn trùng bay xung quanh cây của tôi?
                            </h3>
                        </header>

                        <div class="questions__content">
                            <p class="questions__description">
                                Thực vật là cách dễ dàng để thêm năng lượng màu sắc và biến đổi
                                không gian nhưng hành tinh nào dành cho bạn. Chọn loại cây phù hợp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--==================== CONTACT ====================-->
        <section class="contact section container" id="contact">
            <div class="contact__container grid">
                <div class="contact__box">
                    <h2 class="section__title">
                        Liên hệ với chúng tôi <br>
                        thông qua địa chỉ dưới đây
                    </h2>

                    <div class="contact__data">
                        <div class="contact__information">
                            <h3 class="contact__subtitle">Gọi cho chúng tôi?</h3>
                            <span class="contact__description">
                                <i class="ri-phone-line contact__icon"></i>
                                0981925873
                            </span>
                        </div>

                        <div class="contact__information">
                            <h3 class="contact__subtitle">Gửi Email cho chúng tôi?</h3>
                            <span class="contact__description">
                                <i class="ri-mail-line contact__icon"></i>
                                ductienga2001@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <form action="" class="contact__form">
                    <div class="contact__inputs">
                        <div class="contact__content">
                            <input type="email" placeholder=" " class="contact__input">
                            <label for="" class="contact__label">Email</label>
                        </div>

                        <div class="contact__content">
                            <input type="text" placeholder=" " class="contact__input">
                            <label for="" class="contact__label">Chủ đề</label>
                        </div>

                        <div class="contact__content contact__area">
                            <textarea name="message" placeholder=" " class="contact__input"></textarea>
                            <label for="" class="contact__label">Message</label>
                        </div>
                    </div>

                    <button class="button button--flex">
                        Gửi tin nhắn
                        <i class="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </form>
            </div>
        </section>
    </main>

                
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `
    }
}

export default HomePage