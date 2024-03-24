import { useSetAtom } from 'jotai';
import React, { useId } from 'react';
import styled from 'styled-components';

import { DialogContentAtom, isOpenDialogAtom } from '../atoms/DialogContentAtom';
import { Color, Space} from '../styles/variables';

import { Box } from './Box';
import { Button } from './Button';
import { Flex } from './Flex';

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;

export const Footer: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const termDialogA11yId = useId();
  const contactDialogA11yId = useId();
  const questionDialogA11yId = useId();
  const companyDialogA11yId = useId();
  const overviewDialogA11yId = useId();

  const setIsOpenDialog = useSetAtom(isOpenDialogAtom);
  const updateDialogContent = useSetAtom(DialogContentAtom);

  const handleRequestToTermDialogOpen = () => {
    updateDialogContent({
      a11yId: termDialogA11yId,
      content: 'TERM',
      title: '利用規約',
    })
    setIsOpenDialog(true);
  };
  

  const handleRequestToContactDialogOpen = () => {
    
    updateDialogContent(
      {
        a11yId: contactDialogA11yId,
        content: 'CONTACT',
        title: 'お問い合わせ', 
      }
    );
    setIsOpenDialog(true);
  };

  const handleRequestToQuestionDialogOpen = () => {
    updateDialogContent(
      {
        a11yId: questionDialogA11yId,
        content: '',
        title: 'Q&A',
      }
    );
    setIsOpenDialog(true);
  };

  const handleRequestToCompanyDialogOpen = () => {
    updateDialogContent(
      {
        a11yId: companyDialogA11yId,
        content: 'COMPANY',
        title: '運営会社',
      }
    );
    setIsOpenDialog(true);
  };

  const handleRequestToOverviewDialogOpen = () => {
    updateDialogContent({
      a11yId: overviewDialogA11yId,
      content: 'OVERVIEW',
      title: 'Cyber TOONとは',
    })
    setIsOpenDialog(true);
  };

  return (
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" src="/assets/cyber-toon.svg" />
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <_Button disabled={!isClient} onClick={handleRequestToTermDialogOpen}>
            利用規約
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToContactDialogOpen}>
            お問い合わせ
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToQuestionDialogOpen}>
            Q&A
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToCompanyDialogOpen}>
            運営会社
          </_Button>
          <_Button disabled={!isClient} onClick={handleRequestToOverviewDialogOpen}>
            Cyber TOONとは
          </_Button>
        </Flex>
      </Flex>
    </Box>
  );
};
