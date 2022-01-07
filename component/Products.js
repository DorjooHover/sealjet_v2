import style from '../styles/Products.module.css'

function Products() {
  return (
    <div className={style.product_}>
      <div className={style.product__info}>
        <div className={style.product__info_main}>
          <div className={style.product__info_main_img}><img src="./img/product/product_1.jpg" alt="" /></div>
          <div className={style.product__info_main_info}>
            <div className={style.status}>
              <p className={style.t}>-30C... +100C</p>
              <p className={style.v}>0.5m/s</p>
            </div>
            <div className={style.status}>
              <p className={style.t}>-30C... +100C</p>
              <p className={style.v}>0.5m/s</p>
            </div>
            <div className={style.status}>
              <p className={style.t}>-30C... +100C</p>
              <p className={style.v}>0.5m/s</p>
            </div>
            <div className={style.status}>
              <p className={style.t}>-30C... +100C</p>
              <p className={style.v}>0.5m/s</p>
            </div>
          </div>
        </div>
        <div className={style.product__info_other}>
          <div className={style.product__info_other_info}>
            <div className={style.product__info_other_info_img}><img src="./img/product/product_1.jpg" alt="" /></div>
            <h5>K01-P</h5>
          </div>
          <div className={style.product__info_other_info}>
            <div className={style.product__info_other_info_img}><img src="./img/product/product_1.jpg" alt="" /></div>
            <h5>K01-P</h5>
          </div>
          <div className={style.product__info_other_info}>
            <div className={style.product__info_other_info_img}><img src="./img/product/product_1.jpg" alt="" /></div>
            <h5>K01-P</h5>
          </div>
          <div className={style.product__info_other_info}>
            <div className={style.product__info_other_info_img}><img src="./img/product/product_1.jpg" alt="" /></div>
            <h5>K01-P</h5>
          </div>
        </div>
      </div>
      <div className={style.product__title}>
        <h1>K01-P</h1>
        <p>Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник. Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.</p>
        <a href="" className={style.btn}>дэлгэрэнгүй</a>
      </div>
    </div>
  )
}

export default Products
