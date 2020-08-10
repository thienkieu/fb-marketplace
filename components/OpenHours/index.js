import styled from 'styled-components';
const OpenHoursLable = styled.div`
  font-weight: bold;
`;

const OpenHoursItemValue = styled.span`
  text-align: right;
`;
const OpenHours = (props) => (
  <div className="row">
    <OpenHoursLable className="col-4">Open Hours</OpenHoursLable>
    <div className="col-8">
      {props.hours.map(item => (
        <div className="row" key={item.value}>
          <span className="col-2">{item.name}</span>
          <OpenHoursItemValue className="col-10">{item.value}</OpenHoursItemValue>
        </div>
      ))}
    </div>

  </div>
);

export default OpenHours;
