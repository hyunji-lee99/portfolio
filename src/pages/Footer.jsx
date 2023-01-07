import React, { forwardRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
`;

function Footer(props, ref) {
  return (
    <Div {...props} ref={ref}>
      footer
    </Div>
  );
}

export default forwardRef(Footer);
