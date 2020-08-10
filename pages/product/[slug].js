import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { useRouter } from 'next/router';
import FullWidthLayout from '../layouts/FullWidthLayout';
import Banner from '../../components/Banner';
import Products from '../../data/products';
import Gap from '../../components/Gap';
import { ProductTitle, ProductPrice, ProductDesciption, NoteLabel, OptionalLabel, NoteContent, SpecialNote, Quantily ,AddtoCard} from './ProductWrapper';

const Product = () => {
  const [modal, setModal] = useState(false);
  const [specialNote, setSpecialNote] = useState('');
  const [specialNoteTemp, setSpecialNoteTemp] = useState('');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { slug } = router.query;

  const itemDetail = Products.find(item => item.id == slug);

  const toggle = () => setModal(!modal);

  const onSetSpecicalNote = () => {
    setSpecialNote(specialNoteTemp);
    toggle();
  }

  const addToCart = () => {
    console.log("AddtoCard");
  }

  return (
    <FullWidthLayout title="Chi tiết sản phẩm">
      <Banner url={itemDetail.imageUrl} />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <ProductTitle>{itemDetail.title}</ProductTitle>
          </div>
          <div className="col-3">
            <ProductPrice>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemDetail.price)}</ProductPrice>
          </div>
          <div className="col-12">
            <ProductDesciption>{itemDetail.description}</ProductDesciption>
          </div>
        </div>
      </div>
      <Gap />
      <div className="container">
        <div className="row">
          <SpecialNote className="col-12">
            <NoteLabel>
              Lưu ý đặc biệt <OptionalLabel>Không bắt buộc</OptionalLabel>
            </NoteLabel>

            <NoteContent onClick={toggle}>
              {specialNote ? specialNote : "Vd: không hành,..."}
            </NoteContent>
            <Modal isOpen={modal} toggle={toggle} className="note-madal" centered>
              <ModalHeader toggle={toggle}>Lưu ý đặc biệt</ModalHeader>
              <ModalBody>
                Không bắt buộc
                <Input placeholder="Vd: không hành,..." onChange={e => setSpecialNoteTemp(e.target.value)} value={specialNoteTemp} style={{height:'40px', margin: '15px 0'}}/>
                <Button className="col-12" color="success" onClick={onSetSpecicalNote}><strong>Xác Nhận</strong></Button>
              </ModalBody>
            </Modal>
          </SpecialNote>
          <Quantily className="col-12">
            <Button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => quantity == 0 ? 0 : setQuantity(quantity - 1)}>
              -
            </Button>
            <Input className="quantity-input__screen" type="text" value={quantity} readOnly />
            <Button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </Quantily>
        </div>
      </div>
      <AddtoCard>
        {quantity == 0 ?(
          <Link href='/'>
            <Button className="col-12" color="success" ><strong>Quay lại thực đơn</strong></Button>
          </Link>
        ) : (
          <Button className="col-12" color="success" onClick={addToCart}><strong>Thêm vào giỏ hàng - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(quantity*itemDetail.price)}</strong></Button>
        )}

      </AddtoCard>

    </FullWidthLayout>
  );
};

export default Product;
