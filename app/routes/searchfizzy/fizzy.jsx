import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { TextSearch } from '~/components/fizzysearch';

import styles from './fizzy.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Fizzy Drinks Menu',
    description:
      'Cafe Farfasha Fizzy Drinks Menu Page',
  });
};


export const Fizzy = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.search}>
      <Transition in>
        {({ visible }) => (
          <>
          {/*<Heading*/}
          {/*  data-visible={visible}*/}
          {/*  className={styles.title}*/}
          {/*  level={3}*/}
          {/*  as="h1"*/}
          {/*  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}*/}
          {/*>*/}
          {/*  <DecoderText text="Say hello" delay={300} />*/}
          {/*</Heading>*/}
          <Divider
            className={styles.divider}
            style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
          />
            <TextSearch />
          <Footer className={styles.footer} />
          </>
        )}
      </Transition>
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
