import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogout}>
            Logout
        </button>
    );
};
LogOutButton.propTypes = {
    onLogout: PropTypes.func
};
function areEqual(prevState, nextState) {
    if (prevState.onLogout !== nextState.onLogout) {
        return false;
    }
    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogout={handleLogout} />
        </>
    );
};

export default MemoWithUseCallbackExample;
