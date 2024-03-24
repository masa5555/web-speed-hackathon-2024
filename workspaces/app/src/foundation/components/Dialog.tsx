
import { useAtom, useAtomValue } from 'jotai';
import $ from 'jquery';
import { useEffect } from 'react';
import styled from 'styled-components';

import { SvgIcon } from '../../features/icons/components/SvgIcon';
import { DialogContentAtom, isOpenDialogAtom } from '../atoms/DialogContentAtom';
import { COMPANY } from '../constants/Company';
import { CONTACT } from '../constants/Contact';
import { OVERVIEW } from '../constants/Overview';
import { QUESTION } from '../constants/Question';
import { TERM } from '../constants/Term';
import { Color, Space, Typography } from '../styles/variables';



import { Button } from './Button';
import { Spacer } from './Spacer';
import { Text } from './Text';

const _Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const _Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - ${Space * 8}px);
  max-width: 480px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

const _Container = styled.div`
  padding: ${Space * 2}px;
  border-radius: 4px;
  background-color: ${Color.MONO_A};
  height: 540px;
  overflow: scroll;
`;

const _CloseButton = styled(Button)`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  position: absolute;
  top: -${Space * 5}px;
  left: -${Space * 1}px;
`;

const _Content = styled.section`
  white-space: pre-line;
`;

const selectContent = (title: string) => {
  if (title === '利用規約') {
    return TERM;
  }
  if (title === 'お問い合わせ') {
    return CONTACT;
  }
  if (title === 'Q&A') {
    return QUESTION;
  }
  if (title === '運営会社') {
    return COMPANY;
  }
  if (title === 'Cyber TOONとは') {
    return OVERVIEW;
  }
  return ''
}

export const Dialog: React.FC = () => {

  const content = useAtomValue(DialogContentAtom);
  const [isOpenDialog, setIsOpenDialog] = useAtom(isOpenDialogAtom);
  useEffect(() => {
    if (isOpenDialog) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'scroll');
    }
  }, [isOpenDialog])

  return isOpenDialog ? (
    <_Overlay>
      <_Wrapper>
        <_CloseButton onClick={() => {setIsOpenDialog(false)}}>
          <SvgIcon color={Color.MONO_A} height={32} type="Close" width={32} />
        </_CloseButton>
        <_Container>
          <_Content aria-labelledby={content.a11yId} role="dialog">
            <Text as="h2" color={Color.MONO_100} id={content.a11yId} typography={Typography.NORMAL16}>
              {content.title}
            </Text>
            <Spacer height={Space * 1} />
            <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
              {selectContent(content.title)}
            </Text>
          </_Content>
        </_Container>
      </_Wrapper>
    </_Overlay>
  ) : null;
};
