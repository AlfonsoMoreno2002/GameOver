import { useParams } from "react-router-dom";
import "./CriptoPague.css";
import useConsulta from "../../hooks/useConsulta";
import CriptoInfo from "./info/CriptoInfo";


const CriptoPague = () => {
  const params = useParams();

  const [cripto] = useConsulta(`productos/${params.id}`);
  

  return (
    <div className="cripto-page-container">
      
      {cripto && <CriptoInfo cripto={cripto}/>}
  
      
    </div>
  );
};
export default CriptoPague;
