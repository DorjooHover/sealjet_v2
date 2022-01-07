import style from '../styles/Info.module.css'
import Link from 'next/link'
function Info() {
  return (
    <div className={style.info}>
      <div className={style.info_title}>
        <h3>Мэдээ, мэдээлэл</h3>
        <Link href="/"><a>Бүгд <span><i className="fas fa-chevron-right"></i></span></a></Link>
        <Link href="/"><a className={style.mobile}> Бүгдийг харах <span><i className="fas fa-chevron-right"></i></span></a></Link>
      </div>
      <div className={style.infos}>
        <div className={style.infos_unit, style.infos_unit_1}>
          <div className={style.infos_unit_img, style.infos_unit_1_img}><img src="./img/info/mid-1.jfif" alt="" /></div>
          <div className={style.infos_unit_info}>
            <h2>Plants Around Us</h2>
            <a href="#" className={style.btn}>Дэлгэрэнгүй</a>
            <h3>"Дэвшилтэт технологи, шинжлэх ухааны ололтыг нэвтрүүлсэн шилдэг"</h3>
            <p>Монголын сальникийн үйлдвэрийн салбарт тэргүүлэгч "Сийл Жет Монгол"
            Монголын сальникийн үйлдвэрийн салбарт тэргүүлэгч "Сийл Жет Монгол"Монголын сальникийн үйлдвэрийн салбарт тэргүүлэгч "Сийл Жет Монгол"</p>
            <h6>11 сарын 16, 2021</h6>
          </div>
        </div>
        <div className={style.infos_unit}>
          <div className={style.infos_unit_img}><img src="./img/info/mid-1.jfif" alt="" /></div>
          <div className={style.infos_unit_info}>
            <h6>11 сарын 16, 2021</h6>
            <h3>“ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ"</h3>
            <a href="#" className={style.btn}>Дэлгэрэнгүй</a>
          </div>
        </div>
        <div className={style.infos_unit}>
          <div className={style.infos_unit_img}><img src="./img/info/mid-1.jfif" alt="" /></div>
          <div className={style.infos_unit_info}>
            <h6>11 сарын 16, 2021</h6>
            <h3>“ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ"</h3>
            <a href="#" className={style.btn}>Дэлгэрэнгүй</a>
            
          </div>
        </div>
        <div className={style.infos_unit}>
          <div className={style.infos_unit_img}><img src="./img/info/mid-1.jfif" alt="" /></div>
          <div className={style.infos_unit_info}>
            <h6>11 сарын 16, 2021</h6>
            <h3>“ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ"</h3>
            <a href="#" className={style.btn}>Дэлгэрэнгүй</a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info