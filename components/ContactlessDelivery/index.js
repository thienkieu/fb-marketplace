import styled from 'styled-components';

const ContactlessDeliveryContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ContactlessDeliveryInfo = styled.div`
    display: flex;
`;
const ContactlessDeliveryEstimation = styled.div`
    margin-left: 20px;
`;
const ContactlessDeliveryAction = styled.div`
    display: flex;
    align-items: center;
`;
const ContactlessDelivery = (props) => (
    <ContactlessDeliveryContainer>
        <ContactlessDeliveryInfo>
            <div>
                <span>
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" height="48" viewBox="0 0 512 512" width="48" xmlns="http://www.w3.org/2000/svg"><g><path d="m226 0c-24.814 0-45 20.186-45 45v16l30 15h15 15l30-15v-16c0-24.814-20.186-45-45-45z" fill="#ff6a4d"/><path d="m271 61v-16c0-24.814-20.186-45-45-45v76h15z" fill="#e64d2e"/><path d="m0 452c6.951 34.232 38.716 60 75 60s69.049-25.768 76-60l-32.588-15h-97.588z" fill="#474f54"/><path d="m75 482c-24.814 0-45-20.186-45-45s20.186-45 45-45 46 20.186 46 45-21.186 45-46 45z" fill="#f2f9ff"/><path d="m151 182h-91l-30 30v90l30 15h91l45-15v-81l-15-9z" fill="#ff9100"/><path d="m30 152v60h151l15-7.765-15-7.235v-45z" fill="#fabe2c"/><path d="m241 452h-241v-15c0-57.99 48.01-105 106-105l25-15h140v110z" fill="#ff6a4d"/><path d="m0 302h211v30h-211z" fill="#32393f"/><path d="m316 377.899v56.4l-15 17.701h-60v-120h-30c-16.5 0-30-13.5-30-30v-75h90v45c16.5 0 30 13.5 30 30v60z" fill="#575f64"/><path d="m316 377.899v56.4l-15 17.701h-60v-120h-15v-105h45v45c16.5 0 30 13.5 30 30v60z" fill="#474f54"/><g><path d="m271 212v-15c0-24.814-20.186-45-45-45s-45 20.186-45 45v30c0 24.853 20.147 45 45 45h121c24.853 0 45-20.147 45-45v-15z" fill="#ff6a4d"/><path d="m392 227v-15h-121v-15c0-24.814-20.186-45-45-45v120h121c24.853 0 45-20.147 45-45z" fill="#e64d2e"/></g><path d="m241 76h-15-15l-30 15v15c0 24.814 20.186 46 45 46s45-21.186 45-46v-15z" fill="#ffe1ba"/><path d="m271 106v-15l-30-15h-15v76c24.814 0 45-21.186 45-46z" fill="#ffbfab"/><path d="m226 61h-45v30h45 75v-30z" fill="#474f54"/><path d="m226 61h75v30h-75z" fill="#32393f"/><path d="m433.338 305.354c-1.655-11.675-4.937-34.673-11.484-80.479l-59.854-27.875v120c0 23.663-20.385 45-46 45h-15v90h30 151l30-15v-30c0-47.988-33.105-89.824-78.662-101.646z" fill="#e64d2e"/><g><path d="m452 242h-45c-24.814 0-45-20.186-45-45s20.186-45 45-45h45z" fill="#ff6a4d"/></g><path d="m441.508 362.456-4.362 16.668-25.351-12.453c-28.93 10.411-49.795 37.859-49.795 70.329 0 41.353 33.647 75 75 75s75-33.647 75-75c0-39.809-31.273-72.16-70.492-74.544z" fill="#32393f"/><g><path d="m437 392c-24.814 0-45 20.186-45 45s20.186 45 45 45 45-20.186 45-45-20.186-45-45-45z" fill="#dfe7f4"/></g><path d="m451.854 434.876-10.345-72.42c-1.523-.092-2.965-.456-4.509-.456-8.882 0-17.291 1.824-25.204 4.671l10.351 72.453z" fill="#c7cfe1"/></g></svg>
                </span>
            </div>
            <ContactlessDeliveryEstimation>
                <div style={{fontWeight: 'bold'}}>Contactless Delivery</div>
                <div>Delivery Now (15 minutes)</div>
            </ContactlessDeliveryEstimation>
        </ContactlessDeliveryInfo>
        <ContactlessDeliveryAction>Change time</ContactlessDeliveryAction>
    </ContactlessDeliveryContainer>
);

export default ContactlessDelivery;