import logo from "../../Images/logo.png"

import { Spinner } from 'reactstrap';

const LoadingPage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: '100vh' }}>
            <div>
                <img src={logo} width={200} alt="ICON"/>
            </div>
            <div>
                <Spinner color="dark" style={{ height: "80px", width: "80px" }} />
            </div>


        </div>
    )
}

export default LoadingPage
