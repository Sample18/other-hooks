import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const ListWrapper = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            num: i + 1
        };
        return React.cloneElement(child, config);
    });
};

ListWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ListWrapper>
                <Component />
                <Component />
                <Component />
            </ListWrapper>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div> {num} Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
