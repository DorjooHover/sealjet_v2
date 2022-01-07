import style from '../styles/Contact.module.css'

function Contact() {
  return(
    <div className={style.contact}>
      <div className={style.contact_title}>
        <h3>Хаяг байршил:</h3>
        <p>109-2, 13th microregion, Narnii zam, 25th khoroo, Улаанбаатар 13374</p>
      </div>
      <div className={style.contact_map}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10697.65080797846!2d106.9347864!3d47.9090515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9216d2241acc9e8c!2sSealjet%20Mongolia!5e0!3m2!1sen!2smn!4v1639385853369!5m2!1sen!2smn" loading="lazy"></iframe></div>
      <div className={style.contacts}>
        <div>
          <h4>Компани</h4>
          <ul>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Modern Slavery</a></li>
          </ul>
        </div>
        <div>
          <h4>Компани</h4>
          <ul>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Modern Slavery</a></li>
          </ul>
        </div>
        <div>
          <h4>Компани</h4>
          <ul>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Modern Slavery</a></li>
          </ul>
        </div>
        <div>
          <h4>Холбоо барих</h4>
          <a href="tel:+97677119596"><span><i className="fas fa-phone"></i></span>7711 9596</a>
        </div>
      </div>

    </div>
  )
}

export default Contact