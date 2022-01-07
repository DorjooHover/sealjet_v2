import style from '../styles/Product.module.css'
import Link from 'next/link'
function Product() {
  return (
    <div className={style.product}>
      <div className={style.product_title}>
        <h3>Бүтээгдэхүүн</h3>
        <Link href="/"><a>Бүгд <span><i className="fas fa-chevron-right"></i></span></a></Link>
      </div>
      <div className={style.products}>
        <div className={style.products_unit}>
          <div className={style.products_unit_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.products_unit_info}>
            <h4>KO1-P</h4>
            <p>энгийн машины сальник</p>
            <h6>400,000₮</h6>
          </div>
        </div>
        <div className={style.products_unit}>
          <div className={style.products_unit_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.products_unit_info}>
            <h4>KO1-P</h4>
            <p>энгийн машины сальник</p>
            <h6>400,000₮</h6>
          </div>
        </div>
        <div className={style.products_unit}>
          <div className={style.products_unit_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.products_unit_info}>
            <h4>KO1-P</h4>
            <p>энгийн машины сальник</p>
            <h6>400,000₮</h6>
          </div>
        </div>
        <div className={style.products_unit}>
          <div className={style.products_unit_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.products_unit_info}>
            <h4>KO1-P</h4>
            <p>энгийн машины сальник</p>
            <h6>400,000₮</h6>
          </div>
        </div>
        <div className={style.products_unit}>
          <div className={style.products_unit_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.products_unit_info}>
            <h4>KO1-P</h4>
            <p>энгийн машины сальник</p>
            <h6>400,000₮</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product