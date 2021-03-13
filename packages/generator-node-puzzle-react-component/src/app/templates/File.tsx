import React from "react";

interface Props {
    name?: string;
}

const <%= appname%>: React.FC<Props> = (props: Props) => {
    return <div>{props.name}</div>;
};

<%= appname%>.defaultProps = {
    name: "",
};

export default <%= appname%>;
