import CustomSvg from '../customSvg/CustomSvg'
import CG_Icon from '../../assets/images/CG_Icon.svg'

function Navigation() {
  return (
    <div>
        <div><CustomSvg name="logo" /></div>
        <div><img src={CG_Icon}/></div>
    </div>
  )
}

export default Navigation