import { Content, Wrapper, Section } from "./Info.styles";

const Info = ({ state }) => {
  return (
    <Wrapper>
      <Content>
        <Section>
          <h3>IP ADDRESS</h3>
          <p className="bottom"> {state.ip}</p>
        </Section>
        <Section>
          <h3>LOCATION</h3>
          <p className="bottom"> {state.location} </p>
        </Section>
        <Section>
          <h3>TIMEZONE</h3>
          <p className="bottom"> {state.timezone} </p>
        </Section>
        <Section>
          <h3>ISP</h3>
          <p> {state.isp} </p>
        </Section>
      </Content>
    </Wrapper>
  );
};

export default Info;
