import NavStyle from '../styles/Nav.module.css'

 function Nav() {
  return (
    <>
    <div className={NavStyle.nav}>
      <div className={NavStyle.nav_img}><img src="./img/logo.jpg" alt="" /></div>
      <ul>
        <li><a className={NavStyle.active} href="#">Нүүр</a></li>
        <li><a href="#product">Бүтээгдэхүүн</a></li>
        <li><a href="#info">Мэдээ</a></li>
        <li><a href="#contact">Холбоо</a></li>
        <li><a href="#order">Захиалах</a></li>
      </ul>
      <form action="" method='post'><input className={NavStyle.search} type="text" /><span><i className="fas fa-search"></i></span>
      <input type="checkbox" className={NavStyle.hamburger} id="hamburger" /><label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
      </form>
      
    </div>
    </>
  )
}

export default Nav