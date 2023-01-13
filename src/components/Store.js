import '../styles/main.scss';
import '../styles/store.scss'
import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

function Store() {
  return (
    <div className="Store">

      <Sidebar />
      <ProductsContainer />

    </div>
  );
}

function ProductsContainer() {
  return (
    <div className="products-container">

      <ProductCard
        id='1'
        name='Miya'
        price='9.1347'
      />

    </div>
  )
}

function ProductCard(props) {
  return (
    <div className="product-card" id={props.id}>
      <img src={require(`../img/NFTs/${props.id}.png`)} />
      <div class="product-description">
        <p class="product-title">DigiDaigaku #{props.id} - {props.name}</p>
        <div class="product-price">
          <p>Precio</p>
          <FaEthereum className="ether-icon" /> <p class="price">{props.price}</p>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="Sidebar">

      <PriceFilter />
      <NameFilter />
      <UnusedFilters />

    </div>
  )
}

function PriceFilter() {
  return (
    <>
      <div className="filter" id="price-filter">
        <p>Precio</p> <BsCaretDownFill className='price-filter__arrowdown' />
        <BsFillCaretUpFill className='price-filter__arrowup hidden' />
      </div>
      <div className="price-filter__input hidden">
        <input type="number" id="min" placeholder="min" />
        <input type="number" id="max" placeholder="max" />
      </div>
    </>
  )
}

function NameFilter() {
  return (
    <>
      <div className="filter" id="name-filter">
        <p>Nombre</p> <BsCaretDownFill className='name-filter__arrowdown' />
        <BsFillCaretUpFill className='name-filter__arrowup hidden' />
      </div>
      <div className="name-filter__input hidden">
        <p id="Miya">Miya</p>
        <p id="Rina">Rina</p>
        <p id="Aubreeanna">Aubreeanna</p>
        <p id="Yeeun">Yeeun</p>
        <p id="Kotoko">Kotoko</p>
        <p id="Sinead">Sinead</p>
        <p id="Ataya">Ataya</p>
        <p id="JiaYi">JiaYi</p>
        <p id="ZhiLei">ZhiLei</p>
      </div>
    </>
  )
}

function UnusedFilters() {
  return (
    <>
      <div className="filter" id="accesory-filter">
        <p>Accesorio</p> <BsCaretDownFill />
      </div>
      <div className="accesory-filter__input hidden">
        <label>
          <input type="checkbox" id="sea-life" value="Sea life" /> Sea life
        </label>
        <label>
          <input type="checkbox" id="headphones" value="headphones" /> headphones
        </label>
      </div>

      <div className="filter" id="background-filter">
        <p>Fondo</p> <BsCaretDownFill />
      </div>

      <div className="filter" id="expression-filter">
        <p>Expresión</p> <BsCaretDownFill />
      </div>

      <div className="filter" id="haircut-filter">
        <p>Peinado</p> <BsCaretDownFill />
      </div>

      <div className="filter" id="outfit-filter">
        <p>Ropa</p> <BsCaretDownFill />
      </div>
    </>
  )
}

export default Store;
