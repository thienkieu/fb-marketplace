import Head from 'next/head'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { withTranslation } from '../../../i18n'
import FullWidthLayout from '../../layouts/FullWidthLayout';
import Banner from '../../../components/Banner';
import LineAnswer from '../../../components/LineAnswer';
import Line from '../../../components/Line';
import Gap from '../../../components/Gap';

import AppRouter from '../../../app-router';
import Answers from '../../../data/answers';
import ShopName from '../../../components/ShopName';
import AppConstant from '../../../app-constant';
import Search from '../../search';

const AnswerPage = ({t}) => {

  return (
    <FullWidthLayout title="Create New App">
      <div className="container">
        <LineAnswer answers={Answers} title={AppConstant.answers} />
      </div>

    </FullWidthLayout>
  )
}

export default withTranslation('common')(AnswerPage);
