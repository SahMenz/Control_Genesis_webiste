import CustomSvg from '../customSvg/CustomSvg'
import logo from '../../assets/images/logo.svg'

function Navigation() {
  return (
    <div>
        <div><CustomSvg name="logo" /></div>
        <div><img src={logo}/></div>
    </div>
  )
}

export default Navigation