import Footer from "./Footer"
import Navbar from "./Navbar"
import { Layout as LayOut } from 'antd';
const Layout = ({ children }:any) => {
  return (
    <LayOut>
      <Navbar />
      { children }
      <Footer />
    </LayOut>
  );
}
 
export default Layout;