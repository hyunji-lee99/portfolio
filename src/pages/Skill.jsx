import React, { forwardRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
`;

function Skill(props, ref) {
  return (
    <Div {...props} ref={ref}>
      skill
    </Div>
  );
}

export default forwardRef(Skill);
