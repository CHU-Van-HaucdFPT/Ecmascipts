const Header = {
    render(){
        return `
            
<!DOCTYPE html>
<html>
  <head>
    <title>BINGO</title>
    <style>
      /* header styles */
      header {
        background-color: #333;
        color: #fff;
        padding: 20px;
      }

      header h1 {
        margin: 0;
        font-size: 36px;
      }

      header p {
        margin: 0;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>BINGO</h1>
           <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">Trang Chủ</a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">Giới Thiệu</a>
                    </li>
                    <li class="nav__item">
                        <a href="#products" class="nav__link">Sản Phẩm</a>
                    </li>
                    <li class="nav__item">
                        <a href="#faqs" class="nav__link">FAQs</a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link">Liên Hệ</a>
                    </li>
                </ul>

                <div class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>
            </div>
    </header>
    <main>
      <!-- your page content here -->
    </main>
  </body>
</html>

        `
    }
}

export default Header;