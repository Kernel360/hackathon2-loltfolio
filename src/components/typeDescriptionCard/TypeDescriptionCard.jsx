import { Flex, Img, Text, Padding, Card } from '@/components/common';
import { fontSize } from '@/theme';

const TypeDescriptionCard = props => {
  const { imgSrc, title, description } = props;

  return (
    <Card $width={'275px'}>
      <Flex $direction={'column'} $align={'center'}>
        <Img src={imgSrc} $width={'275px'} $height={'477px'} />
        <Padding $padding={['24px', '0px', '24px', '0px']}>
          <Text
            $fontSize={'24px'}
            $lineHeight={'150%'}
            $textAlign={'center'}
            $fontWeight={400}
          >
            {title}
          </Text>
        </Padding>
        <Text $lineHeight={'150%'} $fontSize={fontSize.m}>
          {description}
        </Text>
      </Flex>
    </Card>
  );
};

export { TypeDescriptionCard };
