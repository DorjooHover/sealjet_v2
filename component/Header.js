import style from '../styles/Header.module.css'

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_info}>
        <h2>Сальникийн төрөлжсөн дэлгүүр</h2>
        <p>Монгол - Австрийн хамтарсан Сийл Жет Монгол ХХК нь 2003 оноос эхлэн бүх төрлийн авто машин, техник тоног төхөөрөмжийн нягтруулагч цагираг, жийргэвч  ( сальник )-ийг үйлдвэрлэн дотоодын зах зээлд нийлүүлж байна. </p>
      </div>
      <div className={style.header_img}><span></span><img src="./img/main/back1.png" alt="" /></div>
    </div>
  )
}

export default Header