import logo from '../../assets/images/logo.svg'
import CustomSvg from '../customSvg/customSvg.jsx'

function Navigation() {
  return (
    <div>
        <div><CustomSvg name="CG_Icon" /></div>
        <div><img src={logo}/></div>
    </div>
  )
}

export default Navigation