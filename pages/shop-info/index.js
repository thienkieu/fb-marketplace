import styled from 'styled-components';
import Map from '../../components/Map';
import FullWidthLayout from '../layouts/FullWidthLayout';
import ShopName from '../../components/ShopName';
import ShopLocationAddress from '../../components/ShopLocation';
import OpenHours from '../../components/OpenHours';
import openHoursData from '../../data/openhours';
import DistanceLocation from '../../components/DistanceLocation';

import AppConstant from '../../app-constant';

const ShopCategory = styled.div`

`;
const ShopInfo = (props) => {
    return (
        <FullWidthLayout title="Shop Info">
            <Map lat={16.034570} lng={108.221919}/>
            <div className="container">
              <ShopName name={AppConstant.shopName} />
              <ShopCategory>
                Noodles & Congee
              </ShopCategory>
              <DistanceLocation source={{lat:16.036684, lng:108.218233}} />
              <br />
              <ShopLocationAddress />
              <OpenHours hours={openHoursData} />
            </div>

        </FullWidthLayout>
    );
}

export default ShopInfo;
