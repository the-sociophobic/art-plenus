import HeaderBody from './HeaderBody'


const Header = () => {
  return (
    <>
      <div className={`Header Header--relative mb-5`}>
        <HeaderBody />      
      </div>
      <div className={`Header Header--fixed`}>
        <HeaderBody />      
      </div>
    </>
  )
}


export default Header
