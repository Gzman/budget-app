import { useState } from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"

const ColapseWrapper = ({ title, maxWidth, children }) => {
    const currentWindowSize = useWindowSize();
    const [renderForm, setRenderForm] = useState(false);

    if (currentWindowSize.vw > maxWidth) {
        return children;
    }

    return (
        <div className="colapse-wrapper">
            <div className="colapse-wrapper-header" onClick={() => setRenderForm(render => !render)}>
                <p className="colapse-wrapper-title" >{title}</p>
                {renderForm ? <RiArrowUpSLine fontSize="1.25rem" /> : <RiArrowDownSLine fontSize="1.25rem" />}
            </div>
            {renderForm && children}
        </div>
    )
}

export { ColapseWrapper }